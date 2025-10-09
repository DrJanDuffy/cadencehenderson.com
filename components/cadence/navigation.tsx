'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigationItems = [
  {
    title: 'New Homes',
    items: [
      'Start Your Search',
      'Beazer Homes',
      'Century Communities',
      'D.R. Horton',
      'Lennar',
      'Richmond American Homes',
      'StoryBook Homes',
      'Taylor Morrison',
      'Woodside Homes',
    ],
  },
  {
    title: 'Rentals',
    items: ['American Homes (AMH)', 'Element 12', 'Adler'],
  },
  {
    title: 'Lifestyle',
    items: [
      'Events',
      'Parks & Trails',
      'Shopping & Entertainment',
      'Schools',
      'Amenities',
      'Community',
      'Cadence Animal Hospital',
    ],
  },
  {
    title: 'News',
    items: ['Media', 'Gallery', 'FAQs'],
  },
  { title: 'Realtors' },
  { title: 'Residents' },
  { title: 'Contact Us' },
  { title: 'Maps' },
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
                <button className="text-gray-700 hover:text-blue-900 font-medium transition-colors py-2">
                  {item.title}
                </button>
                {item.items && activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

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
            {navigationItems.map((item) => (
              <div key={item.title} className="mb-2">
                <button
                  className="w-full text-left px-4 py-2 text-gray-700 font-medium"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === item.title ? null : item.title,
                    )
                  }
                >
                  {item.title}
                </button>
                {item.items && activeDropdown === item.title && (
                  <div className="pl-4">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-gray-600 hover:text-blue-900"
                      >
                        {subItem}
                      </Link>
                    ))}
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

