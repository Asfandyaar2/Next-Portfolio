"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 overflow-x-hidden" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="heading lg:max-w-[45vw]"
        >
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white-200 md:mt-10 my-5 text-center"
        >
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="https://www.linkedin.com/in/asfandyar2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </motion.div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:text-base text-sm md:font-normal font-light"
        >
          Copyright © 2025 Asfand Yar
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center md:gap-3 gap-6"
        >
          {socialMedia.map((info, index) => (
            <motion.div
              key={info.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-all duration-300 hover:border-purple-400"
              onClick={() => window.open(info.link, "_blank")}
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
