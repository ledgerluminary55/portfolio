"use client";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../styles/animations";
import { navData } from "../../utils/contents/nav";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const Nav = ({ nav }: { nav: string }) => {
  const pathname = usePathname().replace("/", "");
  useEffect(() => {
    console.log("pathname", pathname);
  });
  return (
    <motion.div
      variants={fadeIn(0.5)}
      initial="hidden"
      animate="show"
      id="navbar"
    >
      <nav>
        <ul className="flex items-center justify-center gap-4">
          {navData.map((item, i) => {
            return (
              <motion.li
                className={` group ${
                  pathname == item.title.toLocaleLowerCase() ? "active" : ""
                }`}
                variants={slideIn({ delay: 0.8 + i / 10, direction: "down" })}
                initial="hidden"
                animate="show"
                key={i}
              >
                <Link
                  href={item.link}
                  className="text-sm duration-500 text-white hover:text-teal-300 hover:title-glow "
                >
                  {item.title}
                </Link>
              </motion.li>
              // <NavItem href={item.link} index={i} delay={0.8} key={i} nav={item.title.toLowerCase()}>{item.title}</NavItem>
            );
          })}
        </ul>
      </nav>
    </motion.div>
  );
};
