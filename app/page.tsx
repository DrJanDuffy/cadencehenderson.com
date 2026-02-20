import type { Metadata } from 'next'
import { Navigation } from '@/components/cadence/navigation'
import { Hero } from '@/components/cadence/hero'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { HomeFinder } from '@/components/cadence/home-finder'
import { AmenitiesSection } from '@/components/cadence/amenities-section'
import { LifestyleSection } from '@/components/cadence/lifestyle-section'
import { ServicesSection } from '@/components/cadence/services-section'
import { LocationSection } from '@/components/cadence/location-section'
import { RealtorsSection } from '@/components/cadence/realtors-section'
import { NewsSection } from '@/components/cadence/news-section'
import { BuildersShowcase } from '@/components/cadence/builders-showcase'
import { ScheduleConsultationSection } from '@/components/cadence/schedule-consultation-section'
import { Footer } from '@/components/cadence/footer'
import { WebPageSchema } from '@/components/schema/web-page'

const BASE = 'https://www.cadencehenderson.com'

export const metadata: Metadata = {
  title: 'Cadence Henderson | Homes for Sale & New Homes 89011',
  description:
    'Cadence Henderson homes for sale, new construction, townhomes in Henderson NV 89011. Dr. Jan Duffy, REALTOR®. Master-planned community.',
  alternates: { canonical: BASE },
  openGraph: {
    title: 'Cadence Henderson | Homes for Sale & New Homes – Dr. Jan Duffy',
    description:
      'Find new and resale homes in Cadence, Henderson NV. Master-planned community. Dr. Jan Duffy, REALTOR®.',
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
        <LocationSection />
        <RealtorsSection />
        <NewsSection />
        <BuildersShowcase />
        <ScheduleConsultationSection />
      </main>

      <Footer />
    </div>
  )
}
