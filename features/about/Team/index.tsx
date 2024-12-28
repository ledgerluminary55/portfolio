"use client";
import { TeamCard } from "./Card";
import { teamData } from "../../../utils/contents/team";
import { motion } from "framer-motion";
import {
  getSectionAnimation,
  fadeIn,
  slideUp,
} from "../../../styles/animations";
import { AnimatePresence } from "framer-motion";

export const Team = () => {
  return (
    <motion.section
      variants={fadeIn(0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false }}
      className="pt-14 "
    >
      <div className="my-16 ">
        <h2 className="text-white font-bold group text-left py-3 text-center">
          <span className=" nav-text text-4xl font-semibold text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">
            Meet the team
          </span>
        </h2>
        <div className="md:grid lg:grid-cols-6 sm:grid-cols-3  gap-4 group/list my-16">
          {teamData.map((item, i) => {
            return (
              <TeamCard
                title={item.title}
                role={item.role}
                techRole={item.techRole}
                desc={item.desc}
                img={item.img}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
