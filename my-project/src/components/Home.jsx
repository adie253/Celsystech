import React, { lazy, Suspense, useMemo, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "../style/Home.css";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const Navbar = lazy(() => import("./Navbar"));
const Typewriter = lazy(() => import("typewriter-effect"));

// Optimized Animation Variants with better performance
const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    willChange: "transform, opacity",
  },
  in: {
    opacity: 1,
    x: 0,
    willChange: "auto",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  out: {
    opacity: 0,
    x: "100vw",
    willChange: "transform, opacity",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    willChange: "transform, opacity",
  },
  visible: {
    opacity: 1,
    y: 0,
    willChange: "auto",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const BlogCard = ({ title, excerpt, date, image, category, slug }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="blog-card bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
      whileHover={
        !shouldReduceMotion
          ? {
              scale: 1.03,
              y: -5,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: {
                duration: 0.2,
                ease: "easeOut",
              },
            }
          : {}
      }
      layout
    >
      <div className="blog-card-image">
        <img
          src={image}
          alt={`Featured image for ${title}`}
          className="w-full h-48 object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <span
            className="text-emerald-600 font-semibold text-sm"
            aria-label={`Category: ${category}`}
          >
            {category}
          </span>
          <time className="text-gray-500 text-sm" dateTime={date}>
            {date}
          </time>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 flex-grow">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
        <button
          className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 self-start"
          aria-label={`Read more about ${title}`}
        >
          Read More
        </button>
      </div>
    </motion.article>
  );
};

const PortfolioCard = ({
  title,
  description,
  image,
  technologies,
  liveLink,
  githubLink,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="portfolio-card bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={
        !shouldReduceMotion
          ? {
              y: -8,
              scale: 1.02,
              transition: { duration: 0.2 },
            }
          : {}
      }
      layout
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`Screenshot of ${title} project`}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            {liveLink && (
              <a
                href={liveLink}
                className="bg-emerald-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-emerald-600 transition duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${title}`}
              >
                Live Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code of ${title} on GitHub`}
              >
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies?.map((tech, index) => (
            <span
              key={index}
              className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const blogPosts = useMemo(
    () => [
      {
        id: 1,
        title: "The Future of Web Development in 2024",
        excerpt:
          "Dive deep into the emerging trends transforming web development, from AI-powered design to advanced performance optimization techniques.",
        date: "2024-01-15",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        category: "Web Technology",
        slug: "future-of-web-development-2024",
      },
      {
        id: 2,
        title: "AI and Machine Learning: Transforming Business Solutions",
        excerpt:
          "Explore how artificial intelligence is revolutionizing business strategies, from predictive analytics to intelligent automation and decision-making.",
        date: "2024-02-03",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        category: "Artificial Intelligence",
        slug: "ai-ml-transforming-business-solutions",
      },
      {
        id: 3,
        title: "Blockchain: Beyond Cryptocurrency Innovations",
        excerpt:
          "Uncover the transformative potential of blockchain technology across industries, from supply chain management to secure digital identities.",
        date: "2024-03-20",
        image:
          "https://online.stanford.edu/sites/default/files/inline-images/1600X900-How-does-blockchain-work.jpg",
        category: "Blockchain Technology",
        slug: "blockchain-beyond-cryptocurrency",
      },
    ],
    []
  );

  const portfolioProjects = useMemo(
    () => [
      {
        id: 1,
        title: "E-Commerce Platform",
        description:
          "A modern, responsive e-commerce platform with advanced features like real-time inventory management, secure payment processing, and AI-powered product recommendations.",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 2,
        title: "Healthcare Management System",
        description:
          "Comprehensive healthcare management system with patient records, appointment scheduling, telemedicine capabilities, and HIPAA compliance.",
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        technologies: ["React Native", "Firebase", "Express.js", "PostgreSQL"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 3,
        title: "FinTech Mobile App",
        description:
          "Secure mobile banking application with biometric authentication, real-time transactions, budget tracking, and investment portfolio management.",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        technologies: ["Flutter", "Django", "Redis", "AWS"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 4,
        title: "AI-Powered Analytics Dashboard",
        description:
          "Business intelligence dashboard with machine learning insights, predictive analytics, and interactive data visualization for enterprise clients.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        technologies: ["Vue.js", "Python", "TensorFlow", "D3.js"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 5,
        title: "Blockchain Supply Chain",
        description:
          "Transparent supply chain management system using blockchain technology for product authentication, traceability, and smart contracts.",
        image:
          "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        technologies: ["Solidity", "Web3.js", "React", "IPFS"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 6,
        title: "EdTech Learning Platform",
        description:
          "Interactive online learning platform with video streaming, progress tracking, gamification elements, and collaborative tools for educators.",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        technologies: ["Next.js", "GraphQL", "Socket.io", "MySQL"],
        liveLink: "#",
        githubLink: "#",
      },
    ],
    []
  );

  return (
    <>
      {/* <Helmet>
        <title>
          Innovative Tech - Cutting Edge Technological Solutions | Web
          Development, Mobile Apps & Blockchain
        </title>
        <meta
          name="description"
          content="Transform your business with advanced tech solutions. Specializing in web development, mobile apps, blockchain technology, and digital innovation. Get a quote today!"
        />
        <meta
          name="keywords"
          content="web development, mobile app development, blockchain, digital marketing, UI/UX design, software development, technology solutions"
        />
        <meta name="author" content="Innovative Tech" />
        <meta
          property="og:title"
          content="Innovative Tech - Cutting Edge Technological Solutions"
        />
        <meta
          property="og:description"
          content="Transform your business with advanced tech solutions. Specializing in web development, mobile apps, blockchain technology."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Helmet> */}

      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 0.5 }}
      >
        <Suspense
          fallback={
            <motion.div
              className="flex items-center justify-center min-h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-2xl font-semibold text-emerald-600">
                Loading...
              </div>
            </motion.div>
          }
        >
          <Navbar />
          <motion.main
            className="masterdiv"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section */}
            <motion.section
              id="home"
              className="min-h-screen bg-white p-8 sm:p-30 flex items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-8 items-center">
                  <motion.div
                    className="col-span-12 lg:col-span-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <header>
                      <h1 className="sm:text-6xl text-4xl main-heading typewriter mb-4">
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        >
                          <Suspense fallback={<span>CUTTING EDGE</span>}>
                            <Typewriter
                              options={{
                                strings: [
                                  "CUTTING EDGE",
                                  "ADVANCE",
                                  "INNOVATIVE",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                                delay: 100,
                              }}
                            />
                          </Suspense>
                        </motion.span>
                      </h1>

                      <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="sm:text-6xl text-4xl main-heading mb-8"
                        viewport={{ once: true }}
                      >
                        TECHNOLOGICAL SOLUTIONS
                      </motion.h2>
                    </header>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="text-justify text-lg text-gray-800 mb-8 leading-relaxed"
                      viewport={{ once: true }}
                    >
                      At Innovative Tech, we transform ideas into impactful
                      digital solutions. Specializing in website and app
                      development, project management, and blockchain
                      technology, we empower businesses to grow through
                      technology. Our team is dedicated to delivering tailored
                      solutions that meet your unique needs with creativity,
                      precision, and expertise. Let's build something
                      extraordinary together!
                    </motion.p>

                    <motion.button
                      whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
                      whileTap={!shouldReduceMotion ? { scale: 0.95 } : {}}
                      className="bg-emerald-500 text-white px-8 py-3 transition-all duration-200 ease-in-out transform rounded-lg shadow"
                    >
                      Get a Quote
                    </motion.button>
                  </motion.div>
                  <motion.div
                    className="col-span-12 lg:col-span-6 flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <motion.img
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="max-w-full h-auto"
                      src="https://img.freepik.com/free-vector/man-playing-online-games-concept_52683-37362.jpg"
                      alt="Professional working with cutting-edge technology"
                      loading="eager"
                      decoding="async"
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* About Section */}
            <motion.section
              id="about"
              className="min-h-screen p-8 sm:p-30 flex items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <div className="container mx-auto">
                <motion.header variants={itemVariants} className="mb-16">
                  <h2 className="text-center sm:text-6xl mb-8 font-bold text-4xl">
                    WHAT DO WE DO?
                  </h2>
                </motion.header>

                <div className="grid grid-cols-12 gap-8 items-center">
                  <motion.div
                    className="col-span-12 lg:col-span-6 flex justify-center"
                    variants={itemVariants}
                  >
                    <motion.img
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="max-w-full h-auto"
                      src="https://img.freepik.com/free-vector/product-presentation-concept-illustration_114360-8196.jpg"
                      alt="Business presentation concept"
                      loading="lazy"
                      decoding="async"
                      viewport={{ once: true }}
                    />
                  </motion.div>

                  <motion.div
                    className="col-span-12 lg:col-span-6 space-y-12"
                    variants={containerVariants}
                  >
                    {[
                      {
                        text: "Transform Your Business with",
                        highlightText: "Advanced Tech!",
                        description:
                          "Our specialists provide the latest solutions to drive your success in the digital world.",
                      },
                      {
                        text: "Harness the Power of",
                        highlightText: "Smart Technology!",
                        description:
                          "Advanced tools designed to streamline operations and sharpen your competitive edge.",
                      },
                      {
                        text: "Unlock New Possibilities with",
                        highlightText: "Dedicated Team",
                        description:
                          "that offers the most advanced tools to enhance your competitive edge in the digital realm.",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.2,
                        }}
                        className="text-center lg:text-left"
                        viewport={{ once: true }}
                      >
                        <h3 className="sm:text-4xl text-2xl main-heading leading-tight">
                          {item.text}{" "}
                          <motion.span
                            initial={{ backgroundColor: "transparent" }}
                            whileInView={{
                              backgroundColor: "#fef08a",
                              transition: {
                                duration: 0.5,
                                delay: index * 0.2 + 0.3,
                              },
                            }}
                            className="bg-yellow-200 inline-block px-2 rounded"
                          >
                            {item.highlightText}
                          </motion.span>{" "}
                          <span className="block text-lg text-gray-600 mt-2 font-normal">
                            {item.description}
                          </span>
                        </h3>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* Video Section */}
            <motion.section
              id="video"
              className="min-h-screen p-8 sm:p-30 bg-gray-900 flex items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="container mx-auto text-center">
                <motion.header
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                  viewport={{ once: true }}
                >
                  <h2 className="sm:text-6xl text-4xl font-bold text-white mb-4">
                    SEE OUR WORK IN ACTION
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Discover how we transform ideas into reality through our
                    comprehensive development process.
                  </p>
                </motion.header>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative max-w-4xl mx-auto"
                  viewport={{ once: true }}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-800 flex items-center justify-center">
                    <p className="text-white text-lg">
                      Video Player Placeholder
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-white"
                    viewport={{ once: true }}
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">
                        50+
                      </div>
                      <p className="text-gray-300">Projects Completed</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">
                        99%
                      </div>
                      <p className="text-gray-300">Client Satisfaction</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">
                        24/7
                      </div>
                      <p className="text-gray-300">Support Available</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>

            {/* Services Section */}
            <motion.section
              id="services"
              className="min-h-screen p-8 sm:p-30"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <div className="container mx-auto">
                <motion.header
                  variants={itemVariants}
                  className="text-center mb-16"
                >
                  <h2 className="sm:text-6xl text-4xl mb-8 font-bold">
                    WHAT DO WE PROVIDE?
                  </h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
                    viewport={{ once: true }}
                  >
                    We are a dynamic startup based in Pune, driven by a team of
                    young and passionate developers dedicated to revolutionizing
                    the IT industry.
                  </motion.p>
                </motion.header>

                <motion.div
                  variants={itemVariants}
                  className="overflow-x-auto pb-6"
                >
                  <div className="flex space-x-6 px-4 min-w-max justify-center">
                    {[
                      {
                        name: "Website Development",
                        description:
                          "Build stunning, high-performance websites optimized for speed and SEO",
                        icon: "💻",
                        features: [
                          "Responsive Design",
                          "SEO Optimized",
                          "Fast Loading",
                        ],
                      },
                      {
                        name: "Android Development",
                        description:
                          "Create seamless mobile experiences with native Android applications",
                        icon: "📱",
                        features: [
                          "Native Performance",
                          "Material Design",
                          "Play Store Ready",
                        ],
                      },
                      {
                        name: "iOS Development",
                        description:
                          "Engaging users with cutting-edge iOS apps and seamless UX",
                        icon: "🍎",
                        features: [
                          "Swift/SwiftUI",
                          "App Store Guidelines",
                          "iOS Optimization",
                        ],
                      },
                      {
                        name: "Digital Marketing",
                        description:
                          "Boost your reach with data-driven marketing strategies",
                        icon: "📈",
                        features: ["SEO/SEM", "Social Media", "Analytics"],
                      },
                      {
                        name: "Graphic Design",
                        description:
                          "Transform ideas into visual masterpieces and brand identity",
                        icon: "🎨",
                        features: [
                          "Brand Identity",
                          "Print Design",
                          "Digital Graphics",
                        ],
                      },
                      {
                        name: "UI/UX Design",
                        description:
                          "Bring ideas to life with interactive designs",
                        icon: "🖌️",
                        features: [
                          "User Research",
                          "Prototyping",
                          "Usability Testing",
                        ],
                      },
                    ].map((service, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex-shrink-0 w-80 bg-emerald-400 text-white rounded-xl shadow-lg p-6 transform transition-all duration-300"
                        whileHover={
                          !shouldReduceMotion
                            ? {
                                scale: 1.05,
                                y: -10,
                                boxShadow:
                                  "0 25px 50px -12px rgba(16, 185, 129, 0.4)",
                                backgroundColor: "#059669",
                              }
                            : {}
                        }
                      >
                        <div className="text-center">
                          <div className="text-5xl mb-4">{service.icon}</div>
                          <h3 className="text-2xl font-bold mb-4">
                            {service.name}
                          </h3>
                          <p className="text-sm opacity-90 mb-4">
                            {service.description}
                          </p>
                          <div className="mb-4">
                            {service.features.map((feature, idx) => (
                              <span
                                key={idx}
                                className="inline-block bg-white bg-opacity-20 rounded-full px-2 py-1 text-xs mr-1 mb-1"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                          <button className="bg-white text-emerald-500 px-4 py-2 rounded-full hover:bg-emerald-50 transition duration-300 font-semibold">
                            Learn More
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Portfolio Section */}
            <motion.section
              id="portfolio"
              className="min-h-screen p-8 sm:p-30 bg-gray-50"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <div className="container mx-auto">
                <motion.header
                  variants={itemVariants}
                  className="text-center mb-16"
                >
                  <h2 className="sm:text-6xl text-4xl font-bold mb-4 text-gray-800">
                    OUR PORTFOLIO
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Explore our diverse range of successful projects that
                    showcase our expertise in delivering innovative solutions.
                  </p>
                </motion.header>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={containerVariants}
                >
                  {portfolioProjects.map((project) => (
                    <PortfolioCard
                      key={project.id}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      technologies={project.technologies}
                      liveLink={project.liveLink}
                      githubLink={project.githubLink}
                    />
                  ))}
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="text-center mt-12"
                >
                  <motion.button
                    whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
                    whileTap={!shouldReduceMotion ? { scale: 0.95 } : {}}
                    className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition-all duration-300"
                  >
                    View All Projects
                  </motion.button>
                </motion.div>
              </div>
            </motion.section>

            {/* Blog Section */}
            <motion.section
              id="blog"
              className="min-h-screen p-8 sm:p-30 bg-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <div className="container mx-auto">
                <motion.header
                  variants={itemVariants}
                  className="text-center mb-16"
                >
                  <h2 className="sm:text-6xl text-4xl font-bold mb-4 text-gray-800">
                    OUR BLOGS
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Stay updated with the latest trends, insights, and
                    innovations in technology.
                  </p>
                </motion.header>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={containerVariants}
                >
                  {blogPosts.map((post) => (
                    <BlogCard
                      key={post.id}
                      title={post.title}
                      excerpt={post.excerpt}
                      date={new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      image={post.image}
                      category={post.category}
                      slug={post.slug}
                    />
                  ))}
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="text-center mt-12"
                >
                  <motion.button
                    whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
                    whileTap={!shouldReduceMotion ? { scale: 0.95 } : {}}
                    className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition-all duration-300"
                  >
                    View All Blogs
                  </motion.button>
                </motion.div>
              </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
              id="contact"
              className="min-h-screen flex items-center sm:p-30 bg-emerald-500 sm:bg-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="container mx-auto">
                <div className="bg-emerald-500 w-full rounded-2xl p-8 sm:p-15">
                  <div className="grid grid-cols-12 gap-8 items-center">
                    <motion.div
                      className="col-span-12 lg:col-span-6 text-white"
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <header className="mb-6">
                        <h2 className="sm:text-6xl text-4xl font-bold mb-4">
                          WE'D LOVE TO HEAR FROM YOU!
                        </h2>
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          className="text-lg leading-relaxed"
                          viewport={{ once: true }}
                        >
                          Whether you have a question about our services, need
                          assistance, or just want to share feedback, we're here
                          to help.
                        </motion.p>
                      </header>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          <span>contact@innovativetech.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          <span>+91 12345 67890</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Pune, Maharashtra, India</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="col-span-12 lg:col-span-6"
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="max-w-lg mx-auto p-6 bg-white shadow-2xl rounded-2xl">
                        <motion.form
                          initial="hidden"
                          whileInView="visible"
                          variants={containerVariants}
                          className="space-y-6"
                          viewport={{ once: true }}
                          onSubmit={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <motion.div variants={itemVariants}>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-200"
                              placeholder="Enter your full name"
                            />
                          </motion.div>

                          <motion.div variants={itemVariants}>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-200"
                              placeholder="Enter your email address"
                            />
                          </motion.div>

                          <motion.div variants={itemVariants}>
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-200"
                              placeholder="Enter your phone number"
                            />
                          </motion.div>

                          <motion.div variants={itemVariants}>
                            <label
                              htmlFor="service"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Service Interest
                            </label>
                            <select
                              id="service"
                              name="service"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-200"
                            >
                              <option value="">Select a service</option>
                              <option value="web-development">
                                Web Development
                              </option>
                              <option value="mobile-development">
                                Mobile Development
                              </option>
                              <option value="blockchain">
                                Blockchain Technology
                              </option>
                              <option value="digital-marketing">
                                Digital Marketing
                              </option>
                              <option value="ui-ux">UI/UX Design</option>
                              <option value="other">Other</option>
                            </select>
                          </motion.div>

                          <motion.div variants={itemVariants}>
                            <label
                              htmlFor="message"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Message *
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              required
                              rows="4"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-200 resize-none"
                              placeholder="Tell us about your project..."
                            />
                          </motion.div>

                          <motion.button
                            variants={itemVariants}
                            whileHover={
                              !shouldReduceMotion ? { scale: 1.02 } : {}
                            }
                            whileTap={
                              !shouldReduceMotion ? { scale: 0.98 } : {}
                            }
                            type="submit"
                            className="w-full bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 transition-all duration-200 font-semibold"
                          >
                            Send Message
                          </motion.button>

                          <motion.p
                            variants={itemVariants}
                            className="text-xs text-gray-500 text-center"
                          >
                            * Required fields. We'll get back to you within 24
                            hours.
                          </motion.p>
                        </motion.form>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.section>
          </motion.main>
        </Suspense>
      </motion.div>
    </>
  );
};

export default Home;
