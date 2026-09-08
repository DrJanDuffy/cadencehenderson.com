'use client'

import { SiteImage } from '@/components/cadence/site-image'

/**
 * News card image: Cloudflare primary, git public/images fallback.
 */
export function NewsPlaceholderImage({ src }: { src: string }) {
  return <SiteImage src={src} alt="" fill className="object-cover" />
}
