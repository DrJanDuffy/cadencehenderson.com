import { CalendlyLink } from '@/components/calendly/calendly-link'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { Button } from '@/components/ui/button'
import {
  Calendar,
  Trees,
  ShoppingBag,
  GraduationCap,
  Heart,
  Users,
  Music,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'

const lifestyleFeatures = [
  {
    icon: Calendar,
    title: 'Events',
    description:
      'Year-round community events including concerts, movie nights, and seasonal celebrations.',
    image:
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80',
    link: '/lifestyle/events',
  },
  {
    icon: Trees,
    title: 'Parks & Trails',
    description:
      "Nearly 50-acre Central Park, walking trails, and nature areas for outdoor recreation.",
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80',
    link: '/lifestyle/parks-trails',
  },
  {
    icon: ShoppingBag,
    title: 'Shopping & Entertainment',
    description:
      'Nearby retail, dining, and entertainment options with more coming to the community.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
    link: '/lifestyle/shopping',
  },
  {
    icon: GraduationCap,
    title: 'Schools',
    description:
      'Top-rated Clark County schools including elementary, middle, and high schools.',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
    link: '/lifestyle/schools',
  },
  {
    icon: Sparkles,
    title: 'Amenities',
    description:
      'Multiple pools, splash pads, fitness centers, and recreation facilities.',
    image:
      'https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=600&q=80',
    link: '/lifestyle/amenities',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'Active resident community with clubs, activities, and neighborhood connections.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
    link: '/lifestyle/community',
  },
]

export default function LifestylePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-green-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Live the Cadence Lifestyle</h1>
            <p className="text-xl mb-8">
              More than just a place to live, Cadence is a vibrant community
              where neighbors become friends and every day brings new
              opportunities for connection, recreation, and joy.
            </p>
            <Button
              size="lg"
              className="bg-white text-green-900 hover:bg-gray-100"
            >
              <Calendar className="mr-2" size={20} />
              View Community Calendar
            </Button>
          </div>
        </div>
      </section>

      <RealScoutOfficeListings />

      {/* Lifestyle Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need, Right Here
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From world-class amenities to community events, discover all the
              ways Cadence enhances your daily life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lifestyleFeatures.map((feature) => (
              <Link
                key={feature.link}
                href={feature.link}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url('${feature.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <feature.icon size={32} className="text-white mb-2" />
                      <h3 className="text-2xl font-bold text-white">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{feature.description}</p>
                    <Button
                      className="w-full bg-green-900 hover:bg-green-800"
                      variant="default"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Central Park Feature */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Central Park: The Heart of Cadence
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our nearly 50-acre Central Park is the crown jewel of the
                community, offering residents a spectacular outdoor space for
                recreation, relaxation, and community gatherings.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-900 rounded-full mr-3 mt-2" />
                  <span className="text-gray-700">
                    Multiple playgrounds for all ages
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-900 rounded-full mr-3 mt-2" />
                  <span className="text-gray-700">
                    Walking and biking trails throughout
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-900 rounded-full mr-3 mt-2" />
                  <span className="text-gray-700">
                    Large event lawn for community gatherings
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-900 rounded-full mr-3 mt-2" />
                  <span className="text-gray-700">
                    Splash pads and water features
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-900 rounded-full mr-3 mt-2" />
                  <span className="text-gray-700">
                    Stunning mountain and desert views
                  </span>
                </li>
              </ul>
              <Button size="lg" className="bg-green-900 hover:bg-green-800">
                Explore Central Park
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80')",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Resort-Style Amenities
            </h2>
            <p className="text-xl text-gray-600">
              Live like you're on vacation every day
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">🏊</div>
              <h3 className="font-bold text-gray-900 mb-2">Pools & Spas</h3>
              <p className="text-sm text-gray-600">
                Multiple community pools and hot tubs
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">💪</div>
              <h3 className="font-bold text-gray-900 mb-2">Fitness Centers</h3>
              <p className="text-sm text-gray-600">
                State-of-the-art gym equipment
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">🐕</div>
              <h3 className="font-bold text-gray-900 mb-2">Dog Parks</h3>
              <p className="text-sm text-gray-600">
                Dedicated spaces for your furry friends
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">🎾</div>
              <h3 className="font-bold text-gray-900 mb-2">
                Sports Courts
              </h3>
              <p className="text-sm text-gray-600">
                Basketball, tennis, and pickleball
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Experience the Lifestyle Firsthand
            </h2>
            <p className="text-xl mb-8">
              Schedule a tour and see why Cadence is more than just a community
              - it's a lifestyle.
            </p>
            <CalendlyLink>
              <Button
                size="lg"
                className="bg-white text-green-900 hover:bg-gray-100"
              >
                Schedule Your Tour
              </Button>
            </CalendlyLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

