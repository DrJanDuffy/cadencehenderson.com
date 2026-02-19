import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://calendly.com https://assets.calendly.com",
              "connect-src 'self' https: https://em.realscout.com https://www.realscout.com https://calendly.com https://assets.calendly.com",
              "frame-src 'self' https: https://calendly.com",
              "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
              "img-src 'self' data: blob: https:",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
