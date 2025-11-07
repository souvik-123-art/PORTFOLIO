"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Ecommerce Website",
    desc: "Using HTML, Tailwind Css & Vanila Javascript.",
    img: "/ecom.gif",
    link: "https://souvik-123-art.github.io/Ecommerce-Project/index.html",
    github: "https://github.com/souvik-123-art/Ecommerce-Project",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Rymo Admin Panel",
    desc: "Using MERN Stack.",
    img: "/mernEcomAdmin.gif",
    link: "https://mern-ecommerce-nu-nine.vercel.app/",
    github: "https://github.com/souvik-123-art/Mern-Ecommerce",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Rymo Ecommerce",
    desc: "Using MERN Stack.",
    img: "/mernEcomClient.gif",
    link: "https://68c2db494ab2ef284235e744--rymoecom.netlify.app/",
    github: "https://github.com/souvik-123-art/Mern-Ecommerce",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Chatty Chat App",
    desc: "Using MERN Stack.",
    img: "/chatty.gif",
    link: "https://chatty-chat-app-seven.vercel.app/",
    github: "https://github.com/souvik-123-art/Chatty-Chat-App-",
  },
];

const PortfolioPage = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    {item.img.endsWith(".gif") ? (
                      <img
                        src={item.img}
                        alt={item.title}
                        className="object-contain w-full h-full"
                      />
                    ) : (
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    )}
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <div className="flex gap-3 items-center justify-end">
                    <Link href={item.link} className="">
                      <button className="p-2 cursor-pointer hover:scale-90 transition duration-200 text-sm md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                        See Demo
                      </button>
                    </Link>
                    <Link href={item.github} className="">
                      <Image
                        className="cursor-pointer hover:scale-105 transition duration-200"
                        src={"/github.png"}
                        width={30}
                        height={30}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="md:text-8xl text-4xl ">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack Developer.
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
