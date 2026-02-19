'use client'

import Script from 'next/script'
import { CONTACT_INFO } from '@/components/cadence/contact-info'

/**
 * Loads Calendly widget.js (lazyOnload) and initializes the floating badge
 * ("Call Your Cadence Consultant Today"). Single source of truth: CONTACT_INFO.calendlyUrl.
 */
export function CalendlyScripts() {
  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="lazyOnload"
      onLoad={() => {
        const cal = (
          window as unknown as {
            Calendly?: { initBadgeWidget?: (o: object) => void }
          }
        ).Calendly
        if (typeof window !== 'undefined' && cal?.initBadgeWidget) {
          cal.initBadgeWidget({
            url: CONTACT_INFO.calendlyUrl,
            text: 'Call Your Cadence Consultant Today',
            color: '#0069ff',
            textColor: '#ffffff',
            branding: false,
          })
        }
      }}
    />
  )
}
