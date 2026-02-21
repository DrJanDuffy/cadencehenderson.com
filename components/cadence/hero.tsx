'use client'

import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { RealScoutSimpleSearch } from '@/components/idx/realscout-simple-search'
import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'

const HERO_IMAGE = '/images/hero/CendenceDrJanDuffy.png'

export function Hero() {
  return (
    <section className="relative min-h-[480px] sm:min-h-[520px] md:min-h-[560px] lg:min-h-[600px] flex flex-col bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden" aria-label="Hero">
      {/* LCP: native img; on error hide so gradient shows and alt text is not displayed */}
      <img
        src={HERO_IMAGE}
        alt="New homes for sale Cadence Henderson NV 89011 — Dr. Jan Duffy buyer's agent"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
      {/* Light overlay so photo shows; keeps white text readable */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"
        aria-hidden
      />

      {/* Content: concise hero, smaller type */}
      <div className="relative container mx-auto px-4 sm:px-6 flex-1 flex items-center pb-24 sm:pb-28">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            New Home Buyer&apos;s Agent in Cadence Henderson NV 89011
          </h1>
          <p className="text-base md:text-lg text-white mb-6">
            New homes Cadence Henderson NV 89011 — your buyer&apos;s agent. Free representation; builder pays the fee.
          </p>
          {/* Wrapper forces dark text on the white search box so placeholder/labels are visible */}
          <div className="mb-6 w-full max-w-full text-gray-900 [&_input]:text-gray-900 [&_input::placeholder]:text-gray-500 [&_realscout-simple-search]:max-w-full">
            <RealScoutSimpleSearch />
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              size="default"
              className="bg-white text-blue-900 hover:bg-gray-100 font-medium"
              asChild
            >
              <CalendlyLink>
                <Calendar className="mr-2" size={18} aria-hidden />
                Schedule your free 15-min call
              </CalendlyLink>
            </Button>
            <Button
              size="default"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900"
              asChild
            >
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                aria-label={`Call Dr. Jan Duffy: ${CONTACT_INFO.phone}`}
              >
                Call: {CONTACT_INFO.phone}
              </a>
            </Button>
            <Button
              size="default"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900"
              asChild
            >
              <a
                href={CONTACT_INFO.realScoutSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cadence Henderson homes for sale
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

