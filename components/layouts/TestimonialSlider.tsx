'use client'

import { motion } from 'framer-motion'
import { Star, TrendingUp, Users, Award, Quote } from 'lucide-react'

interface TestimonialItem {
  icon: any
  title: string
  description: string
  metric: string
  category: string
  quote?: string
  author?: string
  company?: string
}

interface TestimonialSliderProps {
  title: string
  subtitle: string
  testimonials: TestimonialItem[]
  clientLogos?: Array<{
    name: string
    category: string
    initials: string
    logo: string
    color: string
  }>
}

const TestimonialSlider = ({ title, subtitle, testimonials, clientLogos = [] }: TestimonialSliderProps) => {
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

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ 
                x: [0, -100, 0],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.title}-1`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="flex-shrink-0 w-96"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-luxury transition-all duration-500 h-full relative overflow-hidden group">
                    {/* Quote Icon */}
                    <motion.div
                      className="absolute top-6 right-6 opacity-10"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Quote className="w-12 h-12 text-cork-400" />
                    </motion.div>

                    {/* Metric Display */}
                    <div className="mb-6">
                      <motion.div
                        className="text-4xl font-bold text-cork-900 mb-2"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {testimonial.metric}
                      </motion.div>
                      <div className="w-16 h-1 bg-gold-500 rounded-full"></div>
                    </div>

                    {/* Icon and Title */}
                    <div className="flex items-center space-x-4 mb-4">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <testimonial.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-premium-black">
                          {testimonial.title}
                        </h3>
                        <div className="inline-block px-3 py-1 bg-cork-100 text-cork-700 text-xs font-medium rounded-full">
                          {testimonial.category}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-premium-gray leading-relaxed mb-6">
                      {testimonial.description}
                    </p>

                    {/* Quote (if available) */}
                    {testimonial.quote && (
                      <div className="border-l-4 border-gold-400 pl-4 mb-4">
                        <p className="text-premium-gray italic">
                          "{testimonial.quote}"
                        </p>
                        {testimonial.author && (
                          <p className="text-sm text-cork-600 font-medium mt-2">
                            — {testimonial.author}
                            {testimonial.company && `, ${testimonial.company}`}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Rating Stars */}
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 0.8 + index * 0.1 + i * 0.1
                          }}
                        >
                          <Star className="w-4 h-4 text-gold-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.title}-2`}
                  className="flex-shrink-0 w-96"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-luxury transition-all duration-500 h-full relative overflow-hidden group">
                    {/* Quote Icon */}
                    <motion.div
                      className="absolute top-6 right-6 opacity-10"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Quote className="w-12 h-12 text-cork-400" />
                    </motion.div>

                    {/* Metric Display */}
                    <div className="mb-6">
                      <motion.div
                        className="text-4xl font-bold text-cork-900 mb-2"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {testimonial.metric}
                      </motion.div>
                      <div className="w-16 h-1 bg-gold-500 rounded-full"></div>
                    </div>

                    {/* Icon and Title */}
                    <div className="flex items-center space-x-4 mb-4">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <testimonial.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-premium-black">
                          {testimonial.title}
                        </h3>
                        <div className="inline-block px-3 py-1 bg-cork-100 text-cork-700 text-xs font-medium rounded-full">
                          {testimonial.category}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-premium-gray leading-relaxed mb-6">
                      {testimonial.description}
                    </p>

                    {/* Quote (if available) */}
                    {testimonial.quote && (
                      <div className="border-l-4 border-gold-400 pl-4 mb-4">
                        <p className="text-premium-gray italic">
                          "{testimonial.quote}"
                        </p>
                        {testimonial.author && (
                          <p className="text-sm text-cork-600 font-medium mt-2">
                            — {testimonial.author}
                            {testimonial.company && `, ${testimonial.company}`}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Rating Stars */}
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          </div>
        </motion.div>

        {/* Client Logos */}
        {clientLogos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <h3 className="text-3xl font-serif font-bold text-premium-black mb-12">
              Our Premium Designs
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="group"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="bg-white rounded-2xl p-4 shadow-soft hover:shadow-premium transition-all duration-500 group-hover:-translate-y-2 flex flex-col items-center justify-center h-24">
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-br ${client.color} rounded-xl flex items-center justify-center mb-2 group-hover:rotate-12 transition-transform duration-300`}
                      animate={{ 
                        rotate: [0, 5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        delay: index * 0.5 
                      }}
                    >
                      <span className="text-white font-bold text-sm">
                        {client.initials}
                      </span>
                    </motion.div>
                    <div className="text-xs text-premium-gray font-medium text-center leading-tight">
                      {client.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export { TestimonialSlider }

