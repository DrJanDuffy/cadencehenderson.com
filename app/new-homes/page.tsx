import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { RealScoutAdvancedSearch } from '@/components/idx/realscout-advanced-search'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { RealScoutWidget } from '@/components/idx/realscout-widget'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { Button } from '@/components/ui/button'
import { Home, MapPin, Bed, Bath, Ruler } from 'lucide-react'
import Link from 'next/link'

const builders = [
  {
    name: 'Beazer Homes',
    slug: 'beazer-homes',
    description:
      'Quality craftsmanship and energy-efficient homes with flexible floor plans.',
    homes: 15,
    priceRange: '$350,000 - $550,000',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&fm=webp',
  },
  {
    name: 'Century Communities',
    slug: 'century-communities',
    description:
      'Innovative designs with modern amenities and smart home technology.',
    homes: 22,
    priceRange: '$320,000 - $480,000',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&fm=webp',
  },
  {
    name: 'D.R. Horton',
    slug: 'dr-horton',
    description:
      "America's Builder - offering exceptional value and quality homes.",
    homes: 35,
    priceRange: '$300,000 - $525,000',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&fm=webp',
  },
  {
    name: 'Lennar',
    slug: 'lennar',
    description:
      'Everything\'s Included® homes with the latest technology and features.',
    homes: 28,
    priceRange: '$380,000 - $600,000',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80&fm=webp',
  },
  {
    name: 'Richmond American Homes',
    slug: 'richmond-american',
    description:
      'Personalized homes with flexible floor plans and premium upgrades.',
    homes: 18,
    priceRange: '$340,000 - $520,000',
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80&fm=webp',
  },
  {
    name: 'StoryBook Homes',
    slug: 'storybook-homes',
    description:
      'Locally built homes with attention to detail and community focus.',
    homes: 12,
    priceRange: '$330,000 - $490,000',
    image:
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80&fm=webp',
  },
  {
    name: 'Taylor Morrison',
    slug: 'taylor-morrison',
    description:
      'Luxury living with resort-style amenities and premium finishes.',
    homes: 16,
    priceRange: '$420,000 - $650,000',
    image:
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=600&q=80&fm=webp',
  },
  {
    name: 'Woodside Homes',
    slug: 'woodside-homes',
    description:
      'Award-winning designs with energy efficiency and modern style.',
    homes: 20,
    priceRange: '$360,000 - $540,000',
    image:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80&fm=webp',
  },
]

export default function NewHomesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">New Homes in Cadence</h1>
            <p className="text-xl mb-8">
              Discover your dream home from our collection of new builds by
              award-winning builders. From cozy townhomes to spacious estates,
              find the perfect fit for your lifestyle.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={CONTACT_INFO.realScoutSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-gray-100"
                >
                  <Home className="mr-2" size={20} />
                  Start Your Search
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                <MapPin className="mr-2" size={20} />
                View Community Map
              </Button>
            </div>
          </div>
        </div>
      </section>

      <RealScoutOfficeListings />

      {/* MLS Search Widget */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Search Henderson Homes for Sale
            </h2>
            <div className="flex justify-center mb-8">
              <RealScoutAdvancedSearch />
            </div>
            <RealScoutWidget className="min-h-[400px] rounded-lg overflow-hidden border border-gray-200 shadow-sm" />
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="text-gray-700 font-medium">Filter by:</div>
            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900">
              <option>Price Range</option>
              <option>$300K - $400K</option>
              <option>$400K - $500K</option>
              <option>$500K+</option>
            </select>
            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900">
              <option>Bedrooms</option>
              <option>2-3 Beds</option>
              <option>3-4 Beds</option>
              <option>4+ Beds</option>
            </select>
            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900">
              <option>Home Type</option>
              <option>Single Family</option>
              <option>Townhome</option>
              <option>Estate</option>
            </select>
          </div>
        </div>
      </section>

      {/* Builders Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Builders
            </h2>
            <p className="text-xl text-gray-600">
              Choose from {builders.length} premier home builders offering over
              150 homes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {builders.map((builder) => (
              <Link
                key={builder.slug}
                href={`/new-homes/${builder.slug}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url('${builder.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white">
                        {builder.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{builder.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Home size={16} className="mr-1" />
                        {builder.homes} Homes
                      </span>
                      <span className="font-semibold text-blue-900">
                        {builder.priceRange}
                      </span>
                    </div>
                    <Button className="w-full bg-blue-900 hover:bg-blue-800">
                      View Homes
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Contact Dr. Jan Duffy to schedule a personalized tour of Cadence.
              I'll guide you through all builders and help you find the perfect
              home for your family.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CalendlyLink>
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                  Schedule with Cadence Expert
                </Button>
              </CalendlyLink>
              <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                >
                  Call: {CONTACT_INFO.phone}
                </Button>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}?subject=Schedule Cadence Tour`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                >
                  Email Dr. Jan
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

