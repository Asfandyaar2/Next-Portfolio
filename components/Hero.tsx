"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const roles = ["AI Engineer", "Automation Architect", "Full Stack Developer"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[index];
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      );

      if (!isDeleting && displayText === currentRole) {
        setSpeed(2000); // Wait at end
        setIsDeleting(true);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
        setSpeed(150);
      } else {
        setSpeed(isDeleting ? 75 : 150);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, speed]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-deep-navy" id="home">
      {/* Neural Network SVG Background - CSS based animations */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="neural-nodes">
            {[...Array(30)].map((_, i) => (
              <circle
                key={i}
                cx={Math.random() * 100}
                cy={Math.random() * 100}
                r="0.4"
                fill="#06B6D4"
                className="animate-pulse"
                style={{ animationDelay: `${Math.random() * 5}s`, opacity: 0.6 }}
              />
            ))}
          </g>
          <g className="neural-connections">
            {[...Array(20)].map((_, i) => (
              <line
                key={i}
                x1={Math.random() * 100}
                y1={Math.random() * 100}
                x2={Math.random() * 100}
                y2={Math.random() * 100}
                stroke="#7C3AED"
                strokeWidth="0.05"
                className="opacity-20"
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="absolute inset-0 noise-texture"></div>

      <div className="relative z-10 container flex flex-col items-center justify-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.3em] text-xs md:text-sm text-neon-cyan mb-4 font-heading"
        >
          Architecting the Future with Intelligence
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-soft-white mb-6 leading-tight"
        >
          Hi, I&apos;m <span className="text-electric-violet">Asfandyar</span>
        </motion.h1>

        <div className="h-20 md:h-24 flex items-center mb-10">
          <span className="text-2xl md:text-4xl lg:text-5xl font-heading font-semibold text-soft-white/80">
            <span className="text-neon-cyan inline-block border-r-4 border-neon-cyan pr-2 animate-blink min-w-[280px] text-center">
              {displayText}
            </span>
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-6 sm:flex-row mt-4"
        >
          <Link href="#projects">
            <button className="group relative px-10 py-5 bg-electric-violet text-white font-bold rounded-xl btn-glow transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
              Explore Neural Showcase
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
          <Link href="#contact">
            <button className="px-10 py-5 border border-white/10 glass rounded-xl text-soft-white font-semibold transition-all hover:bg-white/5 hover:border-white/20 hover:scale-105">
              Discuss Automation
            </button>
          </Link>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-soft-white/30 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-1 h-12 bg-gradient-to-b from-electric-violet to-transparent rounded-full animate-bounce"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
