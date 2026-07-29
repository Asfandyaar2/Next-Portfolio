"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

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
          ? "bg-background border-b border-border shadow-sm"
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
            <a href="#home" className="font-heading font-bold text-2xl tracking-tighter text-foreground group">
              <span className="text-primary">Asfand</span>
              <span className="group-hover:text-primary transition-colors">yar</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
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
                    isActive ? "text-primary" : "text-foreground/60 hover:text-foreground"
                  )}
                >
                  {item.name}
                  {/* Active Indicator */}
                  <span className={cn(
                    "absolute -bottom-2 left-0 h-0.5 bg-primary transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}></span>
                </motion.a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:hidden text-foreground focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span
                  className={cn(
                    "block h-0.5 w-6 bg-foreground transition-all duration-300",
                    isMobileMenuOpen ? "rotate-45 translate-y-2 bg-primary" : ""
                  )}
                ></span>
                <span
                  className={cn(
                    "block h-0.5 w-4 bg-foreground transition-all duration-300 ml-auto",
                    isMobileMenuOpen ? "opacity-0" : ""
                  )}
                ></span>
                <span
                  className={cn(
                    "block h-0.5 w-6 bg-foreground transition-all duration-300",
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2 bg-primary" : ""
                  )}
                ></span>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background border-t border-border overflow-hidden"
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
                        isActive ? "text-primary ml-4" : "text-foreground/40 hover:text-foreground"
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
