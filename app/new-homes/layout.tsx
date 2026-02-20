import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Homes Cadence Henderson | Builders 89011',
  description:
    'New construction Cadence Henderson NV. Lennar, Richmond American, Woodside Homes and more. Cadence Henderson new homes from $379K. 89011.',
  alternates: { canonical: 'https://www.cadencehenderson.com/new-homes' },
}

export default function NewHomesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
