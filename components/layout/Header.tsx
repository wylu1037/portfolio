"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <header className="relative z-50">
      <nav
        className={cn(
          "fixed top-6 left-1/2 z-50 flex -translate-x-1/2 items-center justify-between gap-2 rounded-2xl border border-white/[0.1] bg-white/10 px-4 py-2 shadow-[0_0_10px_rgba(0,0,0,0.1)] backdrop-blur-3xl",
          "md:gap-4 md:px-6 dark:border-white/[0.1] dark:bg-slate-100/10",
        )}
      >
        {/* Mobile Menu Button */}
        <div className="lg:hidden">{}</div>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 md:gap-3">
          {/* Home */}
          <div className="flex items-center gap-2">
            <Icon
              icon="tabler:grip-vertical"
              className="hidden h-4 w-4 cursor-grab text-gray-400 hover:text-gray-600 md:block dark:text-gray-500 dark:hover:text-gray-300"
            />
            <NavLink href="/">Home</NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-3 md:flex">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/blog">Blog</NavLink>
          </div>

          {/* Contact Button */}
          <Link
            href="/contact"
            className={cn(
              "relative ml-2 rounded-lg bg-linear-to-tr from-blue-800 to-blue-500 px-4 py-1.5 text-sm font-medium text-white",
              "shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition-transform duration-300 hover:-translate-y-0.5",
            )}
          >
            Contact
          </Link>
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
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === href : pathname?.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "relative rounded-lg px-3 py-1.5 text-sm font-medium",
        "transition-colors duration-300",
        isActive
          ? "text-slate-900 dark:text-white"
          : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white",
        className,
      )}
    >
      {isActive && (
        <motion.div
          layoutId="active-nav-pill"
          className="absolute inset-0 -z-10 rounded-lg bg-slate-200/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md dark:bg-white/10"
          initial={false}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 35,
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </Link>
  );
};

export default Header;