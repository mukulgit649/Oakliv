'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Award } from 'lucide-react'

const CaseStudies = () => {

  const caseStudies = [
    {
      icon: TrendingUp,
      title: '50,000+ Coasters Supplied',
      description: 'Major hotel chain across 15 properties',
      metric: '50K+',
      category: 'Hospitality'
    },
    {
      icon: Users,
      title: 'Corporate Gifting Solutions',
      description: 'Fortune 500 companies trust our bulk solutions',
      metric: '500+',
      category: 'Corporate'
    },
    {
      icon: Award,
      title: 'Design Excellence Recognition',
      description: 'Featured in top interior design publications',
      metric: '25+',
      category: 'Design'
    }
  ]

  const clientLogos = [
    { 
      name: 'Taj Hotels', 
      category: 'Hospitality',
      initials: 'TH',
      logo: '🏨',
      color: 'from-amber-500 to-amber-700'
    },
    { 
      name: 'ITC Hotels', 
      category: 'Hospitality',
      initials: 'IH',
      logo: '🏨',
      color: 'from-blue-500 to-blue-700'
    },
    { 
      name: 'Reliance', 
      category: 'Corporate',
      initials: 'R',
      logo: '🏢',
      color: 'from-green-500 to-green-700'
    },
    { 
      name: 'TCS', 
      category: 'Corporate',
      initials: 'T',
      logo: '💼',
      color: 'from-indigo-500 to-indigo-700'
    },
    { 
      name: 'Infosys', 
      category: 'Corporate',
      initials: 'I',
      logo: '💻',
      color: 'from-purple-500 to-purple-700'
    },
    { 
      name: 'Design Studio', 
      category: 'Design',
      initials: 'DS',
      logo: '🎨',
      color: 'from-pink-500 to-pink-700'
    },
    { 
      name: 'Architecture Firm', 
      category: 'Design',
      initials: 'AF',
      logo: '🏗️',
      color: 'from-orange-500 to-orange-700'
    },
    { 
      name: 'Luxury Brands', 
      category: 'Lifestyle',
      initials: 'LB',
      logo: '💎',
      color: 'from-yellow-500 to-yellow-700'
    }
  ]

  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-premium-black">
            Trusted by <span className="text-gradient-premium">Leading Brands</span>
          </h2>
          <p className="text-lg text-premium-gray max-w-2xl mx-auto">
            From luxury hotels to Fortune 500 companies, 
            leading brands choose Oakliv for sustainable design.
          </p>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-luxury transition-all duration-500 text-center border border-gold-200">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-cork-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-100 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <study.icon className="w-8 h-8 text-cork-600 group-hover:text-gold-600 transition-colors duration-300" />
                </motion.div>

                {/* Metric */}
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
                  {study.metric}
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-premium-black mb-3">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-premium-gray text-sm mb-4">
                  {study.description}
                </p>

                {/* Category Tag */}
                <div className="inline-block px-4 py-2 bg-cork-100 text-cork-700 text-xs font-medium rounded-full">
                  {study.category}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-serif font-bold text-premium-black mb-16">
            Our Premium Designs
          </h3>
          
          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="group"
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
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
      </div>
    </section>
  )
}

export { CaseStudies }
