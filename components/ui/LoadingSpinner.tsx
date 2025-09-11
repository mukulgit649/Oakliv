'use client'

import { motion } from 'framer-motion'

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-cream-50 flex items-center justify-center z-50">
      <div className="text-center space-y-6">
        {/* Logo Animation */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-20 h-20 bg-gradient-to-br from-cork-500 to-gold-500 rounded-2xl flex items-center justify-center mx-auto"
        >
          <span className="text-white font-bold text-3xl">O</span>
        </motion.div>
        
        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-2"
        >
          <h3 className="text-2xl font-serif font-bold text-cork-900">
            Oakliv
          </h3>
          <p className="text-cork-600">Loading premium experience...</p>
        </motion.div>
        
        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: i * 0.2 
              }}
              className="w-3 h-3 bg-cork-400 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export { LoadingSpinner }
