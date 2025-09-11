'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Briefcase, Users, Home, Building2, Coffee, Heart, Lightbulb } from 'lucide-react'

const Solutions = () => {

  const solutions = [
    {
      icon: Briefcase,
      title: 'Corporate & Bulk Gifting',
      description: 'Premium corporate gifts and bulk solutions for enterprises',
      image: '/solutions/corporate.jpg',
      href: '/solutions/corporate'
    },
    {
      icon: Users,
      title: 'Hospitality & Guest Experience',
      description: 'Hotel products and guest experience solutions',
      image: '/solutions/hospitality.jpg',
      href: '/solutions/hospitality'
    },
    {
      icon: Home,
      title: 'Interiors & Wall Solutions',
      description: 'Furniture and interior design solutions',
      image: '/solutions/interior.jpg',
      href: '/solutions/interior'
    },
    {
      icon: Building2,
      title: 'Workplace & Stationery',
      description: 'Office essentials and workspace solutions',
      image: '/solutions/workplace.jpg',
      href: '/solutions/workplace'
    },
    {
      icon: Heart,
      title: 'Lifestyle & Decor',
      description: 'Premium lifestyle and home decor products',
      image: '/solutions/lifestyle.jpg',
      href: '/solutions/lifestyle'
    },
    {
      icon: Lightbulb,
      title: 'Materials & Innovation',
      description: 'Advanced cork materials and R&D solutions',
      image: '/solutions/materials.jpg',
      href: '/solutions/materials'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-premium-black">
            Our <span className="text-gradient-premium">Solutions</span>
          </h2>
          <p className="text-lg text-premium-gray max-w-2xl mx-auto">
            Six categories of premium sustainable solutions, 
            crafted to the highest standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={solution.href}>
                <div className="card-premium h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cork-100 to-cork-200 flex items-center justify-center">
                      <div className="text-center space-y-3">
                        <div className="w-16 h-16 bg-cork-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                          <solution.icon className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-cork-700 font-medium">Premium Solutions</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-4">
                    <h3 className="text-xl font-semibold text-premium-black group-hover:text-cork-900 transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-premium-gray leading-relaxed">
                      {solution.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center text-cork-600 font-medium group-hover:text-cork-700 transition-colors duration-300">
                      <span>Explore Solution</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link href="/solutions" className="btn-luxury">
            View All Solutions
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export { Solutions }
