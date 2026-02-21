import { CalendlyLink } from '@/components/calendly/calendly-link'
import { CalendlyInlineWidget } from '@/components/calendly/calendly-inline-widget'
import { CalendlyWhenVisible } from '@/components/calendly/calendly-when-visible'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { Calendar, Mail, Phone } from 'lucide-react'

/**
 * Single consultation + CTA section: Buy/Sell actions, inline Calendly widget,
 * and contact strip. Replaces duplicate ScheduleConsultationSection + CTABanner.
 */
export function ScheduleConsultationSection() {
  return (
    <section
      className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white"
      aria-labelledby="schedule-consultation-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="schedule-consultation-heading" className="text-4xl font-bold mb-4">
            Ready to Buy New Homes at Cadence Henderson?
          </h2>
          <p className="text-xl opacity-95 mb-6">
            Schedule your free Cadence Henderson buyer consultation with Dr. Jan Duffy. Get personalized guidance and tour new homes Cadence Henderson NV 89011.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 w-full sm:w-auto"
              asChild
            >
              <CalendlyLink>I Want To Buy</CalendlyLink>
            </Button>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 w-full sm:w-auto"
              asChild
            >
              <CalendlyLink>I Want To Sell</CalendlyLink>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900" asChild>
              <CalendlyLink>
                <Calendar className="mr-2" size={20} aria-hidden />
                Schedule Free Call
              </CalendlyLink>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900" asChild>
              <a href={`mailto:${CONTACT_INFO.email}`} aria-label="Email Dr. Jan Duffy">
                <Mail className="mr-2" size={20} aria-hidden />
                Email Dr. Jan
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900" asChild>
              <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`} aria-label={`Call Dr. Jan Duffy: ${CONTACT_INFO.phone}`}>
                <Phone className="mr-2" size={20} aria-hidden />
                {CONTACT_INFO.phone}
              </a>
            </Button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm">
          <CalendlyWhenVisible loadOnMount>
            <CalendlyInlineWidget
              className="rounded-lg overflow-hidden"
              style={{ minWidth: 320, height: 700 }}
            />
          </CalendlyWhenVisible>
          <p className="text-center text-sm opacity-80 mt-4">
            <a
              href={CONTACT_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              Open scheduler in a new tab
            </a>
            {' '}if the calendar doesn’t load.
          </p>
        </div>
        <p className="text-center text-sm opacity-90 mt-6">
          Licensed Real Estate Professional specializing in Cadence Henderson
        </p>
      </div>
    </section>
  )
}
