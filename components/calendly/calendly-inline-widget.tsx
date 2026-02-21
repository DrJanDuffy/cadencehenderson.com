'use client'

import { useEffect, useRef } from 'react'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { useCalendly } from './calendly-loader'

const DEFAULT_STYLE: React.CSSProperties = { minWidth: 320, height: 700 }

export type CalendlyInlineWidgetProps = {
  className?: string
  style?: React.CSSProperties
}

/**
 * Renders the Calendly inline scheduling widget. Requires Calendly script
 * to be loaded (e.g. via CalendlyWhenVisible or a prior CalendlyLink click).
 * Explicitly calls initInlineWidget after script load so the widget works
 * when script is loaded lazily.
 */
export function CalendlyInlineWidget({
  className,
  style,
}: CalendlyInlineWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const initedRef = useRef(false)
  const { isLoaded } = useCalendly()
  const combinedStyle = style
    ? { ...DEFAULT_STYLE, ...style }
    : DEFAULT_STYLE

  useEffect(() => {
    if (!isLoaded || initedRef.current || !containerRef.current) return
    let intervalId: ReturnType<typeof setInterval> | null = null
    let timeoutId: ReturnType<typeof setTimeout> | null = null
    const cleanup = () => {
      if (intervalId) {
        clearInterval(intervalId)
        intervalId = null
      }
      if (typeof window !== 'undefined') window.removeEventListener('calendly-loaded', tryInit)
      if (timeoutId) clearTimeout(timeoutId)
    }
    const tryInit = () => {
      const cal = typeof window !== 'undefined' ? window.Calendly : undefined
      if (cal?.initInlineWidget && containerRef.current && !initedRef.current) {
        cal.initInlineWidget({
          url: CONTACT_INFO.calendlyUrl,
          parentElement: containerRef.current,
        })
        initedRef.current = true
        cleanup()
      }
    }
    tryInit()
    if (!initedRef.current && typeof window !== 'undefined') {
      window.addEventListener('calendly-loaded', tryInit)
      intervalId = setInterval(tryInit, 300)
      timeoutId = setTimeout(cleanup, 12000)
    }
    return cleanup
  }, [isLoaded])

  return (
    <div
      ref={containerRef}
      className={`calendly-inline-widget bg-slate-50 border border-slate-200 rounded-lg overflow-hidden ${className ?? ''}`.trim()}
      style={combinedStyle}
      aria-busy={!isLoaded}
      aria-label="Schedule a consultation – Calendly"
    />
  )
}
