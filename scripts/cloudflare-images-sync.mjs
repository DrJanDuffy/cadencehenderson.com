#!/usr/bin/env node
/**
 * Standard image sync for every domain/project (Vercel production build).
 *
 * 1. Ensure shared Cloudflare Images variants
 * 2. Upload git-tracked public/images (custom IDs, skip existing)
 * 3. Upload cloned condo tower photos
 *
 * Missing token: exit 0 so git fallback still ships.
 */

import { spawnSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const extraArgs = process.argv.slice(2)
const allowMissing = extraArgs.includes('--allow-missing-token') || extraArgs.length === 0

function run(script, args) {
  const result = spawnSync(process.execPath, [join(root, 'scripts', script), ...args], {
    cwd: root,
    stdio: 'inherit',
    env: process.env,
  })
  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

const tokenFlag = allowMissing ? ['--allow-missing-token'] : []

console.log('Cloudflare Images SOP sync — primary=Cloudflare, fallback=git')
run('ensure-cloudflare-image-variants.mjs', tokenFlag)
run('upload-git-images-to-cloudflare.mjs', ['--skip-existing', ...tokenFlag])
run('clone-condo-images-to-cloudflare.mjs', ['--skip-existing', ...tokenFlag])
console.log('Cloudflare Images SOP sync complete')
