import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingElement from "./ui/FloatingElement";
import quoteOptions from "../data/quote_options.json";

/**
 * GetQuote Component
 * Multi-step form for users to request a quote.
 * @returns {JSX.Element}
 */

const GetQuote = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: "",
    projectType: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    projectDetails: "",
    features: [],
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const { services, projectTypes, budgetRanges, timelines, features } = quoteOptions;

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setCurrentStep(1);
      setFormData({
        serviceType: "",
        projectType: "",
        budget: "",
        timeline: "",
        name: "",
        email: "",
        phone: "",
        company: "",
        projectDetails: "",
        features: [],
      });
    }, 3000);
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.serviceType !== "";
      case 2:
        return formData.projectType !== "" && formData.budget !== "";
      case 3:
        return formData.timeline !== "";
      case 4:
        return formData.name !== "" && formData.email !== "";
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0} duration={6} amplitude={40}>
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-full blur-3xl" />
        </FloatingElement>
        <FloatingElement delay={1} duration={7} amplitude={50}>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl" />
        </FloatingElement>
        <FloatingElement delay={2} duration={8} amplitude={30}>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-3xl" />
        </FloatingElement>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-12">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
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
                  💫
                </motion.span>
                <span>Get Your Custom Quote</span>
              </div>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
              <motion.span
                className="block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                LET'S BUILD
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                SOMETHING AMAZING
              </motion.span>
            </h1>

            <motion.p
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Tell us about your project and get a detailed quote within 24
              hours
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Progress Bar */}
            <motion.div
              className="mb-12 flex flex-col items-center justify-center w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {/* Steps */}
              <div className="flex items-center justify-between mb-4 w-full max-w-3xl">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center flex-1">
                    <motion.div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${currentStep >= step
                          ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg"
                          : "bg-gray-200 text-gray-500"
                        }`}
                      whileHover={{ scale: 1.1 }}
                      animate={
                        currentStep === step ? { scale: [1, 1.1, 1] } : {}
                      }
                      transition={{
                        duration: 0.5,
                        repeat: currentStep === step ? Infinity : 0,
                      }}
                    >
                      {currentStep > step ? "✓" : step}
                    </motion.div>
                    {step < 4 && (
                      <div
                        className={`flex-1 h-1 mx-2 rounded-full transition-all duration-500 ${currentStep > step
                            ? "bg-gradient-to-r from-emerald-500 to-teal-600"
                            : "bg-gray-200"
                          }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Step Labels */}
              <div className="flex justify-between w-full max-w-3xl text-sm font-medium text-gray-600">
                <span className={currentStep === 1 ? "text-emerald-600" : ""}>
                  Service
                </span>
                <span className={currentStep === 2 ? "text-emerald-600" : ""}>
                  Project Details
                </span>
                <span className={currentStep === 3 ? "text-emerald-600" : ""}>
                  Timeline
                </span>
                <span className={currentStep === 4 ? "text-emerald-600" : ""}>
                  Contact Info
                </span>
              </div>
            </motion.div>

            {/* Form Card */}
            <motion.div
              className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {/* Step 1: Service Selection */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="p-8 sm:p-12"
                    >
                      <h2 className="text-3xl font-bold mb-3 text-gray-900">
                        Which service do you need?
                      </h2>
                      <p className="text-gray-600 mb-8">
                        Select the service that best fits your project
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((service, idx) => (
                          <motion.button
                            key={service.id}
                            type="button"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -8, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                              setFormData({
                                ...formData,
                                serviceType: service.id,
                              })
                            }
                            className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${formData.serviceType === service.id
                                ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg"
                                : "border-gray-200 bg-white hover:border-emerald-300 hover:shadow-md"
                              }`}
                          >
                            <motion.div
                              className={`text-4xl mb-3 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg`}
                              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            >
                              {service.icon}
                            </motion.div>
                            <h3 className="font-bold text-lg text-gray-900">
                              {service.name}
                            </h3>
                            {formData.serviceType === service.id && (
                              <motion.div
                                className="absolute top-4 right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", bounce: 0.5 }}
                              >
                                ✓
                              </motion.div>
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Project Type & Budget */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="p-8 sm:p-12"
                    >
                      <h2 className="text-3xl font-bold mb-3 text-gray-900">
                        Project Details
                      </h2>
                      <p className="text-gray-600 mb-8">
                        Tell us more about your project
                      </p>

                      {/* Project Type */}
                      <div className="mb-10">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">
                          Project Type
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {projectTypes.map((type, idx) => (
                            <motion.button
                              key={type.id}
                              type="button"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              whileHover={{ y: -5 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  projectType: type.id,
                                })
                              }
                              className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${formData.projectType === type.id
                                  ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg"
                                  : "border-gray-200 bg-white hover:border-emerald-300"
                                }`}
                            >
                              <div className="text-3xl mb-2">{type.icon}</div>
                              <h4 className="font-bold text-gray-900 mb-1">
                                {type.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {type.desc}
                              </p>
                              {formData.projectType === type.id && (
                                <motion.div
                                  className="absolute top-3 right-3 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                >
                                  ✓
                                </motion.div>
                              )}
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Budget */}
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-900">
                          Budget Range
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {budgetRanges.map((budget, idx) => (
                            <motion.button
                              key={budget.id}
                              type="button"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              whileHover={{ y: -5 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() =>
                                setFormData({ ...formData, budget: budget.id })
                              }
                              className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${formData.budget === budget.id
                                  ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg"
                                  : "border-gray-200 bg-white hover:border-emerald-300"
                                }`}
                            >
                              <div className="text-3xl mb-2">{budget.icon}</div>
                              <h4 className="font-bold text-gray-900">
                                {budget.range}
                              </h4>
                              {formData.budget === budget.id && (
                                <motion.div
                                  className="absolute top-3 right-3 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                >
                                  ✓
                                </motion.div>
                              )}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Timeline & Features */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="p-8 sm:p-12"
                    >
                      <h2 className="text-3xl font-bold mb-3 text-gray-900">
                        Timeline & Features
                      </h2>
                      <p className="text-gray-600 mb-8">
                        When do you need it and what features?
                      </p>

                      {/* Timeline */}
                      <div className="mb-10">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">
                          Project Timeline
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {timelines.map((timeline, idx) => (
                            <motion.button
                              key={timeline.id}
                              type="button"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              whileHover={{ y: -5 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  timeline: timeline.id,
                                })
                              }
                              className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${formData.timeline === timeline.id
                                  ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg"
                                  : "border-gray-200 bg-white hover:border-emerald-300"
                                }`}
                            >
                              <div className="text-3xl mb-2">
                                {timeline.icon}
                              </div>
                              <h4 className="font-bold text-gray-900">
                                {timeline.name}
                              </h4>
                              {formData.timeline === timeline.id && (
                                <motion.div
                                  className="absolute top-3 right-3 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                >
                                  ✓
                                </motion.div>
                              )}
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-900">
                          Select Features (Optional)
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                          {features.map((feature, idx) => {
                            const isSelected =
                              formData.features.includes(feature);
                            return (
                              <motion.button
                                key={idx}
                                type="button"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                  if (isSelected) {
                                    setFormData({
                                      ...formData,
                                      features: formData.features.filter(
                                        (f) => f !== feature
                                      ),
                                    });
                                  } else {
                                    setFormData({
                                      ...formData,
                                      features: [...formData.features, feature],
                                    });
                                  }
                                }}
                                className={`p-3 rounded-xl border-2 text-sm font-semibold transition-all duration-300 ${isSelected
                                    ? "border-emerald-500 bg-emerald-500 text-white shadow-md"
                                    : "border-gray-200 bg-white text-gray-700 hover:border-emerald-300"
                                  }`}
                              >
                                {feature}
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Contact Information */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="p-8 sm:p-12"
                    >
                      <h2 className="text-3xl font-bold mb-3 text-gray-900">
                        Contact Information
                      </h2>
                      <p className="text-gray-600 mb-8">
                        How can we reach you?
                      </p>

                      <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                              placeholder="John Doe"
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                              placeholder="john@example.com"
                            />
                          </motion.div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  phone: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                              placeholder="+1 (555) 000-0000"
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                              Company Name
                            </label>
                            <input
                              type="text"
                              value={formData.company}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  company: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                              placeholder="Acme Inc."
                            />
                          </motion.div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <label className="block text-sm font-bold text-gray-900 mb-2">
                            Project Details
                          </label>
                          <textarea
                            value={formData.projectDetails}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                projectDetails: e.target.value,
                              })
                            }
                            rows={5}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                            placeholder="Tell us more about your project, goals, and any specific requirements..."
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="px-8 sm:px-12 pb-8 sm:pb-12 flex items-center justify-between">
                  {currentStep > 1 && (
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      whileHover={{ x: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                    >
                      ← Previous
                    </motion.button>
                  )}

                  <div className="flex-1" />

                  {currentStep < 4 ? (
                    <motion.button
                      type="button"
                      onClick={nextStep}
                      disabled={!isStepValid()}
                      whileHover={isStepValid() ? { x: 5, scale: 1.05 } : {}}
                      whileTap={isStepValid() ? { scale: 0.95 } : {}}
                      className={`px-8 py-3 rounded-full font-bold transition-all ${isStepValid()
                          ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg hover:shadow-xl"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                    >
                      Next Step →
                    </motion.button>
                  ) : (
                    <motion.button
                      type="submit"
                      disabled={!isStepValid()}
                      whileHover={
                        isStepValid()
                          ? {
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)",
                          }
                          : {}
                      }
                      whileTap={isStepValid() ? { scale: 0.95 } : {}}
                      className={`px-10 py-4 rounded-full font-bold text-lg transition-all ${isStepValid()
                          ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                    >
                      Submit Quote Request 🚀
                    </motion.button>
                  )}
                </div>
              </form>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {[
                {
                  icon: "⚡",
                  title: "Quick Response",
                  desc: "Get your quote within 24 hours",
                  gradient: "from-yellow-400 to-orange-500",
                },
                {
                  icon: "💎",
                  title: "No Obligation",
                  desc: "Free consultation & quote",
                  gradient: "from-blue-400 to-purple-500",
                },
                {
                  icon: "🔒",
                  title: "Secure & Private",
                  desc: "Your information is safe with us",
                  gradient: "from-emerald-400 to-teal-500",
                },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center text-2xl mb-4 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {card.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl p-12 max-w-md w-full text-center shadow-2xl"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
            >
              <motion.div
                className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 shadow-xl"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
              >
                ✓
              </motion.div>
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Quote Request Submitted!
              </motion.h2>
              <motion.p
                className="text-gray-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Thank you for choosing Celsystech! We'll review your
                requirements and get back to you within 24 hours with a detailed
                quote.
              </motion.p>
              <motion.div
                className="flex items-center justify-center space-x-2 text-emerald-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  📧
                </motion.span>
                <span className="font-semibold">
                  Check your email for confirmation
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Common Questions About Quotes
              </span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How accurate is the quote?",
                a: "Our quotes are based on your requirements and include detailed breakdowns. We aim for 95% accuracy, with final pricing confirmed after the discovery phase.",
              },
              {
                q: "Is there any cost for the quote?",
                a: "No! Quote requests and initial consultations are completely free with no obligation to proceed.",
              },
              {
                q: "Can I modify my requirements later?",
                a: "Absolutely! We understand that requirements evolve. We'll work with you to adjust the scope and provide updated pricing.",
              },
              {
                q: "What payment terms do you offer?",
                a: "We typically work with milestone-based payments: 30% upfront, 40% at midpoint, and 30% upon completion. Custom terms available for larger projects.",
              },
            ].map((faq, idx) => {
              const [isOpen, setIsOpen] = useState(false);
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-emerald-50/50 transition-colors"
                  >
                    <span className="font-bold text-gray-900">{faq.q}</span>
                    <motion.div
                      className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                    >
                      {isOpen ? "−" : "+"}
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-gray-600">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 relative overflow-hidden">
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
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Prefer to Talk Directly?
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
              Schedule a free 30-minute consultation call with our experts
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="px-10 py-4 bg-white text-emerald-600 rounded-full font-bold text-lg shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call 📞
              </motion.button>
              <motion.button
                className="px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg backdrop-blur-sm"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Chat with Us 💬
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetQuote;
