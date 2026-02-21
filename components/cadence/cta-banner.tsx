import { CalendlyLink } from '@/components/calendly/calendly-link'
import { Button } from '@/components/ui/button'
import { Calendar, Mail, Phone } from 'lucide-react'
import { CONTACT_INFO } from './contact-info'

export function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Buy or Sell at Cadence?
          </h2>
          <p className="text-xl mb-8">
            Whether you&apos;re looking for your dream home or ready to sell, our
            expert team is here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100 text-lg px-8 w-full sm:w-auto"
              asChild
            >
              <CalendlyLink>I Want To Buy</CalendlyLink>
            </Button>
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100 text-lg px-8 w-full sm:w-auto"
              asChild
            >
              <CalendlyLink>I Want To Sell</CalendlyLink>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900"
              asChild
            >
              <CalendlyLink>
                <Calendar className="mr-2" size={20} aria-hidden />
                Schedule Free Call
              </CalendlyLink>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900"
              asChild
            >
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                aria-label="Email Dr. Jan Duffy"
              >
                <Mail className="mr-2" size={20} aria-hidden />
                Email Dr. Jan
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900"
              asChild
            >
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                aria-label={`Call Dr. Jan Duffy: ${CONTACT_INFO.phone}`}
              >
                <Phone className="mr-2" size={20} aria-hidden />
                {CONTACT_INFO.phone}
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white">
            Licensed Real Estate Professional specializing in Cadence Henderson
          </p>
        </div>
      </div>
    </section>
  )
}

