"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { type LucideIcon, ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

import { personal, socialMedia } from "@/data";

const roles = ["Full Stack AI Engineer", "LLMs & RAG", "AI Agents", "MCP Servers"];

const socialIcons: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Mail,
};

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[index];
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      );

      if (!isDeleting && displayText === currentRole) {
        setSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
        setSpeed(150);
      } else {
        setSpeed(isDeleting ? 60 : 90);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, speed]);

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background"
      id="home"
    >
      {/* Spotlight glow + soft floating gradient blobs — deterministic, slow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 spotlight-bg" />
        <motion.div
          className="absolute -top-32 -left-24 w-[34rem] h-[34rem] rounded-full bg-primary/25 blur-[120px]"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-16 w-[30rem] h-[30rem] rounded-full bg-primary/15 blur-[120px]"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Decorative accent */}
      <Sparkles className="absolute bottom-10 right-10 w-8 h-8 text-primary/25 pointer-events-none hidden sm:block" />


      <div className="relative z-10 container flex flex-col items-center justify-center text-center px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-xs font-medium tracking-wide text-muted-foreground">
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-5 leading-tight"
        >
          Hi, I&apos;m <span className="text-primary">{personal.name}</span>
        </motion.h1>

        <div className="h-10 md:h-12 flex items-center mb-8">
          <span className="text-xl md:text-3xl font-heading font-semibold text-foreground/70">
            <span className="border-r-2 border-primary pr-1 min-w-[260px] inline-block text-center">
              {displayText}
              <span className="animate-blink">&nbsp;</span>
            </span>
          </span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-muted-foreground font-sans mb-10"
        >
          {personal.valueProp}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="#projects">
            <button className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl btn-glow transition-all hover:scale-[1.03] active:scale-95 flex items-center gap-2">
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
          <Link href="#contact">
            <button className="px-8 py-4 border border-border glass rounded-xl text-foreground font-semibold transition-all hover:border-primary/40 hover:scale-[1.03] active:scale-95">
              Contact Me
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-4 mt-10"
        >
          {socialMedia.map((social) => {
            const Icon = socialIcons[social.icon] ?? Mail;
            return (
              <a
                key={social.id}
                href={social.link}
                target={social.link.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-muted-foreground/60 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
