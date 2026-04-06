"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

interface HeaderProps {
  navItems: NavItem[];
  className?: string;
}

export const Header = ({ navItems, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections that have an ID corresponding to nav items
    navItems.forEach((item) => {
      if (item.link.startsWith("#")) {
        const section = document.getElementById(item.link.substring(1));
        if (section) observer.observe(section);
      }
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [navItems]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-deep-navy/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <a href="#" className="font-heading font-bold text-2xl tracking-tighter text-soft-white group">
              <span className="text-electric-violet">Asfand</span>
              <span className="group-hover:text-neon-cyan transition-colors">yar</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.link.substring(1);
              return (
                <motion.a
                  key={item.name}
                  href={item.link}
                  onClick={(e) => handleNavClick(e, item.link)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={cn(
                    "relative text-sm font-heading font-bold uppercase tracking-widest transition-all duration-300 group",
                    isActive ? "text-neon-cyan" : "text-soft-white/60 hover:text-soft-white"
                  )}
                >
                  {item.name}
                  {/* Active Indicator */}
                  <span className={cn(
                    "absolute -bottom-2 left-0 h-0.5 bg-neon-cyan transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}></span>
                </motion.a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:hidden text-soft-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span
                className={cn(
                  "block h-0.5 w-6 bg-soft-white transition-all duration-300",
                  isMobileMenuOpen ? "rotate-45 translate-y-2 bg-neon-cyan" : ""
                )}
              ></span>
              <span
                className={cn(
                  "block h-0.5 w-4 bg-soft-white transition-all duration-300 ml-auto",
                  isMobileMenuOpen ? "opacity-0" : ""
                )}
              ></span>
              <span
                className={cn(
                  "block h-0.5 w-6 bg-soft-white transition-all duration-300",
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2 bg-neon-cyan" : ""
                )}
              ></span>
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-deep-navy/95 backdrop-blur-2xl border-t border-white/5 overflow-hidden"
            >
              <div className="px-6 py-10 space-y-6">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.link.substring(1);
                  return (
                    <motion.a
                      key={item.name}
                      href={item.link}
                      onClick={(e) => handleNavClick(e, item.link)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={cn(
                        "block text-2xl font-heading font-bold uppercase tracking-tighter transition-all duration-300",
                        isActive ? "text-neon-cyan ml-4" : "text-soft-white/40 hover:text-soft-white"
                      )}
                    >
                      {item.name}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
