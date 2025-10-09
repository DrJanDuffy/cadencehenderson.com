import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
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
    'Discover Cadence, a premier master-planned community in Henderson, Nevada. Featuring new homes, exceptional amenities, and stunning views. Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices. Call 702-500-1955',
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <LocalBusinessSchema />
        <link rel="canonical" href="https://www.cadencehenderson.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
      </body>
    </html>
  )
}
