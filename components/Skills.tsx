"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/data";
import { 
  Bot, 
  Cpu, 
  Database, 
  Workflow, 
  Code2, 
  Cloud, 
  BrainCircuit, 
  Zap 
} from "lucide-react";

const iconMap: { [key: string]: any } = {
  "LLMs & Prompt Engineering": Bot,
  "LangChain / LangGraph": BrainCircuit,
  "RAG Systems": Database,
  "AI Agents & MCP": Cpu,
  "Python Automation": Code2,
  "n8n / Zapier Workflows": Workflow,
  "REST APIs": Zap,
  "Cloud Deployment (AWS/GCP)": Cloud,
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading mb-4">
            Mastering the <span className="text-electric-violet">AI Frontier</span>
          </h2>
          <p className="subheading">
            A comprehensive stack designed for the next generation of automation and intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.name] || Code2;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 rounded-2xl glass border border-white/5 hover:border-electric-violet/30 transition-all duration-300 animated-gradient-border"
              >
                <div className="w-12 h-12 rounded-lg bg-electric-violet/10 flex items-center justify-center mb-4 group-hover:bg-electric-violet/20 transition-colors">
                  <Icon className="w-6 h-6 text-electric-violet" />
                </div>
                <h3 className="text-lg font-bold text-soft-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {skill.name}
                </h3>
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {skill.category}
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
