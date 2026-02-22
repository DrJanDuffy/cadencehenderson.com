'use client'

import { PLACEHOLDER_IMAGE } from '@/lib/cloudflare-images'

/**
 * Client-only image for news cards when article.image is missing.
 * Shows Cloudflare fallback or placeholder on 404.
 */
export function NewsPlaceholderImage({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
      onError={(e) => {
        e.currentTarget.src = PLACEHOLDER_IMAGE
      }}
    />
  )
}
