'use client'

import { motion, useInView } from 'framer-motion'
import { TrendingUp, Users, Award, Play, X, ChevronLeft, ChevronRight, Leaf, TreePine, Recycle, Droplet } from 'lucide-react'
import { useState, useRef } from 'react'
import Image from 'next/image'

const CaseStudies = () => {
  const [playingVideos, setPlayingVideos] = useState<Set<string>>(new Set())
  const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null)
  const textureCarouselRef = useRef<HTMLDivElement>(null)

  // Texture images array with design names
  const textureImages = [
    { image: '/Autumn Mosaic Cork.png', name: 'Autumn Mosaic Cork' },
    { image: '/Rustic Mosaic Cork.png', name: 'Rustic Mosaic Cork' },
    { image: '/Natural FG Cork.png', name: 'Natural FG Cork' },
    { image: '/Natural Harmony Cork.png', name: 'Natural Harmony Cork' },
    { image: '/Natural MG Cork.png', name: 'Natural MG Cork' },
    { image: '/Rustic Sienna Cork.png', name: 'Rustic Sienna Cork' },
    { image: '/Design Library_Web (2).png', name: 'Design Library Cork' }
  ]

  const scrollLeft = () => {
    if (textureCarouselRef.current) {
      textureCarouselRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (textureCarouselRef.current) {
      textureCarouselRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  const caseStudies = [
    {
      icon: TrendingUp,
      title: 'Business Clients',
      description: 'Join hundreds of companies that have chosen our sustainable cork solutions',
      metric: '500+'
    },
    {
      icon: Users,
      title: 'Units Delivered',
      description: 'Sustainable cork products delivered to businesses worldwide',
      metric: '20 Lakh+'
    },
    {
      icon: Award,
      title: 'Repeat Orders',
      description: 'Client satisfaction leading to continuous partnerships',
      metric: '98%'
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
          className="text-center"
        >
          <h3 className="text-3xl font-serif font-bold text-premium-black mb-8">
            Our Premium Designs
          </h3>
          
          {/* Texture Images Carousel */}
          <motion.div 
            className="mb-16 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={scrollLeft}
                className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg border border-cork-200 transition-all duration-300 hover:scale-110"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-cork-700" />
              </button>
              
              <button
                onClick={scrollRight}
                className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg border border-cork-200 transition-all duration-300 hover:scale-110"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-cork-700" />
              </button>

              {/* Carousel Container */}
              <div 
                ref={textureCarouselRef}
                className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-4 md:px-12"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {textureImages.map((texture, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px]"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-soft border border-cork-100 hover:shadow-luxury transition-all duration-300">
                      {/* Image */}
                      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                        <Image
                          src={texture.image}
                          alt={texture.name}
                          fill
                          className="object-contain p-4"
                          priority={index === 0}
                        />
                      </div>
                      
                      {/* Design Name */}
                      <div className="p-3 sm:p-4 text-center">
                        <h4 className="text-base sm:text-lg md:text-xl font-serif font-bold text-premium-black">
                          {texture.name}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-48 px-4 sm:px-0"
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
                <p className="text-premium-gray text-sm">
                  {study.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Make a Difference Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-48"
        >
          {/* Main Heading */}
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-premium-black mb-3 sm:mb-4">
              Make a Difference
            </h3>
            <p className="text-base sm:text-lg text-premium-gray max-w-3xl mx-auto leading-relaxed">
              Choosing cork isn't just about quality—it's about positive environmental impact
            </p>
          </div>

          {/* Your Sustainability Impact Box */}
          <div className="bg-green-50 rounded-3xl p-4 sm:p-8 md:p-12 border border-green-200 mb-8 sm:mb-12">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-800">
                Your Sustainability Impact
              </h4>
            </div>
            
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
              <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gold-200 relative">
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 absolute top-3 right-3 sm:top-4 sm:right-4" />
                <div className="text-4xl sm:text-5xl font-bold text-premium-black mb-2 sm:mb-3">5x</div>
                <div className="text-base sm:text-lg font-serif font-bold text-premium-black mb-2 sm:mb-3">CO2 Absorption</div>
                <p className="text-xs sm:text-sm text-premium-gray leading-relaxed">
                  Harvested Cork Oak Trees Absorb 3 To 5 Times More CO2 As They Regenerate Their Bark Compared To Unharvested Trees.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gold-200 relative">
                <TreePine className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 absolute top-3 right-3 sm:top-4 sm:right-4" />
                <div className="text-4xl sm:text-5xl font-bold text-premium-black mb-2 sm:mb-3">2.2M</div>
                <div className="text-base sm:text-lg font-serif font-bold text-premium-black mb-2 sm:mb-3">2.2 Million Hectares</div>
                <p className="text-xs sm:text-sm text-premium-gray leading-relaxed">
                  Cork Oak Forests Cover Over 2.2 Million Hectares Worldwide, Acting As A Vital Carbon Sink And Biodiversity Hotspot.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gold-200 relative">
                <Recycle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 absolute top-3 right-3 sm:top-4 sm:right-4" />
                <div className="text-4xl sm:text-5xl font-bold text-premium-black mb-2 sm:mb-3">200Y</div>
                <div className="text-base sm:text-lg font-serif font-bold text-premium-black mb-2 sm:mb-3">200 Years Lifespan</div>
                <p className="text-xs sm:text-sm text-premium-gray leading-relaxed">
                  Cork Oak Trees Can Live Up To 200 Years, Continually Providing Environmental Benefits Throughout Their Lifespan.
                </p>
              </div>
            </div>
            
            <p className="text-sm text-premium-gray text-center">
              Calculations based on industry standards for sustainable materials vs. conventional alternatives
            </p>
          </div>

          {/* Three Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl p-4 sm:p-6 border border-cork-200"
            >
              <h5 className="text-lg sm:text-xl font-serif font-bold text-premium-black mb-2 sm:mb-3">
                Renewable Resource
              </h5>
              <p className="text-sm sm:text-base text-premium-gray leading-relaxed">
                Cork is harvested without damaging the tree, making it one of the most sustainable natural materials.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl p-4 sm:p-6 border border-cork-200"
            >
              <h5 className="text-lg sm:text-xl font-serif font-bold text-premium-black mb-2 sm:mb-3">
                Carbon Negative
              </h5>
              <p className="text-sm sm:text-base text-premium-gray leading-relaxed">
                Cork oak forests absorb CO2, helping to reduce your company's carbon footprint with every purchase.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white rounded-2xl p-4 sm:p-6 border border-cork-200"
            >
              <h5 className="text-lg sm:text-xl font-serif font-bold text-premium-black mb-2 sm:mb-3">
                Biodegradable
              </h5>
              <p className="text-sm sm:text-base text-premium-gray leading-relaxed">
                Unlike synthetic alternatives, cork products naturally decompose at the end of their lifecycle.
              </p>
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
