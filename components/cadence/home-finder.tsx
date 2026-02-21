import { RealScoutWidget } from '@/components/idx/realscout-widget'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { Button } from '@/components/ui/button'

export function HomeFinder() {
  return (
    <section className="py-20 bg-gray-50" aria-labelledby="homefinder-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 id="homefinder-heading" className="text-4xl font-bold text-gray-900 mb-6">
              Browse Cadence Henderson Homes for Sale
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              New construction and resale homes in Cadence Henderson NV 89011.
              Search above or browse listings below.
            </p>
          </div>
          <RealScoutWidget className="min-h-[400px] rounded-lg overflow-hidden bg-white shadow-sm" />
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 mb-4">
              Want a personalized tour or buyer consultation? Get expert guidance
              from Dr. Jan Duffy.
            </p>
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800" asChild>
              <CalendlyLink>Schedule a call with Dr. Jan</CalendlyLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

