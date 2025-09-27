'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Taj Hotels & Resorts",
      role: "General Manager",
      content: "Oakliv's cork solutions have transformed our hospitality experience. The quality and sustainability align perfectly with our brand values.",
      rating: 5,
      image: "/testimonials/rajesh.jpg"
    },
    {
      name: "Priya Sharma",
      company: "TechCorp India",
      role: "Head of Operations",
      content: "Our corporate gifting program has never been more impactful. Oakliv's premium cork products are conversation starters.",
      rating: 5,
      image: "/testimonials/priya.jpg"
    },
    {
      name: "Arjun Mehta",
      company: "Design Studio Mumbai",
      role: "Principal Architect",
      content: "Working with Oakliv has been a game-changer. Their sustainable materials have elevated our interior design projects.",
      rating: 5,
      image: "/testimonials/arjun.jpg"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-premium-black mb-4">
            What Our <span className="text-cork-600">Clients Say</span>
          </h2>
          <p className="text-lg text-premium-gray max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the industry leaders who trust Oakliv 
            for their premium sustainable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-cork-100 h-full relative overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cork-200 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-200 rounded-full translate-y-12 -translate-x-12"></div>
                </div>

                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-16 h-16 text-cork-300" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.2 + i * 0.1 }}
                    >
                      <Star className="w-6 h-6 text-gold-500 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-premium-gray leading-relaxed mb-8 text-lg relative z-10">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4 relative z-10">
                  <div className="w-16 h-16 bg-cork-100 rounded-2xl flex items-center justify-center border-2 border-cork-200">
                    <span className="text-cork-700 font-bold text-xl">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-premium-black text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-cork-600 font-medium">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-premium-gray">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-cork-200 rounded-full opacity-50"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hidden"
        >
          <div />
        </motion.div>

        {/* Simple Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="hidden"
        >
          <div />
        </motion.div>
      </div>
    </section>
  )
}

export { Testimonials }