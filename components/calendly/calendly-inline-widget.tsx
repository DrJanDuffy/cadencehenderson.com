'use client'

import { CONTACT_INFO } from '@/components/cadence/contact-info'

export function CalendlyInlineWidget({
  className,
  style = { minWidth: 320, height: 700 },
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div
      className={`calendly-inline-widget ${className ?? ''}`}
      data-url={CONTACT_INFO.calendlyUrl}
      style={{ minWidth: 320, height: 700, ...style }}
    />
  )
}
