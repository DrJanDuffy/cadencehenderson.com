import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { Button } from '@/components/ui/button'
import {
  MapPin,
  Home,
  Building2,
  Trees,
  GraduationCap,
  ShoppingBag,
  Plane,
} from 'lucide-react'

export default function MapsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-900 to-teal-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <MapPin size={64} className="mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Interactive Maps</h1>
            <p className="text-xl mb-8">
              Explore the Cadence community with our interactive maps. Discover
              available homes, amenities, schools, shopping, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Map Container */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Map Placeholder */}
            <div className="relative h-[600px] bg-gray-200">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-blue-900/20" />

              {/* Map Controls */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs">
                  <h3 className="font-bold text-gray-900 mb-3">
                    Map Filters
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="mr-2"
                      />
                      <Home size={16} className="mr-1" />
                      Available Homes
                    </label>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="mr-2"
                      />
                      <Building2 size={16} className="mr-1" />
                      Builder Sales Centers
                    </label>
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="mr-2"
                      />
                      <Trees size={16} className="mr-1" />
                      Parks & Amenities
                    </label>
                    <label className="flex items-center text-sm">
                      <input type="checkbox" className="mr-2" />
                      <GraduationCap size={16} className="mr-1" />
                      Schools
                    </label>
                    <label className="flex items-center text-sm">
                      <input type="checkbox" className="mr-2" />
                      <ShoppingBag size={16} className="mr-1" />
                      Shopping & Dining
                    </label>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-3 space-y-2">
                  <Button size="sm" variant="outline" className="w-full">
                    Zoom In +
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    Zoom Out -
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    Reset View
                  </Button>
                </div>
              </div>

              {/* Map Legend */}
              <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4">
                <h4 className="font-bold text-sm text-gray-900 mb-2">
                  Legend
                </h4>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-2" />
                    <span>Available Homes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-600 rounded-full mr-2" />
                    <span>Parks</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-2" />
                    <span>Schools</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-600 rounded-full mr-2" />
                    <span>Shopping</span>
                  </div>
                </div>
              </div>

              {/* Interactive Message */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md text-center pointer-events-auto">
                  <MapPin size={48} className="mx-auto mb-4 text-teal-900" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Interactive Map Coming Soon
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Our interactive map feature is currently being developed.
                    In the meantime, contact Dr. Jan Duffy for a detailed
                    community map and lot availability.
                  </p>
                  <a href="tel:702-500-1955">
                    <Button className="bg-teal-900 hover:bg-teal-800">
                      Call: 702-500-1955
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Convenient Locations Nearby
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <Plane size={48} className="mx-auto mb-4 text-teal-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Las Vegas Airport
              </h3>
              <p className="text-gray-600 mb-2">15 minutes</p>
              <p className="text-sm text-gray-600">
                Easy access to Harry Reid International
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🎰</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Las Vegas Strip
              </h3>
              <p className="text-gray-600 mb-2">20 minutes</p>
              <p className="text-sm text-gray-600">
                World-class entertainment nearby
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🏞️</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Lake Mead
              </h3>
              <p className="text-gray-600 mb-2">15 minutes</p>
              <p className="text-sm text-gray-600">
                Recreation and natural beauty
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <ShoppingBag size={48} className="mx-auto mb-4 text-teal-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Shopping Centers
              </h3>
              <p className="text-gray-600 mb-2">5-10 minutes</p>
              <p className="text-sm text-gray-600">
                Galleria Mall and local retail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Address & Directions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Visit Cadence
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Office Location
                    </h4>
                    <p className="text-gray-700">
                      1170 E. Sunset Rd, Ste. 101
                      <br />
                      Henderson, NV 89011
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Hours</h4>
                    <p className="text-gray-700">
                      Monday - Sunday: 10:00 AM - 6:00 PM
                      <br />
                      Closed major holidays
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Contact</h4>
                    <p className="text-gray-700">
                      Phone: 702-500-1955
                      <br />
                      Email: DrJanSells@CadenceHenderson.com
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <Button className="w-full bg-teal-900 hover:bg-teal-800">
                    Get Directions
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-teal-900 text-teal-900 hover:bg-teal-900 hover:text-white"
                  >
                    Download Map PDF
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-full min-h-[400px] relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80')",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <Button
                      size="lg"
                      className="bg-white text-gray-900 hover:bg-gray-100"
                    >
                      <MapPin className="mr-2" size={20} />
                      View in Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

