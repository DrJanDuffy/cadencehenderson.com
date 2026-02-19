'use client'

import { CalendlyInlineWidget } from '@/components/calendly/calendly-inline-widget'
import { Calendar } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
              <Calendar size={40} className="text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Schedule Your Cadence Consultation
            </h2>
            <p className="text-xl mb-8">
              Book a 15-minute call with Dr. Jan Duffy. Get personalized
              guidance, schedule a tour, or learn about available homes in
              Cadence Henderson.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 min-h-[600px]">
            <CalendlyInlineWidget
              style={{ minWidth: 320, height: 600 }}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
