'use client'

import { motion } from 'framer-motion'
import { Building2, Gift, Palette, Truck, Sparkles, Star, Zap } from 'lucide-react'

const Industries = () => {

  const industries = [
    {
      icon: Building2,
      title: 'Hospitality & Resorts',
      description: 'Premium cork solutions for luxury hotels, resorts, and hospitality spaces',
      color: 'from-gold-400 to-gold-500',
      bgColor: 'bg-gold-50',
      iconColor: 'text-gold-600'
    },
    {
      icon: Gift,
      title: 'Corporate Gifting',
      description: 'Elegant corporate gifts and hampers that reflect your brand values',
      color: 'from-cork-400 to-cork-500',
      bgColor: 'bg-cork-50',
      iconColor: 'text-cork-600'
    },
    {
      icon: Palette,
      title: 'Interior Designers & Architects',
      description: 'Sustainable materials for innovative interior design projects',
      color: 'from-eco-400 to-eco-500',
      bgColor: 'bg-eco-50',
      iconColor: 'text-eco-600'
    },
    {
      icon: Truck,
      title: 'Exports & Wholesale',
      description: 'Bulk orders and wholesale solutions for international markets',
      color: 'from-luxury-400 to-luxury-500',
      bgColor: 'bg-luxury-50',
      iconColor: 'text-luxury-600'
    }
  ]

  return (
    <section className="section-padding bg-cream-50 relative overflow-hidden">
      {/* Stunning Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute w-32 h-32 rounded-full opacity-20"
            style={{
              background: i % 3 === 0 
                ? 'linear-gradient(135deg, #D4AF37, #FFD700)' 
                : i % 3 === 1 
                ? 'linear-gradient(135deg, #8B4513, #A0522D)'
                : 'linear-gradient(135deg, #228B22, #32CD32)',
              filter: 'blur(40px)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 60, 0],
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.1, 0.3, 0.1, 0.1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Small Sparkle Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: 'linear-gradient(45deg, #FFD700, #FFA500)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Glowing Orbs */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-64 h-64 rounded-full opacity-10"
            style={{
              background: i % 2 === 0 
                ? 'linear-gradient(135deg, #8B4513, #A0522D)'
                : 'linear-gradient(135deg, #D4AF37, #FFD700)',
              filter: 'blur(60px)',
              left: `${20 + i * 20}%`,
              top: `${10 + i * 25}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              delay: i * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 relative"
        >
          {/* Premium Glow Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gold-400/10 via-cork-400/10 to-eco-400/10 rounded-3xl blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Floating Magic Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`magic-${i}`}
              className="absolute w-1 h-1 bg-gold-400 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}

          <div className="relative z-10">
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold text-premium-black relative mb-4"
              animate={{
                textShadow: [
                  "0 0 0px rgba(212, 175, 55, 0)",
                  "0 0 20px rgba(212, 175, 55, 0.3)",
                  "0 0 0px rgba(212, 175, 55, 0)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Industries We <span className="text-gold-600">Serve</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-premium-gray max-w-2xl mx-auto"
              animate={{
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              We partner with diverse industries to deliver premium sustainable solutions 
              that meet their unique needs and values.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="group relative"
            >
              {/* Floating Particles for each card */}
              <motion.div
                className="absolute -top-2 -right-2 w-2 h-2 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, -10, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
              />

              <motion.div 
                className={`${industry.bgColor} rounded-3xl p-8 h-full transition-all duration-500 group-hover:shadow-luxury group-hover:-translate-y-2 relative overflow-hidden`}
                whileHover={{ 
                  scale: 1.02,
                  y: -4
                }}
              >
                {/* Premium Glow Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-cork-400/5 rounded-3xl opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                />

                <div className="space-y-6 relative z-10">
                  {/* Enhanced Icon with Premium Effects */}
                  <motion.div 
                    className={`w-16 h-16 ${industry.bgColor} rounded-2xl flex items-center justify-center relative overflow-hidden border-2 border-cork-200`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(212, 175, 55, 0)",
                        "0 0 20px rgba(212, 175, 55, 0.3)"
                      ]
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <industry.icon className={`w-8 h-8 ${industry.iconColor}`} />
                    </motion.div>

                  </motion.div>

                  {/* Enhanced Content */}
                  <div className="space-y-3">
                    <motion.h3 
                      className="text-xl font-semibold text-premium-black group-hover:text-cork-900 transition-colors duration-300"
                      animate={{
                        textShadow: [
                          "0 0 0px rgba(0, 0, 0, 0)",
                          "0 0 10px rgba(0, 0, 0, 0.1)",
                          "0 0 0px rgba(0, 0, 0, 0)"
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut"
                      }}
                    >
                      {industry.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-premium-gray leading-relaxed"
                      animate={{
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: "easeInOut"
                      }}
                    >
                      {industry.description}
                    </motion.p>
                  </div>

                  {/* Enhanced Hover Effect */}
                  <motion.div 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-1 bg-cork-400 rounded-full"></div>
                  </motion.div>

                  {/* Floating Sparkles */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                    animate={{
                      rotate: [0, 360],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-gold-400" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export { Industries }
