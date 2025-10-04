'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, ArrowRight, ChevronDown, Instagram, MessageCircle, Facebook } from 'lucide-react'
import { useState } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false)
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsNewsletterSubmitting(true)
    setNewsletterStatus('idle')

    try {
      const response = await fetch('/api/newsletter-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      })

      if (response.ok) {
        setNewsletterStatus('success')
        setNewsletterEmail('')
      } else {
        setNewsletterStatus('error')
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error)
      setNewsletterStatus('error')
    } finally {
      setIsNewsletterSubmitting(false)
    }
  }
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false)

  const footerLinks = {
    quickLinks: [
      { name: 'Corporate Gifting', href: '/solutions/corporate' },
      { name: 'Hospitality', href: '/solutions/hospitality' },
      { name: 'Interiors', href: '/solutions/interior' },
      { name: 'Workplace & Stationery', href: '/solutions/workplace' },
      { name: 'Lifestyle & Decor', href: '/solutions/lifestyle' },
      { name: 'Materials & Innovation', href: '/solutions/materials' }
    ]
  }

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/oaklivindia',
      icon: Instagram,
      color: 'hover:text-pink-400'
    },
    {
      name: 'WhatsApp',
      href: 'https://whatsapp.com/channel/0029VaC99a7JZg44qOgcBA0t',
      icon: MessageCircle,
      color: 'hover:text-green-400'
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/oaklivindia',
      icon: Facebook,
      color: 'hover:text-blue-400'
    }
  ]

  return (
    <footer className="bg-cork-900 text-white">

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-cork-500 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12,16 Q10,12 8,8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M10,14 Q8,12 6,10" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
                  <path d="M10,14 Q8,16 6,18" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
                  <path d="M14,10 Q16,8 18,6" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
                  <path d="M14,10 Q16,12 18,14" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
                  <path d="M12,8 Q14,6 16,4" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
                </svg>
                  </div>
                  <div>
                <h1 className="text-2xl font-serif font-bold text-white">
                  OAKLIV
                </h1>
                <p className="text-xs text-cork-300 font-medium">THE CORK STUDIO</p>
              </div>
            </Link>
            
            <p className="text-cork-200 mb-6 max-w-md">
              Northeast India's first sustainable design studio, specializing in premium cork solutions 
              for enterprises, hospitality, and luxury brands.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-cork-200">
                <Phone className="w-4 h-4 text-gold-400" />
                <span>+91 98765 43210</span>
                  </div>
              <div className="flex items-center space-x-3 text-cork-200">
                <Mail className="w-4 h-4 text-gold-400" />
                <span>hello@oakliv.com</span>
                </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-cork-800 rounded-lg flex items-center justify-center text-cork-300 transition-all duration-300 ${social.color} hover:bg-cork-700 hover:scale-110`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
            </div>
          {/* Quick Links */}
          <div>
            <button 
              onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
              className="flex items-center justify-between w-full text-left text-lg font-semibold mb-4 hover:text-gold-400 transition-colors duration-300"
            >
              Quick Links
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-300 ${
                  isQuickLinksOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>
            <motion.ul 
              className="space-y-3"
              initial={false}
              animate={{
                height: isQuickLinksOpen ? 'auto' : 0,
                opacity: isQuickLinksOpen ? 1 : 0
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-cork-200 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-cork-200 mb-4">Get product updates and design inspiration.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex items-center bg-white/10 rounded-lg overflow-hidden">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full bg-transparent px-4 py-3 text-sm placeholder:text-cork-300 focus:outline-none"
                  required
                />
                <button 
                  type="submit" 
                  disabled={isNewsletterSubmitting}
                  className={`px-4 py-3 font-semibold transition-colors duration-300 ${
                    isNewsletterSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gold-500 text-cork-900 hover:bg-gold-400'
                  }`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              {/* Newsletter Status Messages */}
              {newsletterStatus === 'success' && (
                <p className="text-xs text-green-400">✅ Successfully subscribed!</p>
              )}
              
              {newsletterStatus === 'error' && (
                <p className="text-xs text-red-400">❌ Subscription failed. Please try again.</p>
              )}
              
              {newsletterStatus === 'idle' && (
                <p className="text-xs text-cork-400">Get product updates and design inspiration delivered to your inbox.</p>
              )}
            </form>
          </div>
          </div>
        </div>

        {/* Bottom Bar */}
      <div className="border-t border-cork-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-cork-300 text-sm">
              © {currentYear} Oakliv Eco India Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-cork-300 text-sm">
              <Link href="/privacy" className="hover:text-gold-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gold-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-gold-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }