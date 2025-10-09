import { Navigation } from '@/components/cadence/navigation'
import { Hero } from '@/components/cadence/hero'
import { HomeFinder } from '@/components/cadence/home-finder'
import { AmenitiesSection } from '@/components/cadence/amenities-section'
import { LifestyleSection } from '@/components/cadence/lifestyle-section'
import { LocationSection } from '@/components/cadence/location-section'
import { RealtorsSection } from '@/components/cadence/realtors-section'
import { NewsSection } from '@/components/cadence/news-section'
import { BuildersShowcase } from '@/components/cadence/builders-showcase'
import { Newsletter } from '@/components/cadence/newsletter'
import { Footer } from '@/components/cadence/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />

      <main>
        <HomeFinder />
        <AmenitiesSection />
        <LifestyleSection />
        <LocationSection />
        <RealtorsSection />
        <NewsSection />
        <BuildersShowcase />
        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}
