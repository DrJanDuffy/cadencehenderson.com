import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Residents | Cadence Henderson Community 89011',
  description:
    'Cadence Henderson resident resources. Community info, HOA, amenities for Cadence master-planned community Henderson NV 89011.',
  alternates: { canonical: 'https://www.cadencehenderson.com/residents' },
}

export default function ResidentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
