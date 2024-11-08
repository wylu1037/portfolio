"use client";

import React from "react";
import Link from "next/link";
import { IconChevronsRight, IconGripVertical } from "@tabler/icons-react";


const Header = () => {
  return (
    <header className="relative z-50">
      <nav className="fixed left-1/2 top-4 flex -translate-x-1/2 items-center justify-between gap-4 rounded-full border-2 border-border px-6 py-1 shadow-lg backdrop-blur-xl">
        {/* Home */}
        <div className="flex items-center gap-2">
          <IconGripVertical className="h-5 w-5 cursor-grab text-gray-300 hover:text-gray-500 dark:hover:text-foreground" />
          <Link
            href="/"
            className="rounded-md px-2 py-1 font-semibold text-foreground text-stone-500 transition-colors duration-200 hover:bg-stone-200 dark:hover:bg-foreground dark:hover:text-background"
          >
            Home
          </Link>
        </div>
        {/* About */}
        <Link
          href="/about"
          className="rounded-md px-2 py-1 font-semibold text-foreground text-stone-500 transition-colors duration-200 hover:bg-stone-200 dark:hover:bg-foreground dark:hover:text-background"
        >
          About
        </Link>
        {/* Projects */}
        <Link
          href="/projects"
          className="flex rounded-md px-2 py-1 text-lg font-bold text-foreground text-stone-500 hover:bg-stone-200 dark:hover:bg-foreground dark:hover:text-background"
        >
          <p className="motion-preset-oscillate motion-duration-[2s]">P</p>
          <p className="motion-preset-oscillate motion-duration-[2s] motion-delay-75">
            r
          </p>
          <p className="motion-preset-oscillate motion-duration-[2s] motion-delay-100">
            o
          </p>
          <p className="motion-preset-oscillate motion-duration-[2s]">j</p>
          <p className="motion-preset-oscillate motion-duration-[2s] motion-delay-75">
            e
          </p>
          <p className="motion-preset-oscillate motion-duration-[2s] motion-delay-150">
            c
          </p>
          <p className="motion-preset-oscillate motion-duration-[2s]">t</p>
          <p className="motion-preset-oscillate motion-duration-[2s] motion-delay-75">
            s
          </p>
        </Link>
        {/* Blog */}
        <Link
          href="/blog"
          className="rounded-md px-2 py-1 font-semibold text-foreground text-stone-500 transition-colors duration-200 hover:bg-stone-200 dark:hover:bg-foreground dark:hover:text-background"
        >
          Blog
        </Link>
        {/* Contact */}
        <Link
          href="/contact"
          className="flex items-center gap-1 rounded-md bg-yellow-200 px-4 py-1 font-semibold text-stone-700 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-foreground dark:hover:text-background"
        >
          Contact <IconChevronsRight className="h-4 w-4" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
