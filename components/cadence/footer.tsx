import Link from 'next/link'
import { Mail, Calendar } from 'lucide-react'
import { CONTACT_INFO } from './contact-info'

export function Footer() {
  const footerLinks = [
    { title: 'Builders', href: '/new-homes' },
    { title: 'Rentals', href: '/rentals' },
    { title: 'News', href: '/news' },
    { title: 'Events', href: '/lifestyle/events' },
    { title: 'Amenities', href: '/lifestyle/amenities' },
    { title: 'Community', href: '/lifestyle/community' },
    { title: 'Realtors', href: '/realtors' },
    { title: 'Residents', href: '/residents' },
    { title: 'Past Home Sales', href: '/past-homesales' },
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
            Dr. Jan Duffy, REALTOR® | License {CONTACT_INFO.licenseNumber}
          </div>
          <div className="text-xs text-gray-400 mb-1">
            Berkshire Hathaway HomeServices Nevada Properties
          </div>
          <div className="text-xs text-gray-400 mb-6">
            {CONTACT_INFO.welcomeCenter} | {CONTACT_INFO.phone}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-blue-400">
            <a
              href={CONTACT_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-blue-300 transition-colors font-medium"
            >
              <Calendar size={16} />
              Schedule a consultation
            </a>
            <span className="text-gray-500">|</span>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center gap-2 hover:text-blue-300 transition-colors"
            >
              <Mail size={16} />
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
            Copyright 2025 Cadence Henderson | Homes By Dr Jan Duffy {CONTACT_INFO.licenseNumber}
          </p>
          <p className="text-xs mt-2">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

