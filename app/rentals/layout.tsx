import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cadence Henderson Rentals | 89011',
  description:
    'Cadence Henderson rental homes and communities. Find rentals in Henderson NV 89011. Dr. Jan Duffy, REALTOR®. American Homes, Element 12, Adler.',
  robots: { index: true, follow: true },
}

export default function RentalsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
