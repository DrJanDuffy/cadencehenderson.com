import type { Metadata } from 'next'
import { Navigation } from '@/components/cadence/navigation'
import { Hero } from '@/components/cadence/hero'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { HomeFinder } from '@/components/cadence/home-finder'
import { AmenitiesSection } from '@/components/cadence/amenities-section'
import { LifestyleSection } from '@/components/cadence/lifestyle-section'
import { LocationSection } from '@/components/cadence/location-section'
import { RealtorsSection } from '@/components/cadence/realtors-section'
import { NewsSection } from '@/components/cadence/news-section'
import { BuildersShowcase } from '@/components/cadence/builders-showcase'
import { ScheduleConsultationSection } from '@/components/cadence/schedule-consultation-section'
import { CTABanner } from '@/components/cadence/cta-banner'
import { Newsletter } from '@/components/cadence/newsletter'
import { Footer } from '@/components/cadence/footer'

const BASE = 'https://www.cadencehenderson.com'

export const metadata: Metadata = {
  alternates: { canonical: BASE },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <RealScoutOfficeListings />

      <main>
        <HomeFinder />
        <AmenitiesSection />
        <LifestyleSection />
        <LocationSection />
        <RealtorsSection />
        <NewsSection />
        <BuildersShowcase />
        <Newsletter />
        <ScheduleConsultationSection />
        <CTABanner />
      </main>

      <Footer />
    </div>
  )
}
