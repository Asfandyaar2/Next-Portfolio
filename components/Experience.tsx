"use client";
import React from "react";
import { motion } from "framer-motion";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full overflow-x-hidden" id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="heading mb-12"
      >
        My <span className="text-electric-violet">Automation Journey</span>
      </motion.h2>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-8">
        {workExperience.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "var(--background)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(10,15,30,1) 0%, rgba(20,25,45,1) 100%)",
                borderRadius: `calc(1.75rem * 0.96)`,
              }}
              className="flex-1 text-soft-white border-white/10 dark:border-white/5 h-full glass"
            >
              <div className="flex flex-col items-center text-center p-6 md:p-8 lg:p-10 gap-4 h-full">
                <div className="flex-shrink-0">
                  <img
                    src={card.thumbnail}
                    alt={card.thumbnail}
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto object-contain opacity-80"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold font-heading mb-4 text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-soft-white/70 leading-relaxed font-sans">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
