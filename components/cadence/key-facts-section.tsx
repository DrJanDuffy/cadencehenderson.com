import { CONTACT_INFO } from '@/components/cadence/contact-info'

/**
 * Key Facts block for AEO extraction. Short, scannable bullets.
 * Placed after Hero to support AI and snippet parsing.
 */
export function KeyFactsSection() {
  return (
    <section
      className="py-8 bg-white border-b border-gray-100"
      aria-labelledby="key-facts-heading"
    >
      <div className="container mx-auto px-4">
        <h2 id="key-facts-heading" className="sr-only">
          Key Facts — Cadence Henderson NV 89011
        </h2>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-700 list-disc list-inside max-w-4xl mx-auto">
          <li>9 active builders in Cadence Henderson</li>
          <li>Homes from $300Ks to $700K+</li>
          <li>Buyer representation 100% free — builder pays</li>
          <li>Located at Henderson NV 89011</li>
          <li>
            Contact: Dr. Jan Duffy {CONTACT_INFO.phone}
          </li>
        </ul>
      </div>
    </section>
  )
}
