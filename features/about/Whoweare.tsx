"use client";
import { whyChooseData } from "../../utils/contents/whyChoose";
import { motion } from "framer-motion";
import {
  getSectionAnimation,
  fadeIn,
  container,
} from "../../styles/animations";
export const Whoweare = () => {
  return (
    <motion.section
      // variants={container}
      // initial="hidden"
      // animate="show"
      // initial={{ scale: 0.5, opacity: 0 }}
      //         animate={{ scale: 1, opacity: 1 }}
      //         transition={{ delay: 1, duration: 1, type: "spring" }}

      // whileInView={{ x: 0, opacity: 1 }}
      // initial={{ x: -20, opacity: 0 }}
      // transition={{ duration: .5, delay:2 , type: "spring"}}
      // animate={{ x: 0, opacity: 1 }}

      variants={fadeIn(0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false }}
    >
      <div className=" my-40">
        <h2 className="text-white font-bold  group text-center py-3 text-left md:text-center">
          <span className="  nav-text text-4xl font-semibold  text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">
            Who are we
          </span>
        </h2>
        <div className="text-slate-400 mt-12 text-base  gap-3">
          <p className=" space-y-3">
            As Full-stack, Blockchain developers, we excel in designing,
            implementing, and deploying{" "}
            <span className="text-teal-300">blockchain solutions</span> across
            various platforms.
          </p>
          <p className="space-y-3">
            {" "}
            Our expertise spans{" "}
            <span className="text-teal-300">smart contract development</span>,
            ensuring{" "}
            <span className="text-teal-300">code security and auditing</span>{" "}
            for potential vulnerabilities.
          </p>
          <p className="space-y-3 ">
            {" "}
            Additionally, we possess advanced skills in Full-stack web, mobile,
            and game development, utilizing a diverse range of technologies and
            frameworks to deliver high-performance, scalable, and secure
            applications.
          </p>
        </div>
      </div>
    </motion.section>
  );
};
