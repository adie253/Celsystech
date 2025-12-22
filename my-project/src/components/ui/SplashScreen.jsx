import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SplashScreen = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [particles] = useState(
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
    }))
  );

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Animated Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-white/10 to-blue-400/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
          y: [0, -100, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-l from-purple-400/20 to-pink-400/20 blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -100, 0],
          y: [0, 100, 0],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      <motion.div className="relative text-center px-4 z-10">
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={step >= 1 ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        >
          <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl">
            <span className="text-5xl">💎</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-2"
          initial={{ opacity: 0, letterSpacing: "0.5em", y: 20 }}
          animate={
            step >= 1 ? { opacity: 1, letterSpacing: "0.02em", y: 0 } : {}
          }
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            textShadow: "0 10px 40px rgba(0,0,0,0.3)",
            fontWeight: 800,
          }}
        >
          Celsystech
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-white/95 mt-4 font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={step >= 2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Crafting Digital Excellence
        </motion.p>

        <motion.div
          className="mt-10 relative"
          initial={{ opacity: 0 }}
          animate={step >= 2 ? { opacity: 1 } : {}}
        >
          <div className="h-1.5 bg-white/20 rounded-full overflow-hidden mx-auto max-w-xs backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-white via-blue-200 to-white rounded-full relative"
              initial={{ width: "0%" }}
              animate={step >= 2 ? { width: "100%" } : {}}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute right-0 top-0 w-20 h-full bg-white/50 blur-xl"
                animate={{ x: [-20, 20, -20] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
