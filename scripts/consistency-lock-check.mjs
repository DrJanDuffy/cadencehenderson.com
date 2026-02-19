#!/usr/bin/env node
/**
 * Full Consistency Lock Check — runs all 5 steps and reports.
 * See .cursor/plans for the full procedure.
 *
 * Usage: node scripts/consistency-lock-check.mjs
 *        node scripts/consistency-lock-check.mjs --hard-clean   # run Step 4 (removes node_modules, lockfile, reinstalls)
 */

import { readFile } from 'node:fs/promises'
import { execSync, spawnSync } from 'node:child_process'
import { join } from 'node:path'
import { platform } from 'node:os'

const root = process.cwd()
const skillsJsonPath = join(root, 'skills.json')
const hardClean = process.argv.includes('--hard-clean')

function run(cmd, args = [], opts = {}) {
  const [c, ...a] = cmd.trim().split(/\s+/)
  return spawnSync(c, a.length ? a : args, { encoding: 'utf8', shell: true, ...opts })
}

function section(title) {
  console.log('\n' + '='.repeat(60))
  console.log(title)
  console.log('='.repeat(60))
}

async function step1() {
  section('Step 1 — Extract declared skills')
  let declared
  try {
    const raw = await readFile(skillsJsonPath, 'utf8')
    const data = JSON.parse(raw)
    declared = data.skills || []
    console.log('skills.json path:', skillsJsonPath)
    console.log('Declared skills:', JSON.stringify(declared, null, 2))
    return { ok: true, declared }
  } catch (e) {
    console.log('Error:', e.message)
    return { ok: false, declared: [] }
  }
}

function step2() {
  section('Step 2 — Extract loaded skills (runtime)')
  const r = run('npx skills list', [], { cwd: root })
  const out = (r.stdout || '').trim()
  const err = (r.stderr || '').trim()
  if (r.status !== 0 && err) console.log('stderr:', err)
  console.log(out || '(no output or CLI not available)')
  return { ok: r.status === 0, output: out }
}

function step3() {
  section('Step 3 — Detect global CLI pollution')
  const isWin = platform() === 'win32'
  const cmd = isWin ? 'where skills' : 'which skills'
  const r = run(cmd, [], { cwd: root })
  const out = (r.stdout || '').trim()
  if (out) {
    console.log('Found "skills" on PATH:')
    console.log(out)
    console.log('\nIf this is a global path (e.g. npm global), prefer npx skills from project root.')
  } else {
    console.log('No global "skills" found — npx will use project/cache. OK.')
  }
  return { hasGlobal: !!out }
}

async function step4() {
  section('Step 4 — Hard clean verification')
  if (!hardClean) {
    console.log('Skipped (run with --hard-clean to remove node_modules, lockfile, reinstall, then npx skills list).')
    return { skipped: true }
  }
  const isWin = platform() === 'win32'
  const rmDir = isWin
    ? 'Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue'
    : 'rm -rf node_modules'
  const rmLock = isWin
    ? 'Remove-Item package-lock.json -ErrorAction SilentlyContinue'
    : 'rm -f package-lock.json'
  console.log('Removing node_modules and lockfile...')
  run(rmDir, [], { cwd: root })
  run(rmLock, [], { cwd: root })
  console.log('Running npm install...')
  const install = run('npm install', [], { cwd: root })
  if (install.status !== 0) {
    console.log('npm install failed')
    return { ok: false }
  }
  console.log('Running npx skills list...')
  const list = run('npx skills list', [], { cwd: root })
  console.log((list.stdout || '').trim() || '(no output)')
  return { ok: list.status === 0 }
}

async function step5() {
  section('Step 5 — Runtime variant alignment')
  try {
    const raw = await readFile(skillsJsonPath, 'utf8')
    const hasVercelLabs = /vercel-labs/.test(raw)
    console.log('vercel-labs in skills.json:', hasVercelLabs ? 'yes' : 'no')
    if (hasVercelLabs) {
      const claude = /claude-skills/.test(raw)
      const agent = /agent-skills/.test(raw)
      console.log('  claude-skills:', claude)
      console.log('  agent-skills:', agent)
      if (claude && agent) console.log('  Warning: mixing repos can cause subtle inconsistencies.')
    }
    return { ok: true }
  } catch (e) {
    console.log('Error:', e.message)
    return { ok: false }
  }
}

async function main() {
  console.log('Full Consistency Lock Check')
  console.log('Repo root:', root)

  const s1 = await step1()
  const s2 = step2()
  step3()
  await step4()
  await step5()

  section('Final truth condition')
  console.log('1. Declared = loaded: compare Step 1 vs Step 2 output.')
  console.log('2. Git: ensure skills.json and lockfile are committed/clean.')
  console.log('3. No global interference: Step 3 shows no global "skills" or you use npx only.')
  console.log('4. Correct runtime repo: Step 5 — use one of vercel-labs/claude-skills or agent-skills.')
  console.log('5. Fresh reinstall: run with --hard-clean; Step 2 result should match declared.')
  console.log('')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
