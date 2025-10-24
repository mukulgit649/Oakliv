'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, Search } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Cork Premium', href: '/cork-premium' },
    { name: 'Solutions', href: '/solutions' },
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
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="flex items-center group-hover:scale-105 transition-all duration-500"
              whileHover={{ rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* New OAKLIV Logo */}
              <img 
                src="/oakliv-logo.png" 
                alt="OAKLIV - The Cork Studio" 
                className="h-16 sm:h-20 md:h-24 w-auto"
                style={{
                  imageRendering: 'crisp-edges'
                }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.div 
                key={item.name} 
                whileHover={{ y: -2 }}
                className="relative"
              >
                <Link
                  href={item.href}
                  className="text-premium-black hover:text-cork-900 font-medium transition-all duration-500 relative group flex items-center space-x-1"
                >
                  <span>{item.name}</span>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-cork-500 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
                
                {/* Dropdown Menu - Currently disabled */}
              </motion.div>
            ))}
          </div>

          {/* Search Button */}
          <div className="hidden lg:flex items-center">
            {/* Search Icon Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg hover:bg-cork-50 transition-colors duration-300"
            >
              <Search className="w-5 h-5 text-cork-600 hover:text-cork-700" />
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 btn-mobile"
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
              className="lg:hidden bg-white border-t border-gray-100 nav-mobile"
            >
              <div className="py-6 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-3 px-4 text-premium-black hover:bg-cork-50 hover:text-cork-600 font-medium transition-colors duration-300 btn-mobile"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href="/contact"
                    className="flex items-center space-x-2 py-3 px-4 text-cork-600 font-medium btn-mobile"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 98765 43210</span>
                  </Link>
                  <Link
                    href="/quote"
                    className="block mt-4 mx-4 btn-primary text-center btn-mobile"
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
