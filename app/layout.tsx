import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import DeployBanner from '../components/deploy-banner'
import { ScrollToTop } from '../components/cadence/scroll-to-top'
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
  openGraph: {
    title: 'Cadence Henderson | Homes By Dr Jan Duffy',
    description:
      'Discover Cadence, a premier master-planned community in Henderson, Nevada. Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cadence Henderson | Homes By Dr Jan Duffy',
    description:
      'Discover Cadence, a premier master-planned community in Henderson, Nevada. Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
