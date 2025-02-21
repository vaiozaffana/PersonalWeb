"use client";

import { useRouter } from "next/navigation";
import { Logo } from "../components/Logo";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute
       left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
         router.asPath === href ? "w-full" : "w-0"
       }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-darkGray absolute
       left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
         router.asPath === href ? "w-full" : "w-0"
       }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

export const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full flex justify-center items-center">
      <button
        className="flex-col justify-center items-center hidden lg:flex lg:pl-10"
        onClick={handleClick}
      >
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5 "
          }`}
        ></span>
      </button>

      <nav className="w-full bg-transparent flex py-7 justify-around lg:justify-center lg:items-center items-center">
        <nav className="flex gap-5 justify-center items-center text-white lg:hidden text-2xl font-medium">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
        </nav>

          <div className="lg:pr-10">
        <Logo />
        </div>

        <nav className="flex gap-4 lg:hidden">
          <motion.a
            href="https://www.instagram.com/vaiop.z/?igsh=MTdsY2Q3cXJxMXo5Yw=="
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-slate-100 cursor-pointer flex justify-center items-center"
          >
            <Image 
            src="/instagram_white.svg"
            alt="instagram"
            width={35}
            height={35}/>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/vaio-prasa-zaffana-b926bb2b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-slate-100 cursor-pointer flex justify-center items-center"
          >
            <Image 
            src="/linkedin_white.svg"
            alt="linkedin"
            width={35}
            height={35}/>
          </motion.a>
          <motion.a
            href="https://github.com/vaiozaffana"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-slate-100 cursor-pointer flex justify-center items-center"
          >
            <Image 
            src="/github_white.svg"
            alt="github"
            width={35}
            height={35}/>
          </motion.a>
          <motion.a
            href="https://x.com/VZaffana?t=wtnH-dixgIasgEQLMInuqg&s=09"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-slate-100 cursor-pointer flex justify-center items-center"
          >
            <Image 
            src="/x_white.svg"
            alt="x"
            width={35}
            height={35}/>
          </motion.a>
        </nav>
      </nav>

      {isOpen ? (
        <motion.nav
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-light/75 rounded-lg backdrop-blur-sm py-32"
        >
          <nav className="flex flex-col justify-center items-center font-medium text-2xl text-darkGray my-2">
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
            <CustomMobileLink
              href="/about"
              title="About"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              toggle={handleClick}
            />
          </nav>

          <nav className="flex gap-4 mt-2">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-darkGray cursor-pointer flex justify-center items-center"
            >
              <Image 
            src="/instagram_dark.svg"
            alt="x"
            width={35}
            height={35}/>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-darkGray cursor-pointer flex justify-center items-center"
            >
              <Image 
            src="/github_dark.svg"
            alt="x"
            width={35}
            height={35}/>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-darkGray cursor-pointer flex justify-center items-center"
            >
              <Image 
            src="/x_dark.svg"
            alt="x"
            width={35}
            height={35}/>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-darkGray cursor-pointer flex justify-center items-center"
            >
              <Image 
            src="/linkedin_dark.svg"
            alt="x"
            width={35}
            height={35}/>
            </motion.a>
          </nav>
        </motion.nav>
      ) : null}
    </nav>
  );
};
