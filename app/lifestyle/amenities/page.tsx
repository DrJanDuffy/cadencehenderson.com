import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { Button } from '@/components/ui/button'
import {
  Waves,
  Dumbbell,
  Users,
  Wifi,
  Utensils,
  Music,
  Paintbrush,
  Heart,
} from 'lucide-react'

const amenities = [
  {
    name: 'Resort-Style Pools',
    icon: Waves,
    description:
      'Multiple community pools with lap lanes, splash pads, and heated spa areas. Perfect for year-round enjoyment.',
    features: [
      'Olympic-size lap pool',
      'Family recreation pool',
      'Children\'s splash pad',
      'Adults-only hot tubs',
      'Poolside cabanas',
      'Shaded seating areas',
    ],
    image:
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80&fm=webp',
  },
  {
    name: 'State-of-the-Art Fitness Centers',
    icon: Dumbbell,
    description:
      'Fully equipped fitness facilities with modern cardio equipment, free weights, and group exercise studios.',
    features: [
      'Cardio machines with TVs',
      'Free weights and strength equipment',
      'Yoga and spin studios',
      'Personal training available',
      'Locker rooms with showers',
      '24/7 access for residents',
    ],
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80&fm=webp',
  },
  {
    name: 'Clubhouses',
    icon: Users,
    description:
      'Beautiful clubhouses available for private events, meetings, and community gatherings.',
    features: [
      'Full kitchen facilities',
      'Indoor/outdoor seating',
      'Reservation system',
      'WiFi and AV equipment',
      'Catering-friendly',
      'Party rooms',
    ],
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fm=webp',
  },
  {
    name: 'Sports Courts',
    icon: Heart,
    description:
      'Tennis, basketball, and pickleball courts for active recreation and friendly competition.',
    features: [
      'Lighted tennis courts',
      'Full basketball court',
      'Pickleball courts',
      'Equipment available',
      'League play',
      'Private lessons',
    ],
    image:
      'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&q=80&fm=webp',
  },
]

const additionalAmenities = [
  {
    category: 'Recreation',
    items: [
      'Dog parks with agility equipment',
      'Playground areas for all ages',
      'BBQ and picnic areas',
      'Fire pits and lounge seating',
      'Walking and biking trails',
      'Community garden plots',
    ],
  },
  {
    category: 'Technology',
    items: [
      'High-speed fiber internet',
      'Smart community features',
      'Mobile app for amenity booking',
      'Online portal access',
      'Security cameras',
      'Smart home ready',
    ],
  },
  {
    category: 'Services',
    items: [
      'On-site management team',
      'Concierge services',
      'Package delivery lockers',
      'Car wash station',
      'EV charging stations',
      'Maintenance request system',
    ],
  },
  {
    category: 'Events & Programs',
    items: [
      'Fitness classes',
      'Social events',
      'Holiday celebrations',
      'Kids activities',
      'Movie nights',
      'Food truck events',
    ],
  },
]

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-900 to-cyan-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Waves size={64} className="mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              World-Class Amenities
            </h1>
            <p className="text-xl mb-8">
              Experience resort-style living every day at Cadence. From multiple
              pools and fitness centers to sports courts and clubhouses, our
              amenities are designed to enhance your lifestyle.
            </p>
            <CalendlyLink>
              <Button
                size="lg"
                className="bg-white text-cyan-900 hover:bg-gray-100"
              >
                Schedule a Tour
              </Button>
            </CalendlyLink>
          </div>
        </div>
      </section>

      <RealScoutOfficeListings />

      {/* Main Amenities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Premier Facilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {amenities.map((amenity) => {
              const IconComponent = amenity.icon
              return (
                <div
                  key={amenity.name}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-300"
                      style={{ backgroundImage: `url('${amenity.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center text-white mb-2">
                        <IconComponent size={32} className="mr-3" />
                        <h3 className="text-2xl font-bold">
                          {amenity.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{amenity.description}</p>
                    <div className="border-t pt-4">
                      <h4 className="font-bold text-gray-900 mb-3 text-sm">
                        Features Include:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {amenity.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start text-sm text-gray-700"
                          >
                            <span className="w-1.5 h-1.5 bg-cyan-900 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Even More to Enjoy
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalAmenities.map((category) => (
                <div
                  key={category.category}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-xl font-bold text-cyan-900 mb-4 text-center border-b pb-3">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 bg-cyan-900 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Central Park Highlight */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1000&q=80&fm=webp')",
                  }}
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  50-Acre Central Park
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  The crown jewel of Cadence amenities, Central Park offers
                  nearly 50 acres of open space with stunning mountain views,
                  multiple playgrounds, walking trails, and event spaces.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-700">
                      Multi-age playgrounds with modern equipment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-700">
                      Splash pad with water features for kids
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-700">
                      Large event lawn for community gatherings
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-900 rounded-full mr-3 mt-2" />
                    <span className="text-gray-700">
                      Scenic walking and biking trails throughout
                    </span>
                  </li>
                </ul>
                <Button
                  size="lg"
                  className="bg-cyan-900 hover:bg-cyan-800"
                >
                  Explore Central Park
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenity Hours */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Amenity Hours & Access
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Waves size={40} className="mx-auto mb-3 text-cyan-900" />
                <h3 className="font-bold text-gray-900 mb-2">Pools</h3>
                <p className="text-sm text-gray-600">
                  Daily: 6 AM - 10 PM
                  <br />
                  Seasonal hours vary
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Dumbbell size={40} className="mx-auto mb-3 text-cyan-900" />
                <h3 className="font-bold text-gray-900 mb-2">
                  Fitness Centers
                </h3>
                <p className="text-sm text-gray-600">
                  24/7 Access
                  <br />
                  with resident key card
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Users size={40} className="mx-auto mb-3 text-cyan-900" />
                <h3 className="font-bold text-gray-900 mb-2">Clubhouses</h3>
                <p className="text-sm text-gray-600">
                  Daily: 8 AM - 10 PM
                  <br />
                  Reservations required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-16 bg-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Reserve Amenities Online
            </h2>
            <p className="text-xl mb-8">
              Residents can easily book clubhouses, sports courts, and other
              amenities through our online portal.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
                <Button
                  size="lg"
                  className="bg-white text-cyan-900 hover:bg-gray-100"
                >
                  Call: {CONTACT_INFO.phone}
                </Button>
              </a>
              <CalendlyLink>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-cyan-900"
                >
                  Schedule Tour
                </Button>
              </CalendlyLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

