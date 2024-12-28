"use client";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
type projectCardProps = {
  title: string;
  desc: string[];
  img: string;
  tags: string[];
  repo: string;
  live: string;
};
export const ProjectCard = ({
  title,
  desc,
  img,
  tags,
  repo,
  live,
}: projectCardProps) => {
  return (
    <motion.div
      // ref={ref}
      // style={{
      //     scale: scaleProgress,
      //     opacity: scrollYProgress,
      // }}
      className=" w-full   py-4 px-6 rounded-lg mt-2 bg-secondary">
      <div className=" ">
        <Image
          src={`${img}`}
          height={300}
          width={300}
          alt="project"
          className=" w-full rounded-lg"></Image>
        <div className="mt-4 relative">
          <a
            className="float-right inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
            href={live}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)">
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"></path>
              </svg>
            </span>
          </a>
          <a
            className="mr-2 float-right inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
            target="_blank"
            href={repo}>
            <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px">
              <svg
                fillRule="evenodd"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </span>
          </a>
        </div>
        <h3 className="text-white mt-4  text-base font-semibold">{title}</h3>
        <div className=" text-slate-400 text-sm gap-3 mt-5 h-[175px] overflow-auto">
          {desc.map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
        </div>
        <div className=" min-h-[50px]">
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {tags.map((item, i) => {
              return (
                <li className="mr-1.5 mt-2" key={i}>
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    {item}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
