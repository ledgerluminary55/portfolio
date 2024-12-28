"use client";
import { motion } from "framer-motion";
type whyChooseCardProps = {
  title: string;
  desc: string[];
  index: number;
};
export const WhyChooseCard = ({ title, desc, index }: whyChooseCardProps) => {
  return (
    <motion.div
      className={`${
        index == 1 ? "md:border-l md:border-r md:border-slate-800" : ""
      } w-full md:px-6 md:mt-0 mt-12`}
    >
      <div>
        <h2 className=" text-white text-2xl">{title}</h2>

        <div className=" text-slate-400 text-base gap-3 mt-5">
          <p>
            {desc.map((item, i) => {
              return (
                <span className="block" key={i}>
                  {item}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
