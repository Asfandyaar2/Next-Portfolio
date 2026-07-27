"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import AIExpertise from "@/components/AIExpertise";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { Header } from "@/components/ui/Header";
import { ScrollToTop } from "@/components/ScrollToTop";

const Home = () => {
  return (
    <main className="relative bg-background min-h-screen selection:bg-primary/30 selection:text-foreground">
      {/* Global Noise Texture */}
      <div className="fixed inset-0 noise-texture pointer-events-none z-50 opacity-[0.03]" />

      <ScrollToTop />
      <Header navItems={navItems} />

      <div className="w-full">
        <Hero />
        <About />
        <Skills />
        <AIExpertise />
        <FeaturedProjects />
        <Services />
        <ContactCTA />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
