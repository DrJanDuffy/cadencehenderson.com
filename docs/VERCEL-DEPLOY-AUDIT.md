# Vercel deployment not triggering – audit

**Date:** 2026-02-19  
**Repo:** `github.com/DrJanDuffy/cadencehenderson.com`  
**Branch:** `main`  
**Latest commit:** `6251de6` – fix: type services-section external prop for Vercel build

---

## Local / repo checks (verified)

| Check | Status |
|-------|--------|
| Remote | `origin` → `https://github.com/DrJanDuffy/cadencehenderson.com.git` |
| Current branch | `main` |
| Push | Success (`Everything up-to-date` after last push) |
| `vercel.json` | Present, valid: `buildCommand: pnpm build`, `installCommand: pnpm install` |
| `.vercel/` | Gitignored (expected; project link lives in Vercel dashboard only) |

**Recent commit author (from `git log`):**
- Email: `DrDuffy@bhhsnv.com`
- Name: `genekellyboyle`

---

## Why Vercel might not trigger on push

Per [Vercel’s guide](https://vercel.com/guides/why-aren-t-commits-triggering-deployments-on-vercel), deployments are created only when:

1. **Git integration is correctly set up**  
   - Vercel is connected to GitHub in **Account → Authentication**.  
   - The integration has access to **this repo** (or “all repos”).

2. **Commit author is allowed to deploy**  
   - The **Git user** (email/account) that authored the commit must match a user linked to the Vercel account (or team) that owns the project.  
   - If the project is under a **Team**:  
     - **Private repo:** Author must be a **Pro team member** or **Hobby team owner**.  
     - **Public repo:** Usually deploys automatically unless Vercel requires approval for config/env changes.

3. **No “wrong account” link**  
   - Only one Vercel account can be linked to a given GitHub account. If the same GitHub is linked to another Vercel account, the project’s account may have lost the connection.

4. **Branch and project settings**  
   - The Vercel project must be set to deploy from the branch you push to (e.g. **Production Branch**: `main`).

---

## Checklist (do these in order)

### 1. Vercel dashboard – Git integration

- [ ] **Account → [Authentication](https://vercel.com/account/authentication)**  
  - Confirm **GitHub** is connected.  
  - If not, connect it and grant access to `DrJanDuffy/cadencehenderson.com` (or all repos).

- [ ] **Project → Settings → Git**  
  - Confirm **Connected Git Repository** is `DrJanDuffy/cadencehenderson.com`.  
  - **Production Branch** is `main` (or the branch you push to).

### 2. Commit author vs Vercel account

- [ ] **GitHub**  
  - For user that pushes: **Settings → Emails** – note the primary (or used) email.  
  - Commits are authored as `DrDuffy@bhhsnv.com` (from `git log`).  
  - That email must be the one linked to the **Vercel account** that owns this project (or the account must be linked to the GitHub user that has that email).

- [ ] **Vercel**  
  - **Account → [Authentication](https://vercel.com/account/authentication)** – confirm the connected GitHub account’s email matches the commit author, or add that email to your GitHub account and use it for commits.

- [ ] If the project is under a **Team** and the repo is **private**:  
  - The commit author’s GitHub user must be an active **member of that Vercel team** (Pro), or you must be the **Hobby team owner**.

### 3. GitHub – commit comments and webhooks

- [ ] On GitHub, open the latest commit (e.g. `6251de6`) or a recent PR.  
  - Look for a **comment from Vercel Bot** (e.g. “Deployment ready” or “Git author must have access to project”).  
  - That comment explains why a deployment was or wasn’t created.

- [ ] **Repo → Settings → Webhooks**  
  - There should be a webhook for `https://api.vercel.com/...` (or similar).  
  - If the project was never connected via “Import” from Vercel, the webhook might be missing; re-connecting the repo in Vercel usually adds it.

### 4. Vercel Activity log

- [ ] **Vercel dashboard → [Activity](https://vercel.com/docs/activity-log)**  
  - Filter by this project and look for the time of your push.  
  - Any failed or blocked deployment will show a reason (e.g. “Git author must have access to project”).

### 5. Optional: Production Branch

- [ ] **Project → Settings → Git**  
  - **Production Branch** should be `main` so pushes to `main` create production deployments.

---

## Quick fix: Deploy Hook (manual or CI)

If you need deployments to run without relying on “push → auto deploy”:

1. **Project → Settings → Git → Deploy Hooks**  
2. Create a hook (e.g. “Deploy on push”).  
3. Use the hook URL in:
   - A **GitHub Action** that runs on `push` to `main` and calls the URL, or  
   - A manual trigger (e.g. from your machine or a script).

Example GitHub Action (only if you want CI to trigger Vercel):

```yaml
# .github/workflows/vercel-deploy.yml
name: Trigger Vercel Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Vercel
        run: |
          curl -sSf -X POST "${{ secrets.VERCEL_DEPLOY_HOOK }}"
```

In GitHub: **Settings → Secrets and variables → Actions** → add repository secret `VERCEL_DEPLOY_HOOK` with the hook URL from step 2.

---

## Summary

- **Repo and push are fine:** `main` is up to date with `6251de6` on `DrJanDuffy/cadencehenderson.com`.  
- The most likely cause of “no deployment on push” is one of:
  1. **Git integration** not having access to this repo.  
  2. **Commit author** (`DrDuffy@bhhsnv.com` / GitHub user) not matching the Vercel account or team that owns the project.  
  3. **Production branch** not set to `main`.  

Use the checklist above in the Vercel dashboard and GitHub; the **Vercel Bot comment** on the commit and the **Activity** log will usually pinpoint the exact reason.
