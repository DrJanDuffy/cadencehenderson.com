import Link from 'next/link'

export function Footer() {
  const footerLinks = [
    { title: 'Builders', href: '#' },
    { title: 'News', href: '#' },
    { title: 'Events', href: '#' },
    { title: 'Amenities', href: '#' },
    { title: 'Realtors', href: '#' },
    { title: 'Maps', href: '#' },
    { title: 'Lifestyle', href: '#' },
    { title: 'Contact Us', href: '#' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="text-3xl font-bold mb-6">CADENCE</div>
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

