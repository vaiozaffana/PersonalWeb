import React from "react";
import { Layout } from "../components/Layout";
import { AnimatedText } from "./Animation/AnimatedText";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import Head from "next/head";
import "@/styles/module.css";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl
    border border-solid border-white bg-darkGray shadow-2xl p-12 relative
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-white
rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-slate-50 sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
            className="w-10 h-10 flex bg-darkGray rounded-full font-bold items-center justify-center text-center cursor-pointer border-2 border-slate-100"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-white text-darkGray 
          p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, shortSummary, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-between rounded-2xl
    border border-solid border-white bg-darkGray p-6 relative xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-white
rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />

        <Image src={img} alt={title} className="w-full h-auto" />

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
          {title}
        </h2>
        <p className="my-2 font-medium text-slate-50 sm:text-sm">{shortSummary}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold hover:underline md:text-base"
          >
            Visit
          </Link>
          <Link
            href={github}
            target="_blank"
            className="w-10 h-10 flex bg-darkGray rounded-full font-bold items-center justify-center text-center cursor-pointer border-2 border-slate-100"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>VaioZaffana | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            className="about-title lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            text="Imagination Trumps Knowledge"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 text-slate-50 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Volunify"
                img="/Volunify - Landing Page.png"
                summary="Volunify adalah platform yang menghubungkan relawan dengan berbagai kesempatan volunteer. Anda bisa bergabung dengan acara yang sesuai minat, menciptakan program volunteer sendiri, dan selalu up-to-date dengan daftar acara terbaru. Jadikan langkah pertama Anda untuk memberikan dampak positif lebih mudah dan menyenangkan dengan Volunify!"
                link="https://volunify.vercel.app/"
                github="https://github.com/dhiodhaha/volunify.git"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="BikinCerdas"
                img="/Landing-Page-BikinCerdas-ukl.png"
                link="https://github.com/vaiozaffana/Project_ukl.git"
                shortSummary="Website mengenai kursus pengetahuan umum"
                github="https://github.com/vaiozaffana/Project_ukl.git"
                type="Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Floruna"
                img="/dasboard_floruna.png"
                link="https://github.com/vaiozaffana/local-list-app.git"
                shortSummary="Aplikasi mobile lokal mengenai flora dan fauna"
                github="https://github.com/vaiozaffana/local-list-app.git"
                type="Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
