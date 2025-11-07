"use client"

import CountUpComponent from "@/components/countUp";
import ParticlesContainer from "@/components/particlesBg";
import TypeWritter from "@/components/typeWritter";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <motion.div
      className="h-[calc(100vh-6rem)]"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-full px-4 md:px-12 lg:px-20 overflow-x-hidden">
        {/* Background Particles */}
        <ParticlesContainer />

        {/* Hero Container */}
        <div className="container mx-auto flex flex-col lg:flex-row h-full items-center justify-center py-10 lg:py-12 relative z-10">
          {/* Left Image Section */}
          <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full">
            <Image
              className="object-contain"
              src="/hero.png"
              alt="Hero Image"
              fill
              priority
            />
          </div>

          {/* Right Text Section */}
          <div className="flex flex-col gap-4 h-1/2 lg:h-full w-full lg:w-1/2 lg:pl-24 mt-10 lg:mt-0">
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
              <Link href={"/portfolio"}>
                <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-[#E91E63] transition cursor-pointer">
                  View My Work
                </button>
              </Link>
              <Link href={"/contact"}>
                <button className="p-4 rounded-lg ring-1 ring-black hover:bg-gray-100 transition cursor-pointer">
                  Hire Me
                </button>
              </Link>
              <a
                href={"/Souvik_Sarkar_Resume.pdf"}
                download={'Souvik_Sarkar_Resume'}
                target="_blank" 
                rel="noopener noreferrer"
                className="
        relative 
        group 
        inline-flex 
        items-center 
        justify-center 
        px-6 
        py-3 
        text-lg 
        font-medium 
        text-white 
        transition-all 
        duration-300 
        ease-out 
        rounded-xl 
        shadow-xl 
        overflow-hidden
        bg-pink-600 
        hover:bg-pink-700
        transform 
        hover:scale-105 
        active:scale-95
      "
              >
                {/* Background Glow Effect on Hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                {/* Inner Content Container */}
                <span className="relative flex items-center gap-2">
                  {/* Download Icon (lucide-react substitute) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-[-2px]"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>

                  <span className="transition-colors duration-300">
                    Download CV
                  </span>
                </span>
              </a>
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
