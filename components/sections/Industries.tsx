'use client'

import { motion } from 'framer-motion'
import { Building2, Gift, Palette, Truck, Sparkles, Star, Zap } from 'lucide-react'
import { CircularIndustries } from '@/components/layouts/CircularIndustries'

const Industries = () => {

  const industries = [
    {
      icon: Building2,
      title: 'Hospitality & Resorts',
      description: 'Premium cork solutions for luxury hotels, resorts, and hospitality spaces',
      color: 'from-gold-400 to-gold-500',
      bgColor: 'bg-gold-50',
      iconColor: 'text-gold-600',
      featured: true
    },
    {
      icon: Gift,
      title: 'Corporate Gifting',
      description: 'Elegant corporate gifts and hampers that reflect your brand values',
      color: 'from-cork-400 to-cork-500',
      bgColor: 'bg-cork-50',
      iconColor: 'text-cork-600'
    },
    {
      icon: Palette,
      title: 'Interior Designers & Architects',
      description: 'Sustainable materials for innovative interior design projects',
      color: 'from-eco-400 to-eco-500',
      bgColor: 'bg-eco-50',
      iconColor: 'text-eco-600'
    },
    {
      icon: Truck,
      title: 'Retail',
      description: 'Custom cork solutions tailored to your unique requirements and specifications',
      color: 'from-luxury-400 to-luxury-500',
      bgColor: 'bg-luxury-50',
      iconColor: 'text-luxury-600'
    }
  ]

  return (
    <CircularIndustries
      title="Industries We Serve"
      subtitle="We partner with diverse industries to deliver premium sustainable solutions that meet their unique needs and values."
      items={industries}
    />
  )
}

export { Industries }
