import { useEffect, useRef } from "react";
import gsap from "gsap";

const SplashScreen = ({ onComplete }) => {
  const textRef = useRef(null);
  const logoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 500); // Small delay before transition
      },
    });

    // Animate text appearance with smoother easing
    tl.fromTo(
      textRef.current,
      {
        opacity: 0,
        letterSpacing: "20px",
        scale: 0.8,
        y: 20,
      },
      {
        opacity: 1,
        letterSpacing: "0px",
        scale: 1,
        y: 0,
        duration: 1.0,
        ease: "power3.out",
      }
    )
      // Hold the text
      .to(textRef.current, {
        duration: 1.2,
      })
      // Fade out text smoothly
      .to(textRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
      })
      // Fade in logo with bounce effect
      .fromTo(
        logoRef.current,
        {
          opacity: 0,
          scale: 0.3,
          rotation: -180,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.3" // Start slightly before text completes
      )
      // Add subtle pulse
      .to(logoRef.current, {
        scale: 1.05,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      });

    return () => tl.kill(); // Cleanup
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center h-screen bg-gradient-to-br from-emerald-500 to-emerald-600 text-white overflow-hidden"
    >
      {/* Company Name - Responsive sizing */}
      <h1
        ref={textRef}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold absolute px-4 text-center"
        style={{ willChange: "transform, opacity" }}
      >
        Celsystech<span className="text-blue-600">.</span>
      </h1>

      {/* Logo - Responsive sizing */}
      <div
        ref={logoRef}
        className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-2xl opacity-0 flex items-center justify-center"
        style={{ willChange: "transform, opacity" }}
      >
        {/* Optional: Add logo content here */}
        <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
          CT
        </span>
      </div>
    </div>
  );
};

export default SplashScreen;
