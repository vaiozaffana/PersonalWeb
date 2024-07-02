"use client";
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/navigation";

export const TransitionEffectTemplate = () => {
  const router = useRouter();

    return (
      <AnimatePresence mode="wait">
        <motion.div className="fixed top-0 bottom-0 
        right-full w-screen h-screen z-30 bg-primaryDark"
        key={router.asPath}
        initial={{ x:"100", width:"100%" }}
        animate={{ x:"0%", width:"0%" }}
        exit={{ x:["0%", "100%"], width:["0%", "100%"]}}
        transition={{ duration:0.8, ease:"easeInOut"}} />
        <motion.div className="fixed top-0 bottom-0 
        right-full w-screen h-screen z-20 bg-white"
        key={router.asPath}
        initial={{ x:"100", width:"100%" }}
        animate={{ x:"0%", width:"0%" }}
        transition={{ delay:0.2, duration:0.8, ease:"easeInOut"}} />
        <motion.div className="fixed top-0 bottom-0 
        right-full w-screen h-screen z-10 bg-black"
        key={router.asPath}
        initial={{ x:"100", width:"100%" }}
        animate={{ x:"0%", width:"0%" }}
        transition={{ delay:0.4, duration:0.8, ease:"easeInOut"}} />
        </AnimatePresence>
    );
  };

