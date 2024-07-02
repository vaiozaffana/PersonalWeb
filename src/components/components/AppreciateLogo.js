"use client";

import React from "react";
import { motion } from "framer-motion";
import { ThumbsUp } from "lucide-react";

const AppreciateLogoIcon = motion(ThumbsUp)

const appreciateAnimate = {
  initial:{
      opacity:0,
      y:-20
  },
  animate:{
      opacity:1,
      y:0,
      transition:{
          delay:0.1,
      }
  }
}

export const AppreciateLogo = () => {
  return (
      <AppreciateLogoIcon
      href="/"
      className=" w-16 h-16 p-3 flex bg-darkGray rounded-full font-bold items-center justify-center text-center text-slate-100 text-3xl cursor-pointer border-2 border-slate-100"
       whileHover={{ 
        color:"#FFFFFF",
        backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)" ],
        transition:{duration:1, repeat: Infinity}
      }} 
      variants={appreciateAnimate}
      initial="initial"
      animate="animate"/>
  );
};
