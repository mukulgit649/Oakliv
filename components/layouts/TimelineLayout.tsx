'use client'

import { motion } from 'framer-motion'
import { Leaf, Cog, Palette, Users, CheckCircle } from 'lucide-react'

interface TimelineItem {
  icon: any
  title: string
  description: string
  emoji: string
  color: string
}

interface TimelineLayoutProps {
  title: string
  subtitle: string
  items: TimelineItem[]
}

const TimelineLayout = ({ title, subtitle, items }: TimelineLayoutProps) => {
  return (
    <section className="section-padding bg-cream-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full opacity-10"
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
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
          />
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

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold-400 via-cork-400 to-eco-400 rounded-full"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />

          {/* Timeline Items */}
          <div className="space-y-16">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <motion.div
                    className="group"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-luxury transition-all duration-500 relative overflow-hidden">
                      {/* Glow Effect */}
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
                      
                      <div className="relative z-10">
                        <div className={`flex items-center space-x-4 ${index % 2 === 0 ? 'flex-row-reverse space-x-reverse' : ''} mb-4`}>
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">{item.emoji}</span>
                            <h3 className="text-xl font-semibold text-premium-black">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-premium-gray leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Central Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center shadow-premium border-4 border-white`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360
                    }}
                    transition={{ duration: 0.6 }}
                    animate={{
                      boxShadow: [
                        "0 8px 32px rgba(139, 69, 19, 0.3)",
                        "0 12px 40px rgba(139, 69, 19, 0.4)"
                      ]
                    }}
                  >
                    <item.icon className="w-10 h-10 text-white" />
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { TimelineLayout }

