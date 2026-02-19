import { CalendlyLink } from '@/components/calendly/calendly-link'
import { Button } from '@/components/ui/button'
import { Calendar, Mail, Phone } from 'lucide-react'
import { CONTACT_INFO } from './contact-info'

export function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl mb-8">
            Contact Dr. Jan today to learn more about Cadence Henderson and
            available homes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CalendlyLink>
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100"
              >
                <Calendar className="mr-2" size={20} />
                Schedule with Cadence Expert
              </Button>
            </CalendlyLink>
            <a href={`mailto:${CONTACT_INFO.email}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                <Mail className="mr-2" size={20} />
                Email Dr. Jan
              </Button>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
              className="inline-block"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                <Phone className="mr-2" size={20} />
                {CONTACT_INFO.phone}
              </Button>
            </a>
          </div>
          <p className="mt-6 text-sm opacity-90">
            Licensed Real Estate Professional specializing in Cadence Henderson
          </p>
        </div>
      </div>
    </section>
  )
}

