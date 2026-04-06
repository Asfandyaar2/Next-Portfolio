"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-40 pb-20 bg-deep-navy relative overflow-hidden" id="contact">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-electric-violet/50 to-transparent opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Left: Branding & Bio & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-soft-white">
                Let&apos;s Build <span className="text-electric-violet">Future</span> Together.
              </h2>
              <p className="text-soft-white/50 text-xl font-sans lg:max-w-md">
                Developing innovative, scalable AI solutions and full-stack ecosystems that redefine digital interaction.
              </p>
            </div>

            <div className="flex items-center gap-6">
              {socialMedia.map((social) => (
                <a 
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 glass flex justify-center items-center rounded-2xl border border-soft-white/10 text-soft-white hover:text-electric-violet hover:border-electric-violet/50 hover:-translate-y-2 transition-all duration-300"
                >
                  <img src={social.img} alt="social" className="w-7 h-7 object-contain" />
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-10 text-soft-white/30 text-sm font-sans">
              <span>Copyright © 2026 Asfandyar</span>
              <span>All rights reserved — Neural Dynamics</span>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <form className="glass p-10 md:p-12 rounded-[2rem] border border-white/5 space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-soft-white font-heading font-bold text-sm tracking-widest uppercase">Your Identity</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Full Name / Brand"
                    className="w-full bg-deep-navy/50 border border-white/10 rounded-2xl p-5 text-soft-white focus:outline-none focus:border-electric-violet focus:ring-1 focus:ring-electric-violet/50 transition-all font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-soft-white font-heading font-bold text-sm tracking-widest uppercase">Access Point</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="email@example.com"
                    className="w-full bg-deep-navy/50 border border-white/10 rounded-2xl p-5 text-soft-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-soft-white font-heading font-bold text-sm tracking-widest uppercase">Intel Submission</label>
                  <textarea 
                    id="message"
                    rows={4}
                    placeholder="Project details, automation needs, or partnership requests..."
                    className="w-full bg-deep-navy/50 border border-white/10 rounded-2xl p-5 text-soft-white focus:outline-none focus:border-electric-violet focus:ring-1 focus:ring-electric-violet/50 transition-all font-sans resize-none"
                  />
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full py-5 bg-electric-violet text-white font-bold rounded-2xl btn-glow shadow-xl active:scale-95 transition-all text-xl font-heading"
              >
                Launch Communication
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
