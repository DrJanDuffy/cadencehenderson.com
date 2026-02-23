import { CONTACT_INFO } from '@/components/cadence/contact-info'

/**
 * ItemList JSON-LD schema for builder listings — GEO optimization.
 * Provides AI engines with a structured, cite-worthy list of all builders
 * at Cadence Henderson including price ranges and home counts.
 * Targets queries: "builders in Cadence Henderson", "new home builders Henderson NV"
 */
export function ItemListBuildersSchema() {
  const builders = [
    { name: 'Beazer Homes', slug: 'beazer-homes', homes: 15, priceRange: '$350K–$550K' },
    { name: 'Century Communities', slug: 'century-communities', homes: 22, priceRange: '$320K–$480K' },
    { name: 'D.R. Horton', slug: 'dr-horton', homes: 35, priceRange: '$300K–$525K' },
    { name: 'Lennar', slug: 'lennar', homes: 28, priceRange: '$380K–$600K' },
    { name: 'Richmond American Homes', slug: 'richmond-american', homes: 18, priceRange: '$340K–$520K' },
    { name: 'StoryBook Homes', slug: 'storybook-homes', homes: 12, priceRange: '$330K–$490K' },
    { name: 'Taylor Morrison', slug: 'taylor-morrison', homes: 16, priceRange: '$420K–$650K' },
    { name: 'Woodside Homes', slug: 'woodside-homes', homes: 20, priceRange: '$360K–$540K' },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'New Home Builders in Cadence Henderson NV 89011',
    description: `${builders.length} active home builders at Cadence Henderson, Henderson NV 89011. Free buyer representation by Dr. Jan Duffy — builder pays the fee. Call ${CONTACT_INFO.phone}.`,
    numberOfItems: builders.length,
    itemListElement: builders.map((builder, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: builder.name,
      url: `https://www.cadencehenderson.com/new-homes/${builder.slug}`,
      item: {
        '@type': 'Organization',
        name: builder.name,
        url: `https://www.cadencehenderson.com/new-homes/${builder.slug}`,
        description: `${builder.name} offers ${builder.homes} new homes in Cadence Henderson NV 89011, priced from ${builder.priceRange}.`,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
