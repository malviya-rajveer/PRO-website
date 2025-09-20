"use client";
import { cn } from "@/lib/utils";
import { StarLight } from "./starligh";
import { easeInOut, motion } from "motion/react";
export const Hero = () => {
  return (
    <div
      className={cn(
        "relative m-auto flex h-150 flex-col items-center overflow-hidden",
      )}
    >
      <div
        className="absolute inset-0 z-21 hidden blur-2xl dark:block"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black , transparent)",
          background:
            "repeating-linear-gradient(63deg, var(--color-purple-500), var(--color-yellow-900) 12px, color-mix(in oklab, var(--color-violet-600) 30%, transparent) 20px, transparent 180px)",
        }}
      />
      <div className="opacity-90 lg:scale-x-140 lg:scale-y-80">
        <StarLight></StarLight>
      </div>
      <div className="absolute inset-0 h-60 bg-neutral-950 [mask-image:linear-gradient(to_top,black_10%,transparent_40%)]"></div>
      <motion.div
        initial={{
          opacity: 0,
          scaleX: 1.5,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          scaleX: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.3,
          ease: easeInOut,
        }}
        className="absolute z-30"
      >
        <h1 className="mt-60 bg-gradient-to-t from-neutral-100 to-neutral-400 bg-clip-text text-center text-6xl tracking-tighter text-transparent">
          We create Elagent Websites
        </h1>
        <p className="mt-2 ml-29 w-md text-center text-[20px] tracking-wide text-neutral-400">
          We provide life to your websites giving them better designes and
          interactives
        </p>
      </motion.div>
      <div className="absolute bottom-0 rotate-180 opacity-90 lg:scale-x-140 lg:scale-y-80">
        <StarLight
          animateX={{ x1: "", x2: "" }}
          initialX={{ x1: "", x2: "" }}
        ></StarLight>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-60 bg-neutral-950 [mask-image:linear-gradient(to_bottom,black_1%,transparent_50%)]"></div>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-neutral-950 [mask-image:linear-gradient(to_top,black_25%,transparent_70%)]"></div>
    </div>
  );
};
