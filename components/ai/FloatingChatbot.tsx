'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Sparkles } from 'lucide-react'

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-cork-900 hover:bg-cork-800 rounded-full shadow-luxury flex items-center justify-center group transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="w-8 h-8 text-cream-50 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-cork-900 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
      </motion.button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-8 z-50 w-80 bg-white rounded-3xl shadow-luxury border border-cork-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cork-900 to-cork-800 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-cork-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Assistant</h3>
                    <p className="text-sm text-cream-200">Coming Soon</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8 text-gold-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-premium-black mb-2">
                    AI Assistant Coming Soon
                  </h4>
                  <p className="text-premium-gray text-sm leading-relaxed">
                    We're building an intelligent AI assistant to help you discover our products, 
                    get design consultations, and answer all your questions about sustainable solutions.
                  </p>
                </div>
              </div>

              {/* Features Preview */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-premium-gray">
                  <div className="w-2 h-2 bg-gold-400 rounded-full" />
                  <span>Product recommendations</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-premium-gray">
                  <div className="w-2 h-2 bg-gold-400 rounded-full" />
                  <span>Design consultation</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-premium-gray">
                  <div className="w-2 h-2 bg-gold-400 rounded-full" />
                  <span>Instant quotes</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-premium-gray">
                  <div className="w-2 h-2 bg-gold-400 rounded-full" />
                  <span>Sustainability insights</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 border-t border-cork-100">
                <button className="w-full bg-cork-900 hover:bg-cork-800 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300">
                  Get Notified When Ready
                </button>
                <p className="text-xs text-center text-premium-gray mt-2">
                  Expected launch: Q2 2024
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export { FloatingChatbot }
