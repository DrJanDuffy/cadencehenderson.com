---
name: seo-geo-aeo
description: SEO, GEO (local), and AEO for Cadence Henderson. Use when working on metadata, schema markup, NAP, Google Business Profile, sitemaps, Search Console, E-E-A-T, or local/answer-engine optimization.
---

# SEO, GEO, and AEO

## When to Use

Apply when the task involves: title/meta/Open Graph, schema (JSON-LD), NAP (name/address/phone), Google Business Profile (GBP), sitemap/robots, Google Search Console, E-E-A-T, local SEO, or answer-engine optimization (FAQ schema, rich results).

---

## NAP and GBP (GEO)

- **Single source of truth:** Use `CONTACT_INFO` from `@/components/cadence/contact-info` for business name, address, phone, email, Calendly URL. Do not hardcode NAP.
- **Address:** Must match GBP exactly: `1170 E Sunset Rd, 2nd Floor, Henderson, NV 89011` (street, city, state, zip in CONTACT_INFO).
- **Every page:** Display NAP in visible text and in LocalBusiness (or RealEstateAgent) schema. Business hours, map embed, and clickable Call / Directions / View Google Reviews where relevant.
- **Dedicated location page:** Maps/contact page has unique NAP, hours, map, services. Update all pages when GBP details change.

---

## Schema (SEO + AEO)

- **LocalBusiness / RealEstateAgent:** On all pages via layout or page. Include: name, image, url, telephone, email, address (PostalAddress), geo (GeoCoordinates), openingHoursSpecification, priceRange, areaServed, hasCredential (license), memberOf (brokerage).
- **WebPage:** On homepage (and key pages if desired). Include: name, description, url, isPartOf (WebSite), about (Place), primaryImageOfPage, datePublished, inLanguage.
- **FAQ:** Use FAQPage schema for FAQ sections; match typical GBP/local questions.
- **Review schema:** Where reviews are shown, use AggregateRating/Review schema so results can show stars.

---

## Metadata and Indexing

- **Title:** Unique per page; include business type, location (Henderson/Cadence), and page topic. 50–60 chars where practical.
- **Description:** Unique meta description per page; 150–160 chars; keyword and CTA; no duplicate text across pages.
- **Canonical:** Set `metadataBase` and `alternates.canonical`; homepage and key pages use absolute canonical URL.
- **Open Graph / Twitter:** title, description, url, images for sharing. Use site-wide metadataBase.
- **robots:** Prefer `index, follow` for public pages unless a page is explicitly noindex.

---

## Sitemap and Crawlability

- **Sitemap:** All public pages in sitemap (home, new-homes, rentals, lifestyle, news, realtors, contact, maps, residents, gallery, faqs, past-homesales, builder and rental sub-pages). Use `lib/sitemap-data.ts` or equivalent as single source.
- **robots.txt:** Allow `/`, Disallow `/api/`, `/admin/`; Sitemap URL declared. Host directive for Google.
- **Internal links:** Descriptive anchor text (e.g. “Luxury homes in Summerlin”); link to location/service pages. Image alt text includes location/service where relevant.

---

## E-E-A-T and Content

- **Experience / Expertise:** Content reflects Dr. Jan Duffy (never “Janet”), license S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties. Author/agent attribution where appropriate.
- **Trust:** NAP and schema consistent; no conflicting addresses or phones. Legal/MLS disclaimers and attribution per project rules (do not modify `components/idx/*` without approval).
- **Freshness:** Sitemap lastmod, content dates, and periodic review of NAP/schema vs GBP.

---

## Project Context

- **Site:** Cadence Henderson real estate; Next.js 15 App Router; Vercel/Cloudflare.
- **Agent:** Dr. Jan Duffy, REALTOR®; correct phone (tel: links) and Calendly per CONTACT_INFO.
- **IDX/MLS:** Keep disclaimer and listing attribution; do not remove or change without explicit approval.

---

## Quick Checklist (per page or change)

- [ ] NAP from CONTACT_INFO only; matches 1170 E Sunset Rd, 2nd Floor, Henderson, NV 89011
- [ ] LocalBusiness or RealEstateAgent schema present and correct
- [ ] Unique title and meta description; canonical set
- [ ] Internal links and alt text localized/descriptive
- [ ] Sitemap includes the page; robots allow
