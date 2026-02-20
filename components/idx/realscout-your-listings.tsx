'use client'

import { createElement } from 'react'

/**
 * RealScout your listings widget (past homesales, sold, in contract).
 * Requires realscout-web-components.umd.js in layout. Do not modify without explicit approval.
 */
export function RealScoutYourListings() {
  return createElement('realscout-your-listings', {
    'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
    'sort-order': 'STATUS_AND_SIGNIFICANT_CHANGE',
    'listing-status': 'Sold,For Sale,In Contract',
    'property-types': 'SFR',
  })
}
