import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { Button } from '@/components/ui/button'
import { Newspaper, Calendar, Image as ImageIcon } from 'lucide-react'

const newsArticles = [
  {
    title: 'Cadence Named Top 10 Best-Selling Community in the Nation',
    date: 'October 5, 2025',
    category: 'Awards',
    excerpt:
      'Cadence has been recognized as one of the top 10 best-selling master-planned communities in the United States for the third consecutive year.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
  },
  {
    title: 'New Central Park Expansion Opens This Fall',
    date: 'September 28, 2025',
    category: 'Community',
    excerpt:
      'Experience even more outdoor recreation with the opening of the new Central Park expansion featuring additional trails, picnic areas, and a new adventure playground.',
    image:
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
  },
  {
    title: 'Summer Concert Series Returns to Cadence',
    date: 'September 15, 2025',
    category: 'Events',
    excerpt:
      'Join us for live music every Friday evening in Central Park. This year\'s lineup features local and regional artists across multiple genres.',
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80',
  },
  {
    title: 'Cadence Schools Receive High Academic Ratings',
    date: 'August 22, 2025',
    category: 'Education',
    excerpt:
      'Clark County School District announces that schools serving Cadence residents have achieved outstanding academic ratings for the 2024-2025 school year.',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
  },
  {
    title: 'New Home Builders Join Cadence Community',
    date: 'August 10, 2025',
    category: 'New Homes',
    excerpt:
      'We\'re excited to welcome two new home builders to Cadence, expanding our selection of quality homes and architectural styles.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    title: 'Cadence Residents Celebrate Community Garden Harvest',
    date: 'July 28, 2025',
    category: 'Community',
    excerpt:
      'The Cadence Community Garden celebrates its first successful harvest, bringing residents together to share fresh produce and gardening tips.',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80',
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-indigo-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Cadence News</h1>
            <p className="text-xl mb-8">
              Stay up to date with the latest news, events, and announcements
              from the Cadence community. From new home openings to community
              celebrations, there's always something happening here.
            </p>
          </div>
        </div>
      </section>

      {/* Filter/Category Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button variant="default" className="bg-indigo-900 hover:bg-indigo-800">
              All News
            </Button>
            <Button variant="outline">Awards</Button>
            <Button variant="outline">Community</Button>
            <Button variant="outline">Events</Button>
            <Button variant="outline">Education</Button>
            <Button variant="outline">New Homes</Button>
          </div>
        </div>
      </section>

      {/* News Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url('${article.image}')` }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="inline-flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {article.date}
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-900 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Button
                    variant="outline"
                    className="border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white"
                  >
                    Read More
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Photo Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Explore life in Cadence through our community photo gallery
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="relative h-48 bg-gray-200 rounded-lg overflow-hidden group cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-${1560000000000 + i * 10000000}?w=400&q=80')`,
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-indigo-900 hover:bg-indigo-800">
              <ImageIcon className="mr-2" size={20} />
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Newspaper size={48} className="mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              Stay in the Loop
            </h2>
            <p className="text-xl mb-8">
              Subscribe to our newsletter to receive the latest news, events,
              and exclusive offers from Cadence delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-indigo-900 hover:bg-gray-100 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

