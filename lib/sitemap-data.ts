/**
 * Shared sitemap data for XML sitemap (route handler) and optional reuse.
 * Single source of truth for URLs included in sitemap.xml.
 */

export const SITEMAP_BASE_URL = 'https://www.cadencehenderson.com'

const BUILDERS = [
  'beazer-homes',
  'century-communities',
  'dr-horton',
  'lennar',
  'richmond-american',
  'storybook-homes',
  'taylor-morrison',
  'woodside-homes',
] as const

const LIFESTYLE_PAGES = [
  '/lifestyle/events',
  '/lifestyle/parks-trails',
  '/lifestyle/schools',
  '/lifestyle/shopping',
  '/lifestyle/amenities',
  '/lifestyle/community',
  '/lifestyle/animal-hospital',
] as const

export type SitemapEntry = {
  url: string
  lastModified: Date
  changeFrequency: 'daily' | 'weekly' | 'monthly'
  priority: number
}

export function getSitemapEntries(): SitemapEntry[] {
  const base = SITEMAP_BASE_URL
  const now = new Date()

  const mainPages: SitemapEntry[] = [
    { url: base, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${base}/new-homes`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/lifestyle`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/news`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/realtors`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/maps`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/residents`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/faqs`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/past-homesales`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ]

  const lifestyle: SitemapEntry[] = LIFESTYLE_PAGES.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const builderPages: SitemapEntry[] = BUILDERS.map((slug) => ({
    url: `${base}/new-homes/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...mainPages, ...lifestyle, ...builderPages]
}
