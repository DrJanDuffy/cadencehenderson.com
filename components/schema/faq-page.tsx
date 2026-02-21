import { CONTACT_INFO } from '@/components/cadence/contact-info'

/**
 * FAQPage JSON-LD schema targeting "People Also Ask" queries.
 * Service-first, hyperlocal questions for Cadence Henderson NV 89011.
 * Renders in root layout for site-wide FAQ rich results.
 */
export function FAQPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What new homes are for sale in Cadence Henderson NV?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cadence Henderson NV 89011 has 8 builders: Beazer, Century Communities, D.R. Horton, Lennar, Richmond American, StoryBook, Taylor Morrison, and Woodside. Prices $300K–$650K+. Tours 7 days at 1170 E Sunset Rd, Henderson NV 89011. Call 702-930-8672.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does it cost to buy a home in Cadence Henderson 89011?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Home prices in Cadence Henderson 89011 range from approximately $300,000 to $650,000+. New construction townhomes start in the mid-$300s; single-family homes range from $380K to $650K+. Resale homes typically price between $400K–$575K. Call 702-930-8672 for current Cadence Henderson pricing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there rentals available in Cadence Henderson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, rental homes and apartments are available in Cadence Henderson NV 89011. Single-family rental options include AMH (American Homes 4 Rent), Element 12, and Adler communities, typically ranging from $1,500–$2,800/month. Call 702-930-8672 to find current Cadence Henderson rental availability.',
        },
      },
      {
        '@type': 'Question',
        name: 'What amenities does Cadence Henderson have?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cadence Henderson NV 89011 has a 50-acre Central Park, resort pools, fitness centers, pickleball courts, dog parks, 30+ miles of trails, and clubhouses. Most amenities are free for residents.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which builders are building homes in Cadence Henderson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Active homebuilders in Cadence Henderson NV 89011 include Beazer Homes, Century Communities, D.R. Horton, Lennar, Richmond American Homes, StoryBook Homes, Taylor Morrison, and Woodside Homes. Call ${CONTACT_INFO.phone} or visit the Cadence Henderson Welcome Center to tour model homes from all builders.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Cadence Henderson located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cadence Henderson is at Bicentennial Pkwy & Paseo Verde, Henderson NV 89011. Office: 1170 E Sunset Rd. 20 min from the Strip, 15 min from Harry Reid Airport.',
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
