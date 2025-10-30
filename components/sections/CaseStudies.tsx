'use client'

import { motion, useInView } from 'framer-motion'
import { TrendingUp, Users, Award, Play, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const CaseStudies = () => {
  const [playingVideos, setPlayingVideos] = useState<Set<string>>(new Set())
  const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null)
  const [currentTextureIndex, setCurrentTextureIndex] = useState(0)

  // Texture images array
  const textureImages = [
    '/Autumn Mosaic Cork.png',
    '/Rustic Mosaic Cork.png',
    '/Natural FG Cork.png',
    '/Natural Harmony Cork.png',
    '/Natural MG Cork.png',
    '/Rustic Sienna Cork.png',
    '/Design Library_Web (2).png'
  ]

  // Auto-rotate texture images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextureIndex((prev) => (prev + 1) % textureImages.length)
    }, 4000) // Change image every 4 seconds
    
    return () => clearInterval(interval)
  }, [textureImages.length])

  const caseStudies = [
    {
      icon: TrendingUp,
      title: 'Business Clients',
      description: 'Join hundreds of companies that have chosen our sustainable cork solutions',
      metric: '500+',
      category: 'Business'
    },
    {
      icon: Users,
      title: 'Units Delivered',
      description: 'Sustainable cork products delivered to businesses worldwide',
      metric: '2M+',
      category: 'Delivery'
    },
    {
      icon: Award,
      title: 'Repeat Orders',
      description: 'Client satisfaction leading to continuous partnerships',
      metric: '98%',
      category: 'Satisfaction'
    }
  ]

  const premiumDesigns = [
    { 
      name: 'Autumn Mosaic Cork', 
      category: 'Seasonal',
      videoId: 'kGUOCzceu1w',
      description: 'Rich autumn-inspired cork with mosaic patterns',
      color: 'from-amber-500 to-amber-700',
      initials: 'AM'
    },
    { 
      name: 'Rustic Sienna Cork', 
      category: 'Rustic',
      videoId: 'k_yVHOGfo0U',
      description: 'Rustic cork with warm sienna tones',
      color: 'from-orange-500 to-orange-700',
      initials: 'RS'
    },
    { 
      name: 'Linear Harmony Cork', 
      category: 'Modern',
      videoId: 'IBiSqMh29J0',
      description: 'Modern linear patterns in harmony',
      color: 'from-blue-500 to-blue-700',
      initials: 'LH'
    },
    { 
      name: 'Forest Weave Cork', 
      category: 'Natural',
      videoId: 'x-emMWj7RNg',
      description: 'Natural forest-inspired weaving patterns',
      color: 'from-green-500 to-green-700',
      initials: 'FW'
    },
    { 
      name: 'Natural Harmony Cork', 
      category: 'Natural',
      videoId: 'IGeH-VudAQE',
      description: 'Natural cork with harmonious textures',
      color: 'from-emerald-500 to-emerald-700',
      initials: 'NH'
    },
    { 
      name: 'Rustic Mosaic Cork', 
      category: 'Rustic',
      videoId: 'Ok5ty73NBeM',
      description: 'Rustic mosaic patterns in cork',
      color: 'from-amber-600 to-amber-800',
      initials: 'RM'
    },
    { 
      name: 'Natural LG Deep Cork', 
      category: 'Natural',
      videoId: 'OOtqCbvYCuY',
      description: 'Natural cork with deep LG patterns',
      color: 'from-green-600 to-green-800',
      initials: 'NLG'
    },
    { 
      name: 'Natural MG Cork', 
      category: 'Natural',
      videoId: 'Fo8bkWMRkb0',
      description: 'Natural MG cork design',
      color: 'from-teal-500 to-teal-700',
      initials: 'NMG'
    },
    { 
      name: 'Natural FG Cork', 
      category: 'Natural',
      videoId: 'eA9g9TUSQJQ',
      description: 'Natural FG cork texture',
      color: 'from-lime-500 to-lime-700',
      initials: 'NFG'
    },
    { 
      name: 'Terra Rouge Cork', 
      category: 'Premium',
      videoId: 'FsowXq0sYhI',
      description: 'Premium terra rouge cork finish',
      color: 'from-red-500 to-red-700',
      initials: 'TR'
    }
  ]

  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Premium Designs with Videos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-serif font-bold text-premium-black mb-8">
            Our Premium Designs
          </h3>
          
          {/* Texture Images Slideshow */}
          <motion.div 
            className="mb-16 max-w-6xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {textureImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === currentTextureIndex ? 1 : 0,
                    scale: index === currentTextureIndex ? 1 : 1
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className={`absolute inset-0 ${index === currentTextureIndex ? 'z-10' : 'z-0'}`}
                  style={{ 
                    display: index === currentTextureIndex ? 'block' : 'none'
                  }}
                >
                  <Image
                    src={image}
                    alt={`Texture ${index + 1}`}
                    fill
                    className="object-contain w-full h-full"
                    priority={index === 0}
                  />
                </motion.div>
              ))}
              
              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {textureImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTextureIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentTextureIndex 
                        ? 'w-8 bg-white' 
                        : 'w-2 bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* See Oakliv in Action Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="max-w-6xl mx-auto mb-16"
          >
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-soft border border-cork-100">
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-center text-premium-black mb-4 sm:mb-6">
                See Oakliv in Action
              </h4>
              <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/s-zqf1sDRIs?autoplay=0&mute=1&loop=1&playlist=s-zqf1sDRIs&controls=1&modestbranding=1&rel=0&playsinline=1"
                  title="Oakliv - Sustainable Cork Solutions"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Video Design Carousel - Revolving from left to right */}
          <div className="relative overflow-hidden mb-16">
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
                            src={`https://www.youtube.com/embed/${design.videoId}?autoplay=1&mute=1&loop=1&playlist=${design.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                            title={design.name}
                            className="w-full h-full rounded-xl"
                            allow="autoplay; encrypted-media; picture-in-picture; web-share"
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
                          src={`https://www.youtube.com/embed/${design.videoId}?autoplay=1&mute=1&loop=1&playlist=${design.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                          title={design.name}
                          className="w-full h-full rounded-xl"
                          allow="autoplay; encrypted-media; picture-in-picture; web-share"
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

        {/* Spacing between sections */}
        <div className="mb-16 md:mb-20 lg:mb-24"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-premium-black mb-4">
            Trusted by <span className="text-gradient-premium">Leading Businesses</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-premium-gray max-w-3xl mx-auto">
            Join hundreds of companies that have chosen our sustainable cork solutions for their business needs
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
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export { CaseStudies }
