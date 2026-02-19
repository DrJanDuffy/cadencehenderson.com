'use client'

import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')",
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Let's Address Your Future.
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            With astounding views, great variety and distinctive amenities that
            provide opportunities for amazing experiences each and every day;
            Cadence is the best home value in Southern Nevada.
          </p>
          <p className="text-lg mb-8">
            Because if <em>where</em> you live makes <em>how</em> you live even
            better – then your future belongs at Cadence.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}>
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8"
              >
                Call: {CONTACT_INFO.phone}
              </Button>
            </a>
            <a href="/new-homes">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8"
              >
                View Homes
              </Button>
            </a>
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

