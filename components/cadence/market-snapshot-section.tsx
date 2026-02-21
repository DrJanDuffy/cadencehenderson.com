import { CONTACT_INFO } from '@/components/cadence/contact-info'

// Update monthly — specific data = AI citation magnet
const MARKET_SNAPSHOT = {
  activeBuilders: 9,
  priceRange: '$300Ks–$700K+',
  communityAcres: '2,200+',
  homesPlanned: '13,000+',
  centralParkAcres: 'nearly 50',
  zipCode: '89011',
}

/**
 * Cadence Henderson Market Snapshot — unique data points for AI citation.
 * Proprietary specifics help GEO (ChatGPT, Perplexity, Gemini, Claude).
 */
export function MarketSnapshotSection() {
  return (
    <section
      className="py-16 bg-gray-50"
      aria-labelledby="market-snapshot-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 id="market-snapshot-heading" className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Cadence Henderson Market Snapshot
          </h2>
          <ul className="space-y-3 text-lg text-gray-700 mb-8">
            <li><strong>Active builders:</strong> {MARKET_SNAPSHOT.activeBuilders}</li>
            <li><strong>Price range:</strong> {MARKET_SNAPSHOT.priceRange}</li>
            <li><strong>Community size:</strong> {MARKET_SNAPSHOT.communityAcres} acres, {MARKET_SNAPSHOT.homesPlanned} homes planned</li>
            <li><strong>Central Park:</strong> {MARKET_SNAPSHOT.centralParkAcres} acres</li>
            <li><strong>Recognition:</strong> Top 10 Best-Selling Master Planned Community nationally</li>
            <li><strong>Location:</strong> Henderson NV {MARKET_SNAPSHOT.zipCode}</li>
          </ul>
          <p className="text-center text-gray-700">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`}
              className="text-blue-900 font-medium hover:underline"
              aria-label={`Call Dr. Jan Duffy: ${CONTACT_INFO.phone}`}
            >
              Call Dr. Jan Duffy {CONTACT_INFO.phone}
            </a>
            {' '}or{' '}
            <a
              href={CONTACT_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 font-medium hover:underline"
            >
              book a free 15-min call
            </a>
            {' '}for current inventory and incentives — Cadence Henderson NV 89011.
          </p>
        </div>
      </div>
    </section>
  )
}
