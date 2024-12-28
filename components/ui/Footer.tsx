"use client";

import { fadeIn } from "../../styles/animations";
import { motion } from "framer-motion";
export const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn(1.5)}
      initial="hidden"
      animate="show"
      className="mt-8 border-t border-slate-800 "
    >
      <footer className="max-w-screen-xl mx-auto py-5">
        <div className="flex justify-between">
          <div className="">
            <p className=" text-base text-white">
              Crypto-pioneer <span className="text-teal-300">2024</span>
            </p>
          </div>
          <div></div>
        </div>
      </footer>
    </motion.footer>
  );
};
