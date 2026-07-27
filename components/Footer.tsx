"use client";
import { type LucideIcon, Github, Linkedin, Mail } from "lucide-react";

import { navItems, socialMedia, personal } from "@/data";

const socialIcons: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Mail,
};

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#home" className="font-heading font-bold text-xl text-foreground">
          {personal.name}
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socialMedia.map((social) => {
            const Icon = socialIcons[social.icon] ?? Mail;
            return (
              <a
                key={social.id}
                href={social.link}
                target={social.link.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground/70 mt-8">
        © {new Date().getFullYear()} {personal.name}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
