'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const About = () => {


  return (
    <section className="section-padding bg-white relative overflow-hidden">
      
      {/* Stunning Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Floating Particles */}
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.1, 0.6, 0.1],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-full blur-lg"
        />
        <motion.div
          animate={{ 
            y: [0, 50, 0],
            x: [0, -25, 0],
            opacity: [0.05, 0.4, 0.05],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-eco-400/15 to-eco-600/15 rounded-full blur-lg"
        />
        
        {/* Small Sparkle Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -Math.random() * 60 - 30, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, Math.random() * 0.8 + 0.2, 0],
              scale: [0, Math.random() * 0.8 + 0.4, 0]
            }}
            transition={{ 
              duration: Math.random() * 12 + 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: Math.random() * 6
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
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-r from-cork-400/10 to-cork-600/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.25, 0.05]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-gold-400/8 to-gold-600/8 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8 relative">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 relative z-10"
            >
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-premium-black mb-6"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(0,0,0,0)",
                    "0 0 20px rgba(139, 69, 19, 0.3)",
                    "0 0 0px rgba(0,0,0,0)"
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: 1 
                }}
              >
                About <span className="text-cork-600">Oakliv</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-premium-gray leading-relaxed"
                animate={{ 
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: 3 
                }}
              >
                Northeast India's first sustainable design studio, specializing in premium cork solutions 
                for enterprises, hospitality, and luxury brands.
              </motion.p>
              
              <motion.p 
                className="text-premium-gray leading-relaxed"
                animate={{ 
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  delay: 3.5 
                }}
              >
                Founded in 2021, we combine traditional craftsmanship with modern design 
                to create beautiful, sustainable products.
              </motion.p>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <Link href="/about" className="btn-primary group inline-flex items-center relative z-10">
                  <motion.span
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(255,255,255,0)",
                        "0 0 10px rgba(255,255,255,0.5)",
                        "0 0 0px rgba(255,255,255,0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: 4.5 
                    }}
                  >
                    Learn More
                  </motion.span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      delay: 5 
                    }}
                  >
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            
            <div className="relative">
              {/* Main Image */}
              <motion.div 
                className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-luxury group"
                whileHover={{ 
                  scale: 1.02,
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ 
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300
                }}
              >
                <div className="absolute inset-0 bg-cork-100 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <motion.div 
                      className="w-28 h-28 bg-cork-600 rounded-full mx-auto flex items-center justify-center shadow-cork group-hover:shadow-gold transition-all duration-500 relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      animate={{ 
                        boxShadow: [
                          "0 8px 32px rgba(139, 69, 19, 0.3)",
                          "0 12px 40px rgba(139, 69, 19, 0.4)"
                        ]
                      }}
                    >
                      
                      <span className="text-white text-3xl font-bold relative z-10">O</span>
                    </motion.div>
                    
                    <motion.p 
                      className="text-cork-700 font-medium text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Sustainable Design Studio
                    </motion.p>
                    
                    <motion.div
                      className="w-16 h-0.5 bg-gold-500 rounded-full mx-auto"
                      initial={{ width: 0 }}
                      animate={{ width: "4rem" }}
                      transition={{ delay: 1, duration: 0.8 }}
                    />
                  </div>
                </div>
                
                
                {/* Floating Particles */}
                <motion.div
                  className="absolute top-6 right-6 w-3 h-3 bg-gold-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: 2 
                  }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-2 h-2 bg-eco-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    delay: 2.5 
                  }}
                />
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export { About }
