# Cloudflare Images setup

Canonical SOP (all domains, projects, global settings):

**[docs/sop/cloudflare-images-git-fallback.md](./sop/cloudflare-images-git-fallback.md)**  
Machine-readable: [docs/sop/cloudflare-images-global-settings.json](./sop/cloudflare-images-global-settings.json)

**Primary:** Cloudflare hosted Images (`imagedelivery.net`)  
**Backup:** git-tracked `public/images/`  
**Account:** `2cc579c1ec9e426ed585e933ebf4753b` · hash `byE6BTe9lNqo21V57n4aPQ`

Delivery URL:

`https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<image_id>/<variant>`

Example: `cadence-hero-homepage` ↔ `/images/hero/homepage.jpg`

---

## Sync on production deploy

`vercel.json` runs `npm run cloudflare:images:sync` before `npm run build`:

1. Create standard variants (`public`, `hero`, `card`, `thumbnail`, `avatar`, `og`, `gallery`)
2. Upload git files from `public/images` with custom IDs
3. Upload condo tower photos (`lv-condo-*`)

If `CLOUDFLARE_API_TOKEN` is missing, the sync **skips uploads** and the site still ships git fallbacks.

### Vercel env (every project)

| Name | Value |
|------|--------|
| `CLOUDFLARE_API_TOKEN` | Account → Cloudflare Images → Edit |
| `CLOUDFLARE_ACCOUNT_ID` | `2cc579c1ec9e426ed585e933ebf4753b` |
| `CLOUDFLARE_IMAGES_ACCOUNT_HASH` | `byE6BTe9lNqo21V57n4aPQ` |
| `CLOUDFLARE_IMAGES_PREFIX` | `cadence` (unique slug on other domains) |

Scope: **Production**. Then **redeploy** (`vercel --prod`).

---

## Local commands

```bash
export CLOUDFLARE_API_TOKEN="your_token"
npm run cloudflare:image-variants
npm run cloudflare:images:upload -- --skip-existing
npm run cloudflare:images:upload:dry
npm run cloudflare:condo-images -- --skip-existing
```

---

## App catalog

Edit `lib/cloudflare-images.ts`. Each git-backed photo uses `img(id, localPath)` so `SiteImage` can fall back.

On-page: `cfImage(SITE_IMAGES.hero.homepage, 'hero')` + `<SiteImage />`.  
Open Graph / JSON-LD: git `/og-image.jpg` (crawlers do not run the JS fallback).

Dashboard: https://dash.cloudflare.com/2cc579c1ec9e426ed585e933ebf4753b/images

---

## Las Vegas high-rise condo photos

Catalog: `SITE_IMAGES.condos` (`lv-condo-allure`, …). Not git-backed.

Manual: `npm run cloudflare:condo-images`  
Admin: `POST /api/admin/upload-condo-images` with `Authorization: Bearer $CRON_SECRET`

Verify: https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/lv-condo-panorama-towers/public
