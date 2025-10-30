'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Package, Upload, Briefcase, BarChart3 } from 'lucide-react'

const WhyChoose = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: Package,
      title: 'Premium Quality',
      description: 'Sourced from sustainably managed Portuguese cork oak forests',
      color: 'green'
    },
    {
      icon: Upload,
      title: 'Full Customization',
      description: 'Laser engraving, embossing, and custom packaging for your brand',
      color: 'brown'
    },
    {
      icon: Briefcase,
      title: 'B2B Expertise',
      description: 'Volume pricing, net payment terms, and dedicated support',
      color: 'green'
    },
    {
      icon: BarChart3,
      title: 'Sustainability',
      description: 'Carbon-negative products with transparent environmental impact',
      color: 'brown'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-cream-50 relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-premium-black mb-4 px-4">
            Why Choose <span className="text-cork-600">Oakliv?</span>
          </h2>
          <p className="text-base sm:text-lg text-premium-gray max-w-2xl mx-auto px-4">
            Sustainable cork solutions backed by quality, customization, and reliable service
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-luxury transition-all duration-500 h-full border border-cork-200">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto ${
                    feature.color === 'green' 
                      ? 'bg-green-100' 
                      : 'bg-amber-100'
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      feature.color === 'green' 
                        ? 'text-green-600' 
                        : 'text-amber-700'
                    }`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-premium-black mb-3 text-center">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-premium-gray text-sm text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { WhyChoose }
