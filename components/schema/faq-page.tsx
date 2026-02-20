import { CONTACT_INFO } from '@/components/cadence/contact-info'

/**
 * FAQPage JSON-LD schema targeting "People Also Ask" queries.
 * Renders in root layout for site-wide FAQ rich results.
 */
export function FAQPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Cadence in Henderson a good place to live?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cadence is one of Henderson\'s top-rated master-planned communities, featuring a 50-acre Central Park, 30+ miles of trails, Legacy Traditional School, and a 100-acre sports park. Median home prices around $475K make it one of the best values in the Las Vegas Valley.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the median home price in Cadence Henderson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cadence Henderson median home prices are approximately $475,000 for single-family homes, with townhomes starting in the mid-$300s. New construction from builders like Lennar, Richmond American, and Woodside Homes ranges from $379K to $550K+.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are Cadence Henderson HOA fees?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Cadence Henderson HOA fees vary by neighborhood and builder but typically range from $50-$150/month for the master association, with some sub-associations charging additional fees. Contact Dr. Jan Duffy at ${CONTACT_INFO.phone} for current fee schedules.`,
        },
      },
      {
        '@type': 'Question',
        name: 'What is the history of the Cadence Henderson site?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cadence was formerly the BMI industrial complex. The 2,200-acre site underwent extensive environmental remediation before development. The community has been thoroughly cleaned and certified, and is now one of the top-10 best-selling master-planned communities in the nation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What builders are in Cadence Henderson?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Active builders in Cadence Henderson include Lennar, Richmond American Homes, Woodside Homes, and others offering townhomes, single-story, and two-story floor plans from the mid-$300s to $550K+.',
        },
      },
      {
        '@type': 'Question',
        name: 'What zip code is Cadence Henderson NV?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cadence master-planned community in Henderson, Nevada is located in zip code 89011.',
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
