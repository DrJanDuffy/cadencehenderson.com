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
            <h1 className="text-5xl font-bold mb-6">Find Us in Henderson</h1>
            <p className="text-2xl font-bold mb-4">
              Cadence Henderson | Homes By Dr Jan Duffy
            </p>
            <p className="text-xl mb-8">
              Visit our office to learn about Cadence Henderson homes, schedule
              tours, and get expert guidance from Dr. Jan Duffy, REALTOR® with
              Berkshire Hathaway HomeServices.
            </p>
          </div>
        </div>
      </section>

      {/* Embedded Google Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Cadence Henderson | Homes By Dr Jan Duffy
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Office Location
          </p>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.5845!2d-115.0515617!3d36.0562609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d7e721d0e86b%3A0x95c8e8ce96aec347!2s1170%20E%20Sunset%20Rd%2C%20Henderson%2C%20NV%2089011!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Jan Duffy Office Location"
            />
          </div>
          <div className="text-center mt-6">
            <a
              href="https://www.google.com/maps/dir//1170+E+Sunset+Rd,+Henderson,+NV+89011/@36.0562609,-115.0515617,12z/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-teal-900 hover:bg-teal-800">
                <MapPin className="mr-2" size={20} />
                Get Directions in Google Maps
              </Button>
            </a>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Cadence Henderson | Homes By Dr Jan Duffy
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Dr. Jan Duffy, REALTOR® | License S.0197614
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Office Address
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
                  <a
                    href="https://www.google.com/maps/dir//1170+E+Sunset+Rd,+Henderson,+NV+89011/@36.0562609,-115.0515617,12z/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-teal-900 hover:bg-teal-800">
                      Get Directions
                    </Button>
                  </a>
                  <a href="tel:702-500-1955">
                    <Button
                      variant="outline"
                      className="w-full border-teal-900 text-teal-900 hover:bg-teal-900 hover:text-white"
                    >
                      Call for Directions
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.5845!2d-115.0515617!3d36.0562609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d7e721d0e86b%3A0x95c8e8ce96aec347!2s1170%20E%20Sunset%20Rd%2C%20Henderson%2C%20NV%2089011!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dr. Jan Duffy Office Map"
                    className="rounded-lg"
                  />
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

