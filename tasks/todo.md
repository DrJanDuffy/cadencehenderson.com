# Task plan

Luxury real-estate hero photograph on every public page. Unique image per route (no shared builder/rental hero). Quiet luxury, 16:9, Cadence Henderson desert.

## Current plan

- [x] Branch from quiet-luxury UI; inventory pages that share a hero
- [x] Generate unique 16:9 luxury heroes (8 builders + 3 rentals)
- [x] Map in `SITE_IMAGES`, wire builder and rental `PageHero`
- [x] Lighten PageHero overlay so photos read; verify pages
- [ ] Commit, push, open PR

## Review

Unique luxury 16:9 heroes now cover every public `PageHero` route. Homepage keeps `hero.homepage`. Inner pages keep their existing unique files. Builder and rental sub-pages no longer share `new-homes.jpg` / `rentals.jpg`.

New git-backed files under `public/images/hero/`:

- Builders: `beazer-homes`, `century-communities`, `dr-horton`, `lennar`, `richmond-american`, `storybook-homes`, `taylor-morrison`, `woodside-homes`
- Rentals: `american-homes`, `element-12`, `adler`

Helpers: `getBuilderHeroImage(slug)`, `getRentalHeroImage(slug)` in `lib/cloudflare-images.ts`. Cloudflare IDs follow `cadence-hero-*`; SiteImage falls back to git until upload. PageHero overlay matches homepage (`opacity-80`, `bg-black/35`). Alt text uses location/service, no Fair Housing proxies.
