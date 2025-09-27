'use client'

import { motion } from 'framer-motion'
import { Building2, Gift, Palette, Truck, ArrowRight } from 'lucide-react'

interface ShowcaseItem {
  icon: any
  title: string
  description: string
  color: string
  bgColor: string
  iconColor: string
  featured?: boolean
}

interface HeroShowcaseProps {
  title: string
  subtitle: string
  items: ShowcaseItem[]
}

const HeroShowcase = ({ title, subtitle, items }: HeroShowcaseProps) => {
  const featuredItem = items.find(item => item.featured)
  const regularItems = items.filter(item => !item.featured)

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-premium-pattern opacity-20"></div>
      
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

        {/* Hero Featured Item */}
        {featuredItem && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative group">
              <motion.div
                className="bg-gradient-to-br from-cork-50 to-gold-50 rounded-3xl p-12 shadow-luxury hover:shadow-premium transition-all duration-500 relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold-400/10 via-cork-400/10 to-eco-400/10 rounded-3xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="space-y-8">
                    <motion.div
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <div className={`w-20 h-20 ${featuredItem.bgColor} rounded-2xl flex items-center justify-center shadow-premium border-2 border-cork-200`}>
                        <featuredItem.icon className={`w-10 h-10 ${featuredItem.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-serif font-bold text-premium-black">
                          {featuredItem.title}
                        </h3>
                        <div className="w-16 h-1 bg-gold-500 rounded-full mt-2"></div>
                      </div>
                    </motion.div>

                    <motion.p
                      className="text-lg text-premium-gray leading-relaxed"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      {featuredItem.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <button className="btn-primary group inline-flex items-center">
                        Explore Solutions
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </motion.div>
                  </div>

                  {/* Right Visual */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <div className="relative w-full h-80 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cork-100 to-cork-200 flex items-center justify-center">
                        <motion.div
                          className="w-32 h-32 bg-cork-600 rounded-full flex items-center justify-center shadow-cork"
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <featuredItem.icon className="w-16 h-16 text-white" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-gold-400 rounded-full"
                      animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-eco-500 rounded-full"
                      animate={{
                        y: [0, 20, 0],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Grid of Regular Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <motion.div
                className={`${item.bgColor} rounded-2xl p-8 h-full transition-all duration-500 group-hover:shadow-luxury group-hover:-translate-y-2 relative overflow-hidden`}
                whileHover={{ scale: 1.02 }}
              >
                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-cork-400/5 rounded-2xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className={`w-16 h-16 ${item.bgColor} rounded-xl flex items-center justify-center border-2 border-cork-200`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-premium-black group-hover:text-cork-900 transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-premium-gray leading-relaxed">
                    {item.description}
                  </p>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 bg-cork-400 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { HeroShowcase }

