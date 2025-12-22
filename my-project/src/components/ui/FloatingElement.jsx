import { motion } from "framer-motion";
const FloatingElement = ({
  children,
  delay = 0,
  duration = 3,
  amplitude = 20,
}) => (
  <motion.div
    animate={{
      y: [0, -amplitude, 0],
      rotate: [0, 3, -3, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);
export default FloatingElement;
