import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { Button } from '@/components/ui/button'
import {
  Users,
  FileText,
  Calendar,
  Shield,
  Phone,
  Mail,
  MapPin,
  Home,
  DollarSign,
  TrendingUp,
  HelpCircle,
} from 'lucide-react'
import Link from 'next/link'

export default function ResidentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-900 to-emerald-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Users size={64} className="mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Living in Cadence</h1>
            <p className="text-xl mb-8">
              Welcome home! Your guide to community resources, HOA information,
              and how I can help you as a current Cadence resident.
            </p>
            <a href="tel:702-500-1955">
              <Button
                size="lg"
                className="bg-white text-emerald-900 hover:bg-gray-100"
              >
                Contact Dr. Jan
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services for Current Residents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            How Dr. Jan Can Help Current Residents
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Already living in Cadence? I'm here to help with your real estate needs
            and questions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <DollarSign size={48} className="mx-auto mb-4 text-emerald-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Home Value Update
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Curious what your home is worth? Get a free market analysis
              </p>
              <a href="mailto:DrJanSells@CadenceHenderson.com?subject=Home Value Request">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                >
                  Get Valuation
                </Button>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <Users size={48} className="mx-auto mb-4 text-emerald-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Referral Rewards
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Know someone looking in Cadence? Earn rewards for referrals
              </p>
              <a href="mailto:DrJanSells@CadenceHenderson.com?subject=Referral">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                >
                  Refer a Friend
                </Button>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <Home size={48} className="mx-auto mb-4 text-emerald-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Thinking of Selling?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Ready to upgrade or relocate? Let's discuss your options
              </p>
              <a href="mailto:DrJanSells@CadenceHenderson.com?subject=Selling My Home">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                >
                  Start Conversation
                </Button>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <TrendingUp size={48} className="mx-auto mb-4 text-emerald-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Investment Properties
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Looking to invest in more Cadence properties? I can help
              </p>
              <a href="mailto:DrJanSells@CadenceHenderson.com?subject=Investment Inquiry">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                >
                  Explore Options
                </Button>
              </a>
            </div>

            <Link
              href="/lifestyle/events"
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Calendar size={48} className="mx-auto mb-4 text-emerald-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Community Events
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                See what's happening in your neighborhood
              </p>
              <Button
                size="sm"
                variant="outline"
                className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
              >
                View Calendar
              </Button>
            </Link>

            <Link
              href="/faqs"
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <HelpCircle size={48} className="mx-auto mb-4 text-emerald-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                FAQs
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Common questions about living in Cadence
              </p>
              <Button
                size="sm"
                variant="outline"
                className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
              >
                Get Answers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* HOA & Community Contacts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Important Community Contacts
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  HOA Management
                </h3>
                <p className="text-gray-700 mb-4">
                  For HOA dues, documents, maintenance requests, and amenity
                  reservations, contact the Cadence Master Association:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    <strong>Phone:</strong> (702) 555-3000
                  </p>
                  <p className="text-gray-700">
                    <strong>Hours:</strong> Mon-Fri, 9AM-5PM
                  </p>
                  <p className="text-gray-700">
                    <strong>After Hours:</strong> (702) 555-3001
                  </p>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    💡 <strong>Note:</strong> For HOA portal access and official
                    documents, contact the management company directly.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-lg shadow-lg p-8 border-2 border-emerald-900">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Your Real Estate Agent
                </h3>
                <p className="text-gray-700 mb-4">
                  For real estate questions, home valuations, or if you're
                  thinking of selling, contact Dr. Jan Duffy:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone size={18} className="mr-2 text-emerald-900" />
                    <a
                      href="tel:702-500-1955"
                      className="text-emerald-900 font-bold hover:underline"
                    >
                      702-500-1955
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="mr-2 text-emerald-900" />
                    <a
                      href="mailto:DrJanSells@CadenceHenderson.com"
                      className="text-emerald-900 font-bold hover:underline text-sm"
                    >
                      DrJanSells@CadenceHenderson.com
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MapPin size={18} className="mr-2 text-emerald-900 mt-1" />
                    <p className="text-gray-700 text-sm">
                      1170 E. Sunset Rd, Ste. 101
                      <br />
                      Henderson, NV 89011
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Emergency Contacts
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Shield size={40} className="mx-auto mb-3 text-red-600" />
                  <h3 className="font-bold text-gray-900 mb-2">Emergency</h3>
                  <a
                    href="tel:911"
                    className="text-2xl font-bold text-red-600 hover:underline"
                  >
                    911
                  </a>
                </div>
                <div>
                  <Shield size={40} className="mx-auto mb-3 text-blue-600" />
                  <h3 className="font-bold text-gray-900 mb-2">
                    Non-Emergency Police
                  </h3>
                  <a
                    href="tel:702-267-4911"
                    className="text-xl font-bold text-blue-600 hover:underline"
                  >
                    (702) 267-4911
                  </a>
                </div>
                <div>
                  <Phone size={40} className="mx-auto mb-3 text-orange-600" />
                  <h3 className="font-bold text-gray-900 mb-2">
                    After Hours HOA
                  </h3>
                  <a
                    href="tel:702-555-3001"
                    className="text-xl font-bold text-orange-600 hover:underline"
                  >
                    (702) 555-3001
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Community Resources
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Helpful links and information for Cadence residents
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1">
                    <FileText className="mr-4 text-emerald-900" size={32} />
                    <div>
                      <h3 className="font-bold text-gray-900">
                        HOA Documents
                      </h3>
                      <p className="text-sm text-gray-600">
                        CC&Rs, bylaws, and guidelines - Contact HOA management
                      </p>
                    </div>
                  </div>
                  <a href="tel:702-555-3000">
                    <Button
                      variant="outline"
                      className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                    >
                      Contact HOA
                    </Button>
                  </a>
                </div>
              </div>

              <Link href="/maps">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <MapPin className="mr-4 text-emerald-900" size={32} />
                      <div>
                        <h3 className="font-bold text-gray-900">
                          Community Map
                        </h3>
                        <p className="text-sm text-gray-600">
                          Explore amenities, trails, and neighborhood layout
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                    >
                      View Map
                    </Button>
                  </div>
                </div>
              </Link>

              <Link href="/lifestyle/events">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <Calendar className="mr-4 text-emerald-900" size={32} />
                      <div>
                        <h3 className="font-bold text-gray-900">
                          Events Calendar
                        </h3>
                        <p className="text-sm text-gray-600">
                          View upcoming community events and activities
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                    >
                      See Events
                    </Button>
                  </div>
                </div>
              </Link>

              <Link href="/lifestyle/amenities">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <Users className="mr-4 text-emerald-900" size={32} />
                      <div>
                        <h3 className="font-bold text-gray-900">
                          Amenities Guide
                        </h3>
                        <p className="text-sm text-gray-600">
                          Hours, rules, and details for all community amenities
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

