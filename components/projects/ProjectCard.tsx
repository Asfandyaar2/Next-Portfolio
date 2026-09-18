"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import type { Project } from "./types";
import { gsap } from "@/lib/gsap";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenDetail: () => void;
}

const ProjectCard = ({ project, index, onOpenDetail }: ProjectCardProps) => {
  const cardRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          imageWrapRef.current,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
      return () => mm.revert();
    },
    { scope: cardRef }
  );

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-7, 7]), springConfig);
  const glowX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative glass glow-card rounded-3xl border border-border overflow-hidden flex flex-col shadow-lg shadow-black/5 dark:shadow-black/40 hover:-translate-y-1.5 transition-transform duration-300 will-change-transform"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(320px circle at ${gx} ${gy}, rgb(var(--primary-rgb) / 0.15), transparent 70%)`
          ),
        }}
      />
      <button
        onClick={onOpenDetail}
        className="relative w-full aspect-video overflow-hidden text-left"
        aria-label={`View case study for ${project.title}`}
      >
        <div ref={imageWrapRef} className="absolute inset-x-0 -top-[10%] h-[120%] will-change-transform">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
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
          {project.metrics.slice(0, 3).map((metric, metricIndex) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: 0.2 + metricIndex * 0.08 }}
              whileHover={{ y: -2 }}
              className="rounded-xl border border-border/60 bg-background/40 px-2 py-2.5 text-center"
            >
              <div className="font-heading font-bold text-sm md:text-base text-foreground">
                {metric.value}
              </div>
              <div className="text-[10px] text-muted-foreground leading-tight mt-0.5">
                {metric.label}
              </div>
            </motion.div>
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
