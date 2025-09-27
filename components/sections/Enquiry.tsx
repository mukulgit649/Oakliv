'use client'

import { motion } from 'framer-motion'

const Enquiry = () => {
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-cork-100 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-cork-600 font-semibold text-sm mb-2">NAME*</label>
            <input type="text" required className="w-full px-4 py-3 border border-cork-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cork-400 focus:border-transparent transition-all duration-300" />
          </div>
          <div>
            <label className="block text-cork-600 font-semibold text-sm mb-2">COMPANY*</label>
            <input type="text" required className="w-full px-4 py-3 border border-cork-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cork-400 focus:border-transparent transition-all duration-300" />
          </div>
          <div>
            <label className="block text-cork-600 font-semibold text-sm mb-2">EMAIL*</label>
            <input type="email" required className="w-full px-4 py-3 border border-cork-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cork-400 focus:border-transparent transition-all duration-300" />
          </div>
          <div>
            <label className="block text-cork-600 font-semibold text-sm mb-2">PHONE*</label>
            <input type="tel" required className="w-full px-4 py-3 border border-cork-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cork-400 focus:border-transparent transition-all duration-300" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-cork-600 font-semibold text-sm mb-2">MESSAGE</label>
            <textarea rows={4} className="w-full px-4 py-3 border border-cork-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cork-400 focus:border-transparent transition-all duration-300 resize-none" placeholder="Describe your project, use case, or quantity..." />
          </div>
          <div className="md:col-span-2">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto bg-cork-600 hover:bg-cork-700 text-white py-3 px-8 rounded-lg font-semibold transition-colors duration-300"
            >
              Submit Enquiry
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export { Enquiry }


