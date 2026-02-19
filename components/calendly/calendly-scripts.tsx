'use client'

import Script from 'next/script'

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
            url: 'https://calendly.com/drjanduffy/15min',
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
