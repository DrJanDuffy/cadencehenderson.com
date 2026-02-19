import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photo Gallery | Cadence Henderson Community',
  description:
    'Explore photos of Cadence Henderson: Central Park, amenities, homes, and community events. See what makes Cadence special.',
  alternates: { canonical: 'https://www.cadencehenderson.com/gallery' },
}

export default function GalleryLayout({
  children,
}: { children: React.ReactNode }) {
  return children
}
