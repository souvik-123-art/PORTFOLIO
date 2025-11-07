"use client"

import CountUpComponent from "@/components/countUp";
import ParticlesContainer from "@/components/particlesBg";
import TypeWritter from "@/components/typeWritter";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{y: "-200vh"}} animate={{y: "0%"}} transition={{duration: 0.5}}>
      <div className="relative w-full h-full px-4 md:px-12 lg:px-20 overflow-hidden">
        {/* Background Particles */}
        <ParticlesContainer />

        {/* Hero Container */}
        <div className="container mx-auto flex flex-col lg:flex-row h-full items-center justify-center py-10 lg:py-12 relative z-10">
          {/* Left Image Section */}
          <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[550px]">
            <Image
              className="object-contain"
              src="/hero.png"
              alt="Hero Image"
              fill
              priority
            />
          </div>

          {/* Right Text Section */}
          <div className="flex flex-col gap-4 w-full lg:w-1/2 lg:pl-24 mt-10 lg:mt-0">
            <p className="md:text-xl text-lg">Web Developer</p>
            <p className="md:text-[45px] xl:text-7xl text-4xl font-bold mb-6">
              Hello I'm <span className="text-[#E91E63]">Souvik Sarkar</span>
            </p>

            <span className="md:text-2xl text-xl flex flex-wrap gap-2">
              <span>A Passionate</span>
              <span className="text-[#9C27B0] font-semibold inline">
                <TypeWritter />
              </span>
            </span>

            <div className="flex gap-4 mt-4 flex-wrap">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-[#E91E63] transition cursor-pointer">
                View My Work
              </button>
              <button className="p-4 rounded-lg ring-1 ring-black hover:bg-gray-100 transition cursor-pointer">
                Hire Me
              </button>
            </div>

            <div className="flex gap-8 mt-12 flex-wrap">
              <CountUpComponent />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
