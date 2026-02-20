import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Realtors | Cadence Henderson NV Real Estate',
  description:
    'Cadence Henderson NV real estate team. Dr. Jan Duffy, REALTOR®. Expert agents for homes for sale and new construction in Henderson 89011.',
  alternates: { canonical: 'https://www.cadencehenderson.com/realtors' },
}

export default function RealtorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
