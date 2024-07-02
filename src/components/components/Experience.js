"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { LiIcon } from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between text-slate-50 md:w-[80%]">
      <LiIcon reference={ref}/>
      <motion.div
      initial={{ y:50 }}
      whileInView={{ y:0 }}
      transition={{ duration:0.5, type:"spring"}}>
        <h5 className="capitalize font-bold text-2xl xs:text-lg sm:text-xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h5>
        <span className="capitalize font-medium text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

export const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h3 className="font-bold text-8xl mb-32 w-full text-center text-slate-50 md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h3>

      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div className="absolute left-9 top-1 w-[4px] h-full bg-primaryDark origin-top
        md:w-[2px] md:left-[30px] xs:left-[20px]" 
        style={{
            scale: scrollYProgress,
          }}
          ref={ref}/>
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Intern"
            company="Devscale"
            companyLink="https://www.devscale.id"
            time="Fall 2023"
            address=""
            work="Saya belajar Fullstack Javascript di Devscale Indonesia, menurut saya ini adalah salah satu tempat terbaik untuk belajar pemrograman"
          />
        </ul>
      </div>
    </div>
  );
};
