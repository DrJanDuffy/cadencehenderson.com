import { CONTACT_INFO } from '@/components/cadence/contact-info'

export function LocalBusinessSchema() {
  const { address } = CONTACT_INFO
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: CONTACT_INFO.brandName,
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
    areaServed: [
      {
        '@type': 'Place',
        name: 'Cadence',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Henderson',
          addressRegion: 'NV',
          postalCode: '89011',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'City',
        name: 'Henderson',
        containedIn: {
          '@type': 'State',
          name: 'Nevada',
        },
      },
      {
        '@type': 'City',
        name: 'Las Vegas',
        containedIn: {
          '@type': 'State',
          name: 'Nevada',
        },
      },
    ],
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
      'Luxury Homes',
      'Investment Properties',
      'First-Time Homebuyers',
      'Relocations',
      'Cadence Henderson',
      'Master-Planned Communities',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

