import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

// Splash Screen Component
const SplashScreen = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 500),
      setTimeout(() => setStep(2), 2000),
      setTimeout(() => setStep(3), 2800),
      setTimeout(onComplete, 3500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-white/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-blue-400/20 blur-2xl"
        animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.div className="relative text-center px-4">
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-bold text-white"
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={step >= 1 ? { opacity: 1, letterSpacing: "0em" } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Celsystech
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-white/90 mt-4 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={step >= 2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Crafting Digital Excellence
        </motion.p>

        <motion.div
          className="mt-8 h-1 bg-white/30 rounded-full overflow-hidden mx-auto max-w-xs"
          initial={{ opacity: 0 }}
          animate={step >= 2 ? { opacity: 1 } : {}}
        >
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: "0%" }}
            animate={step >= 2 ? { width: "100%" } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Floating Element Component
const FloatingElement = ({ children, delay = 0, duration = 3 }) => (
  <motion.div
    animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

// Enhanced Navbar
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
        <motion.div
          className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Celsystech
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Services", "Blog", "Contact"].map((item, idx) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-emerald-600 font-medium relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        <motion.button
          className="hidden md:block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2.5 rounded-full shadow-lg"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Quote
        </motion.button>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="flex flex-col items-center space-y-4 py-6">
              {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-800 hover:text-emerald-600"
                >
                  {item}
                </a>
              ))}
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-full">
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Main App Component
const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar />

          {/* Hero Section */}
          <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-20"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <FloatingElement delay={0} duration={4}>
                <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl" />
              </FloatingElement>
              <FloatingElement delay={1} duration={5}>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
              </FloatingElement>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.div
                    className="inline-block mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                      ✨ Welcome to Innovation
                    </span>
                  </motion.div>

                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      CUTTING EDGE
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                      TECHNOLOGICAL
                    </span>
                    <br />
                    <span className="text-gray-900">SOLUTIONS</span>
                  </h1>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                    At Innovative Tech, we transform ideas into impactful
                    digital solutions. Specializing in website and app
                    development, project management, and blockchain technology.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-semibold shadow-lg"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                    </motion.button>
                    <motion.button
                      className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-all"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <FloatingElement duration={3}>
                    <div className="relative">
                      <img
                        src="https://img.freepik.com/free-vector/man-playing-online-games-concept_52683-37362.jpg"
                        alt="Professional working with technology"
                        className="w-full h-auto relative z-10 drop-shadow-2xl"
                      />
                      <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-3xl blur-2xl opacity-20" />
                    </div>
                  </FloatingElement>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
                <motion.div
                  className="w-1.5 h-3 bg-emerald-500 rounded-full"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </section>

          {/* Stats Section */}
          <section className="py-20 bg-gradient-to-br from-emerald-500 to-emerald-600 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
                {[
                  { number: "50+", label: "Projects Completed" },
                  { number: "99%", label: "Client Satisfaction" },
                  { number: "24/7", label: "Support Available" },
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="text-5xl font-bold mb-2">{stat.number}</div>
                    <div className="text-lg opacity-90">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section
            id="about"
            className="py-32 bg-white relative overflow-hidden"
          >
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl sm:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-gray-900 to-emerald-600 bg-clip-text text-transparent">
                    What Do We Do?
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <FloatingElement duration={4}>
                    <img
                      src="https://img.freepik.com/free-vector/product-presentation-concept-illustration_114360-8196.jpg"
                      alt="Business presentation"
                      className="w-full h-auto drop-shadow-2xl"
                    />
                  </FloatingElement>
                </motion.div>

                <div className="space-y-8">
                  {[
                    {
                      title: "Transform Your Business with",
                      highlight: "Advanced Tech!",
                      desc: "Our specialists provide the latest solutions to drive your success.",
                    },
                    {
                      title: "Harness the Power of",
                      highlight: "Smart Technology!",
                      desc: "Advanced tools designed to streamline operations.",
                    },
                    {
                      title: "Unlock New Possibilities with",
                      highlight: "Dedicated Team",
                      desc: "That offers the most advanced tools to enhance your edge.",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 }}
                    >
                      <div className="bg-gradient-to-r from-gray-50 to-emerald-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
                        <h3 className="text-2xl font-bold mb-3">
                          {item.title}{" "}
                          <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                            {item.highlight}
                          </span>
                        </h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section
            id="services"
            className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
          >
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl sm:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-gray-900 to-emerald-600 bg-clip-text text-transparent">
                    Our Services
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive solutions tailored to your needs
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "💻",
                    name: "Web Development",
                    desc: "Stunning, high-performance websites",
                  },
                  {
                    icon: "📱",
                    name: "Mobile Apps",
                    desc: "Seamless iOS & Android experiences",
                  },
                  {
                    icon: "🎨",
                    name: "UI/UX Design",
                    desc: "Beautiful, intuitive interfaces",
                  },
                  {
                    icon: "📈",
                    name: "Digital Marketing",
                    desc: "Data-driven growth strategies",
                  },
                  {
                    icon: "🔗",
                    name: "Blockchain",
                    desc: "Secure, decentralized solutions",
                  },
                  {
                    icon: "🖌️",
                    name: "Graphic Design",
                    desc: "Visual identity & branding",
                  },
                ].map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.desc}</p>
                    <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                      Learn More →
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <section id="blog" className="py-32 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl sm:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-gray-900 to-emerald-600 bg-clip-text text-transparent">
                    Latest Insights
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Future of Web Dev",
                    category: "Technology",
                    image:
                      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
                  },
                  {
                    title: "AI in Business",
                    category: "AI/ML",
                    image:
                      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                  },
                  {
                    title: "Blockchain Innovations",
                    category: "Blockchain",
                    image:
                      "https://online.stanford.edu/sites/default/files/inline-images/1600X900-How-does-blockchain-work.jpg",
                  },
                ].map((post, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <span className="text-emerald-600 text-sm font-semibold">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-4">
                        {post.title}
                      </h3>
                      <button className="text-emerald-600 font-semibold hover:text-emerald-700">
                        Read More →
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="py-32 bg-gradient-to-br from-emerald-500 to-emerald-600 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                    Let's Build Something Amazing
                  </h2>
                  <p className="text-xl text-white/90 mb-12">
                    Get in touch and let's create the future together
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">
                    <motion.button
                      className="px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold shadow-lg"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start a Project
                    </motion.button>
                    <motion.button
                      className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold"
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        backgroundColor: "rgba(255,255,255,0.1)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Us
                    </motion.button>
                  </div>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="text-3xl mb-2">📧</div>
                      <p className="font-semibold">contact@celsystech.com</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="text-3xl mb-2">📱</div>
                      <p className="font-semibold">+91 12345 67890</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="text-3xl mb-2">📍</div>
                      <p className="font-semibold">Pune, Maharashtra</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-2xl font-bold mb-4 md:mb-0">
                  Celsystech
                </div>
                <p className="text-gray-400">
                  © 2024 Celsystech. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </>
  );
};

export default App;
