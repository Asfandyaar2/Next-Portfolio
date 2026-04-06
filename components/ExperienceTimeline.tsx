"use client";
import React from "react";
import { 
  motion, 
  useScroll, 
  useTransform 
} from "framer-motion";
import { 
  Milestone, 
  BriefcaseBusiness, 
  Award, 
  ArrowRight 
} from "lucide-react";

import { timelineData } from "@/data";

const ExperienceTimeline = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef} 
      id="experience" 
      className="py-32 bg-deep-navy relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="heading mb-32"
        >
          Engineering <span className="text-electric-violet">Timeline</span>
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-soft-white/10 -translate-x-1/2" />
          <motion.div 
            style={{ height: lineHeight }} 
            className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-electric-violet -translate-x-1/2 origin-top"
          />

          <div className="space-y-32">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative z-10 flex flex-col md:flex-row items-start md:items-center">
                  {/* Content Box */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`flex-1 w-full pl-12 md:pl-0 ${isEven ? "md:pr-24 text-left md:text-right" : "md:pl-24 order-2"}`}
                  >
                    <div className="space-y-4">
                      <div className={`flex items-center gap-3 ${isEven ? "md:justify-end" : "justify-start"}`}>
                        <span className="px-4 py-1 bg-electric-violet/10 text-electric-violet text-sm font-bold font-heading rounded-full border border-electric-violet/20">
                          {item.duration}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-heading font-bold text-soft-white">
                        {item.role}
                      </h3>
                      <h4 className="text-xl md:text-2xl font-heading font-bold text-neon-cyan">
                        {item.company}
                      </h4>
                      <ul className={`space-y-3 pt-6 ${isEven ? "md:items-end" : "items-start"}`}>
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-4 text-soft-white/60 text-lg leading-relaxed font-sans md:text-base">
                            {!isEven ? <ArrowRight size={20} className="text-neon-cyan shrink-0 mt-1" /> : null}
                            <span>{achievement}</span>
                            {isEven ? <ArrowRight size={20} className="text-neon-cyan shrink-0 mt-1" /> : null}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Icon Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
                      className="w-12 h-12 bg-gray-900 glass border-2 border-electric-violet rounded-2xl flex items-center justify-center text-electric-violet z-20 shadow-2xl"
                    >
                      <BriefcaseBusiness size={24} />
                    </motion.div>
                  </div>

                  {/* Empty Spacer */}
                  <div className={`hidden md:block flex-1 ${!isEven ? "order-1" : ""}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
