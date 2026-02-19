'use client'

import { createElement } from 'react'

/**
 * RealScout office listings widget. Requires realscout-web-components.umd.js in layout head.
 * Do not modify without explicit approval (IDX/MLS compliance).
 */
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
