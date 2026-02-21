'use client'

import Script from 'next/script'

/**
 * Loads Calendly widget.js and dispatches calendly-loaded event for CalendlyProvider.
 * Must be a Client Component so onLoad (event handler) is not passed from Server.
 */
export function CalendlyScriptLoader() {
  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="lazyOnload"
      onLoad={() => {
        window.dispatchEvent(new CustomEvent('calendly-loaded'))
      }}
    />
  )
}
