"use client";
import { motion } from "framer-motion";
import {
  type LucideIcon,
  Bot,
  Server,
  Sparkles,
  FileSearch,
  Link2,
  GitBranch,
  Zap,
  ShieldCheck,
} from "lucide-react";

import { aiExpertise } from "@/data";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Server,
  Sparkles,
  FileSearch,
  Link2,
  GitBranch,
  Zap,
  ShieldCheck,
};

const AIExpertise = () => {
  return (
    <section id="ai-expertise" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Spotlight
          </span>
          <h2 className="heading">
            AI <span className="text-primary">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {aiExpertise.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Sparkles;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                className="glow-card rounded-2xl p-6 bg-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-2.5 w-fit rounded-xl bg-primary text-primary-foreground mb-5">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-heading font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIExpertise;
