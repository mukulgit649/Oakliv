'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Sparkles, Send, ChevronDown } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: number
}

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m Oakliv AI Assistant. How can I help you with our premium cork solutions today?',
      timestamp: Date.now()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  const categories = [
    { value: 'corporate', label: '👜 Corporate Gifting' },
    { value: 'hospitality', label: '🏨 Hospitality' },
    { value: 'interiors', label: '🏠 Interiors' },
    { value: 'workplace', label: '💼 Workplace & Stationery' },
    { value: 'lifestyle', label: '💖 Lifestyle & Décor' },
    { value: 'custom', label: '⚙️ Custom / OEM Solutions' }
  ]

  // CTA Links as per blueprint
  const ctaLinks = {
    catalogue: '#enquiry-form',
    designLibrary: '#premium-designs',
    whatsapp: 'https://wa.me/919957241838?text=Hi%20Oakliv%2C%20I%20came%20from%20the%20chatbot%20and%20need%20help%20with%20cork%20solutions.'
  }
  
  const videoLinks: Record<string, string> = {
    corporate: 'https://youtu.be/my02OBcbaCE',
    hospitality: 'https://youtu.be/7OcmYWfKgpA',
    interiors: 'https://youtu.be/B3dpGFtKo2o',
    workplace: 'https://youtu.be/pX6_T8f9ufU',
    lifestyle: 'https://youtu.be/kkTxm_8A7y8',
    custom: 'https://youtu.be/udnyCozFSfI'
  }

  // Function to parse message content and render clickable links
  const parseMessageContent = (content: string) => {
    // Split content by line breaks to handle separate messages
    const lines = content.split('\n').filter(line => line.trim())
    
    return lines.map((line, index) => {
      // Check if line contains link patterns like [Text: URL]
      const linkPattern = /\[([^\]]+):\s*([^\]]+)\]/g
      const parts = []
      let lastIndex = 0
      let match

      while ((match = linkPattern.exec(line)) !== null) {
        // Add text before the link
        if (match.index > lastIndex) {
          parts.push(line.slice(lastIndex, match.index))
        }
        
        // Add the clickable link
        parts.push(
          <a
            key={`link-${index}-${match.index}`}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cork-600 hover:text-cork-700 underline font-medium transition-colors duration-200"
          >
            {match[1]}
          </a>
        )
        
        lastIndex = match.index + match[0].length
      }
      
      // Add remaining text after the last link
      if (lastIndex < line.length) {
        parts.push(line.slice(lastIndex))
      }
      
      // If no links found, return the original line
      if (parts.length === 0) {
        return line
      }
      
      return (
        <div key={`line-${index}`} className="mb-2 last:mb-0">
          {parts}
        </div>
      )
    })
  }

  const handleCategoryChange = (category: string) => {
    try {
      setSelectedCategory(category)
      setShowCategoryDropdown(false)
      
      // Add user message
      const userMessage: Message = {
        role: 'user',
        content: `I'm interested in ${categories.find(c => c.value === category)?.label}`,
        timestamp: Date.now()
      }
      setMessages(prev => [...prev, userMessage])
      
      // Trigger AI response
      setIsLoading(true)
      
      // Use setTimeout to avoid blocking the UI
      setTimeout(async () => {
        try {
          const requestData = {
            message: `I'm interested in ${categories.find(c => c.value === category)?.label}`,
            conversationHistory: messages,
            selectedCategory: category
          }
          console.log('Sending category selection to API:', requestData)
          
          const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
          })

      const data = await response.json()
      console.log('Category API Response:', data)

      if (data.success) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: data.response,
          timestamp: Date.now()
        }
        setMessages(prev => [...prev, assistantMessage])
        
        // Auto-scroll to enquiry form if user requested catalogue
        if (requestData.message.toLowerCase().includes('catalogue') || 
            requestData.message.toLowerCase().includes('catalog') ||
            requestData.message.toLowerCase().includes('request')) {
          setTimeout(() => {
            // Try multiple selectors to find the "Ready to Partner with Us?" section
            const enquirySection = document.querySelector('#enquiry-form') || 
                                   document.querySelector('section[id="enquiry-form"]') ||
                                   document.querySelector('h2:contains("Ready to Partner")')?.closest('section') ||
                                   document.querySelector('h2:contains("Ready to Partner with Us")')?.closest('section') ||
                                   document.querySelector('form')
            if (enquirySection) {
              enquirySection.scrollIntoView({ behavior: 'smooth', block: 'start' })
            } else {
              // Fallback: scroll to bottom
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
            }
          }, 500)
        }
      } else {
            console.error('API Error:', data.error)
            const errorMessage: Message = {
              role: 'assistant',
              content: 'Sorry, I encountered an error. Please try again or fill out our enquiry form for assistance.',
              timestamp: Date.now()
            }
            setMessages(prev => [...prev, errorMessage])
          }
        } catch (error) {
          console.error('Category selection error:', error)
          const errorMessage: Message = {
            role: 'assistant',
            content: 'Sorry, I encountered an error. Please try again or fill out our enquiry form for assistance.',
            timestamp: Date.now()
          }
          setMessages(prev => [...prev, errorMessage])
        } finally {
          setIsLoading(false)
        }
      }, 100)
    } catch (error) {
      console.error('Category change error:', error)
      setIsLoading(false)
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      role: 'user',
      content: inputValue,
      timestamp: Date.now()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const requestData = {
        message: inputValue,
        conversationHistory: messages,
        selectedCategory: selectedCategory
      }
      console.log('Sending to API:', requestData)
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })

      const data = await response.json()
      console.log('Chat API Response:', data)

      if (data.success) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: data.response,
          timestamp: Date.now()
        }
        setMessages(prev => [...prev, assistantMessage])
        
        // Auto-scroll to enquiry form if user requested catalogue (keep chatbot open)
        if (inputValue.toLowerCase().includes('catalogue') || 
            inputValue.toLowerCase().includes('catalog') ||
            inputValue.toLowerCase().includes('request')) {
          setTimeout(() => {
            // Try multiple selectors to find the "Ready to Partner with Us?" section
            const enquirySection = document.querySelector('#enquiry-form') || 
                                   document.querySelector('section[id="enquiry-form"]') ||
                                   document.querySelector('h2:contains("Ready to Partner")')?.closest('section') ||
                                   document.querySelector('h2:contains("Ready to Partner with Us")')?.closest('section') ||
                                   document.querySelector('form')
            if (enquirySection) {
              enquirySection.scrollIntoView({ behavior: 'smooth', block: 'start' })
            } else {
              // Fallback: scroll to bottom
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
            }
          }, 500)
        }
      } else {
        console.error('API Error:', data.error)
        throw new Error(data.error || 'Failed to get response')
      }
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again or fill out our enquiry form for assistance.',
        timestamp: Date.now()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-cork-900 hover:bg-cork-800 rounded-full shadow-luxury flex items-center justify-center group transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-cream-50 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-cork-900 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
      </motion.button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-20 right-4 left-4 sm:left-auto sm:bottom-24 sm:right-8 z-50 sm:w-96 bg-white rounded-3xl shadow-luxury border border-cork-100 overflow-hidden flex flex-col max-h-[70vh] chat-mobile"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cork-900 to-cork-800 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-cork-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Oakliv AI Assistant</h3>
                    <p className="text-xs sm:text-sm text-cream-200">Online Now</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-cream-50 max-h-96 scroll-container">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-xl p-3 ${
                      msg.role === 'user'
                        ? 'bg-cork-600 text-white'
                        : 'bg-white text-premium-black border border-cork-100'
                    }`}
                  >
                    <div className="text-sm leading-relaxed">
                      {parseMessageContent(msg.content)}
                    </div>
                    <p className="text-xs opacity-60 mt-1">
                      {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {/* Category Dropdown Button - Shows in first message */}
              {messages.length === 1 && !selectedCategory && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[80%]">
                    <button
                      onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                      className="w-full bg-cork-600 hover:bg-cork-700 text-white py-3 px-4 rounded-lg font-medium text-sm transition-colors duration-300 flex items-center justify-between space-x-2"
                    >
                      <span>Select Category</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showCategoryDropdown ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Category Dropdown */}
                    <AnimatePresence>
                      {showCategoryDropdown && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2 bg-white rounded-lg border border-cork-200 overflow-hidden shadow-lg"
                        >
                          {categories.map((category) => (
                            <button
                              key={category.value}
                              onClick={() => handleCategoryChange(category.value)}
                              className="w-full text-left px-4 py-3 hover:bg-cork-50 transition-colors duration-200 text-sm border-b border-cork-100 last:border-b-0"
                            >
                              {category.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white text-premium-black border border-cork-100 rounded-xl p-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-cork-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-cork-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-cork-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-cork-100">
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our cork solutions..."
                  className="flex-1 px-4 py-3 border border-cork-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cork-400 text-base form-mobile"
                  disabled={isLoading}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-lg transition-colors duration-300 btn-mobile ${
                    isLoading || !inputValue.trim()
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-cork-600 hover:bg-cork-700'
                  }`}
                >
                  <Send className={`w-5 h-5 ${isLoading || !inputValue.trim() ? 'text-gray-500' : 'text-white'}`} />
                </motion.button>
              </div>
              <p className="text-xs text-premium-gray mt-2 text-center">
                {selectedCategory ? `Category: ${categories.find(c => c.value === selectedCategory)?.label} • ` : ''}Powered by Gemini AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export { FloatingChatbot }
