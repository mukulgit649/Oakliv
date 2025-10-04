'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-premium-black mb-3">
            Start Your Project Enquiry
          </h2>
          <p className="text-premium-gray max-w-2xl mx-auto">
            Tell us briefly about your requirements and we’ll reach out.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-cork-100 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-cork-600 font-semibold text-sm mb-2">NAME*</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
              className="w-full px-4 py-3 border border-cork-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cork-400 focus:border-transparent transition-all duration-300" 
            />
          </div>
          <div>
            <label className="block text-cork-600 font-semibold text-sm mb-2">COMPANY*</label>
            <input 
              type="text" 
              name="company"
              value={formData.company}
              onChange={handleChange}
              required 
              className="w-full px-4 py-3 border border-cork-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cork-400 focus:border-transparent transition-all duration-300" 
            />
          </div>
          <div>
            <label className="block text-cork-600 font-semibold text-sm mb-2">EMAIL*</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
              className="w-full px-4 py-3 border border-cork-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cork-400 focus:border-transparent transition-all duration-300" 
            />
          </div>
          <div>
            <label className="block text-cork-600 font-semibold text-sm mb-2">PHONE*</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required 
              className="w-full px-4 py-3 border border-cork-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cork-400 focus:border-transparent transition-all duration-300" 
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-cork-600 font-semibold text-sm mb-2">MESSAGE</label>
            <textarea 
              rows={4} 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-cork-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cork-400 focus:border-transparent transition-all duration-300 resize-none" 
              placeholder="Describe your project, use case, or quantity..." 
            />
          </div>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="md:col-span-2">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">
                  ✅ Thank you! Your enquiry has been sent successfully. We'll reach out to you soon.
                </p>
              </div>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="md:col-span-2">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 font-medium">
                  ❌ Sorry, there was an error sending your enquiry. Please try again or contact us directly.
                </p>
              </div>
            </div>
          )}
          
          <div className="md:col-span-2">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full md:w-auto py-3 px-8 rounded-lg font-semibold transition-colors duration-300 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed text-gray-600' 
                  : 'bg-cork-600 hover:bg-cork-700 text-white'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export { Enquiry }


