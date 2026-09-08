'use client'

import Image from 'next/image'
import { useState } from 'react'
import { gitFallbackFromSrc, PLACEHOLDER_IMAGE } from '@/lib/cloudflare-images'

type CloudflareImageProps = {
  src: string
  alt: string
} & Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>

/**
 * Next/Image wrapper: Cloudflare Images first, git public/images fallback, then SVG placeholder.
 */
export function CloudflareImage({ src, alt, ...props }: CloudflareImageProps) {
  const [failed, setFailed] = useState(false)
  const fallback = gitFallbackFromSrc(src)
  const resolved = failed ? fallback : src
  return (
    <Image
      src={resolved || PLACEHOLDER_IMAGE}
      alt={alt}
      unoptimized={failed || resolved.startsWith('/')}
      onError={() => setFailed(true)}
      {...props}
    />
  )
}
