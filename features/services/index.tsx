"use client";
import { serviceData } from "../../utils/contents/service";
import { motion } from "framer-motion";
import { fadeIn } from "../../styles/animations";
import { ServiceCard } from "./card";
export const ServiceList = () => {
  return (
    <motion.section variants={fadeIn(1.5)} initial="hidden" animate="show">
      <div className="gap-4 ">
        {serviceData.map((item, i) => {
          return (
            <ServiceCard
              title={item.title}
              desc={item.desc}
              list={item.list}
              delay={1}
              index={1}
              key={i}
            />
          );
        })}
      </div>
    </motion.section>
  );
};
