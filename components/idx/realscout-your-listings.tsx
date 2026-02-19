'use client'

/**
 * RealScout your listings widget (past homesales, sold, in contract).
 * Requires realscout-web-components.umd.js in layout. Do not modify without explicit approval.
 */
export function RealScoutYourListings() {
  return (
    <realscout-your-listings
      agent-encoded-id="QWdlbnQtMjI1MDUw"
      sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
      listing-status="In Contract,Sold,For Sale"
      property-types="SFR"
    />
  )
}
