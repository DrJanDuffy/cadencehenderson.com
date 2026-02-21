import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { getHomeImage } from '@/lib/cloudflare-images'

export function RealtorsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${getHomeImage('exterior1', 'card')}')`,
              }}
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Cadence Henderson Real Estate Team
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Cadence Henderson is one of the Top 10 Best Selling Master Planned
              Communities in the nation. Whether you’re buying a new home,
              resale, or rental—our team helps you find the right fit in Cadence
              Henderson NV 89011.
            </p>
            <Button
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-lg px-8"
              asChild
            >
              <CalendlyLink>Schedule a Call with Dr. Jan</CalendlyLink>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="ml-4 border-blue-900 text-blue-900 hover:bg-blue-50 text-lg px-8"
              asChild
            >
              <Link href="/realtors">Realtor Resources</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

