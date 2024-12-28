"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cardAnimation } from "../../../styles/animations";
import { AnimatePresence } from "framer-motion";
import Overlay from "../../../components/ui/Overlay";
import Modal from "../../../components/ui/TeamModal";

type teamCardProps = {
  title: string;
  role: string;
  techRole: string;
  desc: string[];
  img: string;
};

export const TeamCard = ({
  title,
  role,
  techRole,
  desc,
  img,
}: teamCardProps) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <motion.div
        className="bg- rounded-lg group  mt-3  relative bg-secondary border-slate-800  py-4 px-6 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
        whileHover={{ scale: 1.1 }}
        onClick={openModal}
      >
        <div className="">
          {/* <div className='absolute inset-y-0 z-0 hidden  transition motion-reduce:transition-none lg:-inset-x-0 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div> */}
          <Image
            src={img}
            width={129}
            height={129}
            alt={img}
            className=" mx-auto rounded-full border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 h-[129px]"
          />
          <div className="sm:order-2 sm:col-span-6 mt-5 grid justify-center">
            <h3 className="z-10  items-baseline leading-tight text-slate-200   group/link text-base text-center text-xs flex-end ">
              <div>
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span className=" ">{title}</span>
              </div>
              <p className="text-teal-300 text-xs mt-2">{role}</p>
            </h3>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {open && (
          <Overlay close={closeModal}>
            <Modal
              title={title}
              techRole={techRole}
              desc={desc}
              img={img}
              close={closeModal}
            />
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};
