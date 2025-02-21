"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { Image } from '@nextui-org/react';

const MotionImage = motion(Image)

export const AnimatedImage = () => {
  return (
    <div className='rounded-2xl relative border-2 border-solid border-white bg-darkGray p-8 md:block lg:hidden'>
      <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-white' />
        <MotionImage 
        src="/my-pfp.png"
        alt="Vaio Prasa Zaffana"
        width={250}
        height={25}
        isZoomed={true}
        className="grayscale hover:grayscale-0 transition duration-300 hover:transition-transform ease-in-out overflow-hidden rounded-2xl flex justify-center items-center"
        />
    </div>
  )
}
