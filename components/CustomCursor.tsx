"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 320, mass: 0.4 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!supportsFinePointer) return;
    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const target = e.target as HTMLElement;
      setIsPointer(Boolean(target.closest("a, button, [role='button'], input, textarea")));
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full bg-primary mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
        }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full border border-primary/60"
        animate={{
          width: isPointer ? 52 : 32,
          height: isPointer ? 52 : 32,
          opacity: isPointer ? 0.9 : 0.5,
        }}
        transition={{ duration: 0.2 }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default CustomCursor;
