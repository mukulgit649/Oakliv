'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Briefcase, Users, Home, Laptop, Heart, Cog } from 'lucide-react'
import { Card } from '@/components/ui/Card'

const Solutions = () => {

  const solutions = [
    {
      icon: Briefcase,
      title: 'Corporate Gifting',
      description: 'Premium cork corporate gifts and bulk solutions for enterprises. Custom branding available.',
      color: 'cork',
      href: '/solutions/corporate'
    },
    {
      icon: Users,
      title: 'Hospitality',
      description: 'Luxury cork products for hotels, resorts, and hospitality spaces. Enhance guest experience.',
      color: 'gold',
      href: '/solutions/hospitality'
    },
    {
      icon: Home,
      title: 'Interiors',
      description: 'Sustainable cork wall panels, furniture, and interior design solutions for modern spaces.',
      color: 'eco',
      href: '/solutions/interior'
    },
    {
      icon: Laptop,
      title: 'Workplace & Stationery',
      description: 'Eco-friendly stationery and office accessories for modern workplaces. Our cork organizers, desk sets, and utility items bring sustainability to everyday work environments in bulk or custom branding.',
      color: 'luxury',
      href: '/solutions/workplace'
    },
    {
      icon: Heart,
      title: 'Lifestyle & Decor',
      description: 'Stylish cork products that blend design with sustainability. Wallets, bags, yoga accessories, planters, and decor pieces—crafted for daily use, gifting, or branded merchandise for enterprises.',
      color: 'premium',
      href: '/solutions/lifestyle'
    },
    {
      icon: Cog,
      title: 'Custom Solutions',
      description: 'Supplying cork sheets, fabrics, lids, and stoppers for bulk buyers, designers, and OEMs. We also offer custom product development and white-label solutions tailored to your brand\'s needs.',
      color: 'innovation',
      href: '/solutions/custom'
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
      case 'luxury':
        return {
          bg: 'bg-gradient-to-br from-purple-50 to-indigo-50',
          iconBg: 'bg-gradient-to-br from-purple-600 to-indigo-600',
          iconColor: 'text-purple-600',
          textColor: 'text-purple-700',
          borderColor: 'border-purple-200',
          hoverBg: 'hover:bg-gradient-to-br hover:from-purple-100 hover:to-indigo-100'
        }
      case 'premium':
        return {
          bg: 'bg-gradient-to-br from-rose-50 to-pink-50',
          iconBg: 'bg-gradient-to-br from-rose-600 to-pink-600',
          iconColor: 'text-rose-600',
          textColor: 'text-rose-700',
          borderColor: 'border-rose-200',
          hoverBg: 'hover:bg-gradient-to-br hover:from-rose-100 hover:to-pink-100'
        }
      case 'innovation':
        return {
          bg: 'bg-gradient-to-br from-slate-50 to-gray-50',
          iconBg: 'bg-gradient-to-br from-slate-600 to-gray-600',
          iconColor: 'text-slate-600',
          textColor: 'text-slate-700',
          borderColor: 'border-slate-200',
          hoverBg: 'hover:bg-gradient-to-br hover:from-slate-100 hover:to-gray-100'
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
    <section id="solutions" className="section-padding bg-cream-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-premium-black mb-4">
            Our <span className="text-cork-600">Solutions</span>
          </h2>
          <p className="body-text text-premium-gray max-w-2xl mx-auto mb-6 px-4">
            Premium cork-based solutions designed for sustainability, luxury, and functionality.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 px-4 sm:px-0">
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
                <Card className={`${colors.bg} h-full border ${colors.borderColor} ${colors.hoverBg} group`}>
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 sm:w-16 sm:h-16 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <solution.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex flex-col h-full p-4 sm:p-6">
                    <div className="flex-1 space-y-3 sm:space-y-4">
                      <h3 className="text-premium-black group-hover:text-cork-900 transition-colors duration-300">
                        {solution.title}
                      </h3>
                      <p className="small-text text-premium-gray leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className={`absolute inset-0 rounded-2xl ${colors.iconBg} opacity-5 blur-xl`}></div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export { Solutions }
