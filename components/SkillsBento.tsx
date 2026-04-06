"use client";
import { motion } from "framer-motion";
import { 
  Brain, 
  Network, 
  Database, 
  Bot, 
  Code2, 
  Workflow, 
  Link2, 
  Cloud 
} from "lucide-react";

import { skills } from "@/data";

const skillIcons: Record<string, any> = {
  Brain: Brain,
  Network: Network,
  Database: Database,
  Robot: Bot,
  Code: Code2,
  Workflow: Workflow,
  Link: Link2,
  Cloud: Cloud
};

const SkillsBento = () => {
  return (
    <section id="skills" className="py-20 bg-deep-navy">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="heading mb-16"
        >
          AI & Automation <span className="text-neon-cyan">Stack</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skillIcons[skill.icon as string] || Brain;
            const isLarge = index === 0 || index === 5; // Bento pattern

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`${isLarge ? "md:col-span-2" : "col-span-1"} glass p-8 rounded-3xl border border-white/5 hover:border-neon-cyan/30 transition-all duration-300 relative group overflow-hidden`}
              >
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-electric-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-neon-cyan/10 rounded-2xl text-neon-cyan group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <Icon size={28} />
                    </div>
                    <span className="text-soft-white font-heading font-bold text-3xl opacity-20">{skill.progress}%</span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-soft-white group-hover:text-neon-cyan transition-colors">
                      {skill.name}
                    </h3>
                    
                    <div className="h-1.5 bg-soft-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        transition={{ duration: 1.5, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                        className="h-full bg-neon-cyan"
                      />
                    </div>
                    <div className="flex justify-between items-center text-xs text-soft-white/40 uppercase tracking-widest font-sans">
                      <span>Proficiency</span>
                      <span>{skill.category}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsBento;
