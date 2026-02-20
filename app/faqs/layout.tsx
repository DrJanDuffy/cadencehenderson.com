import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQs | Cadence Henderson 89011',
  description:
    'FAQs about Cadence Henderson: HOA fees, schools, amenities, builders, home prices. Living in Cadence master-planned community Henderson NV.',
  alternates: { canonical: 'https://www.cadencehenderson.com/faqs' },
}

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
