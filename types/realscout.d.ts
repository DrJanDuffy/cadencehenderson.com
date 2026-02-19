import type { HTMLAttributes } from 'react'

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': HTMLAttributes<HTMLElement> & {
        'agent-encoded-id'?: string
        'sort-order'?: string
        'listing-status'?: string
        'property-types'?: string
        'price-min'?: string
        'price-max'?: string
      }
      'realscout-your-listings': HTMLAttributes<HTMLElement> & {
        'agent-encoded-id'?: string
        'sort-order'?: string
        'listing-status'?: string
        'property-types'?: string
      }
      'realscout-advanced-search': HTMLAttributes<HTMLElement> & {
        'agent-encoded-id'?: string
      }
    }
  }
}
