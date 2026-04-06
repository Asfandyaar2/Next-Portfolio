"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLocationArrow, FaGithub } from "react-icons/fa6";

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative glass rounded-3xl p-6 border border-white/10 hover:border-electric-violet/30 transition-all duration-500 cursor-pointer overflow-hidden"
        onClick={handleCardClick}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-electric-violet/10 via-transparent to-neon-cyan/10 rounded-3xl"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-cyan/40 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: isHovered ? [0, 1, 0] : 0,
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: isHovered ? Infinity : 0,
                repeatDelay: 1,
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + i * 10}%`,
              }}
            />
          ))}
        </div>

        {/* Project Image */}
        <div className="relative mb-6 overflow-hidden rounded-2xl">
          <motion.div
            className="relative h-48 bg-deep-navy/50 rounded-2xl overflow-hidden border border-white/5"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src="/grid.svg"
              alt="background"
              className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
            <motion.img
              src={project.img}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-contain p-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />

            {/* Subtle Hover Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                boxShadow: isHovered
                  ? "0 0 30px rgba(124, 58, 237, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.1)"
                  : "0 0 0px rgba(124, 58, 237, 0), inset 0 0 0px rgba(6, 182, 212, 0)",
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Subtle Border Glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent"
              animate={{
                background: isHovered
                  ? "linear-gradient(45deg, #7C3AED, #06B6D4, #7C3AED) border-box"
                  : "transparent",
              }}
              transition={{ duration: 0.5 }}
              style={{
                backgroundClip: "border-box",
                WebkitBackgroundClip: "border-box",
              }}
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-4">
          {/* Title */}
          <motion.h3
            className="text-xl md:text-2xl font-bold font-heading text-white group-hover:text-neon-cyan transition-colors duration-300"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-soft-white/70 text-sm md:text-base leading-relaxed line-clamp-3"
            animate={{ color: isHovered ? "#F8FAFC" : "#BEC1DD" }}
            transition={{ duration: 0.3 }}
          >
            {project.des}
          </motion.p>

          {/* Tech Stack */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center space-x-2">
              {project.iconLists.map((icon, iconIndex) => (
                <motion.div
                  key={iconIndex}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: iconIndex * 0.1,
                    ease: "backOut",
                  }}
                  whileHover={{
                    scale: 1.3,
                    rotate: 360,
                    y: -5,
                  }}
                  className="relative border border-white/20 rounded-full bg-black/50 backdrop-blur-sm w-10 h-10 flex justify-center items-center hover:border-neon-cyan transition-all duration-300"
                >
                  <img src={icon} alt="tech" className="w-5 h-5 object-contain" />

                  {/* Tech Icon Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-neon-cyan/20"
                    animate={{
                      scale: isHovered ? [1, 1.5, 1] : 1,
                      opacity: isHovered ? [0, 0.5, 0] : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* View Project Button */}
            <motion.div
              className="flex items-center space-x-2 text-neon-cyan hover:text-white transition-colors duration-300"
              whileHover={{ x: 8, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-sm md:text-base font-medium">
                Live Demo
              </span>
              <motion.div
                animate={{ rotate: isHovered ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaLocationArrow className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Card Border Animation */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-transparent"
          animate={{
            background: isHovered
              ? "linear-gradient(45deg, #7C3AED, #06B6D4, #7C3AED) border-box"
              : "transparent",
          }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundClip: "border-box",
            WebkitBackgroundClip: "border-box",
          }}
        />
      </motion.div>
    </motion.div>
  );
};
