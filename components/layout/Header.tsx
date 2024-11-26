"use client";

import React from "react";
import Link from "next/link";
import { IconGripVertical } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="relative z-50">
      <nav
        className={cn(
          "fixed left-1/2 top-6 z-50 flex -translate-x-1/2 items-center justify-between gap-2 rounded-2xl border border-white/[0.1] bg-white/10 px-4 py-2 shadow-[0_0_10px_rgba(0,0,0,0.1)] backdrop-blur-3xl",
          "dark:border-white/[0.1] dark:bg-slate-100/10 md:gap-4 md:px-6",
        )}
      >
        {/* Mobile Menu Button */}
        <div className="lg:hidden">{}</div>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 md:gap-3">
          {/* Home */}
          <div className="flex items-center gap-2">
            <IconGripVertical className="hidden h-4 w-4 cursor-grab text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 md:block" />
            <NavLink href="/">Home</NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-3 md:flex">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/blog">Blog</NavLink>
          </div>

          {/* Contact Button */}
          <NavLink
            href="/contact"
            className={cn(
              "ml-2 bg-gradient-to-tr from-blue-800 to-blue-500 px-4 py-1.5 text-sm font-medium text-white",
              "transition-all duration-300 hover:-translate-y-0.5 dark:text-white",
            )}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "relative rounded-lg px-3 py-1.5 font-inter text-sm font-medium",
        "text-foreground/90 transition-all duration-300",
        "dark:text-foreground/80 dark:hover:text-foreground",
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default Header;