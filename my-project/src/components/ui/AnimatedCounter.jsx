import { animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ value, duration = 2, delay = 0 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    // Handle percentage
    if (value.includes("%")) {
      return Math.round(latest) + "%";
    }
    // Handle plus sign
    if (value.includes("+")) {
      return Math.round(latest) + "+";
    }
    // Handle 24/7 format
    if (value.includes("/")) {
      return value;
    }
    return Math.round(latest);
  });

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    // Extract numeric value
    const numericValue = parseInt(value.replace(/[^\d]/g, ""));

    const controls = animate(count, numericValue, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (value.includes("%")) {
          setDisplayValue(Math.round(latest) + "%");
        } else if (value.includes("+")) {
          setDisplayValue(Math.round(latest) + "+");
        } else if (value.includes("/")) {
          // For 24/7, animate both numbers
          const progress = latest / numericValue;
          const firstNum = Math.round(24 * progress);
          const secondNum = Math.round(7 * progress);
          setDisplayValue(`${firstNum}/${secondNum}`);
        } else {
          setDisplayValue(Math.round(latest).toString());
        }
      },
    });

    return () => controls.stop();
  }, [value, duration, delay, count]);

  return <span>{displayValue}</span>;
};
export default AnimatedCounter;
