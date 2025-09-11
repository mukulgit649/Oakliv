'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Leaf, Award, Users } from 'lucide-react'

const About = () => {

  const features = [
    {
      icon: Leaf,
      title: '100% Sustainable',
      description: 'Eco-friendly cork materials sourced responsibly'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Luxury craftsmanship meets sustainable design'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Northeast India\'s finest design professionals'
    }
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Premium Background Overlay */}
      <div className="absolute inset-0 bg-premium-gradient opacity-50"></div>
      
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
                About <motion.span 
                  className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: 2 
                  }}
                >
                  Oakliv
                </motion.span>
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
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: 4 
                  }}
                />
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

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="text-center space-y-3 group relative"
                  whileHover={{ 
                    scale: 1.05,
                    y: -5
                  }}
                >
                  {/* Floating Particles for Each Feature */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-1 h-1 bg-gold-400 rounded-full"
                    animate={{ 
                      y: [0, -8, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: 6 + index * 0.5 
                    }}
                  />
                  
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-cork-100 to-cork-200 rounded-2xl flex items-center justify-center mx-auto shadow-soft group-hover:shadow-gold transition-all duration-500 relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    animate={{ 
                      boxShadow: [
                        "0 4px 20px rgba(139, 69, 19, 0.1)",
                        "0 8px 30px rgba(139, 69, 19, 0.2)",
                        "0 4px 20px rgba(139, 69, 19, 0.1)"
                      ]
                    }}
                  >
                    {/* Glowing Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-2xl"
                      animate={{ 
                        opacity: [0, 0.5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: 7 + index * 0.3 
                      }}
                    />
                    <feature.icon className="w-8 h-8 text-cork-600 group-hover:text-gold-600 transition-colors duration-300 relative z-10" />
                  </motion.div>
                  
                  <motion.h3 
                    className="font-semibold text-premium-black"
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(0,0,0,0)",
                        "0 0 5px rgba(139, 69, 19, 0.3)",
                        "0 0 0px rgba(0,0,0,0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: 8 + index * 0.2 
                    }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-sm text-premium-gray"
                    animate={{ 
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      delay: 8.5 + index * 0.2 
                    }}
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Premium Background Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-gold-400/10 via-eco-400/5 to-cork-400/10 rounded-3xl blur-2xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            
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
                <div className="absolute inset-0 bg-gradient-to-br from-cork-100 via-cork-200 to-cork-300 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <motion.div 
                      className="w-28 h-28 bg-gradient-to-br from-cork-500 to-cork-700 rounded-full mx-auto flex items-center justify-center shadow-cork group-hover:shadow-gold transition-all duration-500 relative overflow-hidden"
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
                      {/* Rotating Ring */}
                      <motion.div
                        className="absolute inset-0 border-4 border-gold-400/30 rounded-full"
                        animate={{ rotate: [0, 360] }}
                        transition={{ 
                          duration: 8, 
                          repeat: Infinity, 
                          ease: "linear" 
                        }}
                      />
                      
                      {/* Inner Glow */}
                      <motion.div
                        className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full"
                        animate={{ 
                          opacity: [0.2, 0.5]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      />
                      
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
                      className="w-16 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto"
                      initial={{ width: 0 }}
                      animate={{ width: "4rem" }}
                      transition={{ delay: 1, duration: 0.8 }}
                    />
                  </div>
                </div>
                
                {/* Premium overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
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

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  y: [0, -2, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 },
                  scale: { duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 },
                  rotate: { duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 },
                  y: { duration: 4, repeat: Infinity, delay: 9, ease: "easeInOut" }
                }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-premium p-6 border border-cork-100 backdrop-premium group-hover:shadow-gold transition-all duration-500 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
              >
                {/* Glowing Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold-400/10 to-gold-600/10 rounded-2xl"
                  animate={{ 
                    opacity: [0, 0.5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: 10 
                  }}
                />
                <div className="text-center relative z-10">
                  <motion.div 
                    className="text-2xl font-bold text-cork-900"
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(139, 69, 19, 0)",
                        "0 0 10px rgba(139, 69, 19, 0.3)",
                        "0 0 0px rgba(139, 69, 19, 0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: 10.5 
                    }}
                  >
                    2021
                  </motion.div>
                  <div className="text-xs text-premium-gray font-medium">Founded</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  y: [0, -2, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 1, type: "spring", stiffness: 100 },
                  scale: { duration: 0.8, delay: 1, type: "spring", stiffness: 100 },
                  rotate: { duration: 0.8, delay: 1, type: "spring", stiffness: 100 },
                  y: { duration: 4, repeat: Infinity, delay: 9.5, ease: "easeInOut" }
                }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-gold-400 to-gold-500 rounded-2xl shadow-gold p-6 group-hover:shadow-glow-gold transition-all duration-500 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
              >
                {/* Rotating Ring */}
                <motion.div
                  className="absolute inset-0 border-2 border-white/20 rounded-2xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
                
                <div className="text-center text-white relative z-10">
                  <motion.div 
                    className="text-2xl font-bold"
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
                      delay: 11 
                    }}
                  >
                    Northeast
                  </motion.div>
                  <div className="text-xs opacity-90 font-medium">India's First</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export { About }
