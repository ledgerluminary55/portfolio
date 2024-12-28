"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  getSectionAnimation,
  fadeIn,
  slideUp,
  slideIn,
  container,
} from "../../styles/animations";
export type section = {
  title: string;
  desc: string[];
};
type serviceCardProps = {
  title: string;
  desc: string[];
  list: section[];
  index: number;
  delay: number;
};
export const ServiceCard = ({
  title,
  desc,
  list,
  index,
  delay,
}: serviceCardProps) => {
  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1, type: "spring" }}
      className="w-full  py-8   mt-3  "
    >
      <div className="">
        <div>
          <h2 className=" text-2xl text-left text-white font-medium">
            {title}
          </h2>
          <div className=" text-slate-400 text-md gap-3 my-5 text-base">
            {desc.map((item, i) => {
              return (
                <p className="" key={i}>
                  {item}
                </p>
              );
            })}
          </div>
          <div className="sm:grid grid-cols-4 sm:gap-3 ">
            {list.map((item, i) => {
              return (
                <div
                  key={i}
                  className="py-7 relative  border-slate-800  p-5 sm:m-1 my-5   bg-secondary rounded-lg"
                >
                  {/* <div className="w-[20px] h-[20px] border-t-[1px] border-[#14c2a3] absolute top-0 left-0 border-l-[1px]"></div> */}
                  {/* <div className  ="w-[20px] h-[20px] border-t-[1px] border-[#14c2a3] absolute top-0 right-0 border-r-[1px]"></div> */}
                  {/* <div className="w-[20px] h-[20px] border-b-[1px] border-[#14c2a3] absolute bottom-0 left-0 border-l-[1px]"></div> */}
                  {/* <div className="w-[20px] h-[20px] border-b-[1px] border-[#14c2a3] absolute bottom-0 right-0 border-r-[1px]"></div> */}
                  <div className="">
                    <p className="text-md font-bold text-white pl-2 font-medium">
                      {item.title}
                    </p>

                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used "
                    >
                      {item.desc.map((s, j) => {
                        return (
                          <li className="mr-1.5 mt-2" key={j}>
                            <div className="flex items-center   p-2 px-3 text-md font-medium  text-slate-400 leading-7 ">
                              <p className="text-sm">{s}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
