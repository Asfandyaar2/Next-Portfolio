"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { gsap, ScrollTrigger, SplitText, prefersReducedMotion } from "@/lib/gsap";

interface RevealMaskProps {
  children: React.ReactNode;
  delay?: number;
}

/**
 * GSAP SplitText + ScrollTrigger char reveal. SplitText's `mask: "chars"`
 * auto-wraps each character in its own overflow-hidden span, so this needs
 * no manual clipping wrapper (and sidesteps the IntersectionObserver-vs-
 * transformed-child clipping trap the old framer-motion version hit).
 */
export const RevealMask = ({ children, delay = 0 }: RevealMaskProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;

      const split = SplitText.create(ref.current, {
        type: "words,chars",
        mask: "chars",
        autoSplit: true,
        onSplit: (self) => {
          return gsap.from(self.chars, {
            yPercent: 120,
            opacity: 0,
            duration: 0.8,
            delay,
            stagger: 0.02,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              once: true,
            },
          });
        },
      });

      return () => split.revert();
    },
    { scope: ref, dependencies: [delay] }
  );

  return (
    <span ref={ref} className="inline-block">
      {children}
    </span>
  );
};

export default RevealMask;
