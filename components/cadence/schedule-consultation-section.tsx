import { Calendar } from 'lucide-react'
import { CalendlyInlineWidget } from '@/components/calendly/calendly-inline-widget'

export function ScheduleConsultationSection() {
  return (
    <section
      className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white"
      aria-labelledby="schedule-consultation-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-6"
            aria-hidden
          >
            <Calendar className="w-7 h-7" />
          </div>
          <h2 id="schedule-consultation-heading" className="text-4xl font-bold mb-4">
            Schedule Your Cadence Consultation
          </h2>
          <p className="text-xl opacity-95">
            Our team of experts is here to help you navigate your journey, answer
            your questions, and find your perfect fit.
          </p>
        </div>
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm">
          <CalendlyInlineWidget
            className="rounded-lg overflow-hidden"
            style={{ minWidth: 320, height: 700 }}
          />
        </div>
      </div>
    </section>
  )
}
