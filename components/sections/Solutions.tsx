'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Briefcase, Users, Home } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const Solutions = () => {

  const solutions = [
    {
      icon: Briefcase,
      title: 'Corporate Gifting',
      description: 'Premium cork corporate gifts and bulk solutions for enterprises. Custom branding available.',
      features: ['Custom Branding', 'Bulk Orders', 'Premium Quality'],
      color: 'cork',
      href: '/solutions/corporate'
    },
    {
      icon: Users,
      title: 'Hospitality',
      description: 'Luxury cork products for hotels, resorts, and hospitality spaces. Enhance guest experience.',
      features: ['Guest Experience', 'Luxury Finish', 'Durable'],
      color: 'gold',
      href: '/solutions/hospitality'
    },
    {
      icon: Home,
      title: 'Interiors',
      description: 'Sustainable cork wall panels, furniture, and interior design solutions for modern spaces.',
      features: ['Wall Panels', 'Furniture', 'Acoustic Properties'],
      color: 'eco',
      href: '/solutions/interior'
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cork':
        return {
          bg: 'bg-cork-50',
          iconBg: 'bg-cork-600',
          iconColor: 'text-cork-600',
          textColor: 'text-cork-700',
          borderColor: 'border-cork-200',
          hoverBg: 'hover:bg-cork-100'
        }
      case 'gold':
        return {
          bg: 'bg-gold-50',
          iconBg: 'bg-gold-600',
          iconColor: 'text-gold-600',
          textColor: 'text-gold-700',
          borderColor: 'border-gold-200',
          hoverBg: 'hover:bg-gold-100'
        }
      case 'eco':
        return {
          bg: 'bg-eco-50',
          iconBg: 'bg-eco-600',
          iconColor: 'text-eco-600',
          textColor: 'text-eco-700',
          borderColor: 'border-eco-200',
          hoverBg: 'hover:bg-eco-100'
        }
      default:
        return {
          bg: 'bg-cork-50',
          iconBg: 'bg-cork-600',
          iconColor: 'text-cork-600',
          textColor: 'text-cork-700',
          borderColor: 'border-cork-200',
          hoverBg: 'hover:bg-cork-100'
        }
    }
  }

  return (
    <section className="section-padding bg-cream-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-premium-black mb-4">
            Our <span className="text-cork-600">Solutions</span>
          </h2>
          <p className="text-lg text-premium-gray max-w-2xl mx-auto mb-6">
            Premium cork-based solutions designed for sustainability, luxury, and functionality.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full border border-cork-200">
              <span className="text-cork-600 font-medium text-sm">Sustainability</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full border border-cork-200">
              <span className="text-cork-600 font-medium text-sm">Bulk Orders</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full border border-cork-200">
              <span className="text-cork-600 font-medium text-sm">Custom Options</span>
            </div>
          </div>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {solutions.map((solution, index) => {
            const colors = getColorClasses(solution.color)
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <Link href={solution.href}>
                  <Card className={`${colors.bg} h-full border ${colors.borderColor} ${colors.hoverBg}`}>
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 ${colors.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <solution.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-serif font-bold text-premium-black group-hover:text-cork-900 transition-colors duration-300">
                        {solution.title}
                      </h3>
                      <p className="text-base text-premium-gray leading-relaxed">
                        {solution.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-1.5">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className={`w-1.5 h-1.5 ${colors.iconBg} rounded-full`}></div>
                            <span className={`text-sm ${colors.textColor} font-medium`}>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="pt-4 border-t border-cork-200">
                        <Button variant="primary" size="md" fullWidth className="!py-2">
                          Explore Solution
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className={`absolute inset-0 rounded-2xl ${colors.iconBg} opacity-5 blur-xl`}></div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-cork-100 max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-premium-black mb-3">
              Need Custom Solutions?
            </h3>
            <p className="text-base text-premium-gray mb-6 max-w-xl mx-auto">
              We specialize in creating bespoke cork products tailored to your specific 
              requirements. From bulk orders to custom branding, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="primary" size="md" fullWidth className="sm:w-auto">Explore Solutions</Button>
              <Button variant="ghost" size="md" fullWidth className="sm:w-auto">Request Catalogue</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { Solutions }
