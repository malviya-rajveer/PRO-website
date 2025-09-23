"use client";
import { cn } from "@/lib/utils";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      Name: "Home",
      href: "",
    },
    {
      Name: "Tabs",
      href: "",
    },
    {
      Name: "Docs",
      href: "",
    },
    {
      Name: "Careers",
      href: "",
    },
  ];
  return (
    <nav className="fixed z-50 mx-auto flex h-15 min-w-screen border-b border-neutral-700/60 backdrop-blur-2xl min-[320px]:w-85 sm:w-screen">
      <div className="mx-auto flex h-full min-w-full items-center justify-between md:min-w-2xl lg:min-w-3xl xl:min-w-5xl">
        <div
          className={cn(
            "relative right-2 flex items-center justify-center gap-4 sm:right-5.5 xl:gap-1",
          )}
        >
          <div className="flex items-center stroke-neutral-200">
            <svg height={50} width={50} viewBox="0 0 15 20" className="">
              <circle
                r={4.5}
                cy={10}
                cx={10}
                fill="url(#logo_id)"
                strokeWidth={0.7}
                stroke="current color"
              ></circle>
              <defs>
                <linearGradient
                  id="logo_id"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="rotate(45)"
                >
                  <stop offset="50%" stopColor="#ffd166" stopOpacity="1"></stop>
                  {/* <stop offset="40%" stop-color="#9E00FF" stopOpacity="1"></stop> */}
                  <stop
                    offset="100%"
                    stopColor="#9E00FF"
                    stopOpacity="1"
                  ></stop>
                </linearGradient>
              </defs>
            </svg>
            <div className="text-neutral-50">Shia Devs</div>
          </div>
          <div className="hidden font-extralight text-neutral-100/70 lg:flex lg:gap-4 xl:pl-5">
            {links.map((link, idx) => {
              return (
                <Link
                  key={idx}
                  className="hover:text-neutral-100"
                  href={link.href}
                >
                  {link.Name}
                </Link>
              );
            })}
          </div>
        </div>
        <div
          className={cn(
            "relative right-2 flex items-center justify-center gap-1.5 sm:right-0 sm:gap-3",
          )}
        >
          <div className="">
            <button
              className={cn(
                "flex h-9 w-30 items-center justify-between gap-1 rounded-full sm:w-49",
                "border border-neutral-600 bg-neutral-900/40 p-3 ps-2 text-neutral-400 inset-shadow-sm inset-shadow-neutral-800/95",
              )}
            >
              <div className="flex items-center justify-center gap-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide size-3.5"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                search
              </div>
              <div className="hidden items-center gap-1 sm:flex">
                <kbd className="bg-700 flex h-6 items-center rounded-md border border-neutral-900 px-1.5 pt-1 text-[20px]">
                  ⌘
                </kbd>
                <kbd className="bg-700 flex h-6 items-center rounded-md border border-neutral-900 px-1.5 pt-0.5 text-[14px]">
                  K
                </kbd>
              </div>
            </button>
          </div>
          <div className="hidden sm:flex">
            <svg
              className="size-6"
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
          </div>
          <button onClick={() => setOpen(!open)} className="lg:hidden">
            <IconMenu2></IconMenu2>
          </button>

          {open && (
            <div className="absolute top-13 right-2 h-50 w-45 rounded-2xl bg-neutral-900 text-neutral-200 md:w-50 lg:hidden">
              {links.map((link, idx) => {
                return (
                  <div key={idx} className="mt-5 flex flex-col items-center">
                    <Link className="" key={idx} href={link}>
                      {link.Name}
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

<svg
  width="200"
  height="200"
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="red" />
      <stop offset="100%" stopColor="blue" />
    </linearGradient>
  </defs>

  <circle cx="100" cy="100" r="80" fill="url(#grad1)" />
</svg>;

// sm:ml-37 md:ml-37 lg:ml-37 xl:ml-37
