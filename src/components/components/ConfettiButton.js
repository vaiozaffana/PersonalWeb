"use client";

import React from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { AppreciateLogo } from "./AppreciateLogo";

export const ConfettiButton = () => {
  const handleConfetti = () => {
    setTimeout(() => {
      confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 200);
  };

  return (
    <motion.button
      onClick={handleConfetti}
      className="bg-transparent text-slate-100 cursor-pointer"
    >
      <AppreciateLogo />
    </motion.button>
  );
};
