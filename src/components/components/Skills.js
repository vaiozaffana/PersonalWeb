"use client";

import React from 'react'
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
 return (
  <motion.div className='flex items-center justify-center rounded-full font-semibold bg-white text-darkGray md:text-sm py-3 px-6 md:py-1 md:px-3 shadow-slate-50 cursor-pointer
  absolute'
    whileHover={{ scale:1.1 }}
    initial={{ x:0, y:0  }}
    whileInView={{ x:x, y:y }}
    transition={{ duration: 1.5 }}
    viewport={{ once:true }}>
      {name}
    </motion.div>
 )
}

export const Skills = () => {
  return (
    <>
    <h4 className='flex items-center justify-center font-bold text-8xl mt-64 w-full text-center text-slate-50 md:text-6xl xs:text-4xl md:mb-16'>Skills</h4>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularDark
     lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularDarkLg md:bg-circularDarkMd sm:bg-circularDarkSm'>
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-white text-darkGray p-8 shadow-darkGray cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2'
    whileHover={{ scale:1.05 }}>
      Web
    </motion.div>

    <Skill name="Laravel" x="-30vw" y="4vw"/>
    <Skill name="React Native" x="-15vw" y="-10vw"/>
    <Skill name="Go" x="-2vw" y="13vw"/>
    <Skill name="JavaScript" x="29vw" y="5vw"/>
    <Skill name="Next JS" x="14.5vw" y="-4vw"/>
    <Skill name="Git" x="10vw" y="-17vw" />
    </div>
    </>
  )
}
