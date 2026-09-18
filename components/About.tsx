"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { type LucideIcon, Calendar, Users } from "lucide-react";

import { personal, quickStats } from "@/data";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { RevealMask } from "@/components/RevealMask";
import { gsap } from "@/lib/gsap";

const statIcons: Record<string, LucideIcon> = {
  Calendar,
  Users,
};

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const photoParallaxRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          photoParallaxRef.current,
          { y: -30 },
          {
            y: 30,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="about" className="py-12 md:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="heading mb-8 overflow-hidden">
          <RevealMask>
            About <span className="text-primary">Me</span>
          </RevealMask>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-6 lg:w-1/3"
          >
            <div ref={photoParallaxRef} className="relative w-56 h-56 md:w-64 md:h-64">
              <div className="absolute -inset-4 rounded-full bg-primary/15 blur-2xl" />
              <motion.div
                className="absolute inset-[-10px] rounded-full border border-dashed border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              >
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_2px_rgb(var(--primary-rgb)/0.6)]" />
              </motion.div>
              <motion.div
                className="absolute inset-[-10px] rounded-full border border-primary/15"
                animate={{ rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              >
                <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/70" />
              </motion.div>
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-border glass relative shadow-xl">
                <Image
                  src="/asfand.png"
                  alt={personal.name}
                  fill
                  sizes="256px"
                  className="object-cover object-[50%_20%]"
                  priority
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold text-foreground">{personal.name}</h3>
              <p className="text-primary text-sm uppercase tracking-widest font-heading">{personal.role}</p>
              <p className="text-muted-foreground text-sm mt-1">{personal.location}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-2/3 space-y-8"
          >
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-sans">
              {personal.summary}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {quickStats.map((stat) => {
                const Icon = statIcons[stat.icon] ?? Calendar;
                return (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="glow-card glass rounded-2xl p-5 text-center"
                  >
                    <Icon className="w-4 h-4 text-primary/70 mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-heading font-bold text-primary">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
