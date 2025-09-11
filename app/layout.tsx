import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Chatbot } from '@/components/ai/Chatbot'
import { Analytics } from '@/components/analytics/Analytics'

const inter = Inter({ subsets: ['latin'] })

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
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
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
      </body>
    </html>
  )
}
