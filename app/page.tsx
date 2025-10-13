"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Header } from "@/components/ui/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

const Home = () => {
  return (
    <main className="relative bg-black-100 min-h-screen">
      <ScrollToTop />
      <Header navItems={navItems} />
      <div className="max-w-7xl w-full mx-auto sm:px-10 px-5">
        <Hero />
        <Grid />
        <ProjectsSection />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
      <ScrollToTopButton />
    </main>
  );
};

export default Home;
