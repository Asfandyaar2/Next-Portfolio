"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Rocket, 
  ArrowUpRight 
} from "lucide-react";

import { projects } from "@/data";

const ProjectsHorizontal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-32 bg-deep-navy relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="heading text-left md:text-6xl"
            >
              Neural <span className="text-electric-violet">Showcase</span>
            </motion.h2>
            <p className="text-soft-white/40 text-xl font-sans max-w-xl">
              Exploring the frontier of autonomous intelligence and agentic workflows.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button 
              onClick={prevProject}
              className="w-14 h-14 glass flex justify-center items-center rounded-2xl border border-white/5 text-soft-white hover:text-electric-violet hover:border-electric-violet/50 transition-all duration-300 group"
              aria-label="Previous Project"
            >
              <ChevronLeft size={28} className="group-active:scale-90 transition-transform" />
            </button>
            <button 
              onClick={nextProject}
              className="w-14 h-14 glass flex justify-center items-center rounded-2xl border border-white/5 text-soft-white hover:text-electric-violet hover:border-electric-violet/50 transition-all duration-300 group"
              aria-label="Next Project"
            >
              <ChevronRight size={28} className="group-active:scale-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="relative h-[70vh] md:h-[60vh] overflow-visible">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="absolute inset-0 flex flex-col lg:flex-row gap-12"
            >
              {/* Left Side: Mock Image Display */}
              <div className="lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-violet/20 to-neon-cyan/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative h-full glass rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
                   <img 
                    src={projects[currentIndex].img} 
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Right Side: Info Card */}
              <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
                 <div className="space-y-4">
                    <div className="flex items-center gap-4">
                       <span className="w-12 h-0.5 bg-electric-violet"></span>
                       <span className="text-neon-cyan text-sm uppercase tracking-[0.3em] font-heading font-bold">Project 0{currentIndex + 1}</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-heading font-bold text-soft-white leading-tight">
                      {projects[currentIndex].title}
                    </h3>
                    <p className="text-soft-white/60 text-lg md:text-xl font-sans leading-relaxed">
                      {projects[currentIndex].des}
                    </p>
                 </div>

                 <div className="flex flex-wrap gap-3">
                   {projects[currentIndex].iconLists.map((icon, i) => (
                      <div key={i} className="px-4 py-2 glass rounded-xl border border-white/5 flex items-center gap-2 hover:border-electric-violet/30 transition-colors">
                        <img src={icon} alt="tech" className="w-5 h-5 object-contain" />
                        <span className="text-[10px] text-soft-white/40 uppercase tracking-widest font-heading font-bold">Node {i+1}</span>
                      </div>
                   ))}
                 </div>

                 <div className="pt-4">
                   <a 
                    href={projects[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-electric-violet text-white font-bold rounded-2xl btn-glow hover:scale-105 active:scale-95 transition-all text-xl font-heading"
                   >
                     Initialize Demo
                     <ArrowUpRight size={24} />
                   </a>
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Progress */}
        <div className="mt-20 flex items-center justify-center gap-3">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentIndex ? "w-16 bg-neon-cyan" : "w-8 bg-white/10 hover:bg-white/20"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsHorizontal;
