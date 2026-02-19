# Project skills

This repo uses **Cursor skills** (`.cursor/skills/<name>/SKILL.md`). The CLI (`npx skills list`) reads from here. For which skill to use when, see root **AGENTS.md**.

## Which skill when

- **React/Next UI, hooks, TypeScript, a11y** → react-best-practices  
- **SEO, schema, NAP, GBP, sitemap, E-E-A-T, AEO** → seo-geo-aeo  
- **RealScout, Calendly, CSP, GSC** → realscout-calendly-gsc  

## Tracked (committed)

- **react-best-practices** — Custom skill for this project: React/Next.js patterns, TypeScript, testing, error boundaries, and Cadence-specific context (CONTACT_INFO, RealScout, Calendly, IDX/MLS). Use when writing or reviewing React/Next.js code.
- **seo-geo-aeo** — Custom skill for this project: SEO, GEO (local), and AEO. Use when working on metadata, schema (JSON-LD), NAP, Google Business Profile, sitemaps, Search Console, E-E-A-T, or answer-engine optimization.
- **realscout-calendly-gsc** — Custom skill for this project: RealScout widgets (script once, createElement, CSP), Calendly (CalendlyLink, CalendlyInlineWidget, CalendlyProvider), and Google Search Console (sitemap, robots, indexing). Use when working on IDX/listings, scheduling, or GSC.

Other skills under `.cursor/skills/` may be installed via `npx skills add <source>` from the workflow repos in `skills-workflow.json`. Those are kept local by default so only the project-specific skill is versioned.

## Workflow sources

See repo root **skills-workflow.json** for the list of skill repos (e.g. vercel-labs/skills, vercel-labs/agent-skills, cloudflare/skills). Use `npx skills add <owner/repo>` or a specific skill name from those repos when you want to add one.

## Consistency check

- **Declared:** `.cursor/skills/*/SKILL.md` (each has `name` and `description` in frontmatter).
- **CLI:** `npx skills list` should show all skills in this directory.
- **Runtime:** Cursor. For Vercel/Claude runtimes, use a repo that has `skills.json` and the matching agent-skills/claude-skills format.
