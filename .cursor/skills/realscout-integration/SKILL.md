---
name: realscout-integration
description: RealScout MLS widget integration for Next.js real estate sites. Use when adding listing widgets, home search, office listings, advanced search, or configuring CSP for RealScout domains. Covers widget attributes, createElement patterns, and IDX/MLS compliance.
---

# RealScout Integration

Integrate RealScout MLS widgets into Next.js App Router projects.

## Quick Start

### 1. Load Script Globally

In `app/layout.tsx`, add the RealScout web components script:

```tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          strategy="afterInteractive"
          type="module"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 2. Create Widget Component

Use `createElement()` for custom elements to avoid JSX type errors:

```tsx
'use client'

import { createElement } from 'react'

export function RealScoutOfficeListings() {
  return createElement('realscout-office-listings', {
    'agent-encoded-id': 'YOUR_AGENT_ID',
    'sort-order': 'NEWEST',
    'listing-status': 'For Sale',
    'property-types': ',SFR,MF,TC,OTHER',
  })
}
```

### 3. Configure CSP

Both domains required in `next.config.ts`:

```typescript
headers: async () => [{
  source: '/(.*)',
  headers: [{
    key: 'Content-Security-Policy',
    value: [
      "script-src 'self' https://em.realscout.com https://www.realscout.com",
      "connect-src 'self' https://em.realscout.com https://www.realscout.com",
    ].join('; ')
  }]
}]
```

**Why two domains?** Script loads from `em.realscout.com`; API calls go to `www.realscout.com`.

---

## Widget Types

See [references/widget-types.md](references/widget-types.md) for all widget types and attributes.

| Widget | Purpose |
|--------|---------|
| `realscout-office-listings` | Display agent's active listings with filters |
| `realscout-your-listings` | Show past sales, sold, and in-contract listings |
| `realscout-advanced-search` | Full MLS search interface |

---

## Shared Search URLs

For "View Homes" links that open RealScout's full search interface:

```typescript
// In contact-info.tsx or similar centralized config
export const CONTACT_INFO = {
  realScoutSearchUrl: 'https://drjanduffy.realscout.com/homesearch/shared-searches/...',
  realScoutBeazerHomesUrl: '...', // Builder-specific
  realScoutRentalsUrl: '...',     // Category-specific
}
```

Usage:

```tsx
<a href={CONTACT_INFO.realScoutSearchUrl} target="_blank" rel="noopener noreferrer">
  View Homes for Sale
</a>
```

---

## TypeScript Support

See [references/typescript-types.md](references/typescript-types.md) for JSX intrinsic element types.

Create `types/realscout.d.ts` to enable direct JSX usage (optional):

```typescript
declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': HTMLAttributes<HTMLElement> & {
        'agent-encoded-id'?: string
        // ... more attributes
      }
    }
  }
}
```

---

## IDX/MLS Compliance

**Required:**
- Always display MLS disclaimer with listings
- Include listing attribution
- Do not modify `components/idx/*` without explicit approval

**Disclaimer example:**

```tsx
<p className="text-xs text-gray-500">
  Listings displayed via MLS. All information deemed reliable but not guaranteed.
  © {new Date().getFullYear()} MLS. Listing attribution provided by participating MLS.
</p>
```

---

## Reference Files

- [Widget Types](references/widget-types.md) - All widgets with attributes and examples
- [CSP Configuration](references/csp-configuration.md) - Next.js header setup
- [TypeScript Types](references/typescript-types.md) - JSX type definitions
