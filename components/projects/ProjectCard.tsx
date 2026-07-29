"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import type { Project } from "./types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenDetail: () => void;
}

const ProjectCard = ({ project, index, onOpenDetail }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="group glass glow-card rounded-3xl border border-border overflow-hidden flex flex-col shadow-lg shadow-black/5 dark:shadow-black/40 hover:-translate-y-1.5 transition-transform duration-300"
    >
      <button
        onClick={onOpenDetail}
        className="relative w-full aspect-video overflow-hidden text-left"
        aria-label={`View case study for ${project.title}`}
      >
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-heading font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            View Case Study <ArrowUpRight size={15} />
          </span>
        </div>
      </button>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="space-y-1.5">
          <h3 className="font-heading font-bold text-xl text-foreground">{project.title}</h3>
          <p className="text-xs uppercase tracking-wider text-primary font-semibold">
            {project.subtitle}
          </p>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 pt-1">
          {project.metrics.slice(0, 3).map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-border/60 bg-background/40 px-2 py-2.5 text-center"
            >
              <div className="font-heading font-bold text-sm md:text-base text-foreground">
                {metric.value}
              </div>
              <div className="text-[10px] text-muted-foreground leading-tight mt-0.5">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2 mt-auto">
          <button
            onClick={onOpenDetail}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full glass border border-border hover:border-primary/50 hover:text-primary transition-all duration-300 text-sm font-heading font-semibold"
          >
            Case Study
          </button>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-glow flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-heading font-semibold"
          >
            Live Site <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
