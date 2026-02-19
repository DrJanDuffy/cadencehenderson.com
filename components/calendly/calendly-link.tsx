'use client'

import { CONTACT_INFO } from '@/components/cadence/contact-info'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

type CalendlyLinkProps = {
  children: React.ReactNode
  className?: string
  url?: string
}

export function CalendlyLink({
  children,
  className,
  url = CONTACT_INFO.calendlyUrl,
}: CalendlyLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (typeof window !== 'undefined' && window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url })
    }
    return false
  }

  return (
    <a href={url} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
