import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { Button } from '@/components/ui/button'
import {
  Building2,
  TrendingUp,
  Download,
  FileText,
  Users,
  Award,
  MapPin,
  DollarSign,
} from 'lucide-react'

export default function RealtorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 to-purple-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Realtor Resources</h1>
            <p className="text-xl mb-8">
              Partner with Cadence to offer your clients an exceptional living
              experience in one of the nation's top 10 best-selling
              master-planned communities.
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-gray-100"
            >
              <Download className="mr-2" size={20} />
              Download Sales Kit
            </Button>
          </div>
        </div>
      </section>

      {/* Why Cadence */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Recommend Cadence?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Give your clients the best with award-winning builders, exceptional
              amenities, and a thriving community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Award size={32} className="text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Top 10 Nationally
              </h3>
              <p className="text-gray-700">
                Consistently ranked as one of America's top-selling master-planned
                communities
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Building2 size={32} className="text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                8+ Builders
              </h3>
              <p className="text-gray-700">
                Multiple award-winning builders offering diverse home styles and
                price points
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <MapPin size={32} className="text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Prime Location
              </h3>
              <p className="text-gray-700">
                Easy access to Las Vegas Strip, airport, and major employment
                centers
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <TrendingUp size={32} className="text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Strong Resale
              </h3>
              <p className="text-gray-700">
                Excellent property values and high demand in the Henderson market
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory & Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Current Inventory & Pricing
            </h2>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-900 mb-2">
                    150+
                  </div>
                  <div className="text-gray-700">Available Homes</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-900 mb-2">
                    $300K-$650K
                  </div>
                  <div className="text-gray-700">Price Range</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-900 mb-2">
                    8
                  </div>
                  <div className="text-gray-700">Builders</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div>
                    <div className="font-bold text-gray-900">
                      Single-Family Homes
                    </div>
                    <div className="text-sm text-gray-600">
                      1,500 - 3,500 sq ft
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-purple-900">
                      $350K - $650K
                    </div>
                    <div className="text-sm text-gray-600">85+ available</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div>
                    <div className="font-bold text-gray-900">Townhomes</div>
                    <div className="text-sm text-gray-600">
                      1,200 - 2,000 sq ft
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-purple-900">
                      $300K - $420K
                    </div>
                    <div className="text-sm text-gray-600">45+ available</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div>
                    <div className="font-bold text-gray-900">Estate Homes</div>
                    <div className="text-sm text-gray-600">
                      3,500+ sq ft
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-purple-900">
                      $550K - $650K
                    </div>
                    <div className="text-sm text-gray-600">20+ available</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-purple-900 hover:bg-purple-800">
                <Download className="mr-2" size={20} />
                Download Full Price List
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Realtor Resources
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-purple-900 hover:shadow-lg transition-all">
                <FileText size={32} className="text-purple-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Sales Materials
                </h3>
                <p className="text-gray-700 mb-4">
                  Brochures, floor plans, community maps, and marketing
                  materials for your clients.
                </p>
                <Button
                  variant="outline"
                  className="border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white"
                >
                  Download
                </Button>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-purple-900 hover:shadow-lg transition-all">
                <MapPin size={32} className="text-purple-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Interactive Map
                </h3>
                <p className="text-gray-700 mb-4">
                  Explore available homes, amenities, and community features on
                  our interactive map.
                </p>
                <Button
                  variant="outline"
                  className="border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white"
                >
                  View Map
                </Button>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-purple-900 hover:shadow-lg transition-all">
                <DollarSign size={32} className="text-purple-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Pricing & Incentives
                </h3>
                <p className="text-gray-700 mb-4">
                  Current pricing, builder incentives, and special offers for
                  your clients.
                </p>
                <Button
                  variant="outline"
                  className="border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white"
                >
                  View Details
                </Button>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-purple-900 hover:shadow-lg transition-all">
                <Users size={32} className="text-purple-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Builder Contacts
                </h3>
                <p className="text-gray-700 mb-4">
                  Direct contact information for all builder sales teams and new
                  home specialists.
                </p>
                <Button
                  variant="outline"
                  className="border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white"
                >
                  Get Contacts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Register Your Clients Today
            </h2>
            <p className="text-xl mb-8">
              Ensure you receive full commission by registering your clients
              before their first visit to our sales centers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                Register Clients
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-900"
              >
                Contact Broker Liaison
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

