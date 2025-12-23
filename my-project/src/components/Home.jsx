import itConsultancyHero from "../assets/Hero_4.jpeg";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import FloatingElement from "./ui/FloatingElement";
import AnimatedCounter from "./ui/AnimatedCounter";
import blogs from "../data/blogs.json";
import contact from "../data/contact.json";
import projects from "../data/projects.json";
import services from "../data/services.json";
import stats from "../data/stats.json";
import tagLines from "../data/taglines.json";

/**
 * Home Component
 * Landing page of the application containing various sections like Hero, Stats, About, Services, Portfolio, Blog, and Contact.
 * Uses Framer Motion for animations.
 */
import FAQSection from "./ui/FaqPage";
import { useState } from "react";
import SimpleContactForm from "./ContactPage";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-500 origin-left z-50"
        style={{ scaleX }}
      >
        <motion.div
          className="h-full bg-white/30 blur-sm"
          animate={{ x: ["0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section - Enhanced */}
        <section
          id="home"
          className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-emerald-50 pt-20"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FloatingElement delay={0} duration={5} amplitude={30}>
              <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-full blur-3xl" />
            </FloatingElement>
            <FloatingElement delay={1} duration={6} amplitude={40}>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl" />
            </FloatingElement>
            <FloatingElement delay={2} duration={7} amplitude={25}>
              <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-3xl" />
            </FloatingElement>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
                  backgroundSize: "100px 100px",
                }}
              />
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:p-10 lg:pt-0"> {/* --------------------------------------------------------------------------------------left block of text - hero section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  className="inline-block mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  <div className="px-5 py-2.5 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-emerald-700 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-sm">
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      ✨
                    </motion.span>
                    <span>Welcome to Innovation</span>
                  </div>
                </motion.div>

                <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold mb-8 leading-[1.1]">
                  <motion.span
                    className="block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    CUTTING EDGE
                  </motion.span>
                  <motion.span
                    className="block bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    TECHNOLOGICAL
                  </motion.span>
                  <motion.span
                    className="block text-gray-900"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    SOLUTIONS
                  </motion.span>
                </h1>

                <motion.p
                  className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  At{" "}
                  <span>
                    <b>Celsystech</b>
                  </span>
                  , we transform ideas into impactful digital solutions.
                  Specializing in website and app development, project
                  management, and blockchain technology.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.button
                    className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-semibold shadow-xl overflow-hidden"
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(true)} // open modal
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Get Started</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>

                  {/* Learn More Button */}
                  <motion.button
                    className="group relative px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold shadow-lg hover:shadow-xl overflow-hidden"
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      borderColor: "rgb(16, 185, 129)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center space-x-2 group-hover:text-emerald-600 transition-colors">
                      <span>Learn More</span>
                      <motion.span
                        className="w-5 h-5 border-2 border-current rounded-full flex items-center justify-center text-xs"
                        whileHover={{ rotate: 90 }}
                      >
                        ▶
                      </motion.span>
                    </span>
                  </motion.button>
                </motion.div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Modal Content */}
                      <motion.div
                        className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 w-full max-w-lg overflow-y-auto max-h-[90vh]"
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Close Button */}
                        <button
                          onClick={() => setIsOpen(false)}
                          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                        >
                          ×
                        </button>

                        {/* Contact Form */}
                        <div className="p-6">
                          <SimpleContactForm />
                        </div>
                      </motion.div>

                      {/* Optional: Click outside to close */}
                      <div
                        className="absolute inset-0"
                        onClick={() => setIsOpen(false)}
                      ></div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Trust Indicators */}
                <motion.div
                  className="mt-12 flex items-center space-x-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-white shadow-lg flex items-center justify-center text-white font-bold"
                        initial={{ scale: 0, x: -20 }}
                        animate={{ scale: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.2, zIndex: 10 }}
                      >
                        {String.fromCharCode(65 + i)}
                      </motion.div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      <span className="font-bold text-gray-900">50+</span> Happy
                      Clients
                    </p>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.span
                          key={i}
                          className="text-yellow-400"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2 + i * 0.1 }}
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Hero Image with 3D Effect */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                style={{ perspective: 1000 }}
              >
                {/* <FloatingElement duration={4} amplitude={15}> */}
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Decorative Elements */}
                  {/* <motion.div
                      className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl shadow-2xl z-10"
                      animate={{
                        rotate: [0, 10, 0],
                        y: [0, -10, 0],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div className="w-full h-full flex items-center justify-center text-white text-3xl">
                        💡
                      </div>
                    </motion.div> */}

                  {/* Main Image */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl m-5 ">
                    <motion.div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={itConsultancyHero}
                      alt="Professional IT consultancy services with technology experts collaborating"
                      className="w-full h-auto relative z-0 transform group-hover:scale-105 transition-transform duration-700 "
                    />
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-emerald-400/30 via-teal-500/30 to-blue-500/30 rounded-3xl blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </motion.div>
                {/* </FloatingElement> */}
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/3 transform -translate-x-1/2 z-50"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center space-y-2">
              <p className="text-sm text-gray-500 font-medium">
                Scroll to explore
              </p>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2 relative overflow-hidden">
                <motion.div
                  className="w-1.5 h-3 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"
                  animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section - Enhanced */}
        <section className="py-24 bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
              animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Floating Orbs */}
          <FloatingElement duration={8} amplitude={30}>
            <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </FloatingElement>
          <FloatingElement duration={10} amplitude={40}>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl" />
          </FloatingElement>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.9 }}
                  transition={{
                    delay: idx * 0.15,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  className="group relative"
                >
                  <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 overflow-hidden">
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg mx-auto`}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: idx * 0.15,
                        type: "spring",
                        bounce: 0.5,
                      }}
                      whileHover={{
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1,
                      }}
                    >
                      {stat.icon}
                    </motion.div>

                    {/* Animated Number Counter */}
                    <motion.div
                      className="text-6xl font-bold mb-3 text-white"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: idx * 0.15 + 0.3, type: "spring" }}
                    >
                      <AnimatedCounter
                        value={stat.number}
                        duration={2.5}
                        delay={idx * 0.15 + 0.5}
                      />
                    </motion.div>

                    <div className="text-lg text-white/95 font-medium">
                      {stat.label}
                    </div>

                    <p className="text-sm text-white/80 leading-relaxed">
                      {stat.desc}
                    </p>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-3xl" />
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section - Enhanced */}
        <section
          id="about"
          className="py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
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

          <div className="container mx-auto px-6">
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
                  About Us
                </span>
              </motion.div>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  What Do We Do?
                </span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transforming visions into reality with cutting-edge technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotateY: -20 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
                style={{ perspective: 1000 }}
              >
                <FloatingElement duration={5} amplitude={20}>
                  <div className="relative group">
                    {/* Main Image Container */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <motion.div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img
                        src="https://img.freepik.com/free-vector/product-presentation-concept-illustration_114360-8196.jpg"
                        alt="Business presentation"
                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Decorative Elements */}
                    <motion.div
                      className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"
                      animate={{ rotate: [0, 90, 0] }}
                      transition={{ duration: 10, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"
                      animate={{ rotate: [0, -90, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
                    />

                    {/* Frame Decoration */}
                    <div className="absolute -inset-4 border-2 border-emerald-200 rounded-3xl -z-10 group-hover:border-emerald-400 transition-colors" />
                  </div>
                </FloatingElement>
              </motion.div>

              {/* Content Side */}
              <div className="space-y-6">
                {tagLines.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, duration: 0.6 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="group relative bg-gradient-to-br from-gray-50 via-white to-emerald-50 p-8 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      {/* Hover Background Effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5`}
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                      />

                      <div className="relative z-10 flex items-start space-x-4">
                        {/* Icon */}
                        <motion.div
                          className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg`}
                          whileHover={{
                            rotate: [0, -10, 10, -10, 0],
                            scale: 1.1,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {item.icon}
                        </motion.div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3 leading-tight">
                            {item.title}{" "}
                            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                              {item.highlight}
                            </span>
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-100/50 to-transparent rounded-bl-3xl" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Enhanced */}
        <section
          id="services"
          className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>

          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

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
                <span className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full text-sm font-semibold backdrop-blur-sm">
                  What We Offer
                </span>
              </motion.div>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h2>

              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive solutions tailored to elevate your digital
                presence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: service.delay,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-3xl hover:border-emerald-500/50 transition-all duration-500 overflow-hidden">
                    {/* Animated Background Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      initial={{ scale: 0.8, rotate: -45 }}
                      whileHover={{ scale: 1.2, rotate: 0 }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />

                    <div className="relative z-10">
                      {/* Icon with Glow */}
                      <motion.div
                        className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl text-4xl mb-6 shadow-2xl relative`}
                        whileHover={{
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity`}
                        />
                        <span className="relative z-10">{service.icon}</span>
                      </motion.div>

                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                        {service.name}
                      </h3>

                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {service.desc}
                      </p>

                      <motion.button
                        className="flex items-center space-x-2 text-emerald-400 font-semibold group-hover:text-emerald-300 transition-colors"
                        whileHover={{ x: 5 }}
                        onClick={() => navigate("/services")}
                      >
                        <span>Learn More</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.button>
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-tl-3xl" />
                  </div>

                  {/* External Glow */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                  />
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
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
                  <span>View All Services</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="py-32 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden"
        >
          {/* Floating Background */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(0,0,0,0.2) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

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
                transition={{ type: "spring", bounce: 0.5 }}
              >
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                  Our Work
                </span>
              </motion.div>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Portfolio Showcase
                </span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore some of our finest projects crafted with passion and
                precision.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.slice(0, 3).map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, type: "spring", bounce: 0.4 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />

                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 font-semibold inline-flex items-center space-x-2 group-hover:text-emerald-700 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span>View Project</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Button */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-bold text-lg shadow-2xl overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 60px rgba(16, 185, 129, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/portfolio")}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center space-x-3">
                  <span>View All Projects</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>
          </div>
        </section>

        <FAQSection />
        {/* Blog Section - Enhanced */}
        <section
          id="blog"
          className="py-32 bg-gradient-to-br from-white via-emerald-50/30 to-white relative overflow-hidden"
        >
          {/* Background Decoration */}
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
                  Our Blog
                </span>
              </motion.div>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Latest Insights
                </span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest trends and insights from our
                experts
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs.map((post, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.15,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 border border-gray-100">
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />

                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${post.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      />

                      {/* Category Badge */}
                      <motion.div
                        className={`absolute top-4 left-4 px-4 py-2 bg-gradient-to-r ${post.gradient} text-white rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm`}
                        initial={{ scale: 0, rotate: -45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: idx * 0.15 + 0.3,
                          type: "spring",
                        }}
                      >
                        {post.category}
                      </motion.div>

                      {/* Date Badge */}
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                        {post.date}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        Discover the latest trends and innovations shaping the
                        future of technology and business.
                      </p>

                      <motion.button
                        className="flex items-center space-x-2 text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span>Read More</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.button>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-emerald-100/50 to-transparent rounded-tl-3xl" />
                  </div>

                  {/* External Glow */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${post.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                  />
                </motion.div>
              ))}
            </div>

            {/* View All Button */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-white border-2 border-emerald-500 text-emerald-600 rounded-full font-semibold shadow-lg overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-emerald-50"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center space-x-2">
                  <span>View All Articles</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Contact Section - Enhanced */}
        <section
          id="contact"
          className="py-32 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 relative overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 2px, transparent 2px)",
                backgroundSize: "50px 50px",
              }}
              animate={{
                backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Floating Elements */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Large Gradient Orbs */}
          <FloatingElement duration={10} amplitude={50}>
            <div className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </FloatingElement>
          <FloatingElement duration={12} amplitude={60}>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl" />
          </FloatingElement>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="inline-block mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  <div className="px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full text-sm font-semibold">
                    Get In Touch
                  </div>
                </motion.div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Let's Build Something
                  <br />
                  <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
                    Amazing Together
                  </span>
                </h2>

                <p className="text-xl text-white/95 mb-12 max-w-2xl mx-auto">
                  Get in touch and let's create the future with innovative
                  solutions tailored to your needs
                </p>

                <motion.div
                  className="flex flex-wrap justify-center gap-4 mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.button
                    className="group relative px-10 py-5 bg-white text-emerald-600 rounded-full font-bold text-lg shadow-2xl overflow-hidden"
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Start a Project</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        🚀
                      </motion.span>
                    </span>
                  </motion.button>

                  <motion.button
                    className="group relative px-10 py-5 border-2 border-white/80 text-white rounded-full font-bold text-lg backdrop-blur-sm overflow-hidden"
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      borderColor: "rgba(255, 255, 255, 1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Contact Us</span>
                      <motion.span
                        animate={{ rotate: [0, 15, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        💬
                      </motion.span>
                    </span>
                  </motion.button>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {contact.map((contact, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      whileHover={{ y: -8, scale: 1.05 }}
                      className="group relative"
                    >
                      <div className="relative h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 overflow-hidden">
                        {/* Shine Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />

                        <div className="relative z-10">
                          {/* Icon */}
                          <motion.div
                            className={`w-16 h-16 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto shadow-xl`}
                            whileHover={{
                              rotate: [0, -10, 10, -10, 0],
                              scale: 1.1,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            {contact.icon}
                          </motion.div>

                          <p className="text-sm text-white/80 mb-1 font-medium">
                            {contact.label}
                          </p>
                          <p className="text-lg font-bold text-white">
                            {contact.value}
                          </p>
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-2xl" />
                      </div>

                      {/* Glow Effect */}
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${contact.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Social Proof */}
                <motion.div
                  className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/90"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex items-center space-x-2">
                    <motion.div
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-sm font-medium">Available 24/7</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-bold">50+</span> Projects Delivered
                  </div>
                  <div className="text-sm">
                    <span className="font-bold">99%</span> Client Satisfaction
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-yellow-400"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer - Enhanced */}
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Brand Column */}
              <div className="md:col-span-2">
                <motion.div
                  className="flex items-center space-x-3 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">C</span>
                  </div>
                  <span className="text-3xl font-bold">Celsystech</span>
                </motion.div>
                <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                  Transforming ideas into impactful digital solutions. Your
                  trusted partner in web development, mobile apps, and
                  cutting-edge technology.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {["About Us", "Services", "Portfolio", "Blog", "Contact"].map(
                    (link, idx) => (
                      <motion.li
                        key={link}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <a
                          href={`#${link.toLowerCase().replace(" ", "")}`}
                          className="text-gray-400 hover:text-emerald-400 transition-colors inline-flex items-center group"
                        >
                          <motion.span
                            className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={{ x: -10 }}
                            whileHover={{ x: 0 }}
                          >
                            →
                          </motion.span>
                          {link}
                        </a>
                      </motion.li>
                    )
                  )}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Subscribe to our newsletter for latest updates
                </p>
                <motion.div
                  className="flex"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                  <motion.button
                    className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-r-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    →
                  </motion.button>
                </motion.div>
              </div>
            </div>

            {/* Bottom Bar */}
            <motion.div
              className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-gray-400 text-sm">
                © 2024 Celsystech. All rights reserved. Crafted with{" "}
                <motion.span
                  className="text-red-500 inline-block"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ❤️
                </motion.span>{" "}
                in India
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                {["Privacy Policy", "Terms of Service", "Cookies"].map(
                  (item) => (
                    <motion.a
                      key={item}
                      href="#"
                      className="hover:text-emerald-400 transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      {item}
                    </motion.a>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        <motion.button
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center z-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)",
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <motion.span
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↑
          </motion.span>
        </motion.button>
      </motion.div>
    </>
  );
};

export default App;
