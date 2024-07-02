"use client";

import React from "react";
import { motion } from "framer-motion";

const quote = {
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1,
        transition:{
            staggerChildren: 0.08,
        }
    }
}
const singelWord = {
    initial:{
        opacity:0,
        y:50,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1
        }
    }
}

export const AnimatedText = ({ text, className="" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h5 className={`inline-block lg:w-[600px] w-[500px] md:w-[400px] sm:w-[400px] xs:w-[300px] text-slate-100 capitalize text-xl sm:text-[15px] md:text-[20px] lg:text-[25px] font-semibold md:font-medium sm:font-medium ${className}`}
      variants={quote}
      initial="initial"
      animate="animate"
      >
        {text.split(" ").map((word, index) => 
          <motion.span key={word+'-'+index} className="inline-block"
          variants={singelWord}
          >
            {word}&nbsp;
          </motion.span>
        )}
      </motion.h5>
    </div>
  );
};
