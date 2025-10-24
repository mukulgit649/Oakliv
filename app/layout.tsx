import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Chatbot } from '@/components/ai/Chatbot'
import { Analytics } from '@/components/analytics/Analytics'
import { PWAProvider } from '@/components/pwa/PWAProvider'
import { MobileOptimized } from '@/components/ui/MobileOptimized'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#4E342E',
}

export const metadata: Metadata = {
  title: 'Oakliv - Premium Sustainable Design Studio | Cork Products & Eco Solutions',
  description: 'Discover Oakliv\'s premium sustainable design solutions. Luxury cork products, corporate gifting, hospitality solutions, and interior design. Made in Northeast India, crafted for the world.',
  keywords: 'sustainable design, cork products, eco-friendly, luxury gifts, corporate gifting, hospitality, interior design, Northeast India, premium materials',
  authors: [{ name: 'Oakliv Eco India Pvt. Ltd.' }],
  creator: 'Oakliv Eco India Pvt. Ltd.',
  publisher: 'Oakliv Eco India Pvt. Ltd.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://oakliv.com'),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Oakliv',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
  openGraph: {
    title: 'Oakliv - Premium Sustainable Design Studio',
    description: 'Discover Oakliv\'s premium sustainable design solutions. Luxury cork products, corporate gifting, hospitality solutions, and interior design.',
    url: 'https://oakliv.com',
    siteName: 'Oakliv',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Oakliv Premium Sustainable Design Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oakliv - Premium Sustainable Design Studio',
    description: 'Discover Oakliv\'s premium sustainable design solutions. Luxury cork products, corporate gifting, hospitality solutions, and interior design.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-premium-white`}>
        <Navbar />
        <main className="min-h-screen relative">
          {children}
        </main>
        <Footer />
        <Chatbot />
        <Analytics />
        <PWAProvider />
        <MobileOptimized />
      </body>
    </html>
  )
}
