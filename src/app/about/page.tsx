"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import ParticlesHero from "@/components/particlesBg";
import Brain from "@/components/brain";
const skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Javascript",
  "Typescript",
  "Javascript",
  "React.JS",
  "Node.JS",
  "Express.Js",
  "MongoDB",
  "MySQL",
  "Next.Js",
  "Redux",
  "Zustand",
  "Prisma",
  "Framer Motion",
];
const About = () => {
  const containerRef = useRef(null);
  const skillRef = useRef(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const { scrollYProgress } = useScroll({ container: containerRef });
  const experienceRef = useRef(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <>
      <ParticlesHero />
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
      >
        {/* Container  */}
        <div
          className="h-full lg:flex overflow-y-scroll"
          ref={containerRef}
        >
          {/* text container  */}
          <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 w-full lg:w-2/3 xl:1/2 lg:pr-0">
            {/* Bio container  */}
            <div className="flex flex-col gap-12 justify-center">
              <h1 className="font-bold text-2xl">ABOUT ME</h1>
              <p className="text-lg">
                I'm a MERN Stack and Next.js developer passionate about building
                fast, scalable, and user-focused web applications. With a strong
                foundation in React, Express, and MongoDB, I specialize in
                developing seamless full-stack solutions that blend
                functionality with great design. I love transforming complex
                problems into clean, efficient code and delivering intuitive
                digital experiences. Whether it's crafting a dynamic frontend in
                React or optimizing a backend API, I enjoy every part of the
                development process.
              </p>
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#E91E63"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#E91E63" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#E91E63"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
            {/* Skills container  */}
            <div ref={skillRef} className="flex flex-col gap-12 justify-center">
              <motion.h1
                initial={{ x: "-100px", opacity: 0 }}
                animate={isSkillRefInView ? { x: "0px", opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="font-bold text-2xl"
              >
                SKILLS
              </motion.h1>
              {/* skill list  */}
              <div className="flex gap-4 flex-wrap">
                {skills.map((s, id) => (
                  <div
                    className="rounded p-2 textsm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                    key={id}
                  >
                    {s}
                  </div>
                ))}
              </div>
              {/* skill svg  */}
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#E91E63"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#E91E63" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#E91E63"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
            {/* Experience container  */}
            <div
              ref={experienceRef}
              className="flex flex-col gap-12 justify-center pb-48"
            >
              <motion.h1
                initial={{ x: "-100px", opacity: 0 }}
                animate={isExperienceRefInView ? { x: "0px", opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="font-bold text-2xl"
              >
                Experience
              </motion.h1>
              {/* EXP LIST  */}
              <div className="">
                {/* EXPERIENCE LIST ITEM */}
                <div className="flex justify-between h-48">
                  {/* LEFT */}
                  <div className="w-1/3 ">
                    {/* JOB TITLE */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      MERN Stack Developer
                    </div>
                    {/* JOB DESC */}
                    <div className="p-3 text-sm italic">
                      Worked on MERN projects, enhancing knowledge and expertise
                    </div>
                    {/* JOB DATE */}
                    <div className="p-3 text-red-400 text-sm font-semibold">
                      Nov 2024 - Aug 2025{" "}
                    </div>
                    {/* JOB COMPANY */}
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                      Brightline Solutions
                    </div>
                  </div>
                  {/* CENTER */}
                  <div className="w-1/6 flex justify-center">
                    {/* LINE */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* LINE CIRCLE */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 flex justify-center items-center">
                        <div className=" w-3 h-3 rounded-full bg-red-400 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="w-1/3 "></div>
                </div>
                {/* EXPERIENCE LIST ITEM */}
                <div className="flex justify-between h-48">
                  {/* LEFT */}
                  <div className="w-1/3 "></div>
                  {/* CENTER */}
                  <div className="w-1/6 flex justify-center">
                    {/* LINE */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* LINE CIRCLE */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 flex justify-center items-center">
                        <div className=" w-3 h-3 rounded-full bg-red-400 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="w-1/3 ">
                    {/* JOB TITLE */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      MERN Stack Developer
                    </div>
                    {/* JOB DESC */}
                    <div className="p-3 text-sm italic">
                      Developed MERN projects, gaining real-world technical
                      experience.
                    </div>
                    {/* JOB DATE */}
                    <div className="p-3 text-red-400 text-sm font-semibold">
                      Aug 2024 - Nov 2024{" "}
                    </div>
                    {/* JOB COMPANY */}
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                      Technodrome (Agency)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SVG Container  */}
          <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-20">
            <Brain scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
