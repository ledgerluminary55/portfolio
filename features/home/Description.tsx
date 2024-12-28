"use client";
import { motion } from "framer-motion";

export const Description = () => {
  const separate = {
    hidden: { opacity: 0, y: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      y: custom * 5,
      transition: { duration: 2 },
    }),
  };
  return (
    <div>
      <motion.h2
        custom={-1}
        variants={separate}
        initial="hidden"
        animate="visible"
        className="text-slate-400 text-center font-display text-md  drop-shadow-sm md:text-md  my-0"
      >
        We are here to help your business and unlock your potential.
      </motion.h2>
      <motion.h2
        custom={1}
        variants={separate}
        initial="hidden"
        animate="visible"
        className="text-slate-400 text-center font-display text-md  drop-shadow-sm md:text-md  my-0"
      >
        We&apos;re not just your development team. we&apos;re your trusted
        allies on your digital journey.
      </motion.h2>
    </div>
  );
};
