"use client";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Wrapper from "../../components/ui/Wrapper";
import { getSectionAnimation, fadeIn } from "../../styles/animations";
export const Description = () => {
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
    >
      <div className="my-12">
        <h2 className="text-white text-4xl md:text-5xl mt-12 font-semibold md:leading-[60px]">
          Implement your vision with Crypto-pioneer
        </h2>
      </div>
      {/* <p className="text-teal-300 text-base">
        <TypeAnimation
          sequence={[
            "We are constantly researching.",
            1000,
            "We are constantly developing.",
            1000,
          ]}
          speed={50}
          style={{ fontSize: "1em" }}
          repeat={Infinity}
        />
      </p> */}
      {/* <p className=" mb-8 font-bold text-teal-300">/ About</p> */}
      {/* <div className="text-slate-400 mt-12 text-base">
        <p className=" space-y-3">
          As Full-stack, Blockchain developers, we excel in designing,
          implementing, and deploying{" "}
          <span className="text-teal-300">blockchain solutions</span> across
          various platforms.
        </p>
      </div> */}
    </motion.section>
  ) : (
    <></>
  );
};
