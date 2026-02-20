import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News | Cadence Henderson NV 89011',
  description:
    'Cadence Henderson news, community updates, and market trends. Henderson NV 89011. Dr. Jan Duffy, REALTOR®.',
  alternates: { canonical: 'https://www.cadencehenderson.com/news' },
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
