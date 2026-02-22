import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/components/cadence/contact-info'

export const metadata: Metadata = {
  title: `Contact ${CONTACT_INFO.siteName} | ${CONTACT_INFO.phone}`,
  description: `Schedule a Cadence Henderson home tour. Call ${CONTACT_INFO.phone} or visit ${CONTACT_INFO.welcomeCenter}. Open 7 days 10AM–6PM. Licensed REALTOR® on-site.`,
  alternates: { canonical: 'https://www.cadencehenderson.com/contact' },
  openGraph: {
    title: `Contact ${CONTACT_INFO.siteName} | ${CONTACT_INFO.phone}`,
    description: `Schedule a Cadence Henderson home tour. Call ${CONTACT_INFO.phone} or visit ${CONTACT_INFO.welcomeCenter}. Open 7 days 10AM–6PM.`,
    url: 'https://www.cadencehenderson.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
