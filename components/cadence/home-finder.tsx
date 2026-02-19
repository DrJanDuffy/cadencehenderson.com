import { RealScoutAdvancedSearch } from '@/components/idx/realscout-advanced-search'
import { RealScoutWidget } from '@/components/idx/realscout-widget'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { Button } from '@/components/ui/button'

export function HomeFinder() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-6">
              <img
                src="https://cadencenv.com/wp-content/uploads/2021/01/homefinder-home-box-288x300.png"
                alt="Henderson Home Finder"
                width={96}
                height={100}
                loading="lazy"
                className="w-24 h-24 object-contain"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Henderson Home Finder
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We have a wide variety of new homes to fit every family and
              lifestyle. Finding your new Cadence home is easier than ever with
              our Homefinder tool.
            </p>
          </div>
          <div className="flex justify-center mb-8">
            <RealScoutAdvancedSearch />
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

