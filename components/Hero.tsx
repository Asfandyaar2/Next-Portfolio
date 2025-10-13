import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-24 min-h-screen flex items-center">
      <div className="relative overflow-hidden">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 right-0 md:left-full"
          fill="purple"
        />
        <Spotlight
          className="right-0 md:left-80 top-28 h-[80vh] w-[50vw]"
          fill="skyblue"
        />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10 w-full">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-100"
          >
            MERN | Next.js | NestJS | PostgreSQL | AWS
          </motion.p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <TextGenerateEffect
              words="Shaping Ideas into Interactive Realities"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
          >
            Hi, I'm Asfand Yar-
            <b> Full-Stack Developer & Solution Provider </b>
            specializing in MERN Stack. I help startups and businesses build
            SaaS platforms, AI-powered chatbots (OpenAI), and automation
            solutions that drive efficiency and growth.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
          >
            With a strong focus on scalable architectures, secure systems, and
            user-friendly design, I deliver end-to-end solutions — from modern
            web applications to workflow automation and business process
            optimization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="#about">
              <MagicButton
                title="Discover the Wonders"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
