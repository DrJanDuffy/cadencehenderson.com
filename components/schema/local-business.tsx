import { CONTACT_INFO } from '@/components/cadence/contact-info'

export function LocalBusinessSchema() {
  const { address } = CONTACT_INFO
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy - Cadence Henderson Real Estate',
    description:
      'Cadence Henderson homes for sale. Expert guidance for buyers, sellers, and investors in Cadence master-planned community, Henderson NV 89011.',
    image: 'https://www.cadencehenderson.com/og-image.png',
    '@id': 'https://www.cadencehenderson.com',
    url: 'https://www.cadencehenderson.com',
    telephone: `+1-${CONTACT_INFO.phone}`,
    email: CONTACT_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.0562609,
      longitude: -115.0515617,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '10:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    serviceType: [
      'Real estate agent',
      "Buyer's agent",
      'Listing agent',
      'New home sales',
      'Resale homes',
      'Rental homes',
      'Real estate consultation',
    ],
    areaServed: {
      '@type': 'Place',
      name: 'Cadence Master Planned Community, Henderson, NV',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Henderson',
        addressRegion: 'NV',
        postalCode: '89011',
        addressCountry: 'US',
      },
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Real Estate License',
      identifier: CONTACT_INFO.licenseNumber,
    },
    memberOf: {
      '@type': 'Organization',
      name: CONTACT_INFO.brokerage,
    },
    knowsAbout: [
      'Cadence Henderson homes for sale',
      'Cadence Henderson new construction',
      'Henderson NV real estate',
      'Cadence master planned community',
      'Cadence Henderson townhomes',
      'Cadence Henderson investment property',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

