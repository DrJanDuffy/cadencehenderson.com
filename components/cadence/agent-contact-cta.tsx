import { CalendlyLink } from '@/components/calendly/calendly-link'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

type AgentContactCtaProps = {
  heading: string
  body: string
}

/**
 * Closing CTA with visible NAP and Calendly / phone actions.
 */
export function AgentContactCta({ heading, body }: AgentContactCtaProps) {
  return (
    <section className="bg-cadence-ink py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-extralight tracking-[0.06em]">
            {heading}
          </h2>
          <p className="mb-4 text-lg font-light text-white/80">{body}</p>
          <p className="mb-8 text-sm font-light text-white/70">
            {CONTACT_INFO.shortBrandName} · {CONTACT_INFO.welcomeCenter} ·{' '}
            {CONTACT_INFO.phone}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CalendlyLink>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-blue-50"
              >
                Schedule a call
              </Button>
            </CalendlyLink>
            <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Phone className="mr-2" size={20} />
                Call {CONTACT_INFO.phone}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
