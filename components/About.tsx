"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "Continuous Learning", progress: 95 },
  { name: "Problem Solving", progress: 90 },
  { name: "System Architecture", progress: 85 }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-deep-navy relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading mb-16"
        >
          Behind the <span className="text-electric-violet">Intelligence</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Avatar with Glowing Ring */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6 lg:w-1/3"
          >
            <div className="relative w-64 h-64">
              <div className="absolute inset-[-10px] rounded-full border border-electric-violet/30 animate-pulse"></div>
              <div className="absolute inset-[-20px] rounded-full border border-neon-cyan/20 animate-pulse delay-700"></div>
              
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-soft-white/10 glass relative z-10 shadow-2xl">
                <img 
                  src="/avatar.png" 
                  alt="Asfandyar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=Asfandyar&background=0A0F1E&color=7C3AED&size=256&bold=true`;
                  }}
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold text-soft-white">Asfandyar</h3>
              <p className="text-neon-cyan text-sm uppercase tracking-widest font-heading">Full Stack AI Engineer</p>
            </div>
          </motion.div>

          {/* Right: Bio and Skill Progress */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3 space-y-8"
          >
            <p className="text-xl text-soft-white/70 leading-relaxed font-sans">
              I specialize in bridging the gap between complex human requirements and autonomous digital systems. 
              My expertise lies in architecting scalable AI infrastructures using 
              <span className="text-neon-cyan font-semibold"> LangChain</span>, 
              <span className="text-electric-violet font-semibold"> RAG</span>, and 
              <span className="text-neon-cyan font-semibold"> Agentic Workflows</span>.
            </p>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-soft-white font-heading font-medium">
                    <span>{skill.name}</span>
                    <span>{skill.progress}%</span>
                  </div>
                  <div className="h-2 bg-soft-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-electric-violet to-neon-cyan"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
