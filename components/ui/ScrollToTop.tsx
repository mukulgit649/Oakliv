'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 sm:bottom-32 sm:right-8 z-40 w-10 h-10 sm:w-12 sm:h-12 bg-cork-900 hover:bg-cork-800 text-cream-50 rounded-full shadow-luxury flex items-center justify-center group transition-all duration-300"
        >
          <ArrowUp className="w-4 h-4 sm:w-6 sm:h-6 group-hover:translate-y-[-2px] transition-transform duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export { ScrollToTop }
