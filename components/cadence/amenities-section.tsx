import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getAmenityImage } from '@/lib/cloudflare-images'

export function AmenitiesSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="amenities-heading">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="amenities-heading" className="text-4xl font-bold text-gray-900 mb-6">
              Cadence Henderson Homes Amenities
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              From Central Park's nearly 50 acres to pools, splash pads, trails
              and even standout schools, Cadence offers a number of wonderful
              amenities.
            </p>
            <Button
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-lg px-8"
              asChild
            >
              <Link href="/lifestyle/amenities">Cadence community amenities</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl bg-gray-200">
            <img
              src={getAmenityImage('centralPark', 'card')}
              alt="Cadence Henderson amenities and parks - Central Park 89011"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

