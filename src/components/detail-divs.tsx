"use client";
import { cn } from "@/lib/utils";
import { TextShimmer } from "./text-shimmer";

export const Detailsection = () => {
  return (
    <div className="flex w-full flex-col">
      <div
        className={cn(
          "border-b-border-neutral/70 relative flex h-80 w-full flex-col items-center justify-center border border-x-0 border-t-0",
          "text-center text-2xl",
        )}
      >
        <TextShimmer
          duration={2}
          className="pb-2 text-[16px] dark:[--base-color:var(--color-purple-300)] dark:[--base-gradient-color:var(--color-white)]"
        >
          Exquisite designes
        </TextShimmer>
        <p className="max-w-150 text-center text-xl">
          From clean aesthetics to seamless user experiences, we craft websites
          that not only look stunning but also perform flawlessly
        </p>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_bottom,transparent_30%,black_100%)] dark:bg-black"></div>
      </div>
    </div>
  );
};
