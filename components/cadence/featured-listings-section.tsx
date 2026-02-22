import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'

/**
 * Static featured listings showcase (plan option C).
 * Uses Cloudflare Images. Links to RealScout for live search.
 * Data is placeholder until RealScout API is available.
 */
const FEATURED_LISTINGS = [
  {
    imageId: SITE_IMAGES.homes.exterior1,
    price: '$535,000',
    address: '754 Solstice St',
    city: 'Henderson',
    state: 'NV',
    beds: 4,
    baths: 3,
    sqft: 1754,
  },
  {
    imageId: SITE_IMAGES.homes.exterior2,
    price: '$489,900',
    address: '821 Grand Cadence Dr',
    city: 'Henderson',
    state: 'NV',
    beds: 3,
    baths: 2,
    sqft: 1520,
  },
  {
    imageId: SITE_IMAGES.homes.exterior3,
    price: '$599,000',
    address: '412 Warm Springs Rd',
    city: 'Henderson',
    state: 'NV',
    beds: 4,
    baths: 3,
    sqft: 2100,
  },
  {
    imageId: SITE_IMAGES.gallery.newHome,
    price: '$425,000',
    address: '633 Mary Baer Way',
    city: 'Henderson',
    state: 'NV',
    beds: 3,
    baths: 2,
    sqft: 1450,
  },
  {
    imageId: SITE_IMAGES.gallery.modernExterior,
    price: '$675,000',
    address: '901 Grand Cadence Dr',
    city: 'Henderson',
    state: 'NV',
    beds: 5,
    baths: 4,
    sqft: 2850,
  },
  {
    imageId: SITE_IMAGES.gallery.communityGathering,
    price: '$520,000',
    address: '558 Solstice St',
    city: 'Henderson',
    state: 'NV',
    beds: 4,
    baths: 2,
    sqft: 1880,
  },
] as const

export function FeaturedListingsSection() {
  return (
    <section
      className="py-16 bg-white"
      aria-labelledby="featured-listings-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2
            id="featured-listings-heading"
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Featured Homes in Cadence Henderson
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore new homes and resale in Cadence Henderson NV 89011. Dr. Jan
            Duffy represents buyers at no cost — builder pays the fee.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {FEATURED_LISTINGS.map((listing, i) => (
            <article
              key={i}
              className="rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-52 bg-gray-200">
                <Image
                  src={cfImage(listing.imageId, 'card')}
                  alt={`Cadence Henderson home at ${listing.address}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/95 rounded text-blue-900 font-semibold text-lg">
                  {listing.price}
                </div>
              </div>
              <div className="p-4">
                <p className="font-medium text-gray-900">{listing.address}</p>
                <p className="text-gray-600 text-sm">
                  {listing.city}, {listing.state}
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  {listing.beds} Beds | {listing.baths} Baths | {listing.sqft}{' '}
                  Sq Ft
                </p>
                <Button
                  className="mt-4 w-full bg-blue-900 hover:bg-blue-800"
                  asChild
                >
                  <Link
                    href={CONTACT_INFO.realScoutSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center">
          <Button
            size="lg"
            className="bg-blue-900 hover:bg-blue-800"
            asChild
          >
            <Link
              href={CONTACT_INFO.realScoutSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Listings
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
