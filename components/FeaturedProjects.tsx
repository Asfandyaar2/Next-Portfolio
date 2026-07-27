"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Database, TrendingUp } from "lucide-react";

import { projects } from "@/data";

const FeaturedProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projects[currentIndex];

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="py-12 md:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-8">
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="heading text-left md:text-6xl"
            >
              Featured <span className="text-primary">Projects</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg md:text-xl font-sans max-w-xl">
              Production AI systems shipped for real clients — not demos.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={prevProject}
              className="w-12 h-12 glass flex justify-center items-center rounded-2xl border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
              aria-label="Previous project"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={nextProject}
              className="w-12 h-12 glass flex justify-center items-center rounded-2xl border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
              aria-label="Next project"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div className="relative min-h-[26rem] md:min-h-[20rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col lg:flex-row gap-10 lg:gap-14"
            >
              <div className="lg:w-1/2 relative">
                <div className="relative h-64 lg:h-full min-h-[16rem] glass glow-card rounded-3xl overflow-hidden">
                  {project.placeholder ? (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent">
                      <div className="p-5 rounded-2xl bg-primary/10 text-primary">
                        <Database size={40} />
                      </div>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">
                        Private client deployment
                      </span>
                    </div>
                  ) : (
                    <Image
                      src={project.img!}
                      alt={project.title}
                      width={project.imgWidth}
                      height={project.imgHeight}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-0.5 bg-primary" />
                    <span className="text-primary text-sm uppercase tracking-[0.25em] font-heading font-bold">
                      Project 0{currentIndex + 1}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-start gap-2 text-sm text-foreground/80">
                  <TrendingUp className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span>{project.metrics}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs rounded-full glass border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentIndex ? "w-12 bg-primary" : "w-6 bg-muted hover:bg-muted-foreground/30"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
