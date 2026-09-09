# Task plan

Audit missing section images; keep Cloudflare Images as primary delivery and git `public/images/` as backup.

## Current plan

- [x] Restore Cloudflare-first `SiteImage` / `CloudflareImage` (CF → git → placeholder)
- [x] Generate unique git files for aliased CF IDs, hash duplicates, and missing sections
- [x] Register unique IDs, host builder logos in git, wire section photos
- [ ] Typecheck, verify in browser, commit, push, open PR

## Review

**Done looks like:** every public page section either paints a Cloudflare URL or falls back to a real git JPEG; unique catalog IDs map to unique files so `npm run cloudflare:images:upload` can populate Cloudflare; no cadencenv.com hotlinks for logos.
