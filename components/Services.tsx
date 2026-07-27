"use client";
import { motion } from "framer-motion";
import { type LucideIcon, Bot, Workflow, Layers, Plug } from "lucide-react";

import { services } from "@/data";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Workflow,
  Layers,
  Plug,
};

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="heading mb-8"
        >
          What I <span className="text-primary">Offer</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Bot;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass glow-card rounded-2xl p-5 sm:p-7"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-5">
                  <div className="p-2.5 sm:p-3 w-fit rounded-xl bg-primary/10 text-primary shrink-0">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-heading font-bold text-foreground leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 pl-1">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
