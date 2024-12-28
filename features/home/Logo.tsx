"use client";
import { motion, AnimatePresence } from "framer-motion";
import { slideUp } from "../../styles/animations";
import Link from "next/link";
export const Logo = () => {
  const text = "Crypto-pioneers";
  const gradual = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    //   <motion.header
    //   variants={slideUp({delay:1})}
    //   initial="hidden"
    //   animate="show"
    //   id="navbar"
    // >
    //   <Link href="/">
    //   <h2 className={`logo z-10 font-bold text-5xl text-transparent duration-500 bg-white cursor-default text-edge-outline animate-title font-display sm:text-3xl md:text-5xl whitespace-nowrap bg-clip-text hover:text-lime-700`}>
    //     Crypto-pioneers
    //   </h2>
    //   </Link>
    //   </motion.header>
    <div className="flex justify-center">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={gradual}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="logo text-white text-center font-display text-3xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-5xl md:leading-[5rem]"
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
};
