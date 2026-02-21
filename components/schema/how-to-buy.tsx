import { CONTACT_INFO } from '@/components/cadence/contact-info'

/**
 * HowTo JSON-LD schema for buying a home in Cadence Henderson.
 * Targets AEO for "how to buy a home in Cadence Henderson" queries.
 */
export function HowToBuySchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Buy a New Home in Cadence Henderson NV 89011',
    description:
      'Step-by-step guide to buying a new home in Cadence Henderson, Henderson NV 89011. Tours, builders, pricing, and scheduling.',
    totalTime: 'P30D',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '300000-650000',
    },
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Schedule a consultation',
        text: `Call ${CONTACT_INFO.phone} or book online to schedule a 15-minute consultation. Discuss your needs and budget for Cadence Henderson homes.`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Tour model homes',
        text: 'Visit the Cadence Henderson Welcome Center at 1170 E Sunset Rd, Henderson NV 89011. Tour model homes from 8 builders daily 10AM–6PM.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Compare floor plans and prices',
        text: 'New homes in Cadence Henderson range from $300K for townhomes to $650K+ for estate homes. Compare Beazer, Lennar, Richmond American, Woodside, Taylor Morrison, and others.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Get pre-approved and make an offer',
        text: 'Work with your REALTOR® and lender. Get pre-approved, then submit an offer on your chosen Cadence Henderson home. Your agent guides you through the process.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Close and move in',
        text: 'Complete inspections, appraisal, and closing. Move into your new Cadence Henderson NV 89011 home.',
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
