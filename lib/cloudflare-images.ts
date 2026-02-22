/**
 * Cloudflare Images utility functions
 * Account: Cadence Henderson
 * Delivery URL: https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<image_id>/<variant_name>
 * 
 * SETUP: Replace placeholder IDs below with actual Cloudflare Image IDs from your dashboard.
 * Upload images at: https://dash.cloudflare.com/2cc579c1ec9e426ed585e933ebf4753b/images
 */

const CLOUDFLARE_ACCOUNT_HASH = 'byE6BTe9lNqo21V57n4aPQ'
const BASE_URL = `https://imagedelivery.net/${CLOUDFLARE_ACCOUNT_HASH}`

/**
 * Image variants - configure these in Cloudflare Dashboard > Images > Variants
 * Recommended settings:
 * - public: Fit=scale-down, Width=1920 (default, full quality)
 * - hero: Fit=cover, Width=1920, Height=1080 (hero sections)
 * - card: Fit=cover, Width=600, Height=400 (cards/grids)
 * - thumbnail: Fit=cover, Width=300, Height=200 (small thumbnails)
 * - avatar: Fit=cover, Width=200, Height=200 (profile images)
 * - og: Fit=cover, Width=1200, Height=630 (social sharing)
 * - gallery: Fit=cover, Width=1200, Height=800 (gallery lightbox)
 */
export type ImageVariant = 'public' | 'hero' | 'card' | 'thumbnail' | 'avatar' | 'og' | 'gallery'

/**
 * Placeholder image for missing/unset images (e.g. Cloudflare 404).
 * Use in img onError: e.currentTarget.src = PLACEHOLDER_IMAGE
 */
export const PLACEHOLDER_IMAGE =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23e5e7eb" width="800" height="600"/%3E%3C/svg%3E'

/**
 * Generate Cloudflare Image delivery URL.
 * Uses the default "public" variant so images load without custom variants in the Cloudflare dashboard.
 * Add custom variants (hero, card, etc.) in Dashboard > Images > Variants to use the variant parameter.
 */
export function cfImage(imageId: string, _variant: ImageVariant = 'public'): string {
  if (!imageId) return PLACEHOLDER_IMAGE
  return `${BASE_URL}/${imageId}/public`
}

/**
 * Check if a URL is a Cloudflare Images URL
 */
export function isCloudflareImage(url: string): boolean {
  return url.startsWith(BASE_URL)
}

// ============================================================================
// SITE IMAGES CATALOG — Cadence Henderson
// Image IDs must match exactly what appears in Cloudflare Dashboard > Images.
// URL format: https://imagedelivery.net/{accountHash}/{imageId}/public
// If images don't load: verify image IDs in Cloudflare Dashboard > Images
// ============================================================================

