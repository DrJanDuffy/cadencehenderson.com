# Task plan

Create more public pages from CadenceNV.com information architecture. Original copy only (no verbatim CadenceNV paragraphs). Fair Housing: no school ratings or “family-friendly” proxies.

## Current plan

- [x] Add Find Your Home, Incentives, pocket parks, shopping subpages, realtor resources, apartment communities, disclaimer
- [x] Unique titles/canonicals, NAP from CONTACT_INFO, sitemap + nav/footer
- [x] Verify routes render; commit; PR stacked on brand-colors branch

## Review

Shipped 13 original routes covering CadenceNV IA gaps: `/find-your-home`, `/incentives`, `/lifestyle/parks-trails/pocket-parks`, `/lifestyle/shopping/restaurants`, `/entertainment`, `/activities`, `/realtors/life-at-cadence`, `/realtors/realtor-toolkit`, `/apartments`, `/ascend`, `/avela-luxury-apartments`, `/elysian`, `/disclaimer`.

Local Next 15.5.7 on :3010 returned 200 for every new path, unique `<title>`, and visible `702-930-8672` (CONTACT_INFO). Toll Brothers Everleigh noted as sold out rather than a sales page. Apartment leasing numbers are labeled as community offices, not Dr. Jan’s CTA.

PR: https://github.com/LetMeHelpYouREALTY/cadencehenderson.com/pull/10
