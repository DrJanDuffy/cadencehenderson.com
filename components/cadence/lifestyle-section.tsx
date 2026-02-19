import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function LifestyleSection() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80&fm=webp"
              alt="Cadence Henderson lifestyle and community"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center justify-center mb-6">
              <img
                src="https://cadencenv.com/wp-content/uploads/2021/01/lifestyle-home-box-288x300.png"
                width={96}
                height={100}
                loading="lazy"
                alt="Cadence Henderson lifestyle: amenities and community"
                className="w-24 h-24 object-contain"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Cadence Henderson Lifestyle
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Find out what makes Cadence the perfect place to live. Our master
              planned community, right here in Henderson, includes the finest
              amenities and so much to do, all right here!
            </p>
            <Button
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-lg px-8"
              asChild
            >
              <Link href="/lifestyle">Discover Lifestyle</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

