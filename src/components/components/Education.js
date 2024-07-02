"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { LiIcon } from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null)

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between text-slate-50 md:w-[80%]">
      <LiIcon reference={ref}/>
      <motion.div
      initial={{ y:50 }}
      whileInView={{ y:0 }}
      transition={{ duration:0.5, type:"spring"}}>
        <h5 className="capitalize font-bold text-2xl xs:text-lg sm:text-xl">
          {type}&nbsp;
        </h5>
        <span className="capitalize font-medium text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

export const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h3 className="font-bold text-8xl mb-32 w-full text-center text-slate-50 md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h3>

      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div className="absolute left-9 top-1 w-[4px] h-full bg-primaryDark shadow-3xl origin-top
        md:w-[2px] md:left-[30px] xs:left-[20px]" 
        style={{
            scale: scrollYProgress,
          }}
          ref={ref}/>
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Student"
            time="2023 - Present"
            place="SMK Telkom Sidoarjo"
            info="Hi, saya VaioZaffana, seorang pelajar di bidang pemrograman. Sejak pertama kali mempelajari HTML dan CSS di sekolah menengah, Saya mulai tertarik dengan dunia pengembangan web. Kini, saya adalah seorang siswa di jurusan Sistem Informasi Jaringan dan Aplikasi."
          />
          <Details
            type="Student"
            time="2023"
            place="Dicoding"
            info="Hi, saya VaioZaffana, seorang pelajar penuh semangat di bidang pemrograman yang tengah meniti karir di dunia teknologi. Saat di sekolah menengah, Saya sempat menjalani kursus selama 3 bulan di Dicoding "
          />
          <Details
            type="Student"
            time="2022 - 2023"
            place="Coding Studio"
            info="Hi, saya VaioZaffana, saat di sekolah menengah saya mulai penasaran dan tertarik di dunia pemrograman dan perangkat lunak. Saya pun memulai mempelajarinya di Coding Studio "
          />
        </ul>
      </div>
    </div>
  );
};
