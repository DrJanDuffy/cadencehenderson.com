import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function AmenitiesSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="amenities-heading">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center justify-center mb-6">
              <img
                src="https://cadencenv.com/wp-content/uploads/2021/01/amenities-home-box-288x300.png"
                alt="Cadence Henderson Homes Amenities"
                width={288}
                height={300}
                loading="lazy"
                className="w-24 h-24 object-contain"
              />
            </div>
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
              <Link href="/lifestyle/amenities">Explore Amenities</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=800&q=80')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

