# Lessons learned

Update this file after user corrections or recurring mistakes. Review at the start of relevant sessions.

## Patterns to avoid

- Never 307/302 content URLs (`/rentals`, `/new-homes/*`) to RealScout `/homesearch/*` — RealScout robots.txt disallows that path, so GSC reports the origin URL as blocked by robots.txt.
- Favicon.ico should be crawlable but `X-Robots-Tag: noindex` so GSC does not treat it as a page.
- HTTP and apex hosts must 301/308 in one hop to `https://www.cadencehenderson.com`; those URLs belong in GSC “Page with redirect,” not the index.

## Patterns to prefer

- _Example: "For new pages, add metadata and canonical; check schema."_
- _Add entries as good practices are confirmed_
