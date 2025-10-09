import { Building2, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function RealtorsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80')",
              }}
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-full mb-6">
              <Building2 size={40} className="text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Cadence Las Vegas Realtors
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Cadence is one of the Top 10 Best Selling Master Planned
              Communities in the nation. With a variety of home styles to choose
              from, your clients are sure to find the home of their dreams.
            </p>
            <Button
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-lg px-8"
            >
              Realtor Resources
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

