import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lifestyle | Cadence Henderson Community 89011',
  description:
    'Living in Cadence Henderson NV: amenities, Central Park, schools, events, parks & trails. Master-planned community 89011.',
  alternates: { canonical: 'https://www.cadencehenderson.com/lifestyle' },
}

export default function LifestyleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
