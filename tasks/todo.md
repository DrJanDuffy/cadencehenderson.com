# Task plan

Replace placeholder images with unique, heading-appropriate photos for H1, H2, and H3 on each public page. Standardize Cloudflare Images as primary storage with git as backup for all domains and projects.

## Current plan

- [x] Inventory pages, heading levels, and current placeholder slots
- [x] Generate unique photorealistic images (Cadence Henderson / desert Southwest)
- [x] Store images under `public/images/` and map them in `SITE_IMAGES`
- [x] Add `PageHero` so every inner-page H1 has a unique photo
- [x] Wire unique H2 section photos and H3 card photos (no shared placeholder)
- [x] SOP: Cloudflare Images primary, git fallback, global settings, Vercel sync
- [x] Verify pages render images (dev server / curl)
- [ ] Commit, push, open PR

## Review

- **Summary:** Cloudflare Images is primary (`imagedelivery.net` / hash `byE6BTe9lNqo21V57n4aPQ`). Git `public/images/` is the backup. Custom IDs `{prefix}-{folder}-{slug}`. Vercel build runs `npm run cloudflare:images:sync`. SOP: `docs/sop/cloudflare-images-git-fallback.md`. Global settings JSON for reuse on other domains.
- **Verification:** Dev server HTML emits `cadence-*` delivery URLs. Git files return 200 (`/images/hero/homepage.jpg`, `/og-image.jpg`). Cloudflare HEAD for `cadence-hero-homepage` is 404 until `CLOUDFLARE_API_TOKEN` is set on the Vercel project and production deploys. `SiteImage` / `CloudflareImage` swap to git on 404.
- **Notes:** Set token on every Vercel project (Production), then `vercel --prod`. Prefix other domains with a unique `CLOUDFLARE_IMAGES_PREFIX`.
