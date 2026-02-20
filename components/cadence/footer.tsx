import Link from 'next/link'
import { Mail, Calendar, Facebook, Instagram } from 'lucide-react'
import { CONTACT_INFO, SOCIAL_MEDIA } from './contact-info'
import { CalendlyLink } from '@/components/calendly/calendly-link'

export function Footer() {
  const footerLinks = [
    { title: 'Builders', href: '/new-homes' },
    { title: 'Rentals', href: CONTACT_INFO.realScoutRentalsUrl, external: true },
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
        {/* Schedule Consultation CTA */}
        <div className="text-center mb-10 pb-8 border-b border-gray-700">
          <h3 className="text-lg font-semibold mb-3">Ready to Find Your Dream Home?</h3>
          <p className="text-gray-400 text-sm mb-4 max-w-md mx-auto">
            Schedule a free 15-minute consultation with Dr. Jan Duffy
          </p>
          <CalendlyLink>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-blue-700 hover:bg-blue-600 font-medium transition-colors">
              <Calendar size={18} />
              Schedule a Call
            </button>
          </CalendlyLink>
        </div>
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
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4 text-blue-400">
            <a
              href={CONTACT_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-blue-300 transition-colors font-medium"
              aria-label="Schedule a consultation with Dr. Jan Duffy"
            >
              <Calendar size={16} aria-hidden />
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
          <div className="flex items-center justify-center gap-4 mb-6" aria-label="Social media">
            <a
              href={SOCIAL_MEDIA.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href={SOCIAL_MEDIA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={SOCIAL_MEDIA.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              aria-label="X (Twitter)"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {footerLinks.map((link) =>
              (link as { external?: boolean }).external ? (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  {link.title}
                </a>
              ) : (
                <Link
                  key={link.title}
                  href={link.href}
                  className="hover:text-blue-400 transition-colors"
                >
                  {link.title}
                </Link>
              )
            )}
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

