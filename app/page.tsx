'use client'

import { motion } from 'framer-motion'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Industries } from '@/components/sections/Industries'
import { Solutions } from '@/components/sections/Solutions'
import { WhyChoose } from '@/components/sections/WhyChoose'
import { CaseStudies } from '@/components/sections/CaseStudies'
import { Sustainability } from '@/components/sections/Sustainability'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Testimonials } from '@/components/sections/Testimonials'
import { FloatingChatbot } from '@/components/ai/FloatingChatbot'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-50 relative">
      {/* Premium Background Pattern */}
      <div className="fixed inset-0 bg-premium-pattern opacity-30 pointer-events-none"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <Hero />
        <div className="py-12">
          <About />
        </div>
        <div className="py-12">
          <Industries />
        </div>
        <div className="py-12">
          <Solutions />
        </div>
        <div className="py-12">
          <WhyChoose />
        </div>
        <div className="py-12">
          <CaseStudies />
        </div>
        <div className="py-12">
          <Sustainability />
        </div>
        <div className="py-12">
          <FinalCTA />
        </div>
        <div className="py-12">
          <Testimonials />
        </div>
      </motion.div>
      
      <Footer />
      <FloatingChatbot />
      <ScrollToTop />
    </div>
  )
}
