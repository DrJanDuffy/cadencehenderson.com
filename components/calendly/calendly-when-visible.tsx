'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { useCalendly } from './calendly-loader'

/**
 * Loads Calendly script when the wrapped content enters the viewport.
 * Use around the Newsletter section so the inline widget script loads only when the user scrolls to it.
 */
export function CalendlyWhenVisible({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const { loadCalendly, isLoaded } = useCalendly()

  useEffect(() => {
    if (isLoaded) return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadCalendly()
      },
      { rootMargin: '100px', threshold: 0 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [loadCalendly, isLoaded])

  return <div ref={ref}>{children}</div>
}
