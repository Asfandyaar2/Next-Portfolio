"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { type LucideIcon, Calendar, Users } from "lucide-react";

import { personal, quickStats } from "@/data";

const statIcons: Record<string, LucideIcon> = {
  Calendar,
  Users,
};

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="heading mb-8"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-6 lg:w-1/3"
          >
            <div className="relative w-56 h-56 md:w-64 md:h-64">
              <div className="absolute -inset-4 rounded-full bg-primary/15 blur-2xl" />
              <div className="absolute inset-[-8px] rounded-full border border-primary/25 animate-pulse" />
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-border glass relative shadow-xl">
                <Image
                  src="/asfand.png"
                  alt={personal.name}
                  fill
                  sizes="256px"
                  className="object-cover"
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
                  <div key={stat.label} className="glow-card glass rounded-2xl p-5 text-center">
                    <Icon className="w-4 h-4 text-primary/70 mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-heading font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
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
