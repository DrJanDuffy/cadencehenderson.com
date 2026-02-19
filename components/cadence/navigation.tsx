'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CONTACT_INFO } from './contact-info'
import { CalendlyLink } from '@/components/calendly/calendly-link'
import { Menu, X, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigationItems = [
  {
    title: 'New Homes',
    href: '/new-homes',
    items: [
      {
        label: 'Start Your Search',
        href: CONTACT_INFO.realScoutSearchUrl,
        external: true,
      },
      { label: 'Beazer Homes', href: '/new-homes/beazer-homes' },
      { label: 'Century Communities', href: '/new-homes/century-communities' },
      { label: 'D.R. Horton', href: '/new-homes/dr-horton' },
      { label: 'Lennar', href: '/new-homes/lennar' },
      {
        label: 'Richmond American Homes',
        href: '/new-homes/richmond-american',
      },
      { label: 'StoryBook Homes', href: '/new-homes/storybook-homes' },
      { label: 'Taylor Morrison', href: '/new-homes/taylor-morrison' },
      { label: 'Woodside Homes', href: '/new-homes/woodside-homes' },
    ],
  },
  {
    title: 'Rentals',
    href: '/rentals',
    items: [
      { label: 'American Homes (AMH)', href: '/rentals/american-homes' },
      { label: 'Element 12', href: '/rentals/element-12' },
      { label: 'Adler', href: '/rentals/adler' },
    ],
  },
  {
    title: 'Lifestyle',
    href: '/lifestyle',
    items: [
      { label: 'Events', href: '/lifestyle/events' },
      { label: 'Parks & Trails', href: '/lifestyle/parks-trails' },
      {
        label: 'Shopping & Entertainment',
        href: '/lifestyle/shopping',
      },
      { label: 'Schools', href: '/lifestyle/schools' },
      { label: 'Amenities', href: '/lifestyle/amenities' },
      { label: 'Community', href: '/lifestyle/community' },
      {
        label: 'Cadence Animal Hospital',
        href: '/lifestyle/animal-hospital',
      },
    ],
  },
  {
    title: 'News',
    href: '/news',
    items: [
      { label: 'Media', href: '/news' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'FAQs', href: '/faqs' },
    ],
  },
  { title: 'Realtors', href: '/realtors' },
  { title: 'Past Home Sales', href: '/past-homesales' },
  { title: 'Residents', href: '/residents' },
  { title: 'Contact Us', href: '/contact' },
  { title: 'Maps', href: '/maps' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-900">CADENCE</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() =>
                  item.items && setActiveDropdown(item.title)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href || '#'}
                  className="text-gray-700 hover:text-blue-900 font-medium transition-colors py-2 block"
                >
                  {item.title}
                </Link>
                {item.items && activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50">
                    {item.items.map((subItem) =>
                      (subItem as { external?: boolean }).external ? (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ) : (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <CalendlyLink className="hidden lg:inline-block">
            <Button size="sm" className="bg-blue-900 hover:bg-blue-800 text-white shrink-0">
              Find a Realtor
            </Button>
          </CalendlyLink>

          {/* Search Icon */}
          <button
            className="hidden lg:block p-2 text-gray-700 hover:text-blue-900"
            aria-label="Search"
          >
            <Search size={24} />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="px-4 pb-4">
              <CalendlyLink>
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                  Find a Realtor
                </Button>
              </CalendlyLink>
            </div>
            {navigationItems.map((item) => (
              <div key={item.title} className="mb-2">
                <Link
                  href={item.href || '#'}
                  className="w-full text-left px-4 py-2 text-gray-700 font-medium block"
                  onClick={(e) => {
                    if (item.items) {
                      e.preventDefault()
                      setActiveDropdown(
                        activeDropdown === item.title ? null : item.title,
                      )
                    } else {
                      setIsOpen(false)
                    }
                  }}
                >
                  {item.title}
                </Link>
                {item.items && activeDropdown === item.title && (
                  <div className="pl-4">
                    {item.items.map((subItem) =>
                      (subItem as { external?: boolean }).external ? (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-gray-600 hover:text-blue-900"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      ) : (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-600 hover:text-blue-900"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

