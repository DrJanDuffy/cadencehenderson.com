import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cadencehenderson.com'
  
  // All builders
  const builders = [
    'beazer-homes',
    'century-communities',
    'dr-horton',
    'lennar',
    'richmond-american',
    'storybook-homes',
    'taylor-morrison',
    'woodside-homes',
  ]
  
  // All rental communities
  const rentals = ['american-homes', 'element-12', 'adler']
  
  // Main pages
  const mainPages = [
    '',
    '/new-homes',
    '/rentals',
    '/lifestyle',
    '/news',
    '/realtors',
    '/contact',
    '/maps',
    '/residents',
    '/gallery',
    '/faqs',
  ]
  
  // Lifestyle sub-pages
  const lifestylePages = [
    '/lifestyle/events',
    '/lifestyle/parks-trails',
    '/lifestyle/schools',
    '/lifestyle/shopping',
    '/lifestyle/amenities',
    '/lifestyle/community',
    '/lifestyle/animal-hospital',
  ]
  
  // Builder pages
  const builderPages = builders.map((builder) => `/new-homes/${builder}`)
  
  // Rental pages
  const rentalPages = rentals.map((rental) => `/rentals/${rental}`)
  
  // Combine all pages
  const allPages = [
    ...mainPages,
    ...lifestylePages,
    ...builderPages,
    ...rentalPages,
  ]
  
  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.includes('/new-homes') ? 0.9 : 0.8,
  }))
}

