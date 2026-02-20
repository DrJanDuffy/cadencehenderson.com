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
    const cal = typeof window !== 'undefined' ? window.Calendly : undefined
    if (cal?.initInlineWidget) {
      cal.initInlineWidget({
        url: CONTACT_INFO.calendlyUrl,
        parentElement: containerRef.current,
      })
      initedRef.current = true
    }
  }, [isLoaded])

  return (
    <div
      ref={containerRef}
      className={`calendly-inline-widget ${className ?? ''}`.trim()}
      style={combinedStyle}
    />
  )
}
