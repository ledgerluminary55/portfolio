"use client";
import { WhyChooseCard } from "./Card";
import { whyChooseData } from "../../../utils/contents/whyChoose";
import { motion } from "framer-motion";
import {
  getSectionAnimation,
  fadeIn,
  container,
} from "../../../styles/animations";
export const WhyChoose = () => {
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
      <div className="my-16">
        <h2 className="text-white font-bold  group text-center py-3 text-left md:text-center">
          <span className="  nav-text text-4xl font-semibold  text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">
            Why choose us
          </span>
        </h2>
        <div className="md:grid md:grid-cols-3  gap-4 mt-16">
          {whyChooseData.map((item, i) => {
            return (
              <WhyChooseCard
                title={item.title}
                desc={item.desc}
                key={i}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
