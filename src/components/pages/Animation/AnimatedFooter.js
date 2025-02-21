"use client";

import React from 'react'
import { ConfettiButton } from '@/components/components/ConfettiButton';

export const AnimatedFooter = () => {
    return (
      <footer className="w-full flex justify-center items-center">
        <div className='w-full bg-transparent p-6 flex justify-around items-center md:flex-col text-slate-50 font-semibold md:text-sm md:font-medium border-t-1 border-slate-50'>
        <span
        >
        &copy; {new Date().getFullYear()} VaioZaffana. All Rights Reserved.
        </span>
        <div className="flex justify-center items-center md:py-4">
        <ConfettiButton />
        </div>
        <div
        >
        Made With &#9825; By VaioZaffana
        </div>
        </div>
      </footer>
    );
  };