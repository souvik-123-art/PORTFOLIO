"use client";
import { Facebook, Github, Instagram, Linkedin, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const social = [
  {
    url: "https://github.com/souvik-123-art",
    element: (
      <Image
        className="hover:-translate-y-1 transition-all duration-300"
        src={"/github.png"}
        alt=""
        height={30}
        width={30}
      />
    ),
  },
  {
    url: "https://www.linkedin.com/in/souvik-sarkar-a33698362",
    element: (
      <Image
        className="hover:-translate-y-1 transition-all duration-300"
        src={"/linkedin.png"}
        alt=""
        height={30}
        width={30}
      />
    ),
  },
  {
    url: "https://www.facebook.com/profile.php?id=100028627750484",
    element: (
      <Image
        className="hover:-translate-y-1 transition-all duration-300"
        src={"/facebook.png"}
        alt=""
        height={30}
        width={30}
      />
    ),
  },
  {
    url: "https://www.instagram.com/souvik9674",
    element: (
      <Image
        className="hover:-translate-y-1 transition-all duration-300"
        src={"/instagram.png"}
        alt=""
        height={30}
        width={30}
      />
    ),
  },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handlePanel = () => {
    setOpen(!open);
  };
  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 z-30">
      {/* LINKS  */}
      <div className="hidden md:w-1/3 md:flex gap-3 lg:gap-6 items-center">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* logo */}
      <div className="md:w-1/3 w-1/2 flex md:justify-center">
        <Link
          href={"/"}
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center"
        >
          <span className="text-white mr-1">Souvik</span>
          <span className="bg-white w-12 h-8 rounded text-black flex items-center justify-center">
            .Dev
          </span>
        </Link>
      </div>
      {/* SOCIAL  */}
      <div className=" gap-4 md:w-1/3 hidden md:flex justify-end">
        {social &&
          social.map((social, id) => (
            <Link key={id} target="blank" href={social.url}>
              {social.element}
            </Link>
          ))}
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden w-1/2 flex justify-end z-50">
        {/* MENU BUTTON  */}
        <button
          className="w-10 h-8 z-50 relative cursor-pointer flex items-center justify-end"
          onClick={handlePanel}
        >
          {open ? <X size={25} className="text-white" /> : <Menu size={25} />}
        </button>
        {/* MENU LIST  */}
        {open && (
          <motion.ul
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl"
          >
            {links.map((link, id) => (
              <motion.li
                key={id}
                variants={listItemVariants}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
