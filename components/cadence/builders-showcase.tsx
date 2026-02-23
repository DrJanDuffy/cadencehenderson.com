'use client'

import Link from 'next/link'
import { CONTACT_INFO } from '@/components/cadence/contact-info'

function BuilderLogo({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
      onError={(e) => {
        e.currentTarget.style.display = 'none'
        const fallback = e.currentTarget.nextElementSibling
        if (fallback) (fallback as HTMLElement).style.display = 'flex'
      }}
    />
  )
}

export function BuildersShowcase() {
  const builders: Array<{
    name: string
    logo: string
    href: string
    width: number
    height: number
    external?: boolean
  }> = [
    {
      name: 'American Homes 4 Rent',
      logo: '/logos/american-homes-4-rent.svg',
      href: CONTACT_INFO.realScoutRentalsUrl,
      external: true,
      width: 300,
      height: 80,
    },
    {
      name: 'Beazer Homes',
      logo: '/logos/beazer-homes.svg',
      href: CONTACT_INFO.realScoutBeazerHomesUrl,
      width: 300,
      height: 80,
      external: true,
    },
    {
      name: 'Century Communities',
      logo: '/logos/century-communities.svg',
      href: '/new-homes/century-communities',
      width: 300,
      height: 80,
    },
    {
      name: 'D.R. Horton',
      logo: '/logos/dr-horton.svg',
      href: '/new-homes/dr-horton',
      width: 300,
      height: 80,
    },
    {
      name: 'Lennar',
      logo: '/logos/lennar.svg',
      href: '/new-homes/lennar',
      width: 300,
      height: 80,
    },
    {
      name: 'Richmond American',
      logo: '/logos/richmond-american.svg',
      href: '/new-homes/richmond-american',
      width: 300,
      height: 80,
    },
    {
      name: 'StoryBook Homes',
      logo: '/logos/storybook-homes.svg',
      href: '/new-homes/storybook-homes',
      width: 300,
      height: 80,
    },
    {
      name: 'Taylor Morrison',
      logo: '/logos/taylor-morrison.svg',
      href: '/new-homes/taylor-morrison',
      width: 300,
      height: 80,
    },
    {
      name: 'Woodside Homes',
      logo: '/logos/woodside-homes.svg',
      href: '/new-homes/woodside-homes',
      width: 300,
      height: 80,
    },
  ]

  return (
    <section className="py-20 bg-gray-100" aria-labelledby="builders-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 id="builders-heading" className="text-4xl font-bold text-center text-gray-900 mb-12">
          New Home Builders in Cadence Henderson
        </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {builders.map((builder) => {
            const className =
              'bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center justify-center text-center group'
            const content = (
              <>
                <div className="relative w-full h-20 mb-3 flex items-center justify-center">
                  <BuilderLogo
                    src={builder.logo}
                    alt={`Cadence Henderson NV 89011 new homes by ${builder.name}`}
                    width={builder.width}
                    height={builder.height}
                  />
                  <span
                    className="hidden items-center justify-center text-sm font-semibold text-gray-600 bg-gray-50 rounded px-3 py-2 w-full h-full"
                    aria-hidden="true"
                  >
                    {builder.name}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  {builder.name}
                </h3>
              </>
            )
            return builder.external ? (
              <a
                key={builder.name}
                href={builder.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {content}
              </a>
            ) : (
              <Link key={builder.name} href={builder.href} className={className}>
                {content}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

