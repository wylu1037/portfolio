"use client";

import React from "react";
import Link from "next/link";
import { IconGripVertical } from "@tabler/icons-react";

const Header = () => {
  return (
    <header className="relative z-50">
      <nav className="fixed left-1/2 top-4 flex -translate-x-1/2 items-center justify-between gap-4 rounded-full border-2 border-border px-6 py-1 shadow-lg backdrop-blur-md">
        {/* Home */}
        <div className="flex items-center gap-2">
          <IconGripVertical className="h-5 w-5 cursor-grab text-gray-300 hover:text-gray-500 dark:hover:text-foreground" />
          <Link
            href="/"
            className="font-silkscreen rounded-md px-2 py-1 font-semibold text-foreground transition-colors duration-200 hover:bg-stone-100 dark:hover:bg-foreground dark:hover:text-background"
          >
            Home
          </Link>
        </div>
        {/* About */}
        <Link
          href="/about"
          className="font-silkscreen rounded-md px-2 py-1 font-semibold text-foreground transition-colors duration-200 hover:bg-stone-100 dark:hover:bg-foreground dark:hover:text-background"
        >
          About
        </Link>
        {/* Projects */}
        <Link
          href="/projects"
          className="font-silkscreen flex rounded-md px-2 py-1 text-lg font-semibold text-foreground hover:bg-stone-100 dark:hover:bg-foreground dark:hover:text-background"
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
          className="font-silkscreen rounded-md px-2 py-1 font-semibold text-foreground transition-colors duration-200 hover:bg-stone-100 dark:hover:bg-foreground dark:hover:text-background"
        >
          Blog
        </Link>
        {/* Contact */}
        <Link
          href="/contact"
          className="font-silkscreen flex items-center gap-2 rounded-md px-4 py-1 font-semibold text-foreground transition-colors duration-100 hover:bg-gray-100 dark:hover:bg-foreground dark:hover:text-background"
        >
          Contact{" "}
          {/*<IconSend className="h-4 w-4 text-blue-500 -motion-translate-x-loop-25 motion-translate-y-loop-25 motion-duration-[3s]" />*/}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
