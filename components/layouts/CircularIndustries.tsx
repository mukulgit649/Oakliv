'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Gift, Palette, Truck, X } from 'lucide-react'

interface IndustryItem {
  icon: any
  title: string
  description: string
  color: string
  bgColor: string
  iconColor: string
  featured?: boolean
}

interface CircularIndustriesProps {
  title: string
  subtitle: string
  items: IndustryItem[]
}

function CircularIndustries({ title, subtitle, items }: CircularIndustriesProps) {
  const [activeItem, setActiveItem] = useState<IndustryItem | null>(null)
  const [hoveredItem, setHoveredItem] = useState<IndustryItem | null>(null)

  const getCirclePosition = (index: number, total: number) => {
    // Positioning at 10, 2, 4, 8 o'clock as shown in the image
    const angles = [315, 45, 135, 225] // 10, 2, 4, 8 o'clock positions
    const angle = angles[index] || (index * 360) / total
    
    // Responsive radius
    const baseRadius = typeof window !== 'undefined' && window.innerWidth < 768 ? 140 : 
                      typeof window !== 'undefined' && window.innerWidth < 1024 ? 180 : 200
    const x = Math.cos((angle * Math.PI) / 180) * baseRadius
    const y = Math.sin((angle * Math.PI) / 180) * baseRadius
    return { x, y, radius: baseRadius, angle }
  }

  const positions = items.map((_, index) => getCirclePosition(index, items.length))

  const renderSection = () => {
    return React.createElement('section', {
      className: "section-padding bg-gradient-to-br from-cream-50 via-white to-amber-50/30 relative overflow-hidden min-h-screen flex items-center py-16 md:py-20"
    },
      React.createElement('div', {
        className: "absolute inset-0 bg-premium-pattern opacity-5"
      }),
      React.createElement('div', {
        className: "container-custom relative z-10 px-4 md:px-6 lg:px-8"
      },
        renderHeader(),
        renderPremiumRadialLayout(),
        renderFloatingPanel(),
        renderSubtleDecorations()
      )
    )
  }

  const renderHeader = () => {
    return React.createElement(motion.div, {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8 },
      className: "text-center mb-20 md:mb-24"
    },
      React.createElement('h2', {
        className: "section-title text-premium-black mb-8 text-4xl md:text-5xl lg:text-6xl"
      }, title),
      React.createElement('p', {
        className: "text-xl text-premium-gray max-w-3xl mx-auto px-4 leading-relaxed"
      }, subtitle)
    )
  }

  const renderPremiumRadialLayout = () => {
    return React.createElement('div', {
      className: "relative flex justify-center items-center min-h-[600px] md:min-h-[700px] lg:min-h-[800px] w-full"
    },
      renderCentralHub(),
      renderOrbitalLines(),
      items.map((item, index) => renderIndustryCircle(item, index)),
      renderConcentricOrbits()
    )
  }

  const renderCentralHub = () => {
    return React.createElement(motion.div, {
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 1, delay: 0.3, type: "spring", stiffness: 150 },
      className: "relative z-30"
    },
      // Main central circle with premium gradient
      React.createElement('div', {
        className: "relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full flex items-center justify-center shadow-premium border-4 border-white/90 overflow-hidden"
      },
        // Premium gradient background
        React.createElement('div', {
          className: "absolute inset-0 bg-gradient-to-br from-cork-400 via-cork-500 to-gold-400 rounded-full"
        }),
        
        // Subtle inner highlight
        React.createElement('div', {
          className: "absolute inset-2 bg-gradient-to-br from-cork-300/40 via-cork-400/60 to-gold-300/40 rounded-full"
        }),

        // Central content
        React.createElement('div', {
          className: "relative z-10 text-center text-white px-6"
        },
          React.createElement('h3', {
            className: "text-2xl md:text-3xl lg:text-4xl font-bold font-serif mb-3 drop-shadow-lg leading-tight"
          }, "Industries"),
          React.createElement('h4', {
            className: "text-lg md:text-xl lg:text-2xl font-semibold drop-shadow-lg"
          }, "We Serve")
        ),

        // Premium glow effect
        React.createElement(motion.div, {
          className: "absolute -inset-2 border-2 border-gold-300/40 rounded-full blur-sm",
          animate: {
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          },
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        })
      )
    )
  }

  const renderOrbitalLines = () => {
    return React.createElement('div', {
      className: "absolute inset-0 pointer-events-none"
    },
      positions.map((position, index) => 
        React.createElement(motion.div, {
          key: `line-${index}`,
          className: "absolute",
          style: {
            left: '50%',
            top: '50%',
            width: '1px',
            height: `${position.radius}px`,
            transformOrigin: '0 0',
            transform: `rotate(${position.angle}deg)`,
            background: 'linear-gradient(to bottom, rgba(212, 175, 55, 0.3), rgba(212, 175, 55, 0.1))'
          },
          initial: { scaleY: 0, opacity: 0 },
          animate: { scaleY: 1, opacity: 0.3 },
          transition: { duration: 1, delay: 0.8 + index * 0.1 }
        })
      )
    )
  }

  const renderIndustryCircle = (item: IndustryItem, index: number) => {
    const position = positions[index]
    return React.createElement(motion.div, {
      key: item.title,
      initial: { 
        opacity: 0, 
        scale: 0,
        x: 0,
        y: 0
      },
      animate: { 
        opacity: 1, 
        scale: 1,
        x: position.x,
        y: position.y
      },
      transition: { 
        duration: 1, 
        delay: 0.6 + index * 0.15,
        type: "spring",
        stiffness: 150
      },
      className: "absolute z-20",
      onMouseEnter: () => setHoveredItem(item),
      onMouseLeave: () => setHoveredItem(null),
      onClick: () => setActiveItem(activeItem === item ? null : item)
    },
      React.createElement('div', {
        className: "relative"
      },
        // Main industry circle
        React.createElement(motion.div, {
          className: `w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 ${item.bgColor} rounded-full flex flex-col items-center justify-center shadow-luxury border-3 md:border-4 border-white/95 cursor-pointer relative group transition-all duration-500`,
          whileHover: { 
            scale: 1.15,
            y: -8,
            boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)"
          },
          whileTap: { scale: 0.95 }
        },
          // Premium inner glow
          React.createElement('div', {
            className: "absolute inset-1 bg-gradient-to-br from-white/30 to-transparent rounded-full"
          }),

          // Icon
          React.createElement(item.icon, {
            className: `w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${item.iconColor} transition-all duration-300 drop-shadow-sm mb-1`
          }),

          // Text below icon
          React.createElement(motion.p, {
            className: "text-xs md:text-sm font-semibold text-premium-black leading-tight text-center",
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.8, delay: 1.2 + index * 0.2 }
          }, item.title.split(' ')[0]),

          // Hover glow effect
          React.createElement(motion.div, {
            className: "absolute -inset-2 bg-gradient-to-br from-gold-400/20 to-cork-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100",
            transition: { duration: 0.3 }
          })
        )
      )
    )
  }

  const renderConcentricOrbits = () => {
    return React.createElement('div', {
      className: "absolute inset-0 pointer-events-none"
    },
      // Subtle concentric circles
      React.createElement('div', {
        className: "absolute inset-0 rounded-full border border-cork-200/20",
        style: {
          width: '80%',
          height: '80%',
          left: '10%',
          top: '10%'
        }
      }),
      React.createElement('div', {
        className: "absolute inset-0 rounded-full border border-cork-200/15",
        style: {
          width: '90%',
          height: '90%',
          left: '5%',
          top: '5%'
        }
      })
    )
  }

  const renderFloatingPanel = () => {
    return React.createElement(AnimatePresence, null,
      (hoveredItem || activeItem) && React.createElement(motion.div, {
        initial: { opacity: 0, x: 100, scale: 0.9 },
        animate: { opacity: 1, x: 0, scale: 1 },
        exit: { opacity: 0, x: 100, scale: 0.9 },
        transition: { duration: 0.5, type: "spring", stiffness: 300 },
        className: "fixed right-6 md:right-8 top-1/2 transform -translate-y-1/2 z-50 max-w-sm"
      },
        React.createElement('div', {
          className: "bg-white/95 backdrop-blur-lg rounded-3xl shadow-premium p-8 border border-cork-200/50 mx-4"
        },
          React.createElement('div', {
            className: "flex items-center justify-between mb-6"
          },
            React.createElement('div', {
              className: "flex items-center space-x-4"
            },
              React.createElement('div', {
                className: `w-14 h-14 ${(hoveredItem || activeItem)?.bgColor} rounded-2xl flex items-center justify-center shadow-md`
              },
                (hoveredItem || activeItem) && React.createElement((hoveredItem || activeItem)!.icon, {
                  className: `w-7 h-7 ${(hoveredItem || activeItem)?.iconColor}`
                })
              ),
              React.createElement('h3', {
                className: "text-2xl font-bold text-premium-black"
              }, (hoveredItem || activeItem)?.title)
            ),
            React.createElement('button', {
              onClick: () => setActiveItem(null),
              className: "text-premium-gray hover:text-premium-black transition-colors p-2 hover:bg-gray-100 rounded-full"
            },
              React.createElement(X, { className: "w-5 h-5" })
            )
          ),
          React.createElement('p', {
            className: "text-premium-gray leading-relaxed mb-6 text-lg"
          }, (hoveredItem || activeItem)?.description),
          React.createElement(motion.button, {
            className: "w-full bg-gradient-to-r from-cork-500 to-gold-500 text-white py-4 rounded-2xl font-semibold hover:shadow-luxury transition-all duration-300 text-lg",
            whileHover: { scale: 1.02 },
            whileTap: { scale: 0.98 }
          }, "Explore Industry")
        )
      )
    )
  }

  const renderSubtleDecorations = () => {
    return React.createElement(React.Fragment, null,
      // Subtle floating elements
      React.createElement(motion.div, {
        className: "absolute top-24 left-24 w-16 h-16 md:w-20 md:h-20 bg-cork-100/40 rounded-full blur-sm opacity-60",
        animate: {
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        },
        transition: {
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }),
      React.createElement(motion.div, {
        className: "absolute bottom-24 right-24 w-12 h-12 md:w-16 md:h-16 bg-gold-100/40 rounded-full blur-sm opacity-50",
        animate: {
          scale: [1.1, 1, 1.1],
          rotate: [360, 180, 0],
        },
        transition: {
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }),
      
      // Tiny accent dots
      React.createElement('div', {
        className: "absolute bottom-1/4 right-1/3 w-1 h-1 bg-cork-400/60 rounded-full"
      })
    )
  }

  return renderSection()
}

export { CircularIndustries }