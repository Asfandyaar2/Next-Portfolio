"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsBento from "@/components/SkillsBento";
import ProjectsHorizontal from "@/components/ProjectsHorizontal";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Footer from "@/components/Footer";
import { Header } from "@/components/ui/Header";
import { ScrollToTop } from "@/components/ScrollToTop";

const Home = () => {
  return (
    <main className="relative bg-deep-navy min-h-screen selection:bg-neon-cyan/30 selection:text-soft-white">
      {/* Global Noise Texture */}
      <div className="fixed inset-0 noise-texture pointer-events-none z-50 opacity-[0.03]" />
      
      <ScrollToTop />
      <Header navItems={navItems} />
      
      <div className="w-full">
        <Hero />
        <About />
        <SkillsBento />
        <ProjectsHorizontal />
        <ExperienceTimeline />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
