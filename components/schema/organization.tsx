import { CONTACT_INFO, SOCIAL_MEDIA } from '@/components/cadence/contact-info'

/**
 * Organization + Person JSON-LD for E-E-A-T signals — GEO 2026 optimization.
 * Links agent identity to brokerage, social profiles, and credentials.
 * AI engines use this to verify expertise and authoritativeness.
 */
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateAgent',
        '@id': 'https://www.cadencehenderson.com/#agent',
        name: 'Dr. Jan Duffy',
        jobTitle: 'REALTOR®, New Home Buyer Specialist',
        description:
          'Dr. Jan Duffy is the leading new home buyer\'s agent at Cadence Henderson NV 89011. She provides free buyer representation — the builder pays her full commission. Licensed in Nevada (S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties.',
        url: 'https://www.cadencehenderson.com',
        telephone: `+1-${CONTACT_INFO.phone}`,
        email: CONTACT_INFO.email,
        image: 'https://www.cadencehenderson.com/og-image.png',
        sameAs: [
          SOCIAL_MEDIA.facebook,
          SOCIAL_MEDIA.instagram,
          SOCIAL_MEDIA.twitter,
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: CONTACT_INFO.address.street,
          addressLocality: CONTACT_INFO.address.city,
          addressRegion: CONTACT_INFO.address.state,
          postalCode: CONTACT_INFO.address.zip,
          addressCountry: 'US',
        },
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Real Estate License',
            identifier: CONTACT_INFO.licenseNumber,
            recognizedBy: {
              '@type': 'GovernmentOrganization',
              name: 'Nevada Real Estate Division',
            },
          },
        ],
        worksFor: {
          '@type': 'RealEstateOrganization',
          '@id': 'https://www.cadencehenderson.com/#brokerage',
          name: CONTACT_INFO.brokerage,
          address: {
            '@type': 'PostalAddress',
            streetAddress: '8850 W Sunset Road Suite 200',
            addressLocality: 'Las Vegas',
            addressRegion: 'NV',
            postalCode: '89148',
            addressCountry: 'US',
          },
        },
        knowsAbout: [
          'Cadence Henderson new construction',
          'Henderson NV 89011 real estate',
          'new home buyer representation',
          'builder incentive negotiation',
          'Nevada real estate market',
          'Cadence master-planned community',
        ],
        areaServed: {
          '@type': 'City',
          name: 'Henderson',
          containedInPlace: {
            '@type': 'State',
            name: 'Nevada',
          },
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
