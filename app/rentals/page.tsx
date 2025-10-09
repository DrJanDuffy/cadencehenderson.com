import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { Button } from '@/components/ui/button'
import { Building2, MapPin, DollarSign, Calendar } from 'lucide-react'
import Link from 'next/link'

const rentalCommunities = [
  {
    name: 'American Homes 4 Rent (AMH)',
    slug: 'american-homes',
    description:
      'Single-family rental homes with modern amenities and professional property management.',
    properties: 45,
    priceRange: '$1,800 - $2,800/mo',
    features: [
      'Pet-friendly options',
      '24/7 maintenance',
      'Online portal',
      'Garage parking',
    ],
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
  },
  {
    name: 'Element 12',
    slug: 'element-12',
    description:
      'Luxury apartment living with resort-style amenities and modern design.',
    properties: 280,
    priceRange: '$1,500 - $2,400/mo',
    features: [
      'Pool & spa',
      'Fitness center',
      'Pet park',
      'Business center',
    ],
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
  },
  {
    name: 'Adler',
    slug: 'adler',
    description:
      'Contemporary apartments with high-end finishes and community spaces.',
    properties: 350,
    priceRange: '$1,600 - $2,600/mo',
    features: [
      'Rooftop lounge',
      'Co-working spaces',
      'Dog spa',
      'Package lockers',
    ],
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80',
  },
]

export default function RentalsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 to-purple-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Rentals in Cadence</h1>
            <p className="text-xl mb-8">
              Experience the Cadence lifestyle with flexible rental options.
              From single-family homes to luxury apartments, find your perfect
              rental in our vibrant community.
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-gray-100"
            >
              <Building2 className="mr-2" size={20} />
              View Available Rentals
            </Button>
          </div>
        </div>
      </section>

      {/* Why Rent in Cadence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Rent in Cadence?
            </h2>
            <p className="text-xl text-gray-700">
              Enjoy all the benefits of living in a top-rated master-planned
              community without the commitment of home ownership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <MapPin size={32} className="text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Prime Location
              </h3>
              <p className="text-gray-700">
                Minutes from the Strip, airport, and Lake Mead with easy
                freeway access.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Building2 size={32} className="text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Premium Amenities
              </h3>
              <p className="text-gray-700">
                Access to parks, pools, trails, and community events included
                with your rental.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <DollarSign size={32} className="text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Flexible Options
              </h3>
              <p className="text-gray-700">
                Various lease terms and property types to fit your lifestyle and
                budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Communities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Rental Communities
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our trusted rental partners offering quality homes and
              apartments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {rentalCommunities.map((community) => (
              <div
                key={community.slug}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${community.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white">
                      {community.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{community.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Building2 size={16} className="mr-1" />
                      {community.properties} Properties
                    </span>
                    <span className="font-semibold text-purple-900">
                      {community.priceRange}
                    </span>
                  </div>
                  <div className="border-t pt-4 mb-4">
                    <ul className="space-y-2">
                      {community.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <span className="w-2 h-2 bg-purple-900 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={`/rentals/${community.slug}`}>
                    <Button className="w-full bg-purple-900 hover:bg-purple-800">
                      View Properties
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Make Cadence Your Home?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Contact our rental partners directly or schedule a community tour
              to see all that Cadence has to offer.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-purple-900 hover:bg-purple-800">
                Schedule a Tour
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white"
              >
                Contact Leasing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

