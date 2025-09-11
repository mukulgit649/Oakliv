'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download, Calculator } from 'lucide-react'

const FinalCTA = () => {

  return (
    <section className="section-padding bg-gradient-to-br from-cork-800 via-cork-700 to-cork-800 relative overflow-hidden">
      {/* Premium Background Overlay */}
      <div className="absolute inset-0 bg-premium-pattern opacity-10"></div>
      
      {/* Subtle Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-16 left-8 w-6 h-6 bg-gold-400 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-32 right-16 w-4 h-4 bg-eco-400 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-32 left-1/3 w-3 h-3 bg-gold-300 rounded-full"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Ready to <span className="text-gold-400">Partner</span> With Us?
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-cream-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            From bulk gifting to hospitality solutions — let's create 
            sustainable designs that make an impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              {/* Highlight bar behind first button */}
              <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-400 to-gold-600 rounded-full"></div>
              <Link href="/catalogue" className="group relative overflow-hidden bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center shadow-lg hover:shadow-xl">
                <Download className="w-5 h-5 mr-3" />
                Request a Catalogue
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              {/* Highlight bar behind second button */}
              <div className="absolute -left-2 top-0 bottom-0 w-1 bg-white rounded-full"></div>
              <Link href="/pricing" className="group relative overflow-hidden bg-white text-cork-800 hover:bg-cream-50 px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center shadow-lg hover:shadow-xl border border-cream-200">
                <Calculator className="w-5 h-5 mr-3" />
                Get Bulk Pricing
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 text-center"
          >
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-cream-200 font-medium">Projects Delivered</div>
            </div>
            
            {/* Separator dot */}
            <div className="w-2 h-2 bg-gold-400 rounded-full hidden md:block"></div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-cream-200 font-medium">Enterprise Clients</div>
            </div>
            
            {/* Separator dot */}
            <div className="w-2 h-2 bg-gold-400 rounded-full hidden md:block"></div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-cream-200 font-medium">Sustainable</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export { FinalCTA }
