"use client";

import React from "react";
import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core"

export default function Index() {
    const typewriterRef = useRef(null)

    useEffect(() => {
        const typewriter = new Typewriter(typewriterRef.current, {
            loop: true,
            Speed: 200,
            
        })

        typewriter
        .pauseFor(1000)
        .typeString("Hello, I am Vaio")
        .pauseFor(1000)
        .deleteAll()
        .start()
    }, [])
    return <div className="items-center justify-center w-[500px] lg:w-[600px] md:w-[400px] sm:w-[300px] xs:w-[225px] h-1/4 text-slate-100 text-[53px] lg:text-[60px] md:text-[35px] sm:text-[30px] xs:text-[25px] font-semibold tracking-wide lg:text-center md:text-center sm:text-center xs:text-center" ref={typewriterRef}></div>
}