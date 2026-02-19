#!/usr/bin/env node
/**
 * For every Cloudflare zone that has a website (A/AAAA/CNAME or Pages),
 * create a local git repo and optionally a GitHub repo + remote.
 *
 * Requires: CLOUDFLARE_API_TOKEN (with Zone:Read, and optionally Account:Read, Pages:Read)
 * Optional: CLOUDFLARE_ACCOUNT_ID (if not set, first account is used)
 * Optional: GITHUB_TOKEN (for creating GitHub repos and adding remote)
 * Optional: OUTPUT_DIR (default: ../cloudflare-domain-repos)
 *
 * Usage: node scripts/cloudflare-domains-git-setup.mjs
 *        OUTPUT_DIR=/path/to/repos node scripts/cloudflare-domains-git-setup.mjs
 *        node scripts/cloudflare-domains-git-setup.mjs --dry-run   # test without API (sample repos)
 */

import { mkdir, writeFile, access } from 'node:fs/promises'
import { join } from 'node:path'
import { execSync } from 'node:child_process'

const CF_API = 'https://api.cloudflare.com/client/v4'
const token = process.env.CLOUDFLARE_API_TOKEN
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID
const githubToken = process.env.GITHUB_TOKEN
const dryRun = process.argv.includes('--dry-run')
const outputDir =
  process.env.OUTPUT_DIR ||
  join(process.cwd(), dryRun ? 'scripts' : '..', dryRun ? '.cloudflare-domains-git-test' : 'cloudflare-domain-repos')

if (!token && !dryRun) {
  console.error('Set CLOUDFLARE_API_TOKEN (Zone:Read, and optionally Account:Read, Pages:Read)')
  process.exit(1)
}

async function cf(path, method = 'GET', body = null) {
  const url = `${CF_API}${path}`
  const opts = {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }
  if (body) opts.body = JSON.stringify(body)
  const res = await fetch(url, opts)
  const data = await res.json()
  if (!data.success) {
    throw new Error(data.errors?.map((e) => e.message).join('; ') || 'Cloudflare API error')
  }
  return data
}

async function getAccountId() {
  if (accountId) return accountId
  const data = await cf('/accounts?per_page=1')
  const id = data.result?.[0]?.id
  if (!id) throw new Error('No Cloudflare account found')
  return id
}

/** List all zones (domains) in the account */
async function listZones() {
  const zones = []
  let page = 1
  while (true) {
    const data = await cf(`/zones?per_page=50&page=${page}`)
    const list = data.result || []
    zones.push(...list)
    if (list.length < 50) break
    page++
  }
  return zones
}

/** A zone "has a website" if it has at least one A, AAAA, or CNAME (not just NS/SOA) */
async function zoneHasWebsite(zoneId) {
  const data = await cf(`/zones/${zoneId}/dns_records?per_page=100`)
  const records = data.result || []
  const webTypes = ['A', 'AAAA', 'CNAME']
  return records.some((r) => webTypes.includes(r.type))
}

/** Domains that are custom domains for a Pages project */
async function getPagesCustomDomains(accId) {
  let projects = []
  try {
    const data = await cf(`/accounts/${accId}/pages/projects`)
    projects = data.result || []
  } catch (e) {
    console.warn('Pages API not available (need Pages:Read):', e.message)
    return new Set()
  }
  const domains = new Set()
  for (const p of projects) {
    const names = p.domains || []
    names.forEach((d) => domains.add(d))
  }
  return domains
}

function safeDirName(zoneName) {
  return zoneName.replace(/\./g, '-').replace(/[^a-zA-Z0-9-]/g, '')
}

async function ensureDir(path) {
  try {
    await mkdir(path, { recursive: true })
  } catch (e) {
    if (e.code !== 'EEXIST') throw e
  }
}

async function createLocalGit(zoneName, dir) {
  await ensureDir(dir)
  const gitDir = join(dir, '.git')
  try {
    await access(gitDir)
  } catch {
    execSync('git init', { cwd: dir, stdio: 'inherit' })
  }
  const readme = join(dir, 'README.md')
  try {
    await writeFile(
      readme,
      `# ${zoneName}\n\nDomain repo for ${zoneName}. Website managed via Cloudflare.\n`,
      'utf8'
    )
  } catch (e) {
    if (e.code !== 'EEXIST') throw e
  }
  const gitignore = join(dir, '.gitignore')
  try {
    await writeFile(gitignore, 'node_modules/\n.env\n.env.*\n.DS_Store\n', 'utf8')
  } catch (e) {
    if (e.code !== 'EEXIST') throw e
  }
  try {
    execSync('git add -A && git status --short', { cwd: dir, stdio: 'pipe' })
  } catch (_) {}
}

async function getGitHubUser() {
  const res = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${githubToken}`,
      Accept: 'application/vnd.github+json',
    },
  })
  if (!res.ok) return null
  const u = await res.json()
  return u.login
}

async function createGitHubRepoAndRemote(zoneName, dir, repoName) {
  if (!githubToken) return
  const name = repoName || safeDirName(zoneName)
  const res = await fetch('https://api.github.com/user/repos', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${githubToken}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      description: `Website repo for ${zoneName}`,
      private: false,
      auto_init: false,
    }),
  })
  let cloneUrl
  if (res.ok) {
    const data = await res.json()
    cloneUrl = data.clone_url
  } else {
    const err = await res.text()
    if (res.status === 422 && err.includes('name already exists')) {
      console.log(`  GitHub repo ${name} already exists, adding remote if missing`)
      const user = await getGitHubUser()
      cloneUrl = user ? `https://github.com/${user}/${name}.git` : null
    } else {
      console.warn(`  Failed to create GitHub repo ${name}:`, res.status, err)
      return
    }
  }
  if (cloneUrl) {
    try {
      execSync('git remote get-url origin', { cwd: dir, stdio: 'pipe' })
    } catch {
      execSync(`git remote add origin ${cloneUrl}`, { cwd: dir, stdio: 'pipe' })
    }
  }
}

async function main() {
  if (dryRun) {
    console.log('Dry run: creating sample repos (no Cloudflare API calls).')
    const sampleZones = [
      { name: 'example.com' },
      { name: 'test-site.org' },
    ]
    await ensureDir(outputDir)
    for (const zone of sampleZones) {
      const dirName = safeDirName(zone.name)
      const dir = join(outputDir, dirName)
      console.log(`Creating git for ${zone.name} -> ${dir}`)
      await createLocalGit(zone.name, dir)
    }
    console.log('Done. Sample repos under:', outputDir)
    return
  }

  console.log('Fetching Cloudflare zones and Pages projects...')
  const accId = await getAccountId()
  const pagesDomains = await getPagesCustomDomains(accId)
  const zones = await listZones()
  const withWebsite = []
  for (const zone of zones) {
    const hasPages = pagesDomains.has(zone.name) || zone.name.endsWith('.pages.dev')
    const hasDns = await zoneHasWebsite(zone.id)
    if (hasPages || hasDns) {
      withWebsite.push(zone)
    }
  }
  console.log(`Found ${withWebsite.length} zones with a website (of ${zones.length} total).`)
  await ensureDir(outputDir)
  for (const zone of withWebsite) {
    const dirName = safeDirName(zone.name)
    const dir = join(outputDir, dirName)
    console.log(`Creating git for ${zone.name} -> ${dir}`)
    await createLocalGit(zone.name, dir)
    if (githubToken) {
      await createGitHubRepoAndRemote(zone.name, dir, dirName)
    }
  }
  console.log('Done. Repos under:', outputDir)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
