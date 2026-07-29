"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink, X } from "lucide-react";

import type { Project } from "./types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[88vh] overflow-y-auto rounded-3xl border border-border bg-card shadow-2xl shadow-black/20 dark:shadow-black/60"
      >
        <button
          onClick={onClose}
          aria-label="Close case study"
          className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full glass border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300"
        >
          <X size={18} />
        </button>

        <div className="grid sm:grid-cols-2 gap-0.5">
          {project.images.map((src) => (
            <div key={src} className="relative w-full aspect-video overflow-hidden">
              <Image
                src={src}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>

        <div className="p-6 md:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div className="space-y-2">
              <span className="text-primary text-xs uppercase tracking-[0.25em] font-heading font-bold">
                Case Study
              </span>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
                {project.title}
              </h3>
              <p className="text-muted-foreground font-medium">{project.subtitle}</p>
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-sm w-fit"
            >
              Visit Live Site <ExternalLink size={16} />
            </a>
          </div>

          <p className="text-foreground/80 leading-relaxed max-w-3xl">{project.overview}</p>

          <div className="grid sm:grid-cols-3 gap-4">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-border/60 bg-background/40 p-4 text-center space-y-1"
              >
                <div className="text-2xl font-heading font-bold text-foreground">{metric.value}</div>
                <div className="text-xs text-primary font-semibold">{metric.label}</div>
                <div className="text-[11px] text-muted-foreground leading-tight">{metric.sourceText}</div>
              </div>
            ))}
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg text-foreground mb-4">Key Features</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-heading font-semibold text-sm text-foreground">
                      {feature.title}
                    </div>
                    <p className="text-sm text-muted-foreground leading-snug mt-0.5">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg text-foreground mb-4">Tech Stack</h4>
            <div className="grid sm:grid-cols-3 gap-4">
              {project.techStack.map((group) => (
                <div
                  key={group.category}
                  className="rounded-2xl border border-border/60 bg-background/40 p-4 space-y-2.5"
                >
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
