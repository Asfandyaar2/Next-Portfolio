"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

import { personal } from "@/data";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center space-y-6"
        >
          <h2 className="heading">
            Let&apos;s Build <span className="text-primary">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Have an AI product, workflow, or full-stack build in mind? I&apos;m currently available
            for new projects.
          </p>

          <div className="pt-4 flex justify-center">
            <a
              href={`mailto:${personal.email}`}
              className="group inline-flex items-center gap-3 px-8 py-5 bg-primary text-primary-foreground font-semibold rounded-2xl btn-glow hover:scale-[1.03] active:scale-95 transition-all text-lg"
            >
              <Mail className="w-5 h-5" />
              {personal.email}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-2 text-sm text-muted-foreground">
            <a href={`tel:${personal.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              {personal.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {personal.location}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
