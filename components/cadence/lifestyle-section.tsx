import { Calendar, Music } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function LifestyleSection() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80')",
              }}
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500 rounded-full mb-6">
              <Calendar size={40} className="text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Cadence Las Vegas Lifestyle
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Find out what makes Cadence the perfect place to live. Our master
              planned community, right here in Henderson, includes the finest
              amenities and so much to do, all right here!
            </p>
            <Button
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-lg px-8"
            >
              Discover Lifestyle
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

