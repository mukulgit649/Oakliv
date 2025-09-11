'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Eye, Heart, ShoppingCart } from 'lucide-react'

const ProductShowcase = () => {

  const products = [
    {
      id: 1,
      name: "Premium Cork Notebooks",
      category: "Corporate Gifting",
      price: "₹2,500",
      image: "/products/notebook.jpg",
      description: "Handcrafted cork notebooks with premium leather binding",
      features: ["100% Sustainable", "Custom Branding", "Luxury Finish"]
    },
    {
      id: 2,
      name: "Cork Wine Bottle Holders",
      category: "Hospitality",
      price: "₹1,800",
      image: "/products/wine-holder.jpg",
      description: "Elegant cork holders for premium wine presentation",
      features: ["Heat Insulating", "Eco-Friendly", "Durable"]
    },
    {
      id: 3,
      name: "Cork Wall Panels",
      category: "Interior Design",
      price: "₹4,200",
      image: "/products/wall-panel.jpg",
      description: "Natural cork wall panels for acoustic and aesthetic appeal",
      features: ["Sound Absorbing", "Natural Texture", "Easy Installation"]
    },
    {
      id: 4,
      name: "Cork Office Organizers",
      category: "Workplace",
      price: "₹3,500",
      image: "/products/organizer.jpg",
      description: "Functional cork organizers for modern workspaces",
      features: ["Modular Design", "Sustainable", "Premium Quality"]
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-premium-black">
            Featured <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-premium-gray max-w-3xl mx-auto">
            Discover our handpicked collection of premium cork products, 
            each representing the perfect blend of sustainability and luxury.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-premium h-full overflow-hidden">
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cork-100 to-cork-200 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-cork-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-2xl font-bold">O</span>
                      </div>
                      <p className="text-cork-700 font-medium">{product.name}</p>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Heart className="w-5 h-5 text-cork-600" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Eye className="w-5 h-5 text-cork-600" />
                    </motion.button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold-400 text-luxury-900 px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-premium-black group-hover:text-cork-900 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-premium-gray text-sm mt-1">
                      {product.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-cork-600">
                        <div className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-cork-100">
                    <div className="text-2xl font-bold text-cork-900">
                      {product.price}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 bg-cork-900 hover:bg-cork-800 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span className="text-sm font-medium">Add to Cart</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cork-50 to-cream-50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif font-bold text-premium-black mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-lg text-premium-gray mb-8 max-w-2xl mx-auto">
              We specialize in creating bespoke cork products tailored to your specific 
              requirements and brand identity. Let's bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-luxury group"
              >
                View All Products
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Request Custom Quote
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { ProductShowcase }
