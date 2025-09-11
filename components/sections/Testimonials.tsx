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
    <section className="section-padding bg-gradient-to-br from-cork-50 to-cream-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-premium-black">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-premium-gray max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the industry leaders who trust Oakliv 
            for their premium sustainable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="card-premium h-full p-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-12 h-12 text-cork-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.2 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-gold-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-premium-gray leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cork-200 to-cork-300 rounded-full flex items-center justify-center">
                    <span className="text-cork-700 font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-premium-black">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-cork-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cork-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-soft max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-premium-black mb-6">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="text-3xl font-bold text-cork-600">500+</div>
                <div className="text-sm text-premium-gray">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cork-600">50+</div>
                <div className="text-sm text-premium-gray">Enterprise Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cork-600">100%</div>
                <div className="text-sm text-premium-gray">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cork-600">3+</div>
                <div className="text-sm text-premium-gray">Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { Testimonials }
