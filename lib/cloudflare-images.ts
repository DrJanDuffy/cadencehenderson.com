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
 * Placeholder image for missing/unset images
 * Using a solid color data URL to prevent build errors
 */
const PLACEHOLDER_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23e5e7eb" width="800" height="600"/%3E%3C/svg%3E'

/**
 * Generate Cloudflare Image delivery URL
 */
export function cfImage(imageId: string, variant: ImageVariant = 'public'): string {
  if (!imageId) return PLACEHOLDER_IMAGE
  return `${BASE_URL}/${imageId}/${variant}`
}

/**
 * Check if a URL is a Cloudflare Images URL
 */
export function isCloudflareImage(url: string): boolean {
  return url.startsWith(BASE_URL)
}

// ============================================================================
// SITE IMAGES CATALOG
// Replace placeholder IDs with actual Cloudflare Image IDs after upload
// ============================================================================

export const SITE_IMAGES = {
  // Hero/Banner Images
  hero: {
    homepage: 'lonemountaineights/hero/hero-las-vegas.png',
    newHomes: 'centennialhillshomes/photos/modern-home-exterior.jpg',
    lifestyle: 'centennialhillshomes/photos/community-lounge.jpg',
    contact: 'lonemountaineights/agents/dr-jan-duffy.jpg',
    rentals: 'lonemountaineights/photos/home-featured-2.jpg',
    gallery: 'centennialhillshomes/photos/clubhouse-exterior.jpg',
    news: 'centennialhillshomes/og/blog-default.jpg',
    faqs: 'centennialhillshomes/photos/community-lounge-2.jpg',
    realtors: 'lonemountaineights/agents/dr-jan-duffy.jpg',
    events: 'centennialhillshomes/photos/outdoor-patio.jpg',
    amenities: 'centennialhillshomes/photos/swimming-pool.jpg',
    schools: 'lonemountaineights/photos/las-vegas-neighborhood.jpg',
    parksTrails: 'lonemountaineights/photos/las-vegas-neighborhood.jpg',
    shopping: 'centennialhillshomes/photos/community-kitchen.jpg',
  },

  // Builder Images (8 builders) - using home exteriors as placeholders
  builders: {
    beazer: 'lonemountaineights/photos/home-featured-1.jpg',
    century: 'lonemountaineights/photos/home-featured-2.jpg',
    drHorton: 'lonemountaineights/photos/home-featured-3.jpg',
    lennar: 'centennialhillshomes/photos/modern-home-exterior.jpg',
    richmond: 'lonemountaineights/photos/home-featured-1.jpg',
    storybook: 'lonemountaineights/photos/home-featured-2.jpg',
    taylorMorrison: 'lonemountaineights/photos/home-featured-3.jpg',
    woodside: 'centennialhillshomes/photos/modern-home-exterior.jpg',
  },

  // Amenities Images
  amenities: {
    centralPark: 'lonemountaineights/photos/las-vegas-neighborhood.jpg',
    pool: 'centennialhillshomes/photos/swimming-pool.jpg',
    splashPad: 'centennialhillshomes/photos/swimming-pool-2.jpg',
    fitness: 'centennialhillshomes/photos/fitness-center.jpg',
    dogPark: 'lonemountaineights/photos/las-vegas-neighborhood.jpg',
    playground: 'centennialhillshomes/photos/outdoor-patio.jpg',
    trails: 'lonemountaineights/photos/las-vegas-neighborhood.jpg',
    sportsCourts: 'centennialhillshomes/photos/pickleball-courts.jpg',
    clubhouse: 'centennialhillshomes/photos/clubhouse-exterior.jpg',
  },

  // Lifestyle/Community Images
  lifestyle: {
    community: 'centennialhillshomes/photos/community-lounge.jpg',
    families: 'centennialhillshomes/photos/outdoor-patio.jpg',
    events: 'centennialhillshomes/photos/community-lounge-2.jpg',
    concert: 'centennialhillshomes/photos/outdoor-patio.jpg',
    farmersMarket: 'centennialhillshomes/photos/community-kitchen.jpg',
    movieNight: 'centennialhillshomes/photos/community-lounge.jpg',
    yoga: 'centennialhillshomes/photos/fitness-center.jpg',
    foodTruck: 'centennialhillshomes/photos/outdoor-patio.jpg',
  },

  // Home Exterior/Interior Images
  homes: {
    exterior1: 'lonemountaineights/photos/home-featured-1.jpg',
    exterior2: 'lonemountaineights/photos/home-featured-2.jpg',
    exterior3: 'lonemountaineights/photos/home-featured-3.jpg',
    interior1: 'centennialhillshomes/photos/community-lounge.jpg',
    interior2: 'centennialhillshomes/photos/community-lounge-2.jpg',
    kitchen: 'centennialhillshomes/photos/community-kitchen.jpg',
    livingRoom: 'centennialhillshomes/photos/community-lounge.jpg',
    backyard: 'centennialhillshomes/photos/outdoor-patio.jpg',
  },

  // Rental Communities
  rentals: {
    americanHomes: 'lonemountaineights/photos/home-featured-1.jpg',
    element12: 'lonemountaineights/photos/home-featured-2.jpg',
    adler: 'lonemountaineights/photos/home-featured-3.jpg',
  },

  // Gallery Images (full set)
  gallery: {
    parkVista: 'lonemountaineights/photos/las-vegas-neighborhood.jpg',
    newHome: 'centennialhillshomes/photos/modern-home-exterior.jpg',
    resortPool: 'centennialhillshomes/photos/swimming-pool.jpg',
    concert: 'centennialhillshomes/photos/outdoor-patio.jpg',
    communityGathering: 'centennialhillshomes/photos/community-lounge.jpg',
    playground: 'centennialhillshomes/photos/outdoor-patio.jpg',
    fitnessCenter: 'centennialhillshomes/photos/fitness-center.jpg',
    modernExterior: 'lonemountaineights/photos/home-featured-1.jpg',
    walkingTrails: 'lonemountaineights/photos/las-vegas-neighborhood.jpg',
    communityEvent: 'centennialhillshomes/photos/community-lounge-2.jpg',
    luxuryInterior: 'centennialhillshomes/photos/community-kitchen.jpg',
    dogPark: 'lonemountaineights/photos/las-vegas-neighborhood.jpg',
  },

  // Location/Map Images
  location: {
    mapOverview: 'centennialhillshomes/og/centennial-hills-map.jpg',
    welcomeCenter: 'centennialhillshomes/photos/entrance-guardhouse.jpg',
    aerialView: 'lonemountaineights/photos/las-vegas-neighborhood.jpg',
  },

  // Agent/Branding
  agent: {
    headshot: 'lonemountaineights/agents/dr-jan-duffy.jpg',
    logo: 'centennialhillshomes/branding/logo.png',
    bhhs: 'centennialhillshomes/branding/logo.png',
  },

  // Icons/Graphics - using logo as placeholder
  icons: {
    amenitiesBox: 'centennialhillshomes/branding/logo.png',
    lifestyleBox: 'centennialhillshomes/branding/logo.png',
    homesBox: 'centennialhillshomes/branding/logo.png',
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
