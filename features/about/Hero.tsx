"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../styles/animations";
import Image from "next/image";
export const Hero = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return domLoaded ? (
    <motion.section
      // variants={fadeIn(0.5)}
      // initial="hidden"
      // animate="show"

      // initial={{ x: -20, opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // transition={{ duration: 0.5, delay:1.2 }}

      variants={fadeIn(0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false }}
      className="flex justify-center mt-32">
      <div className="spaceman">
        <Image
          src={"/h.webp"}
          width={100}
          height={200}
          alt="logo"
          className=""
        />
      </div>

      <div className="spaceman1">
        <Image
          src={"/h.webp"}
          width={250}
          height={200}
          alt="logo"
          className=""
        />
      </div>
      <div className="spaceman2">
        <Image
          src={"/h.webp"}
          width={150}
          height={200}
          alt="logo"
          className=""
        />
      </div>
    </motion.section>
  ) : (
    <></>
  );
};
