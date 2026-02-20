import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Cadence Henderson 89011',
  description:
    'Contact Dr. Jan Duffy for Cadence Henderson homes for sale, new construction, and rentals. Henderson NV 89011. Berkshire Hathaway HomeServices.',
  alternates: { canonical: 'https://www.cadencehenderson.com/contact' },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
