# Cadence Henderson — Images & Assets

**SOP:** Cloudflare hosted Images is **primary**. Git files under `public/images/` are the **backup**.  
See `docs/sop/cloudflare-images-git-fallback.md`.

Delivery: `https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<id>/<variant>`  
ID: `cadence-{folder}-{slug}` from `public/images/{folder}/{slug}.jpg`

## Quick reference

| Asset type | Git path | Cloudflare ID | Where used |
|------------|----------|---------------|------------|
| **OG / schema** | `public/og-image.jpg` | `cadence-og-share` | Layout, JSON-LD (crawlers use git URL) |
| **Hero photos** | `public/images/hero/` | `cadence-hero-*` | `PageHero`, homepage |
| **Amenities / lifestyle / homes** | `public/images/{amenities,lifestyle,homes}/` | matching prefix | H2/H3 cards |
| **Agent headshot** | `public/images/agent/headshot.png` | `cadence-agent-headshot` | Agent photos only (real photo) |
| **Site logos** | `public/images/logos/` | — | Nav, favicon (git only) |
| **Builder logos** | cadencenv.com (or `public/images/builders/`) | — | Builder showcase |

## How to add a photo

1. Save under `public/images/<folder>/<slug>.jpg` (or `.png` / `.webp`).
2. Register in `lib/cloudflare-images.ts`:  
   `img('cadence-folder-slug', '/images/folder/slug.jpg')`
3. Render with `SiteImage` + `cfImage(id, 'hero'|'card'|…)`.
4. Upload: `npm run cloudflare:images:upload` (or the next production build with `CLOUDFLARE_API_TOKEN`).

## Commands

```bash
npm run cloudflare:images:upload:dry
npm run cloudflare:images:sync
```

## Formats

| Use | Format | Notes |
|-----|--------|--------|
| Photos | JPG / WebP | Keep under ~1MB in git |
| Logos | PNG or SVG | Git only |
| OG | JPG 1200×630 | `public/og-image.jpg` |