export const SITE_IMAGES = {
  // Hero/Banner Images (Cloudflare Images: replace with actual Image ID from dashboard if different)
  hero: {
    homepage: 'CendenceDrJanDuffy', // CendenceDrJanDuffy.png
    newHomes: 'cadence_008_resized',
    lifestyle: 'Workout-Area-at-Cadence-CentralPark',
    contact: 'CendenceDrJanDuffy',
    rentals: 'cadence_008_resized',
    gallery: 'Workout-Area-at-Cadence-CentralPark',
    news: 'cadence_008_resized',
    faqs: 'Workout-Area-at-Cadence-CentralPark',
    realtors: 'CendenceDrJanDuffy',
    events: 'Workout-Area-at-Cadence-CentralPark',
    amenities: 'cadence_008_resized',
    schools: 'cadence_008_resized',
    parksTrails: 'Workout-Area-at-Cadence-CentralPark',
    shopping: 'cadence_008_resized',
  },

  // Builder Images (8 builders) — Cadence Henderson community
  builders: {
    beazer: 'cadence_008_resized',
    century: 'cadence_008_resized',
    drHorton: 'cadence_008_resized',
    lennar: 'cadence_008_resized',
    richmond: 'Workout-Area-at-Cadence-CentralPark',
    storybook: 'cadence_008_resized',
    taylorMorrison: 'cadence_008_resized',
    woodside: 'Workout-Area-at-Cadence-CentralPark',
  },

  // Amenities Images — Cadence Henderson (use Cadence IDs from Cloudflare dashboard)
  amenities: {
    centralPark: 'cadence_008_resized',
    pool: 'cadence_008_resized',
    splashPad: 'cadence_008_resized',
    fitness: 'Workout-Area-at-Cadence-CentralPark',
    dogPark: 'cadence_008_resized',
    playground: 'cadence_008_resized',
    trails: 'Workout-Area-at-Cadence-CentralPark',
    sportsCourts: 'Workout-Area-at-Cadence-CentralPark',
    clubhouse: 'cadence_008_resized',
  },

  // Lifestyle/Community Images — Cadence Central Park & community
  lifestyle: {
    community: 'Workout-Area-at-Cadence-CentralPark',
    families: 'cadence_008_resized',
    events: 'Workout-Area-at-Cadence-CentralPark',
    concert: 'Workout-Area-at-Cadence-CentralPark',
    farmersMarket: 'cadence_008_resized',
    movieNight: 'Workout-Area-at-Cadence-CentralPark',
    yoga: 'Workout-Area-at-Cadence-CentralPark',
    foodTruck: 'Workout-Area-at-Cadence-CentralPark',
  },

  // Home Exterior/Interior Images — Cadence Henderson
  homes: {
    exterior1: 'cadence_008_resized',
    exterior2: 'cadence_008_resized',
    exterior3: 'Workout-Area-at-Cadence-CentralPark',
    interior1: 'Workout-Area-at-Cadence-CentralPark',
    interior2: 'cadence_008_resized',
    kitchen: 'cadence_008_resized',
    livingRoom: 'cadence_008_resized',
    backyard: 'Workout-Area-at-Cadence-CentralPark',
  },

  // Rental Communities — Cadence Henderson
  rentals: {
    americanHomes: 'cadence_008_resized',
    element12: 'cadence_008_resized',
    adler: 'Workout-Area-at-Cadence-CentralPark',
  },

  // Gallery Images — Cadence Central Park & community
  gallery: {
    parkVista: 'cadence_008_resized',
    newHome: 'cadence_008_resized',
    resortPool: 'cadence_008_resized',
    concert: 'Workout-Area-at-Cadence-CentralPark',
    communityGathering: 'Workout-Area-at-Cadence-CentralPark',
    playground: 'cadence_008_resized',
    fitnessCenter: 'Workout-Area-at-Cadence-CentralPark',
    modernExterior: 'cadence_008_resized',
    walkingTrails: 'Workout-Area-at-Cadence-CentralPark',
    communityEvent: 'Workout-Area-at-Cadence-CentralPark',
    luxuryInterior: 'cadence_008_resized',
    dogPark: 'cadence_008_resized',
  },

  // Location/Map Images — Cadence Henderson
  location: {
    mapOverview: 'cadence_008_resized',
    welcomeCenter: 'cadence_008_resized',
    aerialView: 'cadence_008_resized',
  },

  // Agent/Branding — Dr. Jan Duffy
  agent: {
    headshot: 'CendenceDrJanDuffy',
    logo: 'cadence_008_resized', // replace with logo ID if uploaded
    bhhs: 'cadence_008_resized', // replace with BHH logo ID if uploaded
  },

  // Icons/Graphics — Cadence community thumbnails
  icons: {
    amenitiesBox: 'cadence_008_resized',
    lifestyleBox: 'Workout-Area-at-Cadence-CentralPark',
    homesBox: 'cadence_008_resized',
  },
} as const

// ============================================================================
// HELPER FUNCTIONS FOR COMMON USE CASES
// ============================================================================

/**
 * Get hero image URL for a specific page
 */
export function getHeroImage(page: keyof typeof SITE_IMAGES.hero, variant: ImageVariant = 'hero'): string {
  return cfImage(SITE_IMAGES.hero[page], variant)
}

/**
 * Get builder image URL
 */
export function getBuilderImage(builder: keyof typeof SITE_IMAGES.builders, variant: ImageVariant = 'card'): string {
  return cfImage(SITE_IMAGES.builders[builder], variant)
}

/**
 * Get amenity image URL
 */
export function getAmenityImage(amenity: keyof typeof SITE_IMAGES.amenities, variant: ImageVariant = 'card'): string {
  return cfImage(SITE_IMAGES.amenities[amenity], variant)
}

/**
 * Get gallery image URL
 */
export function getGalleryImage(image: keyof typeof SITE_IMAGES.gallery, variant: ImageVariant = 'gallery'): string {
  return cfImage(SITE_IMAGES.gallery[image], variant)
}

/**
 * Get home image URL
 */
export function getHomeImage(image: keyof typeof SITE_IMAGES.homes, variant: ImageVariant = 'card'): string {
  return cfImage(SITE_IMAGES.homes[image], variant)
}
