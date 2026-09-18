"use client";
import { motion } from "framer-motion";
import {
  type LucideIcon,
  Code2,
  Server,
  Terminal,
  Brain,
  Database,
  Workflow,
  HardDrive,
  Cloud,
  Plug,
  Activity,
  Sparkles,
} from "lucide-react";

import { skillCategories } from "@/data";
import { RevealMask } from "@/components/RevealMask";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Server,
  Terminal,
  Brain,
  Database,
  Workflow,
  HardDrive,
  Cloud,
  Plug,
  Activity,
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-12 md:py-20 bg-background relative overflow-hidden"
    >
      <Sparkles className="absolute top-16 right-10 w-7 h-7 text-primary/20 pointer-events-none hidden sm:block" />
      <div className="container mx-auto px-6">
        <h2 className="heading mb-4 overflow-hidden">
          <RevealMask>
            Skills & <span className="text-primary">Stack</span>
          </RevealMask>
        </h2>
        <p className="subheading mb-8">
          A full-stack toolkit built for shipping production-grade AI systems
          end to end.
        </p>

        <div className=" mx-auto glass glow-card rounded-3xl divide-y divide-border overflow-hidden">
          {skillCategories.map((skill, index) => {
            const Icon = iconMap[skill.icon] ?? Code2;

            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 10) * 0.04 }}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-5 hover:bg-muted/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 sm:w-64 shrink-0">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="p-2 rounded-lg bg-primary/10 text-primary shrink-0"
                  >
                    <Icon size={18} />
                  </motion.div>
                  <h3 className="text-sm font-heading font-bold text-foreground">
                    {skill.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
