'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { cfImage, PLACEHOLDER_IMAGE, SITE_IMAGES } from '@/lib/cloudflare-images'

const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.welcomeCenter)}`

export function LocationSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="location-heading">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center justify-center mb-6">
              <img
                src={cfImage(SITE_IMAGES.icons.homesBox, 'thumbnail')}
                alt="Cadence Henderson NV 89011 location — master-planned community"
                width={96}
                height={100}
                loading="lazy"
                className="w-24 h-24 object-contain"
                onError={(e) => { e.currentTarget.src = PLACEHOLDER_IMAGE }}
              />
            </div>
            <h2 id="location-heading" className="text-4xl font-bold text-gray-900 mb-6">
              Cadence Henderson Location
            </h2>
            <p className="text-xl text-gray-700 mb-4 leading-relaxed">
              Cadence is a master-planned community in <strong>Henderson, NV 89011</strong>. We serve Cadence and the greater Henderson area from our office at {CONTACT_INFO.welcomeCenter}.
            </p>
            <p className="text-gray-700 mb-6">
              Easy access to Harry Reid International Airport, the Las Vegas Strip, downtown Las Vegas, and minutes from Lake Mead Recreational Area.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-blue-900 hover:bg-blue-800 text-lg px-8"
                asChild
              >
                <Link href="/maps" aria-label="Maps and directions in Cadence Henderson">
                  View Maps
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8"
                asChild
              >
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get directions to our Henderson office"
                >
                  Directions
                </a>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl bg-gray-200">
            <img
              src={cfImage(SITE_IMAGES.location.aerialView, 'card')}
              alt="Cadence Henderson NV 89011 community and surrounding area"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              onError={(e) => { e.currentTarget.src = PLACEHOLDER_IMAGE }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

