'use client'

import { useState } from 'react'
import { gitFallbackFromSrc, PLACEHOLDER_IMAGE } from '@/lib/cloudflare-images'

type SiteImageProps = {
  src: string
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
  sizes?: string
  loading?: 'lazy' | 'eager'
}

/**
 * Cloudflare Images primary URL with git-tracked public/images fallback.
 * Use for H1/H2/H3 photos. One error swap only — no retry loops.
 */
export function SiteImage({
  src,
  alt,
  className,
  fill,
  width,
  height,
  priority,
  loading,
}: SiteImageProps) {
  const [failed, setFailed] = useState(false)
  const resolved = failed ? gitFallbackFromSrc(src) : src
  const fillClass = fill ? 'absolute inset-0 h-full w-full object-cover' : ''

  return (
    <img
      src={resolved || PLACEHOLDER_IMAGE}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={[fillClass, className].filter(Boolean).join(' ')}
      fetchPriority={priority ? 'high' : undefined}
      loading={priority ? 'eager' : loading ?? 'lazy'}
      decoding="async"
      onError={(event) => {
        if (failed) {
          event.currentTarget.src = PLACEHOLDER_IMAGE
          return
        }
        setFailed(true)
      }}
    />
  )
}
