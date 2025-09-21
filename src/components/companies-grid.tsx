"use client";
import { cn } from "@/lib/utils";
import { TextShimmer } from "./text-shimmer";
import { motion } from "motion/react";
import Image from "next/image";

const logos = [
  {
    src: "./logo-1.png",
  },
  {
    src: "./logo-2.png",
  },
  {
    src: "./logo-3.png",
    className: "h-5",
  },
  {
    src: "./logo-4.png",
  },
  {
    src: "./logo-5.png",
    className: "h-5",
  },
  {
    src: "./logo-6.png",
  },
  {
    src: "./logo-7.png",
    className: "h-5",
  },
  {
    src: "./logo-8.png",
  },
];
export const CompaniesGrid = () => {
  return (
    <div className="border-t-border-neutral/60 mt-0 h-screen border border-x-0 border-b-0">
      <div className="flex flex-col">
        <TextShimmer
          className="md:text-md flex h-23 items-center justify-center font-mono text-sm uppercase xl:text-xl"
          duration={2.2}
        >
          Trusted by Fast Growing Startups
        </TextShimmer>
        <div
          className={cn(
            "border-t-border-neutral/60 divide-border-neutral/60 border-l-border-neutral/60",
            "grid h-100 max-w-full grid-cols-2",
            "divide-x divide-y border border-r-0 border-b-0",
            "sm:h-60 md:grid-cols-4",
          )}
        >
          {logos.map((logo) => {
            return (
              <div
                className="group relative flex items-center justify-center overflow-hidden"
                key={logo.src}
              >
                <motion.div
                  initial={{
                    y: -80,
                    opacity: 0,
                    filter: "blur(10px)",
                  }}
                  whileHover={{
                    y: -10,
                    opacity: 0.8,
                    filter: "blur(1px)",
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute h-full w-full"
                >
                  <div className="">
                    <img src={"/_.jpeg"} alt="" />
                  </div>
                </motion.div>

                <img
                  className={cn(
                    "absolute flex h-8 w-auto items-center justify-center drop-shadow-2xl drop-shadow-neutral-50/40 invert hover:drop-shadow-2xl/0 dark:invert",
                    logo.className,
                  )}
                  src={logo.src}
                  alt={""}
                />
              </div>
            );
          })}
          <div className="hidden"></div>
        </div>
        <div className="h-60 w-full bg-red-100"></div>
      </div>
    </div>
  );
};
