import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./App.css";
import Home from "./components/Home";
import LearnMore from "./components/ui/LearnMore";
import SplashScreen from "./components/ui/SplashScreen";
import PortfolioPage from "./components/PortfolioPage";

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
          </Routes>
        </motion.div>
      )}
    </>
  );
};

export default App;
