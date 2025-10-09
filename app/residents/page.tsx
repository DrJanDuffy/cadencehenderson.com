import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { Button } from '@/components/ui/button'
import {
  Users,
  FileText,
  Calendar,
  MessageSquare,
  Shield,
  Wrench,
  Bell,
  CreditCard,
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
            <h1 className="text-5xl font-bold mb-6">Resident Portal</h1>
            <p className="text-xl mb-8">
              Welcome home! Access important community information, HOA
              documents, pay dues, and connect with your neighbors.
            </p>
            <Button
              size="lg"
              className="bg-white text-emerald-900 hover:bg-gray-100"
            >
              Login to Portal
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Resident Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="#"
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <CreditCard size={48} className="mx-auto mb-4 text-emerald-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Pay HOA Dues
              </h3>
              <p className="text-sm text-gray-600">
                Quick and secure online payment portal
              </p>
            </Link>

            <Link
              href="#"
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <FileText size={48} className="mx-auto mb-4 text-emerald-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                HOA Documents
              </h3>
              <p className="text-sm text-gray-600">
                CCRs, bylaws, and community guidelines
              </p>
            </Link>

            <Link
              href="#"
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Wrench size={48} className="mx-auto mb-4 text-emerald-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Submit Request
              </h3>
              <p className="text-sm text-gray-600">
                Maintenance and architectural requests
              </p>
            </Link>

            <Link
              href="#"
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Calendar size={48} className="mx-auto mb-4 text-emerald-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Reserve Amenities
              </h3>
              <p className="text-sm text-gray-600">
                Book clubhouse, pools, and facilities
              </p>
            </Link>

            <Link
              href="#"
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Bell size={48} className="mx-auto mb-4 text-emerald-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Community Alerts
              </h3>
              <p className="text-sm text-gray-600">
                Stay updated on important notices
              </p>
            </Link>

            <Link
              href="#"
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <MessageSquare
                size={48}
                className="mx-auto mb-4 text-emerald-900"
              />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Community Forum
              </h3>
              <p className="text-sm text-gray-600">
                Connect with your neighbors
              </p>
            </Link>

            <Link
              href="#"
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Shield size={48} className="mx-auto mb-4 text-emerald-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Security & Safety
              </h3>
              <p className="text-sm text-gray-600">
                Emergency contacts and procedures
              </p>
            </Link>

            <Link
              href="/lifestyle/events"
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Users size={48} className="mx-auto mb-4 text-emerald-900" />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Events Calendar
              </h3>
              <p className="text-sm text-gray-600">
                Upcoming community activities
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* HOA Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              HOA Information
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Management Company
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Cadence Master Association
                  </p>
                  <p className="text-gray-600">
                    Phone: (702) 555-3000
                    <br />
                    Email: hoa@cadencenv.com
                    <br />
                    Hours: Mon-Fri, 9AM-5PM
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Emergency Contacts
                  </h3>
                  <p className="text-gray-700">
                    <strong>Emergency:</strong> 911
                    <br />
                    <strong>Non-Emergency Police:</strong> (702) 267-4911
                    <br />
                    <strong>After Hours HOA:</strong> (702) 555-3001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Important Documents
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
                <div className="flex items-center">
                  <FileText className="mr-4 text-emerald-900" size={32} />
                  <div>
                    <h3 className="font-bold text-gray-900">
                      CC&Rs (Covenants, Conditions & Restrictions)
                    </h3>
                    <p className="text-sm text-gray-600">
                      Community rules and regulations
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                >
                  Download
                </Button>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
                <div className="flex items-center">
                  <FileText className="mr-4 text-emerald-900" size={32} />
                  <div>
                    <h3 className="font-bold text-gray-900">
                      HOA Bylaws
                    </h3>
                    <p className="text-sm text-gray-600">
                      Association governance documents
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                >
                  Download
                </Button>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
                <div className="flex items-center">
                  <FileText className="mr-4 text-emerald-900" size={32} />
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Architectural Guidelines
                    </h3>
                    <p className="text-sm text-gray-600">
                      Home improvement approval process
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                >
                  Download
                </Button>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
                <div className="flex items-center">
                  <FileText className="mr-4 text-emerald-900" size={32} />
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Community Map
                    </h3>
                    <p className="text-sm text-gray-600">
                      Neighborhood layout and amenities
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
                >
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

