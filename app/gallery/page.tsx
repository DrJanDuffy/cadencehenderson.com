'use client'

import { useState } from 'react'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { Button } from '@/components/ui/button'
import { Image as ImageIcon, X } from 'lucide-react'

const galleryCategories = [
  'All',
  'Central Park',
  'Amenities',
  'Homes',
  'Events',
  'Community',
]

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
    title: 'Central Park Vista',
    category: 'Central Park',
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    title: 'Beautiful New Home',
    category: 'Homes',
  },
  {
    url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=80',
    title: 'Resort-Style Pool',
    category: 'Amenities',
  },
  {
    url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80',
    title: 'Concert in the Park',
    category: 'Events',
  },
  {
    url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80',
    title: 'Community Gathering',
    category: 'Community',
  },
  {
    url: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=1200&q=80',
    title: 'Park Playground',
    category: 'Central Park',
  },
  {
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
    title: 'Fitness Center',
    category: 'Amenities',
  },
  {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    title: 'Modern Home Exterior',
    category: 'Homes',
  },
  {
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
    title: 'Walking Trails',
    category: 'Central Park',
  },
  {
    url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80',
    title: 'Community Event',
    category: 'Events',
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    title: 'Luxury Home Interior',
    category: 'Homes',
  },
  {
    url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80',
    title: 'Dog Park Fun',
    category: 'Amenities',
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-900 to-pink-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <ImageIcon size={64} className="mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl">
              Explore life in Cadence through stunning photos of our community,
              homes, amenities, and events. See what makes Cadence special.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-pink-900 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-pink-100 hover:text-pink-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => setLightboxImage(image.url)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundImage: `url('${image.url}')` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-bold">{image.title}</p>
                    <p className="text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setLightboxImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Experience Cadence in Person
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Photos can only tell part of the story. Schedule a tour and see
              the beauty of Cadence for yourself.
            </p>
            <Button size="lg" className="bg-pink-900 hover:bg-pink-800">
              Schedule Your Tour
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

