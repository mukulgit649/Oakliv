'use client'

import { motion } from 'framer-motion'
import { Leaf, Recycle, Zap, Heart } from 'lucide-react'

const Sustainability = () => {

  const sustainabilityFeatures = [
    {
      icon: Leaf,
      title: 'Renewable Material',
      description: 'Cork is harvested from living trees without harming them',
      color: 'from-eco-400 to-eco-600'
    },
    {
      icon: Recycle,
      title: 'Biodegradable',
      description: 'Naturally decomposes, leaving no harmful residues',
      color: 'from-cork-400 to-cork-600'
    },
    {
      icon: Zap,
      title: 'Carbon Negative',
      description: 'Cork forests absorb more CO2 than they produce',
      color: 'from-gold-400 to-gold-600'
    },
    {
      icon: Heart,
      title: 'Plastic Alternative',
      description: 'Helps reduce plastic waste in everyday products',
      color: 'from-eco-500 to-eco-700'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-eco-50 to-cream-50 relative">
      {/* Premium Background Overlay */}
      <div className="absolute inset-0 bg-premium-gradient opacity-40"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-premium-black">
            Sustainability at <span className="text-gradient-premium">Our Core</span>
          </h2>
          <p className="text-lg text-premium-gray max-w-3xl mx-auto leading-relaxed">
            Every product is crafted from renewable cork — biodegradable, 
            eco-friendly materials that replace plastics in everyday use.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-luxury group">
              <div className="absolute inset-0 bg-gradient-to-br from-eco-100 via-eco-200 to-eco-300 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <motion.div 
                    className="w-32 h-32 bg-gradient-to-br from-eco-500 to-eco-700 rounded-full mx-auto flex items-center justify-center shadow-eco group-hover:shadow-glow-gold transition-all duration-500"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Leaf className="w-16 h-16 text-white" />
                  </motion.div>
                  <motion.p 
                    className="text-eco-700 font-medium text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Cork Forests & Material Close-ups
                  </motion.p>
                  <motion.div
                    className="w-20 h-1 bg-gradient-to-r from-eco-400 to-eco-600 rounded-full mx-auto"
                    initial={{ width: 0 }}
                    animate={{ width: "5rem" }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </div>
              </div>
              
              {/* Premium overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-eco-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-6 right-6 w-3 h-3 bg-eco-400 rounded-full animate-pulse-premium"></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-gold-400 rounded-full animate-pulse-premium" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {sustainabilityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:shadow-gold transition-all duration-500`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-premium-black mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-premium-gray leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-3xl p-12 shadow-luxury"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-eco-600 mb-2">100%</div>
              <div className="text-premium-gray font-medium">Sustainable Materials</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-eco-600 mb-2">0%</div>
              <div className="text-premium-gray font-medium">Plastic Waste</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-eco-600 mb-2">∞</div>
              <div className="text-premium-gray font-medium">Renewable Resource</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { Sustainability }
