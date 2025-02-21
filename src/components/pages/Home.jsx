import React from "react";
import Index from "../components/Index";
import { AnimatedText } from "./Animation/AnimatedText";
import { Button } from "./Button";
import { AnimatedImage } from "./Animation/AnimatedImage";
import { HireMe } from "../components/HireMe";
import { LightDecor } from "../components/LightDecor";

export const Home = () => {
  return (
    <main className="flex items-center text-light w-full min-h-screen lg:justify-center">
      <div className="flex items-center justify-between w-[90%] lg:flex-col">
        <div className="w-1/4 m-auto lg:mb-10 lg:w-[45%]">
          <AnimatedImage />
        </div>
        <div className="flex flex-col items-center justify-center ">
          <Index />
          <AnimatedText
            text="Hi, saya VaioZaffana, saya seorang pelajar. Saya merasakan ketertarikan yang mendalam pada dunia pemrograman. Saya percaya bahwa setiap kode yang saya tulis dapat menjadi bagian dari solusi untuk masa depan yang lebih baik."
            className="!text-left lg:!text-center"
          />
          <Button />
        </div>
        <HireMe />
        <div className="md:hidden">
          <LightDecor />
        </div>
      </div>
    </main>
  );
};
