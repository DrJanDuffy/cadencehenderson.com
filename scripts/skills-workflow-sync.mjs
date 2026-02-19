#!/usr/bin/env node
/**
 * Skills workflow sync: install any workflow-recommended repos not yet in skills.json,
 * then update skills.json. Run consistency-lock-check after to verify.
 *
 * Usage: node scripts/skills-workflow-sync.mjs
 *
 * Telemetry: DISABLE_TELEMETRY=1 by default for installs. Set DISABLE_TELEMETRY=0 to enable.
 */

import { readFile, writeFile } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'
import { join } from 'node:path'

const root = process.cwd()
const skillsJsonPath = join(root, 'skills.json')
const workflowJsonPath = join(root, 'skills-workflow.json')

function run(cmd, args = [], opts = {}) {
  const [c, ...a] = cmd.trim().split(/\s+/)
  return spawnSync(c, a.length ? a : args, {
    encoding: 'utf8',
    shell: true,
    cwd: root,
    env: { ...process.env },
    ...opts,
  })
}

async function main() {
  let skillsData
  let workflowData

  try {
    const raw = await readFile(skillsJsonPath, 'utf8')
    skillsData = JSON.parse(raw)
  } catch (e) {
    console.error('Could not read skills.json:', e.message)
    process.exit(1)
  }

  try {
    const raw = await readFile(workflowJsonPath, 'utf8')
    workflowData = JSON.parse(raw)
  } catch (e) {
    console.error('Could not read skills-workflow.json:', e.message)
    process.exit(1)
  }

  const skills = skillsData.skills || []
  const workflowRepos = workflowData.workflowRepos || []
  const missing = workflowRepos.filter((r) => !skills.includes(r))

  if (missing.length === 0) {
    console.log('All workflow skills declared. Run npm run consistency-lock-check to verify.')
    return
  }

  const env = { ...process.env, DISABLE_TELEMETRY: process.env.DISABLE_TELEMETRY ?? '1' }

  console.log('Installing missing workflow skills:', missing.join(', '))
  for (const repo of missing) {
    const r = run(`npx skills add ${repo} -y`, [], { env })
    if (r.status !== 0) {
      console.error('Failed to install', repo, r.stderr || r.stdout)
      process.exit(1)
    }
  }

  const updatedSkills = [...skills, ...missing]
  skillsData.skills = updatedSkills
  await writeFile(skillsJsonPath, JSON.stringify(skillsData) + '\n', 'utf8')
  console.log('Updated skills.json with', missing.length, 'repo(s).')
  console.log('Run npm run consistency-lock-check to verify.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
