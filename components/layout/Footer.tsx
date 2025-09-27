'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, ArrowRight } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    solutions: [
      { name: 'Corporate Gifting', href: '/solutions/corporate' },
      { name: 'Hospitality', href: '/solutions/hospitality' },
      { name: 'Interiors', href: '/solutions/interior' },
      { name: 'Custom Solutions', href: '/solutions/custom' }
    ]
  }

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
            </div>
          {/* Solutions Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-cork-200 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-cork-200 mb-4">Get product updates and design inspiration.</p>
            <form className="space-y-3">
              <div className="flex items-center bg-white/10 rounded-lg overflow-hidden">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-transparent px-4 py-3 text-sm placeholder:text-cork-300 focus:outline-none"
                  required
                />
                <button type="submit" className="px-4 py-3 bg-gold-500 text-cork-900 font-semibold hover:bg-gold-400 transition-colors duration-300">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-cork-400">We’ll reach you at the contact number after you subscribe.</p>
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