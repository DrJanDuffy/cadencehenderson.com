# Task plan

Put CadenceNV.com information on cadencehenderson.com: every community, village, rental, and lifestyle topic that CadenceNV publishes, as original pages (no verbatim copy).

## Current plan

- [x] Diff CadenceNV sitemap vs our routes; extract village/rental facts
- [x] Data-driven builder village + remaining community pages
- [x] URL aliases, sitemap, nav; fill homepage/content gaps
- [x] Verify, commit, update PR

## Review

CadenceNV neighborhood IA now lives on cadencehenderson.com:

- Village catalog in `lib/cadence-nv-catalog.ts` (plan names + sq ft/beds/baths, no asking prices)
- Dynamic pages under `/communities/[builder]/[community]`
- CadenceNV-style URLs via rewrites (`/beazer/aria-crossing`, `/lennar/carlton`, `/adler`, `/element12`, etc.)
- Directory at `/communities`, AMH hub, Media page
- Nav, footer, sitemap, Find Your Home, apartments, amenities, and builder pages link to the on-site villages
