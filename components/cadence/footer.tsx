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
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="text-3xl font-bold mb-2">CADENCE HENDERSON</div>
          <div className="text-sm text-gray-400 mb-6">
            Represented by Dr. Jan Sells
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
          <p>Copyright 2025 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

