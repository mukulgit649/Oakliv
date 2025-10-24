'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Cork Forest Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80")`,
        }}
      />
      
      {/* Premium Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cork-900/85 via-cork-800/75 to-cork-900/85"></div>
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5F5DC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Premium Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Floating Particles */}
        {isClient && (
          <>
            <motion.div
              animate={{ 
                y: [0, -30, 0],
                x: [0, 10, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-32 left-16 w-12 h-12 bg-gradient-to-br from-gold-400/30 to-gold-600/30 rounded-full blur-sm"
            />
            <motion.div
              animate={{ 
                y: [0, 35, 0],
                x: [0, -15, 0],
                opacity: [0.1, 0.6, 0.1],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-48 right-24 w-8 h-8 bg-gradient-to-br from-eco-400/40 to-eco-600/40 rounded-full blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, 12, 0],
            opacity: [0.15, 0.5, 0.15],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-48 left-1/3 w-6 h-6 bg-gradient-to-br from-cork-400/30 to-cork-600/30 rounded-full blur-sm"
        />
        
        {/* Small Sparkle Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -Math.random() * 50 - 20, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, Math.random() * 0.8 + 0.2, 0],
              scale: [0, Math.random() * 0.8 + 0.4, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
            className="absolute w-2 h-2 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        
        {/* Glowing Orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.3, 0.05]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-eco-400/15 to-eco-600/15 rounded-full blur-2xl"
        />
          </>
        )}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 relative text-center lg:text-left"
          >
            {/* Premium Glow Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold-400/5 via-transparent to-eco-400/5 rounded-3xl blur-3xl"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            
            {/* Floating Text Particles */}
            <motion.div
              className="absolute -top-4 -right-4 w-2 h-2 bg-gold-400 rounded-full"
              animate={{ 
                y: [0, -10, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: 12 
              }}
            />
            <motion.div
              className="absolute top-1/2 -left-2 w-1 h-1 bg-eco-400 rounded-full"
              animate={{ 
                y: [0, -8, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: 13 
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight"
              >
                <motion.span 
                  initial={{ opacity: 0, x: -30, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                  className="block relative"
                >
                  <span className="bg-gradient-to-r from-white via-cream-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                  Bulk.
                  </span>
                </motion.span>
                
                <motion.span 
                  initial={{ opacity: 0, x: -30, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 1.0, type: "spring", stiffness: 100 }}
                  className="block relative"
                >
                  <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent drop-shadow-2xl">
                  Custom.
                  </span>
                </motion.span>
                
                <motion.span 
                  initial={{ opacity: 0, x: -30, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
                  className="block relative"
                >
                  <span className="bg-gradient-to-r from-eco-400 via-eco-300 to-eco-500 bg-clip-text text-transparent drop-shadow-2xl">
                  Sustainable.
                  </span>
                </motion.span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl relative mx-auto lg:mx-0"
              >
                <motion.span 
                  className="text-cream-100 drop-shadow-lg"
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(255,255,255,0)",
                      "0 0 20px rgba(255,255,255,0.3)",
                      "0 0 0px rgba(255,255,255,0)"
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: 5 
                  }}
              >
                Premium cork solutions crafted for corporate gifting, hospitality, and interiors — 
                </motion.span>
                <motion.span 
                  className="bg-gradient-to-r from-gold-300 via-gold-200 to-gold-400 bg-clip-text text-transparent font-medium drop-shadow-lg"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: 6 
                  }}
                >
                  {" "}where innovative design meets eco-responsibility.
                </motion.span>
              </motion.p>

              {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-6 sm:mt-8"
              >
                <Link href="/solutions">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-gradient-to-r from-cork-600 to-cork-700 hover:from-cork-700 hover:to-cork-800 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 min-h-[40px] sm:min-h-[48px]"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </Link>
                
                <Link href="/catalogue">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                    className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 min-h-[40px] sm:min-h-[48px]"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Request Catalogue</span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right Content - Cork Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center mt-8 lg:mt-0"
          >
            {/* Premium Background Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-gold-400/10 via-eco-400/5 to-cork-400/10 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            
            {/* Real Cork Products Showcase */}
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg h-64 sm:h-80 lg:h-96 flex items-center justify-center">
              {/* Cork Bark Texture Background */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="absolute inset-0 bg-cover bg-center rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cork-900/40 to-cork-800/60"></div>
              </motion.div>

              
              {/* Natural Cork Glow */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-2xl blur-3xl -z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cream-300 rounded-full flex justify-center backdrop-blur-sm bg-white/10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gold-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export { Hero }
