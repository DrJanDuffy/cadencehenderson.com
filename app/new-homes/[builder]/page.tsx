import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { Button } from '@/components/ui/button'
import { Home, Bed, Bath, Ruler, DollarSign, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const builderData: Record<
  string,
  {
    name: string
    description: string
    longDescription: string
    logo: string
    contact: {
      phone: string
      email: string
      salesCenter: string
    }
    models: Array<{
      name: string
      price: string
      beds: number
      baths: number
      sqft: string
      image: string
      features: string[]
    }>
  }
> = {
  'beazer-homes': {
    name: 'Beazer Homes',
    description:
      'Quality craftsmanship and energy-efficient homes with flexible floor plans.',
    longDescription:
      'Beazer Homes has been building quality new homes for over 60 years. At Cadence, we offer a variety of thoughtfully designed floor plans featuring energy-efficient construction, modern amenities, and flexible living spaces perfect for today\'s families.',
    logo: '🏠',
    contact: {
      phone: '(702) 555-0101',
      email: 'cadence@beazerhomes.com',
      salesCenter: 'Building 12, Cadence Welcome Center',
    },
    models: [
      {
        name: 'The Ashford',
        price: '$425,000',
        beds: 3,
        baths: 2.5,
        sqft: '2,150',
        image:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
        features: [
          'Open concept living',
          'Gourmet kitchen',
          'Master suite with walk-in closet',
          'Energy-efficient appliances',
          '2-car garage',
        ],
      },
      {
        name: 'The Bennett',
        price: '$385,000',
        beds: 4,
        baths: 3,
        sqft: '2,450',
        image:
          'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
        features: [
          'Spacious family room',
          'Upstairs loft',
          'Dual master closets',
          'Smart home ready',
          'Covered patio',
        ],
      },
      {
        name: 'The Carlisle',
        price: '$550,000',
        beds: 5,
        baths: 4,
        sqft: '3,200',
        image:
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
        features: [
          'Premium finishes throughout',
          'Bonus room',
          'Gourmet kitchen with island',
          'Spa-like master bath',
          '3-car tandem garage',
        ],
      },
    ],
  },
  'century-communities': {
    name: 'Century Communities',
    description:
      'Innovative designs with modern amenities and smart home technology.',
    longDescription:
      'Century Communities is committed to building exceptional homes in desirable locations. Our homes at Cadence feature innovative designs, flexible floor plans, and the latest smart home technology to enhance your lifestyle.',
    logo: '🏘️',
    contact: {
      phone: '(702) 555-0102',
      email: 'cadence@centurycommunities.com',
      salesCenter: 'Building 15, Cadence Welcome Center',
    },
    models: [
      {
        name: 'Plan 1849',
        price: '$395,000',
        beds: 3,
        baths: 2,
        sqft: '1,849',
        image:
          'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
        features: [
          'Modern open layout',
          'Smart home technology',
          'Quartz countertops',
          'Energy Star certified',
          'Desert landscaping',
        ],
      },
      {
        name: 'Plan 2247',
        price: '$445,000',
        beds: 4,
        baths: 2.5,
        sqft: '2,247',
        image:
          'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
        features: [
          'Two-story design',
          'Tech package included',
          'Large kitchen island',
          'Walk-in pantry',
          'Upstairs laundry',
        ],
      },
    ],
  },
  'dr-horton': {
    name: 'D.R. Horton',
    description: "America's Builder - offering exceptional value and quality homes.",
    longDescription:
      "As America's largest homebuilder, D.R. Horton delivers exceptional value with quality construction. Our Express Homes and Freedom Series offer move-in ready options with great finishes at competitive prices.",
    logo: '🏗️',
    contact: {
      phone: '(702) 555-0103',
      email: 'cadence@drhorton.com',
      salesCenter: 'Building 8, Cadence Welcome Center',
    },
    models: [
      {
        name: 'Azalea',
        price: '$315,000',
        beds: 3,
        baths: 2,
        sqft: '1,632',
        image:
          'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
        features: [
          'Single-story living',
          'Open floor plan',
          'Granite countertops',
          'Tile flooring',
          'Covered patio',
        ],
      },
      {
        name: 'Birch',
        price: '$365,000',
        beds: 4,
        baths: 2,
        sqft: '2,015',
        image:
          'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
        features: [
          'Split bedroom layout',
          'Great room concept',
          'Kitchen island',
          'Stainless appliances',
          'Energy efficient',
        ],
      },
      {
        name: 'Cedar',
        price: '$425,000',
        beds: 4,
        baths: 3,
        sqft: '2,533',
        image:
          'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80',
        features: [
          'Two-story home',
          'Loft or 5th bedroom',
          'Game room',
          'Formal dining',
          'Premium lot',
        ],
      },
    ],
  },
  // Add more builders as needed
}

export default function BuilderPage({
  params,
}: {
  params: { builder: string }
}) {
  const builder = builderData[params.builder]

  if (!builder) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-4">{builder.logo}</div>
            <h1 className="text-5xl font-bold mb-4">{builder.name}</h1>
            <p className="text-xl mb-6">{builder.description}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100"
              >
                Schedule a Tour
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Builder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              About {builder.name}
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {builder.longDescription}
            </p>
            <div className="grid md:grid-cols-3 gap-6 bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <Phone className="mx-auto mb-3 text-blue-900" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                <a
                  href={`tel:${builder.contact.phone}`}
                  className="text-blue-900 hover:underline"
                >
                  {builder.contact.phone}
                </a>
              </div>
              <div className="text-center">
                <MapPin className="mx-auto mb-3 text-blue-900" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-700 text-sm">
                  {builder.contact.salesCenter}
                </p>
              </div>
              <div className="text-center">
                <Home className="mx-auto mb-3 text-blue-900" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Models</h3>
                <p className="text-gray-700">{builder.models.length} Floor Plans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Models */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Available Home Models
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {builder.models.map((model) => (
              <div
                key={model.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url('${model.image}')` }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {model.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign size={20} className="text-green-600" />
                    <span className="text-2xl font-bold text-blue-900">
                      {model.price}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b">
                    <div className="text-center">
                      <Bed size={20} className="mx-auto mb-1 text-gray-600" />
                      <div className="font-bold text-gray-900">
                        {model.beds}
                      </div>
                      <div className="text-xs text-gray-600">Beds</div>
                    </div>
                    <div className="text-center">
                      <Bath size={20} className="mx-auto mb-1 text-gray-600" />
                      <div className="font-bold text-gray-900">
                        {model.baths}
                      </div>
                      <div className="text-xs text-gray-600">Baths</div>
                    </div>
                    <div className="text-center">
                      <Ruler
                        size={20}
                        className="mx-auto mb-1 text-gray-600"
                      />
                      <div className="font-bold text-gray-900">
                        {model.sqft}
                      </div>
                      <div className="text-xs text-gray-600">Sq Ft</div>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {model.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <span className="w-2 h-2 bg-blue-900 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-900 hover:bg-blue-800">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Make {builder.name} Your Home?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Visit our sales center today to tour our model homes and find the
              perfect floor plan for your family.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                Schedule a Visit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
              >
                Get Pre-Qualified
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Generate static params for all builders
export async function generateStaticParams() {
  return Object.keys(builderData).map((builder) => ({
    builder,
  }))
}

