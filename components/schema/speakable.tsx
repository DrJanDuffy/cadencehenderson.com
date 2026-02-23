/**
 * Speakable JSON-LD schema for voice search / AEO (Answer Engine Optimization).
 * Tells Google which parts of the page are most suitable for audio playback
 * via Google Assistant and voice-activated devices.
 * @see https://schema.org/speakable
 * @see https://developers.google.com/search/docs/appearance/structured-data/speakable
 */
export function SpeakableSchema({ selectors }: { selectors?: string[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: selectors ?? ['h1', '[data-speakable]', '.speakable'],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
