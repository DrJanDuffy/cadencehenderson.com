import { MapPin, Plane } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function LocationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-6">
              <MapPin size={40} className="text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Cadence Henderson Location
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Cadence offers easy access to Harry Reid International Airport,
              the Las Vegas Strip, downtown Las Vegas, and is just minutes from
              Lake Mead Recreational Area.
            </p>
            <Button
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-lg px-8"
            >
              View Maps
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1564868705948-935dc992e0a4?w=800&q=80')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

