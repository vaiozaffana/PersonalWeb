"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { once } from "events";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
  
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration:3000 })
    const isInView = useInView( ref, {once:true} );

    useEffect (() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
  }

export const AnimateNumber = () => {
  return (
    <>
      <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold text-slate-50 md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={5}/>+
                </span>
                <h6 className="text-xl font-medium capitalize text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">satisfied clients</h6>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold text-slate-50 md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={5}/>+
                </span>
                <h6 className="text-xl font-medium capitalize text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">project completed</h6>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold text-slate-50 md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={1}/>+
                </span>
                <h6 className="text-xl font-medium capitalize text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">years of experience</h6>
              </div>
            </div>
    </>
  );
};
