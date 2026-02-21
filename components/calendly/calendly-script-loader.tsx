'use client'

import Script from 'next/script'

/**
 * Loads Calendly widget.js and dispatches calendly-loaded when ready.
 * afterInteractive so the calendar can load when the schedule section is visible.
 */
export function CalendlyScriptLoader() {
  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        // Calendly may attach window.Calendly asynchronously; notify when it's there
        const fire = () => window.dispatchEvent(new CustomEvent('calendly-loaded'))
        if (typeof window !== 'undefined' && window.Calendly) fire()
        else setTimeout(fire, 100)
      }}
    />
  )
}
