"use client";
import React from "react";
import { motion } from "framer-motion";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="heading"
      >
        My <span className="text-purple">work experience</span>
      </motion.h1>

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
              //   random duration will be fun , I think , may be not
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                // add this border radius to make it more rounded so that the moving border is more realistic
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              // remove bg-white dark:bg-slate-900
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 h-full"
            >
              <div className="flex flex-col items-center text-center p-6 md:p-8 lg:p-10 gap-4 h-full">
                <div className="flex-shrink-0">
                  <img
                    src={card.thumbnail}
                    alt={card.thumbnail}
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto object-contain"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <h1 className="text-xl md:text-2xl font-bold mb-4 text-white">
                    {card.title}
                  </h1>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
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
