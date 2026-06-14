"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

const Hero = () => {
  const titles = [
    "TypeScript Full-Stack Engineer",
    "Frontend Systems Builder",
    "AI Product Explorer",
  ];

  const skills = ["Next.js", "TypeScript", "Go", "Product UI"];

  return (
    <section className="relative mx-auto w-full overflow-hidden py-4 text-left sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_240px]"
      >
        <div className="order-2 md:order-1">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Open to thoughtful product work
          </div>

          <h1 className="text-4xl leading-none font-extrabold tracking-tight sm:text-6xl">
            Lucian
            <span className="text-muted-foreground mt-4 block h-10 overflow-hidden text-xl leading-10 font-medium sm:h-12 sm:text-2xl sm:leading-12">
              <motion.span
                animate={{ y: ["0%", "-33.33%", "-66.66%", "0%"] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.32, 0.66, 1],
                }}
                className="flex flex-col"
              >
                {titles.map((title) => (
                  <span key={title} className="h-10 sm:h-12">
                    {title}
                  </span>
                ))}
              </motion.span>
            </span>
          </h1>

          <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
            I build fast, polished web products with a practical mix of
            engineering discipline, interface craft, and product judgment.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="group h-11 bg-blue-600 px-5 text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700 active:scale-[0.98]"
              size="lg"
            >
              <Link href="/projects">
                <Icon
                  icon="tabler:arrow-up-right"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
                View Projects
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-11 border-blue-500/20 bg-white/5 px-5 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-blue-500/10 active:scale-[0.98]"
              size="lg"
            >
              <Link href="/contact">
                <Icon icon="tabler:mail" className="h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="relative order-1 mx-auto w-full max-w-[300px] md:order-2"
        >
          <div className="absolute inset-4 translate-x-4 translate-y-4 rounded-3xl border border-blue-500/20 bg-blue-500/5" />
          <div className="relative flex aspect-[4/5] items-end justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:28px_28px]" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-blue-500/15 to-transparent" />
            <Image
              src="/myself-transparent.png"
              alt="Portrait illustration of Lucian"
              width={420}
              height={420}
              priority
              className="relative h-[108%] w-auto object-contain object-bottom drop-shadow-[0_18px_35px_rgba(37,99,235,0.22)]"
            />
          </div>

          <div className="bg-background/80 text-foreground absolute -top-3 left-3 rounded-2xl border border-white/10 px-3 py-2 text-xs font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
            Building with TS + Go
          </div>
          <div className="absolute right-3 -bottom-3 rounded-2xl border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-xs font-medium text-blue-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
            Product-minded UI
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
