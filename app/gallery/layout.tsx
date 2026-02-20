import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photo Gallery | Cadence Henderson 89011',
  description:
    'Cadence Henderson gallery: Central Park, amenities, homes, community. Cadence master-planned community Henderson NV 89011.',
  alternates: { canonical: 'https://www.cadencehenderson.com/gallery' },
}

export default function GalleryLayout({
  children,
}: { children: React.ReactNode }) {
  return children
}
