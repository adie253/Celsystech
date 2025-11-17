import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = [
        "home",
        "about",
        "services",
        "portfolio",
        "faq",
        "blog",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "FAQ",
    "Blog",
    "Contact",
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-xl border-b border-gray-100"
          : "bg-white/30 backdrop-blur-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        <motion.div
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.div
            className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white font-bold text-xl">C</span>
          </motion.div>
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Celsystech
          </span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-1 bg-gray-50/50 backdrop-blur-sm rounded-full px-2 py-2">
          {navItems.map((item, idx) => {
            const itemId = item.toLowerCase();
            const isActive = activeSection === itemId;

            return (
              <motion.a
                key={item}
                href={`#${itemId}`}
                className={`relative px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : scrolled
                    ? "text-gray-700 hover:text-emerald-600"
                    : "text-gray-800 hover:text-emerald-600"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </motion.a>
            );
          })}
        </div>

        <motion.button
          className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold overflow-hidden group relative"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/quote")}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600"
            initial={{ x: "100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10">Get a Quote</span>
          <motion.span
            className="relative z-10"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.button>

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          whileTap={{ scale: 0.9 }}
        >
          <motion.div className="w-6 h-5 flex flex-col justify-between">
            <motion.span
              className="w-full h-0.5 bg-gray-800 rounded-full"
              animate={isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="w-full h-0.5 bg-gray-800 rounded-full"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="w-full h-0.5 bg-gray-800 rounded-full"
              animate={
                isMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }
              }
            />
          </motion.div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-100"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col px-6 py-6 space-y-1">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-3 text-gray-800 hover:text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                className="mt-4 w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
