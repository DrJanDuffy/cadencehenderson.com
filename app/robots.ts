import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.cadencehenderson.com'

/**
 * robots.txt for crawlers. Points Google and others to the sitemap.
 * Do not Disallow /favicon.ico — Google must crawl it for the SERP icon.
 * Favicon is excluded from the index via X-Robots-Tag: noindex (next.config).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/rentals', '/rentals/', '/new-homes', '/lifestyle'],
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}

