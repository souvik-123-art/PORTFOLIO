"use client"
import { JetBrains_Mono, Lexend } from "next/font/google";
import React, { ReactNode } from "react";
import Navbar from "./navbar";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";
const lexend = Lexend({ subsets: ["latin"] });
const jetBrains = JetBrains_Mono({ subsets: ["latin"] });

const TransitionProvider = ({ children }: { children: ReactNode }) => {
    const pathName = usePathname()
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0%" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className={`fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-4xl md:text-8xl cursor-default z-50 w-fit h-fit ${lexend.className}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {pathName.length === 1 ? (
            <Loader2 size={80} className="animate-spin" />
          ) : (
            <p className="lowercase first-letter:uppercase">
              {pathName.substring(1)}
            </p>
          )}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0%", transition: { delay: 0.5 } }}
        />
        {/* Navbar */}
        <div className={`h-24 ${lexend.className}`}>
          <Navbar />
        </div>

        {/* Page Content */}
        <main className={`${jetBrains.className} h-[calc(100vh-6rem)]`}>
          {children}
        </main>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
