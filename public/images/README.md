# Cadence Henderson — Images & Assets

Optimized directory structure for photos, images, and logos.

## Quick reference

| Asset type | Location | Where used |
|------------|----------|------------|
| **OG image** (social share) | `public/og-image.png` (root) | Layout, schema — **1200×630 px** |
| **Site logo / favicon** | `public/images/logos/` | Nav, favicon |
| **Builder logos** | `public/images/builders/` | BuildersShowcase (optional local copies) |
| **Hero photos** | Upload to [Cloudflare Images](https://dash.cloudflare.com) | `lib/cloudflare-images.ts` |
| **Amenities, lifestyle, gallery** | Upload to Cloudflare Images | `lib/cloudflare-images.ts` |

---

## Directory structure

```
public/
├── og-image.png          # Social share image (add this) — 1200×630
├── favicon.ico            # (optional) — 32×32
└── images/
    ├── logos/             # CADENCE logo, favicon variants
    ├── builders/          # Builder logos (local copies; current: cadencenv.com URLs)
    ├── hero/              # Source hero images before Cloudflare upload
    ├── amenities/         # Central Park, pool, etc.
    ├── lifestyle/         # Community, events
    ├── gallery/           # Gallery page photos
    └── og/                # OG image source (before resizing to 1200×630)
```

---

## How to add images

### 1. Social share (OG image)
- Add `public/og-image.png` — **1200×630 px**
- Used for link previews (Facebook, Twitter, LinkedIn)

### 2. Cloudflare Images (hero, amenities, lifestyle)
1. Upload at: https://dash.cloudflare.com → Images
2. Copy the image ID (e.g. `abc123xyz`)
3. Update `lib/cloudflare-images.ts` → `SITE_IMAGES` catalog with the new ID

### 3. Local static images (logos, fallbacks)
- Place in `public/images/<category>/`
- Reference as `/images/logos/cadence-logo.png` etc.

### 4. Builder logos
- Currently loaded from cadencenv.com
- To self-host: add files to `public/images/builders/` and update `components/cadence/builders-showcase.tsx` with `/images/builders/filename.png`

---

## Recommended formats

| Use | Format | Max size |
|-----|--------|----------|
| Photos | WebP or JPG | 500KB–1MB per image |
| Logos | PNG (transparent) or SVG | &lt; 100KB |
| OG image | PNG or JPG | &lt; 300KB |

---

## Git LFS (optional)

For large source files, consider Git LFS:

```bash
git lfs install
git lfs track "*.png" "*.jpg" "*.webp"
```

Add to `.gitattributes` and commit. Only needed if storing full-res originals in repo.
