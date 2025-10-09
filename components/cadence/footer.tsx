import Link from 'next/link'
import { Mail } from 'lucide-react'
import { CONTACT_INFO } from './contact-info'

export function Footer() {
  const footerLinks = [
    { title: 'Builders', href: '/new-homes' },
    { title: 'News', href: '/news' },
    { title: 'Events', href: '/lifestyle/events' },
    { title: 'Amenities', href: '/lifestyle/amenities' },
    { title: 'Realtors', href: '/realtors' },
    { title: 'Maps', href: '/maps' },
    { title: 'Lifestyle', href: '/lifestyle' },
    { title: 'Contact Us', href: '/contact' },
    { title: 'Gallery', href: '/gallery' },
    { title: 'FAQs', href: '/faqs' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="text-3xl font-bold mb-2">
            CADENCE HENDERSON
          </div>
          <div className="text-base text-gray-300 mb-1">
            Homes By Dr Jan Duffy
          </div>
          <div className="text-sm text-gray-400 mb-1">
            Dr. Jan Duffy, REALTOR® | License S.0197614
          </div>
          <div className="text-xs text-gray-400 mb-1">
            Berkshire Hathaway HomeServices Nevada Properties
          </div>
          <div className="text-xs text-gray-400 mb-6">
            1170 E. Sunset Rd, Ste. 101, Henderson, NV 89011 | 702-500-1955
          </div>
          <div className="flex items-center justify-center gap-2 mb-6 text-blue-400">
            <Mail size={16} />
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="hover:text-blue-300 transition-colors"
            >
              {CONTACT_INFO.email}
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {footerLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-blue-400 transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p className="text-sm">
            Copyright 2025 Cadence Henderson | Homes By Dr Jan Duffy S.0197614
          </p>
          <p className="text-xs mt-2">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

