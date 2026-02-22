'use client'

import Image from 'next/image'
import { useState } from 'react'
import { PLACEHOLDER_IMAGE } from '@/lib/cloudflare-images'

type CloudflareImageProps = {
  src: string
  alt: string
} & Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>

/**
 * Next/Image wrapper for Cloudflare Images with fallback to placeholder on 404/load error.
 */
export function CloudflareImage({ src, alt, ...props }: CloudflareImageProps) {
  const [failed, setFailed] = useState(false)
  return (
    <Image
      src={failed ? PLACEHOLDER_IMAGE : src}
      alt={alt}
      unoptimized={failed}
      onError={() => setFailed(true)}
      {...props}
    />
  )
}
