'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Leaf, Settings, Palette, Users } from 'lucide-react'

const WhyChoose = () => {

  const features = [
    {
      icon: Leaf,
      title: '100% Sustainable Materials',
      description: 'Every product is crafted from renewable cork — biodegradable and eco-friendly',
      emoji: '🌿'
    },
    {
      icon: Settings,
      title: 'Bulk Manufacturing Expertise',
      description: 'Proven capability to deliver large-scale orders with consistent quality',
      emoji: '⚙️'
    },
    {
      icon: Palette,
      title: 'Custom Branding & Design',
      description: 'Tailored solutions that reflect your brand identity and values',
      emoji: '🎨'
    },
    {
      icon: Users,
      title: 'Trusted by Hospitality & Corporate Clients',
      description: 'Leading brands across India and beyond choose Oakliv for their needs',
      emoji: '🤝'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-cream-50 to-cork-50 relative">
      {/* Premium Background Overlay */}
      <div className="absolute inset-0 bg-premium-gradient opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-premium-black">
            Why Choose <span className="text-gradient-premium">Oakliv</span>
          </h2>
          <p className="text-lg text-premium-gray max-w-2xl mx-auto">
            Four key differentiators that make us the preferred partner 
            for sustainable design solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-premium h-full">
                <div className="p-8 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-cork-100 to-cork-200 rounded-2xl flex items-center justify-center group-hover:shadow-gold transition-all duration-500">
                        <feature.icon className="w-8 h-8 text-cork-600 group-hover:text-gold-600 transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <h3 className="text-xl font-semibold text-premium-black">
                          {feature.title}
                        </h3>
                        <span className="text-2xl">{feature.emoji}</span>
                      </div>
                      <p className="text-premium-gray leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl p-12 shadow-luxury max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif font-bold text-premium-black mb-4">
              Ready to Partner With Us?
            </h3>
            <p className="text-lg text-premium-gray mb-8 max-w-2xl mx-auto">
              Join the growing community of brands that trust Oakliv for their 
              sustainable design needs. Let's create something extraordinary together.
            </p>
            <Link href="/contact" className="btn-luxury">
              Partner With Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { WhyChoose }
