export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Cadence Henderson | Homes By Dr Jan Duffy',
    image: 'https://www.cadencehenderson.com/og-image.png',
    '@id': 'https://www.cadencehenderson.com',
    url: 'https://www.cadencehenderson.com',
    telephone: '+1-702-500-1955',
    email: 'DrJanSells@CadenceHenderson.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1170 E. Sunset Rd, Ste. 101',
      addressLocality: 'Henderson',
      addressRegion: 'NV',
      postalCode: '89011',
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
    areaServed: [
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
      identifier: 'S.0197614',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
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

