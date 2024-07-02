
import React from "react";
import { AnimatedText } from "./Animation/AnimatedText";
import { Layout } from "../components/Layout";
import { Image } from "@nextui-org/react";
import "@/styles/module.css";
import { AnimateNumber } from "./Animation/AnimateNumber";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";

export default function About () {
  return (
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText className="about-title xl:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" text="Passion Fuels Purpose!" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h4 className="mb-4 text-lg font-bold uppercase text-white">
                Biography
              </h4>
              <p className="font-medium text-white">
                Hai, saya VaioZaffana, seorang pelajar dengan hasrat untuk
                menciptakan pengalaman digital yang indah, fungsional, dan
                berpusat pada pengguna. Dengan pengalaman 1 tahun di bidangnya.
                Saya selalu mencari cara baru dan inovatif untuk mewujudkan visi
                klien saya.
              </p>

              <p className="font-medium text-white my-4">
                Saya percaya bahwa desain lebih dari sekedar membuat segala
                sesuatunya terlihat cantik – ini tentang memecahkan masalah dan
                menciptakan pengalaman yang intuitif dan menyenangkan bagi
                pengguna.
              </p>

              <p className="font-medium text-white">
                Baik saat saya mengerjakan situs web, aplikasi seluler, atau
                produk digital lainnya, saya berkomitmen terhadap keunggulan
                desain dan pemikiran yang berpusat pada pengguna pada setiap
                proyek yang saya kerjakan. Saya menantikan kesempatan untuk
                membawa keterampilan dan semangat saya ke proyek Anda
                berikutnya.
              </p>
            </div>

            <div className="col-span-3 relative h-[97%] flex justify-center items-center rounded-2xl border-2 border-solid border-white bg-darkGray p-8 xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-white" />
              <Image
                src="/myProfile-dark-1.png"
                alt="My Profile"
                className="w-full h-[425px] rounded-2xl grayscale hover:grayscale-0"
                isZoomed
              />
            </div>

            <AnimateNumber />

          </div>

          <Skills />
          <Experience />
          <Education />

        </Layout>

      </main>
  );
};

