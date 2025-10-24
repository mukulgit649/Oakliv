'use client'

import { motion, useInView } from 'framer-motion'
import { TrendingUp, Users, Award, Play, X } from 'lucide-react'
import { useState, useRef } from 'react'

const CaseStudies = () => {
  const [playingVideos, setPlayingVideos] = useState<Set<string>>(new Set())
  const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null)

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

  const premiumDesigns = [
    { 
      name: 'Reclaimed Wine Cork', 
      category: 'Sustainability',
      videoId: 'my02OBcbaCE',
      description: 'Eco-friendly designs using reclaimed wine corks',
      color: 'from-amber-500 to-amber-700',
      initials: 'RWC'
    },
    { 
      name: 'Terra Firma Cork', 
      category: 'Natural',
      videoId: '7OcmYWfKgpA',
      description: 'Earth-inspired cork designs with natural textures',
      color: 'from-green-500 to-green-700',
      initials: 'TF'
    },
    { 
      name: 'Speckled Terracotta Cork', 
      category: 'Artisan',
      videoId: 'B3dpGFtKo2o',
      description: 'Handcrafted cork with terracotta speckled patterns',
      color: 'from-orange-500 to-orange-700',
      initials: 'ST'
    },
    { 
      name: 'Charred Sienna Cork', 
      category: 'Premium',
      videoId: 'pX6_T8f9ufU',
      description: 'Luxury cork with rich charred sienna finish',
      color: 'from-red-500 to-red-700',
      initials: 'CS'
    },
    { 
      name: 'Rustic Brick Cork', 
      category: 'Industrial',
      videoId: 'kkTxm_8A7y8',
      description: 'Industrial-inspired cork with brick-like texture',
      color: 'from-gray-500 to-gray-700',
      initials: 'RB'
    },
    { 
      name: 'Aged Bark Cork', 
      category: 'Vintage',
      videoId: 'udnyCozFSfI',
      description: 'Vintage cork with aged bark characteristics',
      color: 'from-yellow-500 to-yellow-700',
      initials: 'AB'
    }
  ]

  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-premium-black mb-4">
            Trusted by <span className="text-gradient-premium">Leading Brands</span> for <span className="text-gradient-premium">Sustainable Excellence</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-premium-gray max-w-3xl mx-auto">
            From luxury hotels to Fortune 500 companies, 
            leading brands choose Oakliv for our commitment to 100% sustainable, 
            carbon-negative cork solutions that deliver premium design.
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

        {/* Sustainability Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-green-50 to-eco-50 rounded-3xl p-8 sm:p-12 border border-green-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-green-800 mb-4">
                Our Environmental Impact
              </h3>
              <p className="text-green-700 max-w-2xl mx-auto">
                Every cork product contributes to a healthier planet through our sustainable practices
              </p>
            </div>
            
            {/* Key Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-green-800 font-semibold mb-1">Sustainable Materials</div>
                <div className="text-green-700 text-sm">Renewable cork from living trees</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-green-600 mb-2">5x</div>
                <div className="text-green-800 font-semibold mb-1">CO2 Absorption</div>
                <div className="text-green-700 text-sm">More CO2 absorbed than produced</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-green-600 mb-2">200Y</div>
                <div className="text-green-800 font-semibold mb-1">Tree Lifespan</div>
                <div className="text-green-700 text-sm">Continuous environmental benefits</div>
              </motion.div>
            </div>
            
            {/* Sustainability Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex items-center space-x-3 p-4 bg-white/50 rounded-xl"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-lg">🌱</span>
                </div>
                <div>
                  <div className="font-semibold text-green-800 text-sm">Renewable</div>
                  <div className="text-green-600 text-xs">Harvested without harming trees</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex items-center space-x-3 p-4 bg-white/50 rounded-xl"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-lg">♻️</span>
                </div>
                <div>
                  <div className="font-semibold text-green-800 text-sm">Biodegradable</div>
                  <div className="text-green-600 text-xs">Naturally decomposes safely</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="flex items-center space-x-3 p-4 bg-white/50 rounded-xl"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-lg">⚡</span>
                </div>
                <div>
                  <div className="font-semibold text-green-800 text-sm">Carbon Negative</div>
                  <div className="text-green-600 text-xs">Absorbs more CO2 than produced</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex items-center space-x-3 p-4 bg-white/50 rounded-xl"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-lg">💚</span>
                </div>
                <div>
                  <div className="font-semibold text-green-800 text-sm">Plastic Alternative</div>
                  <div className="text-green-600 text-xs">Reduces plastic waste</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Premium Designs with Videos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-serif font-bold text-premium-black mb-16">
            Our Premium Designs
          </h3>
          
          {/* Video Design Carousel - Revolving from left to right */}
          <div className="relative overflow-hidden">
              <motion.div
              className="flex gap-4 sm:gap-6"
              animate={{
                x: [0, -100 * premiumDesigns.length]
              }}
                transition={{ 
                x: {
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear"
                }
              }}
            >
              {/* First set of designs */}
              {premiumDesigns.map((design, index) => {
                const ref = useRef<HTMLDivElement>(null)
                const isInView = useInView(ref, { 
                  once: true, 
                  amount: 0.5 
                })
                
                // Auto-play video when it comes into view
                if (isInView && !playingVideos.has(design.videoId)) {
                  setPlayingVideos(prev => new Set(Array.from(prev).concat(design.videoId)))
                }
                
                return (
                  <motion.div
                    key={`first-${design.name}`}
                    ref={ref}
                    className="group flex-shrink-0 w-36 xs:w-40 sm:w-44 md:w-48"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-5 shadow-soft hover:shadow-premium transition-all duration-500 group-hover:-translate-y-2 flex flex-col items-center justify-center h-20 sm:h-24 md:h-28 relative overflow-hidden">
                      {/* Video Overlay - Auto-play when in view */}
                      {playingVideos.has(design.videoId) && (
                        <div className="absolute inset-0 z-10">
                          <iframe
                            src={`https://www.youtube.com/embed/${design.videoId}?autoplay=1&mute=1&loop=1&playlist=${design.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0&fs=0&disablekb=1`}
                            title={design.name}
                            className="w-full h-full rounded-xl"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            style={{ border: 'none' }}
                          />
                        </div>
                      )}
                      
                      {/* Cover Content */}
                      <motion.div 
                        className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${design.color} rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:rotate-12 transition-transform duration-300 relative z-0`}
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
                        <span className="text-white font-bold text-sm sm:text-base">
                          {design.initials}
                    </span>
                      </motion.div>
                      
                      {/* Play Button Overlay - Always show to open fullscreen */}
                      <motion.button
                        onClick={() => {
                          // Open this video in fullscreen
                          setFullscreenVideo(design.videoId)
                        }}
                        className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors duration-300 z-20 min-h-[44px] min-w-[44px]"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                          <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-amber-600 ml-0.5" />
                        </div>
                      </motion.button>
                    </div>
                    
                    {/* Design Name Below the Box */}
                    <div className="text-sm text-premium-gray font-medium text-center leading-tight mt-2 px-1">
                      {design.name}
                    </div>
                  </motion.div>
                )
              })}
              
              {/* Duplicate set for seamless loop */}
              {premiumDesigns.map((design, index) => (
                <motion.div
                  key={`second-${design.name}`}
                  className="group flex-shrink-0 w-36 xs:w-40 sm:w-44 md:w-48"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="bg-white rounded-2xl p-2 sm:p-3 md:p-4 shadow-soft hover:shadow-premium transition-all duration-500 group-hover:-translate-y-2 flex flex-col items-center justify-center h-18 sm:h-20 md:h-24 relative overflow-hidden">
                    {/* Video Overlay - Auto-play when in view */}
                    {playingVideos.has(design.videoId) && (
                      <div className="absolute inset-0 z-10">
                        <iframe
                          src={`https://www.youtube.com/embed/${design.videoId}?autoplay=1&mute=1&loop=1&playlist=${design.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0&fs=0&disablekb=1`}
                          title={design.name}
                          className="w-full h-full rounded-xl"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          style={{ border: 'none' }}
                        />
                      </div>
                    )}
                    
                    {/* Cover Content */}
                    <motion.div 
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${design.color} rounded-xl flex items-center justify-center mb-1 sm:mb-2 group-hover:rotate-12 transition-transform duration-300 relative z-0`}
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
                      <span className="text-white font-bold text-xs sm:text-sm">
                        {design.initials}
                      </span>
                    </motion.div>
                    
                    {/* Play Button Overlay - Always show to open fullscreen */}
                    <motion.button
                      onClick={() => {
                        // Open this video in fullscreen
                        setFullscreenVideo(design.videoId)
                      }}
                      className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors duration-300 z-20"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <Play className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600 ml-0.5" />
                      </div>
                    </motion.button>
                  </div>
                  
                  {/* Design Name Below the Box */}
                  <div className="text-xs text-premium-gray font-medium text-center leading-tight mt-2">
                    {design.name}
                </div>
              </motion.div>
            ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Video Modal */}
      {fullscreenVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setFullscreenVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-sm sm:max-w-2xl h-[70vh] sm:h-[80vh] bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setFullscreenVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Video */}
            <iframe
              src={`https://www.youtube.com/embed/${fullscreenVideo}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1&fs=1`}
              title="Design Video"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export { CaseStudies }
