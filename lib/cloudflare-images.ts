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
    homepage: 'hero-homepage',           // Main hero - luxury home exterior
    newHomes: 'hero-new-homes',          // New homes page hero
    lifestyle: 'hero-lifestyle',         // Lifestyle page hero
    contact: 'hero-contact',             // Contact page hero
    rentals: 'hero-rentals',             // Rentals page hero
    gallery: 'hero-gallery',             // Gallery page hero
    news: 'hero-news',                   // News page hero
    faqs: 'hero-faqs',                   // FAQs page hero
    realtors: 'hero-realtors',           // Realtors page hero
    events: 'hero-events',               // Events page hero
    amenities: 'hero-amenities',         // Amenities page hero
    schools: 'hero-schools',             // Schools page hero
    parksTrails: 'hero-parks-trails',    // Parks & trails hero
    shopping: 'hero-shopping',           // Shopping page hero
  },

  // Builder Images (8 builders)
  builders: {
    beazer: 'builder-beazer',
    century: 'builder-century',
    drHorton: 'builder-dr-horton',
    lennar: 'builder-lennar',
    richmond: 'builder-richmond',
    storybook: 'builder-storybook',
    taylorMorrison: 'builder-taylor-morrison',
    woodside: 'builder-woodside',
  },

  // Amenities Images
  amenities: {
    centralPark: 'amenity-central-park',
    pool: 'amenity-pool',
    splashPad: 'amenity-splash-pad',
    fitness: 'amenity-fitness',
    dogPark: 'amenity-dog-park',
    playground: 'amenity-playground',
    trails: 'amenity-trails',
    sportsCourts: 'amenity-sports-courts',
    clubhouse: 'amenity-clubhouse',
  },

  // Lifestyle/Community Images
  lifestyle: {
    community: 'lifestyle-community',
    families: 'lifestyle-families',
    events: 'lifestyle-events',
    concert: 'lifestyle-concert',
    farmersMarket: 'lifestyle-farmers-market',
    movieNight: 'lifestyle-movie-night',
    yoga: 'lifestyle-yoga',
    foodTruck: 'lifestyle-food-truck',
  },

  // Home Exterior/Interior Images
  homes: {
    exterior1: 'home-exterior-1',
    exterior2: 'home-exterior-2',
    exterior3: 'home-exterior-3',
    interior1: 'home-interior-1',
    interior2: 'home-interior-2',
    kitchen: 'home-kitchen',
    livingRoom: 'home-living-room',
    backyard: 'home-backyard',
  },

  // Rental Communities
  rentals: {
    americanHomes: 'rental-american-homes',
    element12: 'rental-element-12',
    adler: 'rental-adler',
  },

  // Gallery Images (full set)
  gallery: {
    parkVista: 'gallery-park-vista',
    newHome: 'gallery-new-home',
    resortPool: 'gallery-resort-pool',
    concert: 'gallery-concert',
    communityGathering: 'gallery-community-gathering',
    playground: 'gallery-playground',
    fitnessCenter: 'gallery-fitness-center',
    modernExterior: 'gallery-modern-exterior',
    walkingTrails: 'gallery-walking-trails',
    communityEvent: 'gallery-community-event',
    luxuryInterior: 'gallery-luxury-interior',
    dogPark: 'gallery-dog-park',
  },

  // Location/Map Images
  location: {
    mapOverview: 'location-map-overview',
    welcomeCenter: 'location-welcome-center',
    aerialView: 'location-aerial-view',
  },

  // Agent/Branding
  agent: {
    headshot: 'agent-headshot',
    logo: 'agent-logo',
    bhhs: 'agent-bhhs-logo',
  },

  // Icons/Graphics (from cadencenv.com)
  icons: {
    amenitiesBox: 'icon-amenities-box',
    lifestyleBox: 'icon-lifestyle-box',
    homesBox: 'icon-homes-box',
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
