"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface SkillItem {
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Lang",
    skills: [
      { icon: "logos:go" },
      { icon: "logos:typescript-icon" },
      { icon: "simple-icons:rust" },
      { icon: "logos:python" },
      { icon: "logos:bun" },
    ],
  },
  {
    title: "FE",
    skills: [
      { icon: "logos:react" },
      { icon: "logos:nextjs-icon" },
      { icon: "devicon:tailwindcss" },
    ],
  },
  {
    title: "DB",
    skills: [
      { icon: "logos:mysql" },
      { icon: "devicon:mongodb" },
      { icon: "devicon:postgresql" },
      { icon: "devicon:sqlite" },
      { icon: "logos:redis" },
    ],
  },
  {
    title: "AI",
    skills: [
      { icon: "simple-icons:huggingface" },
      { icon: "simple-icons:langchain" },
      { icon: "simple-icons:vercel" },
    ],
  },
  {
    title: "Misc",
    skills: [
      { icon: "logos:docker-icon" },
      { icon: "devicon:ansible" },
      { icon: "logos:ethereum" },
      { icon: "logos:graphql" },
      { icon: "logos:grpc" },
    ],
  },
];

const Skill = () => {
  return (
    <div className="space-y-8">
      <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
        Skills
      </h2>
      <div className="flex justify-between gap-4 divide-x divide-border">
        {skillsData.map((category, index) => {
          const rotation = (index - 2) * 15;
          const translateY = Math.abs(index - 2) * 20;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.1,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className={`relative w-64 border-border bg-background px-4 py-6`}
              style={{
                transform: `rotate(${rotation}deg) translateY(${translateY}px)`,
                transformOrigin: "bottom center",
                zIndex: index === 2 ? 5 : Math.abs(index - 2),
              }}
            >
              <div className="relative overflow-hidden">
                <div className="mb-4">
                  <div className="relative">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-border/5 to-transparent blur-sm"
                      aria-hidden="true"
                    />
                    <h3 className="relative text-center">
                      <span className="bg-gradient-to-b from-foreground/90 to-foreground/70 bg-clip-text font-monoton text-lg uppercase tracking-wider text-transparent">
                        {category.title}
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="relative">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-border/80 to-transparent dark:from-transparent dark:via-border/60 dark:to-transparent"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.icon}
                      className="flex items-center justify-center"
                    >
                      <Icon icon={skill.icon} className="h-9 w-9" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
