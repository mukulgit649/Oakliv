'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail, Search } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Industries', href: '/industries' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-luxury border-b border-cork-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="w-12 h-12 bg-cork-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-500 shadow-cork group-hover:shadow-gold"
              whileHover={{ rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Plant Sprout Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12,16 Q10,12 8,8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M10,14 Q8,12 6,10" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
                <path d="M10,14 Q8,16 6,18" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
                <path d="M14,10 Q16,8 18,6" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
                <path d="M14,10 Q16,12 18,14" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
                <path d="M12,8 Q14,6 16,4" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
              </svg>
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-serif font-bold text-premium-black group-hover:text-cork-600 transition-colors duration-500">
                OAKLIV
              </h1>
              <p className="text-xs text-premium-gray font-medium">THE CORK STUDIO</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <Link
                  href={item.href}
                  className="text-premium-black hover:text-cork-900 font-medium transition-all duration-500 relative group"
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold-500 to-cork-500 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* AI Search Bar & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* AI Search Bar Placeholder */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center space-x-2 bg-cream-50 border border-cork-200 rounded-xl px-4 py-3 hover:border-cork-300 hover:shadow-soft transition-all duration-500 backdrop-premium">
                <Search className="w-4 h-4 text-cork-500" />
                <input
                  type="text"
                  placeholder="AI Search coming soon..."
                  className="bg-transparent text-sm text-cork-700 placeholder-cork-400 focus:outline-none w-48"
                  disabled
                />
              </div>
            </motion.div>
            <Link href="/contact" className="btn-primary">
              Request Catalogue
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="py-6 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-3 px-4 text-premium-black hover:bg-cork-50 hover:text-cork-600 font-medium transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href="/contact"
                    className="flex items-center space-x-2 py-3 px-4 text-cork-600 font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 98765 43210</span>
                  </Link>
                  <Link
                    href="/quote"
                    className="block mt-4 mx-4 btn-primary text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export { Navbar }
