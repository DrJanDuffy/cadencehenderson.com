import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Cadence Henderson Real Estate | 702-500-1955',
  description:
    'Schedule a Cadence Henderson home tour. Call 702-500-1955 or visit 1170 E Sunset Rd, Henderson NV 89011. Open 7 days 10AM–6PM. Licensed REALTOR® on-site.',
  alternates: { canonical: 'https://www.cadencehenderson.com/contact' },
  openGraph: {
    title: 'Contact Cadence Henderson Real Estate | 702-500-1955',
    description:
      'Schedule a Cadence Henderson home tour. Call 702-500-1955 or visit 1170 E Sunset Rd, Henderson NV 89011. Open 7 days 10AM–6PM.',
    url: 'https://www.cadencehenderson.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
