/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        // viewport={{ once: true }}
        className="flex-shrink-0 object-cover -mb-24 rounded-full md:mb-0 w-52 h-52 md:rounded-lg md:w-64 md:h-60"
        src="https://c4.wallpaperflare.com/wallpaper/553/367/746/stuart-the-minion-4k-funny-minions-8k-wallpaper-preview.jpg"
      />
      <div className="px-0 space-y-5 md:space-y-10 md:px-10">
        <h4 className="text-xl font-semibold md:text-4xl">
          Here is a{" "}
          <span className="underline decoration-darkGreen/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm text-justify md:text-lg lg:text-lg">
        Hey 👋🏼 I am a Software Engineer currently based in India. I did my undergraduate in Computer Science Engineering From Abdul kalam Technical University,I absolutely love all things to do with AI, robots and code. Beyond coding, I find joy in cycling, gardening, and music.
        </p>
      </div>
    </motion.div>
  );
}