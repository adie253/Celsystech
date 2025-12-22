// Add this FAQ section component before the Contact section in your Home page
import React from "react";
import FloatingElement from "./FloatingElement";
import { motion, AnimatePresence } from "framer-motion";
const FAQSection = () => {
  const faqs = [
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on complexity and scope. A typical website takes 2-4 weeks, mobile apps 4-8 weeks, and blockchain projects 6-12 weeks. We provide detailed timelines during the consultation phase and keep you updated throughout the development process.",
      icon: "⏱️",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Prices start from $1,499 for digital marketing services and go up to $7,999+ for blockchain development. Each project receives a custom quote based on your specific requirements and goals.",
      icon: "💰",
      gradient: "from-emerald-400 to-emerald-600",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Absolutely! We offer comprehensive post-launch support including bug fixes, updates, and maintenance. All projects include a warranty period, and we provide flexible support packages for ongoing needs. We're committed to your long-term success.",
      icon: "🛠️",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      question:
        "Can you work with existing systems or do you build from scratch?",
      answer:
        "We're flexible! We can integrate with your existing systems, modernize legacy applications, or build completely new solutions from the ground up. Our team has extensive experience in both greenfield projects and working with established tech stacks.",
      icon: "🔄",
      gradient: "from-orange-400 to-orange-600",
    },
    {
      question:
        "What makes Celsystech different from other development companies?",
      answer:
        "We combine cutting-edge technology with personalized service. Our team stays ahead of industry trends, we maintain transparent communication throughout projects, and we're committed to delivering solutions that drive real business results. Plus, we offer 24/7 support and maintain a 99% client satisfaction rate.",
      icon: "⭐",
      gradient: "from-pink-400 to-pink-600",
    },
  ];

  return (
    <section
      id="faq"
      className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <FloatingElement duration={15} amplitude={40}>
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
      </FloatingElement>
      <FloatingElement duration={12} amplitude={50}>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" />
      </FloatingElement>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              FAQ
            </span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers to help you make informed decisions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, idx) => {
            const [isOpen, setIsOpen] = React.useState(false);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <motion.div
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full p-6 flex items-center justify-between text-left transition-colors hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-teal-50/50"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <motion.div
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${faq.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg`}
                        whileHover={{
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {faq.icon}
                      </motion.div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.div
                      className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${faq.gradient} flex items-center justify-center text-white font-bold ml-4`}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-lg">{isOpen ? "−" : "+"}</span>
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
                        <div className="px-6 pb-6 pl-[4.5rem]">
                          <motion.p
                            className="text-gray-600 leading-relaxed"
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {faq.answer}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Still have questions? We're here to help!
          </p>
          <motion.button
            className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-bold text-lg shadow-2xl overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 60px rgba(16, 185, 129, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center space-x-3">
              <span>Contact Our Team</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                💬
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
// Insert this component in your main App return statement,
// after the Blog section and before the Contact section:
//
// {/* FAQ Section */}
// <FAQSection />
