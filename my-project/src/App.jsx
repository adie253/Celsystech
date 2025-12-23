import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./App.css";
import Home from "./components/Home";
import LearnMore from "./components/ui/LearnMore";
import SplashScreen from "./components/ui/SplashScreen";
import PortfolioPage from "./components/PortfolioPage";
import GetQuote from "./components/Get_Quote";
import SimpleContactForm from "./components/ContactPage";

/**
 * App Component
 * Root component handling routing and splash screen logic.
 * Manages session persistence for splash screen to show only once.
 */
const App = () => {
  // ✅ Splash state with session persistence
  const [showSplash, setShowSplash] = useState(() => {
    return sessionStorage.getItem("splashShown") !== "true";
  });

  useEffect(() => {
    if (showSplash) {
      // Hide splash after animation completes
      const timer = setTimeout(() => {
        sessionStorage.setItem("splashShown", "true");
        setShowSplash(false);
      }, 3500); // match your SplashScreen duration

      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  return (
    <>
      {/* Splash overlay */}
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {/* Main App Routes */}
      {!showSplash && (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<LearnMore />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/quote" element={<GetQuote />} />
            <Route path="/contact" element={<SimpleContactForm />} />
          </Routes>
        </motion.div>
      )}
    </>
  );
};

export default App;
