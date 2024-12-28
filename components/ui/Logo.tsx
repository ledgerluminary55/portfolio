
"use client"
import Link from 'next/link'
import Image from 'next/image'
import {fadeIn} from '../../styles/animations'
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      transition={{ duration: .5, delay:.5 }}
      animate={{ y: 0, opacity: 1 }}
      className=''
    >
    <Link href="/">
      <h2 className={`logo text-white text-md font-bold `}>Crypto-pioneer</h2>
    </Link>
    </motion.div>
  )
}