'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Stunning Cork Forest Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")`,
        }}
      />
      
      {/* Beautiful Blur and Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cork-900/80 via-cork-800/70 to-cork-900/80"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5F5DC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Premium Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Floating Particles */}
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
        
        {/* Floating Cork Elements */}
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/4 right-1/3 w-4 h-4 bg-gradient-to-br from-cork-500/50 to-cork-700/50 rounded-full"
        />
        
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
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative"
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
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-3 font-semibold"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full blur-sm opacity-50"></div>
                  <Sparkles className="w-6 h-6 text-gold-400 relative z-10" />
                </motion.div>
                <motion.span 
                  className="text-lg bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  Premium Sustainable Design
                </motion.span>
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-3 h-3 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full shadow-lg shadow-gold-400/50"
                />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight"
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
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-gold-600/20 blur-xl"
                    animate={{ 
                      opacity: [0, 0.5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: 2 
                    }}
                  />
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
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gold-400/30 to-gold-600/30 blur-xl"
                    animate={{ 
                      opacity: [0, 0.8, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: 3 
                    }}
                  />
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
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-eco-400/20 to-eco-600/20 blur-xl"
                    animate={{ 
                      opacity: [0, 0.6, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: 4 
                    }}
                  />
                </motion.span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="text-lg leading-relaxed max-w-2xl relative"
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-6 items-start"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: 7 
                  }}
                />
                <Link href="/solutions" className="relative inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                  <motion.span 
                    className="flex items-center relative z-10"
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
                      delay: 8 
                    }}
                  >
                    Explore Solutions
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: 8.5 
                      }}
                    >
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.div>
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-cream-100/20 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0, 0.2, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: 9 
                  }}
                />
                <Link href="/catalogue" className="relative inline-block bg-white/90 backdrop-blur-sm text-cork-800 px-8 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group border border-white/20">
                  <motion.span 
                    className="flex items-center relative z-10"
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(0,0,0,0)",
                        "0 0 5px rgba(0,0,0,0.2)",
                        "0 0 0px rgba(0,0,0,0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      delay: 9.5 
                    }}
                  >
                    Request a Catalogue
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cream-100/50 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-cream-200/30"
            >
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                animate={{ 
                  y: [0, -2, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: 10 
                }}
              >
                <motion.div 
                  className="text-3xl font-bold bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent drop-shadow-2xl"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: 10.5 
                  }}
                >
                  500+
                </motion.div>
                <motion.div 
                  className="text-sm text-cream-200 mt-1"
                  animate={{ 
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: 11 
                  }}
                >
                  Projects Delivered
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                animate={{ 
                  y: [0, -2, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: 10.2 
                }}
              >
                <motion.div 
                  className="text-3xl font-bold bg-gradient-to-r from-eco-400 via-eco-300 to-eco-500 bg-clip-text text-transparent drop-shadow-2xl"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: 11 
                  }}
                >
                  50+
                </motion.div>
                <motion.div 
                  className="text-sm text-cream-200 mt-1"
                  animate={{ 
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: 11.2 
                  }}
                >
                  Enterprise Clients
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                animate={{ 
                  y: [0, -2, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: 10.4 
                }}
              >
                <motion.div 
                  className="text-3xl font-bold bg-gradient-to-r from-white via-cream-100 to-white bg-clip-text text-transparent drop-shadow-2xl"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: 11.5 
                  }}
                >
                  100%
                </motion.div>
                <motion.div 
                  className="text-sm text-cream-200 mt-1"
                  animate={{ 
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: 11.7 
                  }}
                >
                  Sustainable
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Cork Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
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
            
            {/* Floating Magic Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"
                animate={{ 
                  y: [0, -Math.random() * 30 - 15, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0, Math.random() * 0.8 + 0.2, 0],
                  scale: [0, Math.random() * 0.6 + 0.4, 0]
                }}
                transition={{ 
                  duration: Math.random() * 8 + 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: Math.random() * 3
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
            {/* Cork Product Display */}
            <div className="relative w-full max-w-lg h-96 flex items-center justify-center">
              {/* Main Cork Product Circle */}
              <motion.div
                initial={{ scale: 0, opacity: 0, rotate: -180 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 1.2, type: "spring", stiffness: 80 }}
                className="relative w-56 h-56 rounded-full shadow-2xl flex items-center justify-center group hover:shadow-3xl transition-all duration-500 overflow-hidden"
                whileHover={{ 
                  scale: 1.08,
                  rotate: [0, 5, -5, 0]
                }}
              >
                {/* Multiple Gradient Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-cork-300 to-cork-500 rounded-full"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-cork-400 to-cork-600 rounded-full opacity-80"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-cork-200 to-cork-400 rounded-full opacity-60"></div>
                
                {/* Animated Ring */}
                <motion.div
                  className="absolute inset-0 border-4 border-gold-400/30 rounded-full"
                  animate={{ 
                    scale: [1, 1.1],
                    opacity: [0.3, 0.8]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Inner Glow */}
                <motion.div
                  className="absolute inset-8 bg-gradient-to-br from-white/20 to-transparent rounded-full"
                  animate={{ 
                    opacity: [0.2, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                {/* Cork Pattern Lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-32 h-32 border-4 border-cork-700 rounded-full opacity-30"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute w-20 h-20 border-2 border-cork-600 rounded-full opacity-50"
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute w-12 h-12 border border-cork-500 rounded-full opacity-70"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                
                {/* Center Dot with Glow */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1], 
                    opacity: [0.6, 1, 0.6],
                    boxShadow: [
                      "0 0 0px rgba(139, 69, 19, 0)",
                      "0 0 20px rgba(139, 69, 19, 0.5)",
                      "0 0 0px rgba(139, 69, 19, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-6 h-6 bg-gradient-to-br from-cork-600 to-cork-800 rounded-full relative z-10"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-gold-400/30 to-gold-600/30 rounded-full blur-sm"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>

              {/* Floating Cork Elements */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-8 h-8 bg-gradient-to-br from-cork-400 to-cork-600 rounded-full shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-3 h-3 bg-cork-200 rounded-full"></div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br from-cork-500 to-cork-700 rounded-full shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-2 h-2 bg-cork-100 rounded-full"></div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/4 left-1/4 w-4 h-4 bg-cork-300 rounded-full opacity-60"
              />
              
              {/* Background Cork Textures */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cork-100 rounded-full -z-10"
              />
              <motion.div
                animate={{ scale: [1, 1.03, 1], opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cork-50 rounded-full -z-20"
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
