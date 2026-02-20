/**
 * Cloudflare Images utility functions
 * Account: Cadence Henderson
 * Delivery URL: https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<image_id>/<variant_name>
 */

const CLOUDFLARE_ACCOUNT_HASH = 'byE6BTe9lNqo21V57n4aPQ'
const BASE_URL = `https://imagedelivery.net/${CLOUDFLARE_ACCOUNT_HASH}`

/**
 * Standard image variants - configure in Cloudflare Dashboard
 * Recommended variants:
 * - public: Full size, default
 * - hero: 1920x1080, fit=cover (for hero sections)
 * - card: 600x400, fit=cover (for cards/grids)
 * - thumbnail: 300x200, fit=cover (for thumbnails)
 * - avatar: 200x200, fit=cover (for profile images)
 * - og: 1200x630, fit=cover (for Open Graph/social sharing)
 */
export type ImageVariant = 'public' | 'hero' | 'card' | 'thumbnail' | 'avatar' | 'og'

/**
 * Generate Cloudflare Image delivery URL
 * @param imageId - The Cloudflare Image ID (UUID format)
 * @param variant - The variant name configured in Cloudflare Dashboard
 * @returns Full image delivery URL
 * 
 * @example
 * // Basic usage
 * const url = cfImage('abc123-def456', 'card')
 * // Returns: https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/abc123-def456/card
 * 
 * @example
 * // In a component
 * <Image src={cfImage(imageId, 'hero')} alt="..." fill />
 */
export function cfImage(imageId: string, variant: ImageVariant = 'public'): string {
  if (!imageId) {
    console.warn('cfImage called with empty imageId')
    return ''
  }
  return `${BASE_URL}/${imageId}/${variant}`
}

/**
 * Check if a URL is a Cloudflare Images URL
 */
export function isCloudflareImage(url: string): boolean {
  return url.startsWith(BASE_URL)
}

/**
 * Extract image ID from a Cloudflare Images URL
 */
export function extractImageId(url: string): string | null {
  if (!isCloudflareImage(url)) return null
  const parts = url.replace(BASE_URL + '/', '').split('/')
  return parts[0] || null
}

/**
 * Image IDs for site assets - add your uploaded images here
 * Upload images via Cloudflare Dashboard or API, then add IDs here
 */
export const SITE_IMAGES = {
  // Hero images
  // hero: {
  //   homepage: 'your-image-id-here',
  //   newHomes: 'your-image-id-here',
  // },
  
  // Builder logos
  // builders: {
  //   beazer: 'your-image-id-here',
  //   century: 'your-image-id-here',
  // },
  
  // Amenity photos
  // amenities: {
  //   pool: 'your-image-id-here',
  //   park: 'your-image-id-here',
  // },
  
  // Agent photos
  // agent: {
  //   headshot: 'your-image-id-here',
  //   logo: 'your-image-id-here',
  // },
} as const
