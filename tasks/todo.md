# Task plan

Fix Google Search Console indexing for Cadence Henderson: robots blocks, redirects, discovered-not-indexed URLs, and favicon.ico.

## Current plan

- [ ] Stop 307s from `/rentals*` and `/new-homes/beazer-homes` to RealScout (RealScout `Disallow: /homesearch/*`)
- [ ] Keep RealScout as on-page search widgets / outbound links, not the page URL
- [ ] Single-hop 301/308 to `https://www.cadencehenderson.com`
- [ ] `X-Robots-Tag: noindex` on favicon/icon files (do not index `.ico`)
- [ ] Stable sitemap lastmod; footer/nav/internal links to orphaned URLs
- [ ] Fair Housing copy on community/events/lifestyle meta
- [ ] Verify local 200s for affected paths; commit, push, PR

## Review

- **Summary:** `/rentals` and `/new-homes/beazer-homes` no longer 307 to RealScout `/homesearch/*` (that path is `Disallow` in RealScout robots.txt). On-site pages stay 200 with RealScout widgets/links. Apex host redirects in one hop to `https://www.cadencehenderson.com`. Favicon gets `X-Robots-Tag: noindex` so GSC stops treating `/favicon.ico` as a page. Sitemap lastmod is stable. Footer/nav now link the GSC-orphaned URLs. Fair Housing copy cleaned (no “family-friendly” / “top-rated schools”).
- **GSC “Page with redirect”:** `http://` and apex URLs should keep redirecting. Google should index `https://www.cadencehenderson.com/` only. Marking that report “fixed” is incorrect if those hosts still 301/308 — that bucket is expected.
- **Next for GSC:** After production deploy, request indexing on the listed URLs in Search Console. Do not add HTTP/apex URLs to the sitemap.
