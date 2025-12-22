import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services2 } from "./Data";

const FloatingElement = ({
  children,
  duration = 5,
  amplitude = 20,
  delay = 0,
}) => (
  <motion.div
    animate={{
      y: [0, -amplitude, 0],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    {children}
  </motion.div>
);

const LearnMore = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElement delay={0} duration={6} amplitude={40}>
            <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-full blur-3xl" />
          </FloatingElement>
          <FloatingElement delay={1} duration={7} amplitude={50}>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl" />
          </FloatingElement>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
            >
              <div className="px-5 py-2.5 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-emerald-700 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-sm">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  ✨
                </motion.span>
                <span>Explore Our Services</span>
              </div>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]">
              <motion.span
                className="block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                TRANSFORM YOUR
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                DIGITAL PRESENCE
              </motion.span>
            </h1>

            <motion.p
              className="text-xl text-gray-600 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Discover how our cutting-edge solutions can elevate your business
              to new heights. From concept to launch, we're with you every step
              of the way.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { num: "50+", label: "Projects Delivered" },
                { num: "99%", label: "Client Satisfaction" },
                { num: "24/7", label: "Support Available" },
                { num: "10+", label: "Deployed Projects" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-emerald-100"
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {stat.num}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services2.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", bounce: 0.4 }}
                whileHover={{ y: -12, scale: 1.02 }}
                onClick={() => setSelectedService(service)}
                className="group relative cursor-pointer"
              >
                <div className="relative h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 border border-gray-100">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl text-3xl mb-4 shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-emerald-600 font-semibold mb-3">
                      {service.tagline}
                    </p>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-900">
                        {service.pricing}
                      </span>
                      <motion.div
                        className="flex items-center space-x-2 text-emerald-600 font-semibold"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-sm">Explore</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-emerald-100/50 to-transparent rounded-tl-3xl" />
                </div>

                {/* External Glow */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${selectedService.gradient} opacity-40`}
                />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors shadow-lg"
                >
                  ✕
                </button>
                <div className="absolute bottom-6 left-6">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${selectedService.gradient} rounded-2xl text-4xl shadow-2xl`}
                  >
                    {selectedService.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-4xl font-bold mb-2">
                  {selectedService.name}
                </h2>
                <p className="text-xl text-emerald-600 font-semibold mb-4">
                  {selectedService.tagline}
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {selectedService.description}
                </p>

                {/* Tabs */}
                <div className="flex space-x-4 mb-6 border-b border-gray-200">
                  {["features", "technologies", "pricing"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 font-semibold capitalize transition-colors relative ${
                        activeTab === tab
                          ? "text-emerald-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"
                          layoutId="activeTab"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {activeTab === "features" && (
                    <motion.div
                      key="features"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      {selectedService.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="bg-gradient-to-br from-gray-50 to-emerald-50 p-6 rounded-2xl border border-emerald-100"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="text-3xl mb-3">{feature.icon}</div>
                          <h4 className="font-bold text-lg mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600">{feature.desc}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === "technologies" && (
                    <motion.div
                      key="technologies"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <h3 className="text-xl font-bold mb-4">
                        Technologies We Use
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedService.technologies.map((tech, idx) => (
                          <motion.div
                            key={idx}
                            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold shadow-lg"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1, type: "spring" }}
                            whileHover={{ scale: 1.1, y: -3 }}
                          >
                            {tech}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "pricing" && (
                    <motion.div
                      key="pricing"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border-2 border-emerald-200"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-2">
                            {selectedService.pricing}
                          </h3>
                          <p className="text-gray-600">
                            Investment for your success
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600 mb-1">
                            Delivery Time
                          </div>
                          <div className="text-xl font-bold text-emerald-600">
                            {selectedService.deliveryTime}
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {[
                          "Full project management",
                          "Unlimited revisions",
                          "Post-launch support",
                          "Source code included",
                          "Training & documentation",
                        ].map((item, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm">
                              ✓
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.button
                        className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-bold text-lg shadow-xl"
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)",
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Get Started Now →
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 relative overflow-hidden">
        <FloatingElement duration={8} amplitude={40}>
          <div className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </FloatingElement>
        <FloatingElement duration={10} amplitude={50}>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl" />
        </FloatingElement>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/95 mb-12 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expert
              team and cutting-edge solutions.
            </p>
            <motion.button
              className="px-12 py-5 bg-white text-emerald-600 rounded-full font-bold text-lg shadow-2xl"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Free Consultation →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
