"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <Link legacyBehavior
      href="/"
    >
      <motion.a
      href="/"
      className=" w-20 h-20 flex bg-darkGray rounded-full font-bold items-center justify-center text-center text-slate-100 text-3xl cursor-pointer border-2 border-slate-100"
       whileHover={{ 
        color:"#FFFFFF",
        backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)" ],
        transition:{duration:1, repeat: Infinity}
      }}>
        VZ
      </motion.a>
    </Link>
  );
};
