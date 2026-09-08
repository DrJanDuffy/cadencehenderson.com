'use client'

import { useEffect, useRef, useState } from 'react'
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
 * Git-tracked public/images first when a local file exists (reliable H1 paint).
 * Cloudflare URL is used when there is no git mapping (e.g. condo IDs).
 * One error swap only — no retry loops.
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
  const imgRef = useRef<HTMLImageElement>(null)
  const gitSrc = gitFallbackFromSrc(src)
  const hasGitFile = gitSrc.startsWith('/')
  const resolved = failed ? PLACEHOLDER_IMAGE : hasGitFile ? gitSrc : src
  const fillClass = fill ? 'absolute inset-0 h-full w-full object-cover' : ''

  useEffect(() => {
    const el = imgRef.current
    if (!el || failed) return
    if (el.complete && el.naturalWidth === 0) {
      setFailed(true)
    }
  }, [resolved, failed])

  return (
    <img
      ref={imgRef}
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
