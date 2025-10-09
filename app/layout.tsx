import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import DeployBanner from '../components/deploy-banner'
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
  title: 'Cadence Henderson - Master Planned Community | Dr. Jan Sells',
  description:
    'Discover Cadence, a premier master-planned community in Henderson, Nevada. Featuring new homes, exceptional amenities, and stunning views. Contact Dr. Jan at DrJanSells@CadenceHenderson.com',
  openGraph: {
    title: 'Cadence Henderson - Master Planned Community | Dr. Jan Sells',
    description:
      'Discover Cadence, a premier master-planned community in Henderson, Nevada. Featuring new homes, exceptional amenities, and stunning views.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cadence Henderson - Master Planned Community | Dr. Jan Sells',
    description:
      'Discover Cadence, a premier master-planned community in Henderson, Nevada. Featuring new homes, exceptional amenities, and stunning views.',
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
        </ThemeProvider>
      </body>
    </html>
  )
}
