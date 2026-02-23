'use client'

import Script from 'next/script'
import { CONTACT_INFO } from '@/components/cadence/contact-info'

/**
 * Loads Calendly widget.js, polls for window.Calendly, then dispatches
 * calendly-loaded and inits the floating badge so widgets and popups work.
 */
export function CalendlyScriptLoader() {
  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window === 'undefined') return
        const fire = () => window.dispatchEvent(new CustomEvent('calendly-loaded'))
        const initBadge = () => {
          const cal = (window as unknown as { Calendly?: { initBadgeWidget?: (o: object) => void } }).Calendly
          if (cal?.initBadgeWidget) {
            cal.initBadgeWidget({
              url: CONTACT_INFO.calendlyUrl,
              text: 'Tour Cadence Homes Today',
              color: '#0069ff',
              textColor: '#ffffff',
              branding: false,
            })
          }
        }
        if (window.Calendly) {
          fire()
          initBadge()
          return
        }
        let attempts = 0
        const maxAttempts = 50
        const interval = setInterval(() => {
          attempts++
          if (window.Calendly) {
            clearInterval(interval)
            fire()
            initBadge()
            return
          }
          if (attempts >= maxAttempts) {
            clearInterval(interval)
            fire()
          }
        }, 150)
      }}
    />
  )
}
