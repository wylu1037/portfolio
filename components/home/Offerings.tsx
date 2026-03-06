"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const cards = [
  {
    title: "Tech Stack",
    description: "Core technologies I use to build modern web apps.",
    className: "md:col-span-2 md:row-span-1",
    content: (
      <div className="mt-4 flex flex-wrap gap-3">
        {[
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "TailwindCSS",
          "Framer Motion",
        ].map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400"
          >
            {tech}
          </span>
        ))}
      </div>
    ),
    icon: "lucide:layers",
  },
  {
    title: "Current Status",
    description: "Available for new opportunities and collaborations.",
    className: "md:col-span-1 md:row-span-1",
    content: (
      <div className="mt-4 flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
        </span>
        <span className="text-sm font-medium text-green-500">Available</span>
      </div>
    ),
    icon: "lucide:briefcase",
  },
  {
    title: "Development Style",
    description: "Clean code, performance-first, and user-centric design.",
    className: "md:col-span-1 md:row-span-1",
    icon: "lucide:code-2",
  },
  {
    title: "GitHub Activity",
    description:
      "Consistency is key. Active contributor to open source projects.",
    className: "md:col-span-2 md:row-span-1",
    content: (
      <div className="mt-4 flex h-12 items-end gap-1 overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="w-full rounded-sm"
            style={{
              height: `${Math.random() * 100}%`,
              backgroundColor: `rgba(59, 130, 246, ${Math.random() * 0.8 + 0.2})`,
            }}
          />
        ))}
      </div>
    ),
    icon: "lucide:github",
  },
];

const Offerings = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className={cn(
            "group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6 transition-all hover:bg-white/10",
            card.className,
          )}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition-colors group-hover:bg-blue-500 group-hover:text-white">
              <Icon icon={card.icon} className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">{card.title}</h3>
          </div>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
            {card.description}
          </p>
          {card.content}

          {/* Decorative background circle */}
          <div className="absolute -top-4 -right-4 -z-10 h-24 w-24 rounded-full bg-blue-500/5 blur-2xl group-hover:bg-blue-500/10" />
        </motion.div>
      ))}
    </div>
  );
};

export default Offerings;
