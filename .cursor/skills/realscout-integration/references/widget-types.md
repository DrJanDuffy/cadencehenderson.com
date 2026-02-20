# RealScout Widget Types

## Table of Contents

1. [realscout-office-listings](#realscout-office-listings)
2. [realscout-your-listings](#realscout-your-listings)
3. [realscout-advanced-search](#realscout-advanced-search)

---

## realscout-office-listings

Display an agent's active listings with filtering options.

### Attributes

| Attribute | Type | Description | Example Values |
|-----------|------|-------------|----------------|
| `agent-encoded-id` | string | Base64 encoded agent ID | `QWdlbnQtMjI1MDUw` |
| `sort-order` | string | Sort order for listings | `NEWEST`, `PRICE_HIGH`, `PRICE_LOW` |
| `listing-status` | string | Filter by status | `For Sale`, `In Contract`, `Sold` |
| `property-types` | string | Comma-separated property types | `,SFR,MF,TC,OTHER` |
| `price-min` | string | Minimum price filter | `500000` |
| `price-max` | string | Maximum price filter | `800000` |

### Example

```tsx
'use client'

import { createElement } from 'react'

export function RealScoutOfficeListings() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        {createElement('realscout-office-listings', {
          'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
          'sort-order': 'NEWEST',
          'listing-status': 'For Sale',
          'property-types': ',SFR,MF,TC,OTHER',
          'price-min': '500000',
          'price-max': '800000',
        })}
      </div>
    </section>
  )
}
```

---

## realscout-your-listings

Display agent's past sales, sold properties, and in-contract listings.

### Attributes

| Attribute | Type | Description | Example Values |
|-----------|------|-------------|----------------|
| `agent-encoded-id` | string | Base64 encoded agent ID | `QWdlbnQtMjI1MDUw` |
| `sort-order` | string | Sort order | `STATUS_AND_SIGNIFICANT_CHANGE`, `NEWEST` |
| `listing-status` | string | Comma-separated statuses | `In Contract,Sold,For Sale` |
| `property-types` | string | Property type filter | `SFR`, `MF`, `TC` |

### Example

```tsx
'use client'

import { createElement } from 'react'

export function RealScoutYourListings() {
  return createElement('realscout-your-listings', {
    'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
    'sort-order': 'STATUS_AND_SIGNIFICANT_CHANGE',
    'listing-status': 'In Contract,Sold,For Sale',
    'property-types': 'SFR',
  })
}
```

---

## realscout-advanced-search

Full MLS search interface with all search options.

### Attributes

| Attribute | Type | Description | Example Values |
|-----------|------|-------------|----------------|
| `agent-encoded-id` | string | Base64 encoded agent ID | `QWdlbnQtMjI1MDUw` |

### Example

```tsx
'use client'

import { createElement } from 'react'

export function RealScoutAdvancedSearch() {
  return createElement('realscout-advanced-search', {
    'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
  })
}
```

---

## Property Type Codes

| Code | Description |
|------|-------------|
| `SFR` | Single Family Residence |
| `MF` | Multi-Family |
| `TC` | Townhouse/Condo |
| `OTHER` | Other property types |

---

## Sort Order Values

| Value | Description |
|-------|-------------|
| `NEWEST` | Most recently listed first |
| `PRICE_HIGH` | Highest price first |
| `PRICE_LOW` | Lowest price first |
| `STATUS_AND_SIGNIFICANT_CHANGE` | By status, then by significant changes |

---

## Listing Status Values

| Value | Description |
|-------|-------------|
| `For Sale` | Active listings |
| `In Contract` | Under contract/pending |
| `Sold` | Closed sales |
