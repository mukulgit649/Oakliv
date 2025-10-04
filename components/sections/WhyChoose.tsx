'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const WhyChoose = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
            Discover our sustainable cork solutions and see what makes us the preferred partner for premium design.
          </p>
        </motion.div>

        {/* Oakliv Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-soft border border-cork-100">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-center text-premium-black mb-4 sm:mb-6">
              See Oakliv in Action
            </h3>
            <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/4LIA8Csnvjs?autoplay=0&mute=1&loop=1&playlist=4LIA8Csnvjs&controls=1&modestbranding=1&rel=0&playsinline=1"
                title="Oakliv - Sustainable Cork Solutions"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { WhyChoose }
