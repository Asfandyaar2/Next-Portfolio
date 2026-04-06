import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20 overflow-x-hidden" id="about">
      <h2 className="heading">
        My <span className="text-electric-violet">Optimization Process</span>
      </h2>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-8 max-w-7xl mx-auto px-4">
        <Card
          title="Analysis & Knowledge Retrieval"
          icon={<AceternityIcon order="Phase 1" />}
          des="Deep discovery into your business workflows. We identify automation 
          bottlenecks and data silos, mapping out a custom RAG and Agentic strategy."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-[#0A0F1E] rounded-3xl overflow-hidden"
            colors={[[124, 58, 237], [6, 182, 212]]}
          />
        </Card>
        <Card
          title="Autonomous Agent Orchestration"
          icon={<AceternityIcon order="Phase 2" />}
          des="The core development phase where LangGraph and autonomous agents are 
          configured. I build the logic loops and tool integrations for seamless execution."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-[#1e1432] rounded-3xl overflow-hidden"
            colors={[[124, 58, 237], [248, 250, 252]]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Deployment & Continuous Optimization"
          icon={<AceternityIcon order="Phase 3" />}
          des="Launching your AI ecosystem onto AWS/GCP with integrated monitoring. 
          We ensure the system learns and evolves with your business data."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-[#0f2a36] rounded-3xl overflow-hidden"
            colors={[[6, 182, 212], [248, 250, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/10 group/canvas-card flex items-center justify-center
       w-full relative lg:h-[35rem] rounded-3xl glass transition-all duration-300 hover:border-electric-violet/30"
      style={{
        background: "var(--background)",
        backgroundColor: "linear-gradient(90deg, rgba(10,15,30,1) 0%, rgba(20,25,45,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 text-electric-violet opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 text-electric-violet opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 text-electric-violet opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 text-electric-violet opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-soft-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 font-bold font-heading group-hover/canvas-card:text-neon-cyan 
         group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h3>
        <p className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-soft-white text-center font-sans
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#BEC1DD" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#7C3AED_0%,#06B6D4_50%,#7C3AED_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-electric-violet backdrop-blur-3xl font-bold text-2xl">
          {order}
        </span>
      </button>
    </div>
    // remove the svg and add the button
    // <svg
    //   width="66"
    //   height="65"
    //   viewBox="0 0 66 65"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    // >
    //   <path
    //     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    //     stroke="currentColor"
    //     strokeWidth="15"
    //     strokeMiterlimit="3.86874"
    //     strokeLinecap="round"
    //     style={{ mixBlendMode: "darken" }}
    //   />
    // </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
