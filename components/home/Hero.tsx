"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

const Hero = () => {
  const titles = ["Frontend Engineer", "UI Nerd", "Problem Solver"];

  return (
    <div className="mx-auto max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl">
          Wenyang <span className="text-blue-500">Lu</span>
          <div className="text-muted-foreground mt-2 h-20 overflow-hidden text-3xl font-medium sm:text-4xl">
            <motion.div
              animate={{ y: ["0%", "-33.33%", "-66.66%"] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.33, 0.66, 1],
              }}
              className="flex flex-col gap-4 py-2"
            >
              {titles.map((title) => (
                <div
                  key={title}
                  className="flex h-16 items-center justify-center"
                >
                  {title}
                </div>
              ))}
            </motion.div>
          </div>
        </h1>

        <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-lg">
          Crafting digital experiences with precision and playfulness.
          Specialized in high-performance web applications and pixel-perfect UI.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            className="group relative flex w-[180px] items-center gap-2 overflow-hidden bg-blue-600 px-6 py-3 text-white transition-all hover:bg-blue-700 sm:w-auto"
            size="lg"
          >
            <Icon
              icon="tabler:download"
              className="h-4 w-4 transition-transform group-hover:-translate-y-1"
            />
            Download CV
          </Button>

          <Button
            variant="outline"
            className="w-[200px] border-blue-500/20 px-6 py-3 backdrop-blur-sm transition-all hover:bg-blue-500/10 sm:w-auto"
            size="lg"
          >
            Explore Projects
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
