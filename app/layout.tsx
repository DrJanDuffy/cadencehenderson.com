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
  title: 'Cadence Henderson | Homes By Dr Jan Duffy - Master Planned Community',
  description:
    `Discover Cadence, a premier master-planned community in Henderson, Nevada. Featuring new homes, exceptional amenities, and stunning views. Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices. Call ${CONTACT_INFO.phone}`,
  metadataBase: new URL('https://www.cadencehenderson.com'),
  openGraph: {
    siteName: 'Cadence Henderson | Homes By Dr Jan Duffy',
    title: 'Cadence Henderson | Homes By Dr Jan Duffy',
    description:
      'Discover Cadence, a premier master-planned community in Henderson, Nevada. Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices.',
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
    title: 'Cadence Henderson | Homes By Dr Jan Duffy',
    description:
      'Discover Cadence, a premier master-planned community in Henderson, Nevada. Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices.',
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
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80'

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <LocalBusinessSchema />
        {/* Preconnect to critical LCP and third-party origins (max 4) */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://em.realscout.com" />
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
          strategy="afterInteractive"
        />
        {process.env.NEXT_PUBLIC_REALSCOUT_EMBED_ID && (
          <Script
            src={`https://em.realscout.com/embed/${process.env.NEXT_PUBLIC_REALSCOUT_EMBED_ID}.js`}
            strategy="afterInteractive"
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
