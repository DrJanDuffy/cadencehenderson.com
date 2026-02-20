# RealScout CSP Configuration

## Why Two Domains?

RealScout requires **both** domains in CSP:

| Domain | Purpose |
|--------|---------|
| `https://em.realscout.com` | Widget script and web components |
| `https://www.realscout.com` | API calls and data fetching |

Missing either domain causes widget failures.

---

## Next.js Configuration

### next.config.ts

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com",
              "connect-src 'self' https: https://em.realscout.com https://www.realscout.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "frame-src 'self' https:",
              "font-src 'self' data:",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
```

---

## CSP Directives Explained

### script-src

```
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com
```

- `'self'` - Scripts from same origin
- `'unsafe-inline'` - Inline scripts (Next.js requires this)
- `'unsafe-eval'` - Dynamic code evaluation (some frameworks need this)
- `https://em.realscout.com` - RealScout widget script
- `https://www.realscout.com` - RealScout API scripts

### connect-src

```
connect-src 'self' https: https://em.realscout.com https://www.realscout.com
```

- `'self'` - Fetch/XHR to same origin
- `https:` - Allow HTTPS connections (for images, analytics, etc.)
- `https://em.realscout.com` - Widget initialization
- `https://www.realscout.com` - MLS data API calls

---

## Combining with Other Services

If using Calendly alongside RealScout:

```typescript
value: [
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://calendly.com https://assets.calendly.com",
  "connect-src 'self' https: https://em.realscout.com https://www.realscout.com https://calendly.com https://assets.calendly.com",
  "frame-src 'self' https: https://calendly.com",
  "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
].join('; ')
```

---

## Troubleshooting

### Widget Not Loading

1. Check browser console for CSP errors
2. Verify both `em.realscout.com` AND `www.realscout.com` are in CSP
3. Ensure script is loaded in layout with `strategy="afterInteractive"`

### API Calls Blocked

Error: `Refused to connect to 'https://www.realscout.com/...'`

Fix: Add `https://www.realscout.com` to `connect-src`

### Script Blocked

Error: `Refused to load the script 'https://em.realscout.com/...'`

Fix: Add `https://em.realscout.com` to `script-src`

---

## Verification

After deploying, check:

1. Open browser DevTools > Network tab
2. Filter by "realscout"
3. Verify requests to both domains succeed (200 status)
4. Check Console for CSP violation errors
