import type { Metadata } from 'next'
import Script from 'next/script'
import { CalendlyProvider } from '../components/calendly/calendly-loader'
import { CalendlyStyles } from '../components/calendly/calendly-styles'
import { SkipToContent } from '../components/cadence/skip-to-content'
import { Geist, Geist_Mono } from 'next/font/google'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { ThemeProvider } from 'next-themes'
import DeployBanner from '../components/deploy-banner'
import { ScrollToTop } from '../components/cadence/scroll-to-top'
import { LocalBusinessSchema } from '../components/schema/local-business'
import { FAQPageSchema } from '../components/schema/faq-page'
import { GeoMeta } from '../components/schema/geo-meta'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Cadence Henderson | Homes for Sale 89011 - Dr Jan Duffy',
  description:
    'Cadence Henderson homes for sale, new construction & townhomes in 89011. Master-planned community Henderson NV. Dr. Jan Duffy, REALTOR®.',
  metadataBase: new URL('https://www.cadencehenderson.com'),
  openGraph: {
    siteName: 'Cadence Henderson | Homes By Dr Jan Duffy',
    title: 'Cadence Henderson | Homes for Sale 89011 - Dr Jan Duffy',
    description:
      'Cadence Henderson homes for sale and new construction in Henderson NV 89011. Master-planned community. Dr. Jan Duffy, REALTOR®.',
    url: 'https://www.cadencehenderson.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cadence Henderson - Homes By Dr Jan Duffy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cadence Henderson | Homes for Sale 89011 - Dr Jan Duffy',
    description:
      'Cadence Henderson homes for sale and new construction in Henderson NV 89011. Dr. Jan Duffy, REALTOR®.',
    images: ['/og-image.png'],
    creator: '@CadenceHenderson',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const heroImageUrl =
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&fm=webp'

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <LocalBusinessSchema />
        <FAQPageSchema />
        <GeoMeta />
        {/* Preconnect to critical LCP and third-party origins (max 4) */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://em.realscout.com" crossOrigin="" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://cadencenv.com" />
        {/* LCP image preload so browser discovers it from initial HTML */}
        <link rel="preload" as="image" href={heroImageUrl} />
        {/* Calendly CSS: media=print so non-blocking; CalendlyStyles sets media=all after hydration */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
          media="print"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="lazyOnload"
        />
        {process.env.NEXT_PUBLIC_REALSCOUT_EMBED_ID && (
          <Script
            src={`https://em.realscout.com/embed/${process.env.NEXT_PUBLIC_REALSCOUT_EMBED_ID}.js`}
            strategy="lazyOnload"
          />
        )}
        <CalendlyStyles />
        <CalendlyProvider>
        <SkipToContent />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <DeployBanner />
          {children}
          <ScrollToTop />
        </ThemeProvider>
        </CalendlyProvider>
      </body>
    </html>
  )
}
