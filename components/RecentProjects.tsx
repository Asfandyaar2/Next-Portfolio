"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"></div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="heading text-center mb-16 relative z-10"
      >
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </motion.h1>

      {/* Enhanced Grid Layout */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
              key={item.id}
            >
              <PinContainer title={item.link} href={item.link}>
                {/* Enhanced Project Image Section */}
                <div className="relative w-full overflow-hidden rounded-2xl mb-6 group-hover:scale-[1.02] transition-transform duration-500">
                  <div
                    className="relative w-full h-40 md:h-48 lg:h-52 overflow-hidden rounded-2xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img
                      src="/bg.png"
                      alt="background"
                      className="w-full h-full object-cover opacity-20"
                    />
                    <img
                      src={item.img}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-contain p-4"
                    />
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                </div>

                {/* Enhanced Content Section */}
                <div className="space-y-4">
                  <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-white group-hover:text-purple transition-colors duration-300">
                    {item.title}
                  </h1>

                  <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed line-clamp-3">
                    {item.des}
                  </p>

                  {/* Enhanced Tech Stack */}
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-2">
                      {item.iconLists.map((icon, iconIndex) => (
                        <motion.div
                          key={iconIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: iconIndex * 0.1 }}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          className="border border-white/20 rounded-full bg-black/50 backdrop-blur-sm w-10 h-10 flex justify-center items-center hover:border-purple-400 transition-all duration-300"
                        >
                          <img src={icon} alt="tech" className="w-5 h-5" />
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      className="flex items-center space-x-2 text-purple hover:text-white transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm md:text-base font-medium">
                        View Project
                      </span>
                      <FaLocationArrow className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
