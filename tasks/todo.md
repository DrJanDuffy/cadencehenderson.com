# Task plan

Quiet luxury / barely-there UI for Cadence Henderson: restraint, negative space, monochrome, skinny sans-serifs. No flashy motion or aggressive pop-ups.

## Current plan

- [x] Design tokens: B&W palette, near-zero radius, more page padding
- [x] Skinny sans (Sora 200–400); stop using mono as the site face
- [x] Shared chrome: nav, footer, hero, page-hero, buttons, CTAs
- [x] Remove Calendly floating badge and DeployBanner
- [x] RealScout/Calendly widgets in monochrome, no heavy shadows
- [ ] Verify homepage + an inner page in the browser (or local render)

## Review

Quiet luxury is applied at the token layer so inner pages inherit grayscale, square corners, and thin type without a page-by-page rewrite.

- **Palette:** Tailwind blues/indigos/ambers/greens/teals/purples remap to Compass-like grayscale in `app/globals.css`.
- **Type:** Sora 200–600 via `next/font`; headings 200–300; `font-bold` utilities soften to 300.
- **Chrome:** Hairline nav, no decorative hero wave, solid black CTAs, square buttons, more section padding.
- **Pop-ups:** Calendly floating badge and DeployBanner removed; badge CSS hidden as a failsafe.
- **Widgets:** RealScout/Calendly styled monochrome with hairline borders; `components/idx/*` untouched.
