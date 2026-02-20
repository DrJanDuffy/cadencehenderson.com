# RealScout TypeScript Types

## Overview

RealScout widgets use custom HTML elements (`<realscout-*>`). TypeScript/JSX doesn't recognize these by default. Two approaches:

1. **createElement()** - Works without type definitions (recommended)
2. **JSX intrinsic types** - Requires type declarations

---

## Approach 1: createElement (Recommended)

No type definitions needed. Use React's `createElement`:

```tsx
'use client'

import { createElement } from 'react'

export function RealScoutWidget() {
  return createElement('realscout-office-listings', {
    'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
    'sort-order': 'NEWEST',
  })
}
```

**Pros:**
- No setup required
- Works immediately
- No type maintenance

**Cons:**
- No autocomplete for attributes
- No type checking on attribute values

---

## Approach 2: JSX Intrinsic Types

Create `types/realscout.d.ts`:

```typescript
import type { HTMLAttributes } from 'react'

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': HTMLAttributes<HTMLElement> & {
        'agent-encoded-id'?: string
        'sort-order'?: 'NEWEST' | 'PRICE_HIGH' | 'PRICE_LOW' | 'STATUS_AND_SIGNIFICANT_CHANGE'
        'listing-status'?: string
        'property-types'?: string
        'price-min'?: string
        'price-max'?: string
      }
      'realscout-your-listings': HTMLAttributes<HTMLElement> & {
        'agent-encoded-id'?: string
        'sort-order'?: 'NEWEST' | 'PRICE_HIGH' | 'PRICE_LOW' | 'STATUS_AND_SIGNIFICANT_CHANGE'
        'listing-status'?: string
        'property-types'?: string
      }
      'realscout-advanced-search': HTMLAttributes<HTMLElement> & {
        'agent-encoded-id'?: string
      }
    }
  }
}
```

Then use JSX directly:

```tsx
'use client'

export function RealScoutWidget() {
  return (
    <realscout-office-listings
      agent-encoded-id="QWdlbnQtMjI1MDUw"
      sort-order="NEWEST"
      listing-status="For Sale"
    />
  )
}
```

**Pros:**
- IDE autocomplete
- Type checking on attributes
- Familiar JSX syntax

**Cons:**
- Requires type file maintenance
- May need tsconfig include path

---

## tsconfig.json Setup

If using type declarations, ensure they're included:

```json
{
  "compilerOptions": {
    // ...
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    "types/**/*.d.ts"
  ]
}
```

---

## Full Type Definition

Complete type definition for all known RealScout widgets:

```typescript
import type { HTMLAttributes } from 'react'

type SortOrder = 
  | 'NEWEST' 
  | 'PRICE_HIGH' 
  | 'PRICE_LOW' 
  | 'STATUS_AND_SIGNIFICANT_CHANGE'

type ListingStatus = 'For Sale' | 'In Contract' | 'Sold'

type PropertyType = 'SFR' | 'MF' | 'TC' | 'OTHER'

interface RealScoutBaseProps extends HTMLAttributes<HTMLElement> {
  'agent-encoded-id'?: string
}

interface RealScoutOfficeListingsProps extends RealScoutBaseProps {
  'sort-order'?: SortOrder
  'listing-status'?: ListingStatus | string
  'property-types'?: string
  'price-min'?: string
  'price-max'?: string
}

interface RealScoutYourListingsProps extends RealScoutBaseProps {
  'sort-order'?: SortOrder
  'listing-status'?: string
  'property-types'?: string
}

interface RealScoutAdvancedSearchProps extends RealScoutBaseProps {}

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': RealScoutOfficeListingsProps
      'realscout-your-listings': RealScoutYourListingsProps
      'realscout-advanced-search': RealScoutAdvancedSearchProps
    }
  }
}
```

---

## Recommendation

Use **createElement()** for simplicity unless you need:
- IDE autocomplete for attributes
- Strict type checking on widget props
- Team-wide consistency with JSX syntax
