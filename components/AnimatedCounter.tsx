"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export const AnimatedCounter = ({ value, className }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const numericMatch = value.match(/[\d.]+/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const prefix = numericMatch ? value.slice(0, numericMatch.index) : "";
  const suffix = numericMatch ? value.slice((numericMatch.index ?? 0) + numericMatch[0].length) : value;

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1200, bounce: 0 });

  useEffect(() => {
    if (isInView) motionValue.set(numericValue);
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
};

export default AnimatedCounter;
