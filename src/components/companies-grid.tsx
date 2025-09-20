"use client";
import { cn } from "@/lib/utils";
import { TextShimmer } from "./text-shimmer";
import { motion } from "motion/react";

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
    <div className="border-t-border-neutral/60 mt-0 h-100 border border-x-0 border-b-0">
      <div className="flex flex-col">
        <TextShimmer
          className="flex h-23 items-center justify-center font-mono text-xl uppercase"
          duration={2.2}
        >
          Trusted by Fast Growing Startups
        </TextShimmer>
        <div
          className={cn(
            "border-t-border-neutral/60 divide-border-neutral/60 border-l-border-neutral/60",
            "grid h-60 max-w-full grid-cols-4 divide-x divide-y border border-r-0 border-b-0",
          )}
        >
          {logos.map((logo, className) => {
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
                  <div>
                    <img src={"/_.jpeg"}></img>
                  </div>
                </motion.div>
                <img
                  className={cn(
                    "absolute flex h-8 w-auto items-center justify-center dark:invert",
                    logo.className,
                  )}
                  src={logo.src}
                  alt={logo.src}
                />
              </div>
            );
          })}
          <div className="hidden"></div>
        </div>
      </div>
    </div>
  );
};
{
  /* <div className="group flex min-h-32 items-center justify-center p-4 py-10 grayscale" style="opacity: 1; transform: none;"><img alt="Second" className="object-contain transition-all duration-500 dark:invert dark:filter h-6 w-auto" src="/logos/2.png"></div>  */
}
