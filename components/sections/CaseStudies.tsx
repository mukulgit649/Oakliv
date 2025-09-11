'use client'

import { motion } from 'framer-motion'
import { Star, TrendingUp, Users, Award } from 'lucide-react'

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
      {/* Premium Background Overlay */}
      <div className="absolute inset-0 bg-premium-pattern opacity-20"></div>
      
      <div className="container-custom relative z-10">
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

        {/* Success Stories Carousel */}
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
              <div className="card-premium h-full text-center">
                <div className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mx-auto group-hover:shadow-glow-gold transition-all duration-500">
                    <study.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-cork-900">{study.metric}</div>
                    <h3 className="text-lg font-semibold text-premium-black">
                      {study.title}
                    </h3>
                    <p className="text-premium-gray text-sm">
                      {study.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-cork-100 text-cork-700 text-xs font-medium rounded-full">
                      {study.category}
                    </div>
                  </div>
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
            Our Trusted Partners
          </h3>
          
          {/* Rotating Carousel Container */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8 justify-center items-center"
              animate={{ 
                x: [0, -100, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {/* First set of logos */}
              {clientLogos.map((client, index) => (
                <motion.div
                  key={`${client.name}-1`}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="group flex-shrink-0"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-premium transition-all duration-500 group-hover:-translate-y-3 w-32 h-32 flex flex-col items-center justify-center">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${client.color} rounded-xl mx-auto flex items-center justify-center mb-3 group-hover:rotate-12 transition-transform duration-300`}
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
                      <span className="text-white font-bold text-lg">
                        {client.initials}
                      </span>
                    </motion.div>
                    <div className="text-xs text-premium-gray font-medium text-center leading-tight">
                      {client.name}
                    </div>
                    <div className="text-xs text-cork-500 mt-1">
                      {client.category}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((client, index) => (
                <motion.div
                  key={`${client.name}-2`}
                  className="group flex-shrink-0"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-premium transition-all duration-500 group-hover:-translate-y-3 w-32 h-32 flex flex-col items-center justify-center">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${client.color} rounded-xl mx-auto flex items-center justify-center mb-3 group-hover:rotate-12 transition-transform duration-300`}
                      animate={{ 
                        rotate: [0, 5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        delay: (index + clientLogos.length) * 0.5 
                      }}
                    >
                      <span className="text-white font-bold text-lg">
                        {client.initials}
                      </span>
                    </motion.div>
                    <div className="text-xs text-premium-gray font-medium text-center leading-tight">
                      {client.name}
                    </div>
                    <div className="text-xs text-cork-500 mt-1">
                      {client.category}
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
      </div>
    </section>
  )
}

export { CaseStudies }
