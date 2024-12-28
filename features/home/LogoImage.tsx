"use client";
import Image from "next/image";
import { motion, useTime, useTransform } from "framer-motion";
import { slideUp } from "../../styles/animations";

export const LogoImage = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 180, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 100,
      }}>
      <Image src={"/logo/NavLogo.webp"} width={100} height={100} alt="logo" />
    </motion.div>
  );
};
