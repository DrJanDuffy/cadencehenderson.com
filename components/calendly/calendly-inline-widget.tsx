'use client'

import { CONTACT_INFO } from '@/components/cadence/contact-info'

const DEFAULT_STYLE: React.CSSProperties = { minWidth: 320, height: 700 }

export type CalendlyInlineWidgetProps = {
  className?: string
  style?: React.CSSProperties
}

/**
 * Renders the Calendly inline scheduling widget. Requires Calendly script
 * (from layout). Uses CONTACT_INFO.calendlyUrl for the booking URL.
 */
export function CalendlyInlineWidget({
  className,
  style,
}: CalendlyInlineWidgetProps) {
  const combinedStyle = style
    ? { ...DEFAULT_STYLE, ...style }
    : DEFAULT_STYLE
  return (
    <div
      className={`calendly-inline-widget ${className ?? ''}`.trim()}
      data-url={CONTACT_INFO.calendlyUrl}
      style={combinedStyle}
    />
  )
}
