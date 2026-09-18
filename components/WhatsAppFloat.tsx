"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import { personal } from "@/data";

export const WhatsAppFloat = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const link = `https://wa.me/${personal.whatsapp}?text=${encodeURIComponent(
    `Hi ${personal.name}, I found your portfolio and would like to talk about a project.`
  )}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ opacity: 0, scale: 0.4, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.4, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="fixed bottom-6 right-6 z-[60] group flex items-center"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
          <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40">
            <FaWhatsapp className="w-7 h-7" />
          </span>
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-foreground text-background text-xs font-semibold px-3 py-1.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Chat on WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFloat;
