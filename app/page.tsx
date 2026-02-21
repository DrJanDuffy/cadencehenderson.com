import type { Metadata } from 'next'
import { Navigation } from '@/components/cadence/navigation'
import { Hero } from '@/components/cadence/hero'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { HomeFinder } from '@/components/cadence/home-finder'
import { AmenitiesSection } from '@/components/cadence/amenities-section'
import { LifestyleSection } from '@/components/cadence/lifestyle-section'
import { ServicesSection } from '@/components/cadence/services-section'
import { RealtorsSection } from '@/components/cadence/realtors-section'
import { NewsSection } from '@/components/cadence/news-section'
import { BuildersShowcase } from '@/components/cadence/builders-showcase'
import { ScheduleConsultationSection } from '@/components/cadence/schedule-consultation-section'
import { Footer } from '@/components/cadence/footer'
import { WebPageSchema } from '@/components/schema/web-page'

const BASE = 'https://www.cadencehenderson.com'

export const metadata: Metadata = {
  title: 'New Homes in Cadence Henderson 89011 | Henderson NV Real Estate',
  description:
    'Cadence Henderson homes for sale from $300K. New construction, rentals & community in Henderson NV 89011. Master-planned community. Licensed REALTOR® on-site.',
  alternates: { canonical: BASE },
  openGraph: {
    title: 'New Homes in Cadence Henderson 89011 | Henderson NV Real Estate',
    description:
      'Cadence Henderson homes for sale from $300K. New construction, rentals & community in Henderson NV 89011.',
    url: BASE,
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function HomePage() {
  return (
    <div id="main-content" className="min-h-screen bg-white" tabIndex={-1}>
      <WebPageSchema />
      <Navigation />
      <Hero />
      <RealScoutOfficeListings />

      <main>
        <ServicesSection />
        <HomeFinder />
        <AmenitiesSection />
        <LifestyleSection />
        <RealtorsSection />
        <BuildersShowcase />
        <ScheduleConsultationSection />
      </main>

      <Footer />
    </div>
  )
}
