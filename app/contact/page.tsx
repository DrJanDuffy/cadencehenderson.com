'use client'

import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { CalendlyInlineWidget } from '@/components/calendly/calendly-inline-widget'
import { CalendlyWhenVisible } from '@/components/calendly/calendly-when-visible'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl">
              Have questions about Cadence? We're here to help you find your
              perfect home in our community.
            </p>
          </div>
        </div>
      </section>

      <RealScoutOfficeListings />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin size={24} className="text-blue-900" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 mb-1">
                      Visit Our Office
                    </h3>
                    <p className="text-gray-700">
                      {CONTACT_INFO.address.street}
                      <br />
                      {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}{' '}
                      {CONTACT_INFO.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-blue-900" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 mb-1">Call Dr. Jan</h3>
                    <p className="text-gray-700">
                      <a
                        href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
                        className="hover:text-blue-900 transition-colors"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail size={24} className="text-blue-900" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-700">
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="hover:text-blue-900 transition-colors"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock size={24} className="text-blue-900" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900 mb-1">
                      Welcome Center Hours
                    </h3>
                    <p className="text-gray-700">
                      {CONTACT_INFO.hours}
                      <br />
                      Closed major holidays
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.welcomeCenter)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-white text-gray-900 hover:bg-gray-100">
                      Open in Maps
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Schedule a Consultation - Calendly (loads when in view) */}
            <CalendlyWhenVisible>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Schedule a Consultation
              </h2>
              <p className="text-gray-700 mb-6">
                Book a 15-minute call with Dr. Jan Duffy to discuss Cadence
                Henderson homes, schedule a tour, or get personalized guidance.
              </p>
              <CalendlyInlineWidget className="rounded-lg overflow-hidden" />
            </div>
            </CalendlyWhenVisible>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
