"use client"
import { motion } from "framer-motion";
import {fadeIn} from '../../styles/animations'

export const Bottom = () => {
  return (
    <motion.footer
      variants={fadeIn(2)}
      initial="hidden"
      animate="show"
      className="max-w-screen-xl  mx-auto py-5 "
    >
      <div className="flex justify-center">
        <div className="">
          <p className=" text-md text-white">Crypto-pioneer <span className="text-teal-300">2024</span></p></div>
        <div></div>
      </div>
    </motion.footer>
  )
}