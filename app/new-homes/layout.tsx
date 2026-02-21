import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Homes for Sale – Cadence Henderson NV 89011',
  description:
    '8 builders, 150+ homes from $300K–$650K in Cadence Henderson 89011. Beazer, Lennar, Richmond American, Woodside & more. Browse floor plans, prices & availability. Tours 7 days.',
  alternates: { canonical: 'https://www.cadencehenderson.com/new-homes' },
  openGraph: {
    title: 'New Homes for Sale – Cadence Henderson NV 89011',
    description: '8 builders, 150+ homes from $300K–$650K in Cadence Henderson 89011. Browse floor plans and schedule a tour.',
    url: 'https://www.cadencehenderson.com/new-homes',
  },
}

export default function NewHomesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
