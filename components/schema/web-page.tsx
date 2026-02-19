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
    name: 'Cadence Henderson | Homes for Sale & New Homes – Dr. Jan Duffy, REALTOR®',
    description:
      'Find new homes and resale homes in Cadence, Henderson NV. Master-planned community with parks, pools, schools. Dr. Jan Duffy, Berkshire Hathaway HomeServices.',
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.cadencehenderson.com/#website',
      name: 'Cadence Henderson',
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
    datePublished: '2024-01-01',
    inLanguage: 'en-US',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
