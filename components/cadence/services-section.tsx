import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { Home, Key, Building2, Calendar, MapPin } from 'lucide-react'
import { CONTACT_INFO } from '@/components/cadence/contact-info'

type ServiceItem = {
  title: string
  description: string
  href: string
  icon: LucideIcon
  ariaLabel: string
  external?: boolean
}

const SERVICES: ServiceItem[] = [
  {
    title: 'Buy Homes in Cadence',
    description: 'New construction and resale homes in Cadence Henderson. Expert guidance through every step.',
    href: '/new-homes',
    icon: Home,
    ariaLabel: 'View new homes and resale in Cadence Henderson',
    external: false,
  },
  {
    title: 'Sell Your Henderson Home',
    description: 'List and sell your Cadence or Henderson property with a local expert.',
    href: '/contact',
    icon: Key,
    ariaLabel: 'List your home for sale in Cadence Henderson',
    external: false,
  },
  {
    title: 'Rentals in Cadence',
    description: 'Rental homes and communities in Cadence, Henderson NV 89011.',
    href: '/rentals',
    icon: Building2,
    ariaLabel: 'Find rentals in Cadence Henderson',
    external: false,
  },
  {
    title: 'Free Consultation',
    description: '15-minute call with Dr. Jan Duffy. Get answers about buying, selling, or living in Cadence.',
    href: CONTACT_INFO.calendlyUrl,
    icon: Calendar,
    ariaLabel: 'Schedule a free real estate consultation in Cadence Henderson',
    external: true,
  },
]

export function ServicesSection() {
  return (
    <section
      className="py-16 bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="services-heading" className="text-4xl font-bold text-gray-900 mb-4">
            Real Estate Services in Cadence Henderson
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Dr. Jan Duffy serves Cadence and Henderson, Nevada. From new homes and resale to rentals—we’re your hyperlocal real estate team.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon
            const isExternal = service.href.startsWith('http')
            const content = (
              <>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-900 text-white mb-4">
                  <Icon className="w-6 h-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </>
            )
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                {isExternal ? (
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    aria-label={service.ariaLabel}
                  >
                    {content}
                  </a>
                ) : (
                  <Link href={service.href} className="block" aria-label={service.ariaLabel}>
                    {content}
                  </Link>
                )}
              </div>
            )
          })}
        </div>
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-2">
            <MapPin className="inline w-4 h-4 mr-1" aria-hidden />
            Serving Cadence, Henderson NV 89011 and the greater Henderson area
          </p>
          <p className="text-sm text-gray-500">
            {CONTACT_INFO.welcomeCenter} · {CONTACT_INFO.phone}
          </p>
        </div>
      </div>
    </section>
  )
}
