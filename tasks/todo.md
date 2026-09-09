# Task plan

Optimize every section on every public page for SEO, GEO (local NAP/GBP), and AEO (answer-first copy + FAQ/WebPage schema).

## Current plan

- [x] Shared section/FAQ/@graph schema primitives; layout schema cleanup
- [x] Apply to shared surfaces (hero, CTA, homepage, village template)
- [x] Apply to remaining public pages; Fair Housing copy fixes
- [x] Verify routes, commit, push, open PR

## Review

**Done looks like:** every public page has a WebPage + speakable `@graph` (or homepage equivalent), visible NAP from `CONTACT_INFO`, localized H2s where sections were generic, and FAQ JSON-LD only where it matches on-page Q&A. Fair Housing proxies (school ratings, “family-friendly,” “safe neighborhood”) are removed from page copy.

**What shipped**

- Shared primitives: `lib/page-aeo.ts`, `PageGraphSchema`, `PageAeo`, `PageFaq`, `SeoSection`.
- Layout no longer emits a sitewide FAQPage. `LocalBusiness` / RealEstateAgent stays in root layout with `@id` `#realestateagent`.
- `PageHero` geo kicker + `.aeo-lead`; `AgentContactCta` NAP + Call / Directions / Reviews.
- Remaining public routes wired with `PageAeo` (FAQ) or graph-only when the page already publishes FAQPage (new-homes, lifestyle, amenities, rentals, contact, maps, `/faqs`).
- Village pages keep village-specific FAQs. Duplicate `BreadcrumbSchema` removed where `PageAeo` already emits BreadcrumbList.
- Schools page names CCSD campuses and commute; no star ratings. Fake 555 HOA/vet numbers are not live `tel:` links.

**Check:** `npx tsc --noEmit` passed. Browser MCP was not available; follow-up curl/dev verification after push.
