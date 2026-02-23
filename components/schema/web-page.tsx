import { CONTACT_INFO } from '@/components/cadence/contact-info'

/**
 * WebPage JSON-LD for homepage. Supports indexing and E-E-A-T (author, publisher).
 * Use on the root page only.
 */
export function WebPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.cadencehenderson.com/#webpage',
    url: 'https://www.cadencehenderson.com',
    name: "New Home Buyer's Agent Cadence Henderson NV 89011 | Dr. Jan Duffy — Free Buyer Representation",
    description:
      "New homes Cadence Henderson NV 89011. Free buyer representation — builder pays. Cadence Henderson buyer's agent. Dr. Jan Duffy, Berkshire Hathaway HomeServices.",
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.cadencehenderson.com/#website',
      name: CONTACT_INFO.siteName,
      url: 'https://www.cadencehenderson.com',
    },
    about: {
      '@type': 'Place',
      name: 'Cadence',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Henderson',
        addressRegion: 'NV',
        addressCountry: 'US',
      },
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://www.cadencehenderson.com/og-image.png',
    },
    author: {
      '@type': 'Person',
      '@id': 'https://www.cadencehenderson.com/#agent',
      name: 'Dr. Jan Duffy',
      jobTitle: 'REALTOR®, New Home Buyer Specialist',
      url: 'https://www.cadencehenderson.com',
    },
    datePublished: '2024-01-01',
    dateModified: '2026-02-23',
    inLanguage: 'en-US',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '[data-speakable]'],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
