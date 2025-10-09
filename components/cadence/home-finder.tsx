import { Home, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HomeFinder() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-900 rounded-full mb-6">
            <Home size={40} className="text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Henderson Home Finder
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            We have a wide variety of new homes to fit every family and
            lifestyle. Finding your new Cadence home is easier than ever with
            our Homefinder tool.
          </p>
          <Button
            size="lg"
            className="bg-blue-900 hover:bg-blue-800 text-lg px-8"
          >
            <Search className="mr-2" size={20} />
            Find Your Home
          </Button>
        </div>
      </div>
    </section>
  )
}

