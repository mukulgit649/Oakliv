'use client'

import { motion } from 'framer-motion'
import { Briefcase, Users, Home, ArrowRight } from 'lucide-react'

interface MosaicItem {
  icon: any
  title: string
  description: string
  features: string[]
  color: string
  href: string
  size: 'small' | 'medium' | 'large'
}

interface MosaicGridProps {
  title: string
  subtitle: string
  items: MosaicItem[]
}

const MosaicGrid = ({ title, subtitle, items }: MosaicGridProps) => {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2'
      case 'medium':
        return 'md:col-span-1 md:row-span-2'
      default:
        return 'md:col-span-1 md:row-span-1'
    }
  }

  return (
    <section className="section-padding bg-cream-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div 
              className={`w-16 h-16 ${
                i % 3 === 0 ? 'bg-gold-400 rounded-full' :
                i % 3 === 1 ? 'bg-cork-400' : 'bg-eco-400 rounded-lg'
              }`}
            />
          </motion.div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-premium-black">
            {title}
          </h2>
          <p className="text-lg text-premium-gray max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-6 auto-rows-fr">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className={`group ${getSizeClasses(item.size)}`}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 h-full shadow-soft hover:shadow-luxury transition-all duration-500 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold-400/5 via-cork-400/5 to-eco-400/5 rounded-3xl opacity-0 group-hover:opacity-100"
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

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 ${item.color === 'cork' ? 'bg-cork-100' : item.color === 'gold' ? 'bg-gold-100' : 'bg-eco-100'} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-gold transition-all duration-500`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className={`w-8 h-8 ${
                      item.color === 'cork' ? 'text-cork-600' : 
                      item.color === 'gold' ? 'text-gold-600' : 'text-eco-600'
                    }`} />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-semibold text-premium-black group-hover:text-cork-900 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-premium-gray leading-relaxed">
                      {item.description}
                    </p>

                    {/* Features */}
                    {item.features && (
                      <div className="space-y-2">
                        {item.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: index * 0.15 + featureIndex * 0.1 + 0.5
                            }}
                          >
                            <div className={`w-2 h-2 rounded-full ${
                              item.color === 'cork' ? 'bg-cork-400' : 
                              item.color === 'gold' ? 'bg-gold-400' : 'bg-eco-400'
                            }`} />
                            <span className="text-sm text-premium-gray">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    className="mt-6 pt-6 border-t border-cork-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.15 + 0.8
                    }}
                  >
                    <button className="w-full bg-cork-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cork-700 transition-colors duration-300 group/btn flex items-center justify-center">
                      Explore Solution
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </motion.div>
                </div>

                {/* Floating Elements */}
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
                  <div className={`w-3 h-3 rounded-full ${
                    item.color === 'cork' ? 'bg-cork-400' : 
                    item.color === 'gold' ? 'bg-gold-400' : 'bg-eco-400'
                  }`} />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { MosaicGrid }

