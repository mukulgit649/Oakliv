'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          category: '',
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

  const faqs = [
    {
      question: "What is the Oakliv Design Library?",
      answer: "The Oakliv Design Library is our curated archive of cork textures, finishes, and materials — created for designers and brands seeking inspiration for sustainable design. It's a visual tool that helps you explore how cork can be used in interiors, packaging, and products before production begins. Think of it as your material moodboard — powered by nature."
    },
    {
      question: "What are Oakliv Product Stories?",
      answer: "Oakliv Product Stories is our AI-generated short educational video series that showcases the making, meaning, and material intelligence behind our designs and products. It's where we share real stories of how cork transforms from forest to finished form — through design, craft, and sustainability. Watch how design and responsibility come together at Oakliv."
    },
    {
      question: "What exactly is cork, and why is it sustainable?",
      answer: "Cork is the natural bark of the Cork Oak tree — it's harvested without cutting the tree, and regrows every few years. That makes it 100% renewable, biodegradable, and carbon-negative 🌳"
    },
    {
      question: "Can Oakliv help us design custom cork products?",
      answer: "Yes. We partner with enterprises, hotels, and designers to create custom cork products that reflect your brand identity and sustainability goals. From branded gifting to interior materials and OEM manufacturing, we design, prototype, and produce — all under one roof. If it can be imagined sustainably, Oakliv can build it."
    },
    {
      question: "How long does delivery take once an order is placed?",
      answer: "Standard dispatch is within 10–15 working days (depending on customization). We offer pan-India delivery with eco-safe packaging."
    },
    {
      question: "How can we request Oakliv's catalogue or samples?",
      answer: "You can request a digital catalogue or material sample kit through the Contact Form below. Once we know your industry and project type — whether you're a hotel, architect, or corporate buyer — our team will send a personalized catalogue with relevant collections, finishes, and pricing. Expect a tailored response within 24 hours with visuals and specifications."
    }
  ]

  return (
    <section id="enquiry-form" className="section-padding bg-white">
      <div className="container-custom">
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className=""
        >
          <div className="text-center mb-12">
            <h3 className="text-premium-black mb-3">
              Frequently Asked Questions
            </h3>
            <p className="text-premium-gray max-w-2xl mx-auto">
              Find answers to common questions about our cork solutions and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-cream-50 border border-cork-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-cork-50 transition-colors duration-300"
                >
                  <span className="font-semibold text-premium-black pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cork-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-premium-gray leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mt-48"
        >
          <h2 className="text-premium-black mb-3">
            Ready to Partner with Us?
          </h2>
          <p className="text-premium-gray max-w-2xl mx-auto">
            Tell us briefly about your requirements and we'll reach out.
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
            <label className="block text-cork-600 font-semibold small-text mb-2">NAME*</label>
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
            <label className="block text-cork-600 font-semibold small-text mb-2">COMPANY*</label>
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
            <label className="block text-cork-600 font-semibold small-text mb-2">EMAIL*</label>
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
            <label className="block text-cork-600 font-semibold small-text mb-2">PHONE*</label>
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
            <label className="block text-cork-600 font-semibold small-text mb-2">CATEGORY*</label>
            <select 
              name="category"
              value={formData.category}
              onChange={handleChange}
              required 
              className="w-full px-4 py-3 border border-cork-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cork-400 focus:border-transparent transition-all duration-300 bg-white"
            >
              <option value="">Select a category</option>
              <option value="corporate-gifting">Corporate Gifting</option>
              <option value="hospitality">Hospitality</option>
              <option value="interiors">Interiors</option>
              <option value="workplace">Workplace & Stationery</option>
              <option value="lifestyle">Lifestyle & Decor</option>
              <option value="materials">Materials & Innovation</option>
              <option value="collaboration">Collaboration & Partnership</option>
              <option value="careers">Careers/Jobs</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-cork-600 font-semibold small-text mb-2">MESSAGE</label>
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


