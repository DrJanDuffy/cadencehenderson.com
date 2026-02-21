import { CONTACT_INFO } from '@/components/cadence/contact-info'

export function LocalBusinessSchema() {
  const { address } = CONTACT_INFO
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Cadence Henderson Real Estate – New Homes & Rentals',
    description:
      'New home sales, rentals, buyer representation and home valuations in Cadence master-planned community, Henderson NV 89011. Licensed REALTOR® on-site.',
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services – Cadence Henderson NV 89011',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'New Home Sales – Cadence Henderson NV 89011',
            description: 'New construction from Beazer, Lennar, Richmond American, Woodside, Taylor Morrison and more. From $300K–$650K in Cadence Henderson.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Buyer Representation – Henderson NV Master-Planned Community',
            description: 'Expert buyer representation for new and resale homes in Cadence Henderson and surrounding Henderson NV 89011 neighborhoods.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Rental Home Search – Cadence Henderson 89011',
            description: 'Find single-family and apartment rentals in Cadence Henderson NV 89011 from $1,500–$2,800/mo.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Valuation – Cadence Henderson & Henderson NV',
            description: 'Free comparative market analysis for homes in Cadence Henderson and Henderson NV 89011.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Resale Homes – Cadence Henderson 89011',
            description: 'Browse and list resale homes in Cadence Henderson master-planned community, Henderson NV 89011.',
          },
        },
      ],
    },
    areaServed: [
      {
        '@type': 'Place',
        name: 'Cadence Master Planned Community',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Henderson',
          addressRegion: 'NV',
          postalCode: '89011',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'Place',
        name: 'Bicentennial Parkway Corridor',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Bicentennial Pkwy',
          addressLocality: 'Henderson',
          addressRegion: 'NV',
          postalCode: '89011',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'Place',
        name: 'Paseo Verde Parkway Area',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Paseo Verde Pkwy',
          addressLocality: 'Henderson',
          addressRegion: 'NV',
          postalCode: '89011',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'City',
        name: 'Henderson',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Henderson',
          addressRegion: 'NV',
          addressCountry: 'US',
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
      'New homes for sale in Cadence Henderson NV 89011',
      'Cadence Henderson new construction homes',
      'Cadence Henderson Central Park amenities',
      'Cadence Henderson builders – Beazer, Lennar, Richmond American, Woodside',
      '89011 zip code homes and real estate',
      'Bicentennial Pkwy Henderson NV homes',
      'Paseo Verde Pkwy Henderson NV new construction',
      'Galleria at Sunset Henderson NV real estate',
      'Cadence Henderson rental homes and apartments',
      'Lake Mead area Henderson NV homes',
      'Henderson master-planned community real estate',
      'Cadence Henderson townhomes and single-family homes',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

