"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { projects } from "@/data";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";

const FeaturedProjects = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeProject = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <section id="projects" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="space-y-4 mb-14 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="w-10 h-0.5 bg-primary" />
            <span className="text-primary text-sm uppercase tracking-[0.25em] font-heading font-bold">
              Selected Work
            </span>
            <span className="w-10 h-0.5 bg-primary" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading"
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg md:text-xl font-sans max-w-2xl mx-auto">
            Production AI systems and platforms shipped for real clients — not demos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenDetail={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveIndex(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedProjects;
