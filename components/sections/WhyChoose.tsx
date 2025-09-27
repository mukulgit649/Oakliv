'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Leaf, Settings, Palette, Users } from 'lucide-react'
import { TimelineLayout } from '@/components/layouts/TimelineLayout'

const WhyChoose = () => {

  const features = [
    {
      icon: Leaf,
      title: '100% Sustainable Materials',
      description: 'Every product is crafted from renewable cork — biodegradable and eco-friendly',
      emoji: '🌿',
      color: 'bg-gradient-to-br from-eco-400 to-eco-600'
    },
    {
      icon: Settings,
      title: 'Bulk Manufacturing Expertise',
      description: 'Proven capability to deliver large-scale orders with consistent quality',
      emoji: '⚙️',
      color: 'bg-gradient-to-br from-cork-400 to-cork-600'
    },
    {
      icon: Palette,
      title: 'Custom Branding & Design',
      description: 'Tailored solutions that reflect your brand identity and values',
      emoji: '🎨',
      color: 'bg-gradient-to-br from-gold-400 to-gold-600'
    },
    {
      icon: Users,
      title: 'Trusted by Hospitality & Corporate Clients',
      description: 'Leading brands across India and beyond choose Oakliv for their needs',
      emoji: '🤝',
      color: 'bg-gradient-to-br from-luxury-400 to-luxury-600'
    }
  ]

  return (
    <>
      <TimelineLayout
        title="Why Choose Oakliv?"
        subtitle="Four key differentiators that make us the preferred partner for sustainable design solutions."
        items={features}
      />
      
      {/* Bottom CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
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
    </>
  )
}

export { WhyChoose }
