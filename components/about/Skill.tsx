"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface SkillItem {
  icon: string;
  color?: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const skillsData: SkillCategory[] = [
  {
    title: "BE",
    skills: [
      { icon: "logos:go" },
      { icon: "logos:typescript-icon" },
      { icon: "simple-icons:rust" },
      { icon: "logos:python" },
      { icon: "logos:bun" },
      { icon: "file-icons:prisma" },
    ],
  },
  {
    title: "FE",
    skills: [
      { icon: "logos:react" },
      { icon: "file-icons:nextjs" },
      { icon: "devicon:tailwindcss" },
    ],
  },
  {
    title: "DB",
    skills: [
      { icon: "logos:mysql-icon" },
      { icon: "devicon:mongodb" },
      { icon: "devicon:postgresql" },
      { icon: "devicon:sqlite" },
      { icon: "logos:redis" },
    ],
  },
  {
    title: "AI",
    skills: [
      { icon: "simple-icons:huggingface", color: "#FFD21E" },
      { icon: "simple-icons:langchain" },
      { icon: "simple-icons:vercel" },
    ],
  },
  {
    title: "Misc",
    skills: [
      { icon: "logos:docker-icon" },
      { icon: "file-icons:ansible" },
      { icon: "logos:ethereum" },
      { icon: "logos:graphql" },
      { icon: "logos:grpc" },
    ],
  },
];

const Skill = () => {
  return (
    <div className="space-y-8">
      <h2 className="flex text-2xl font-bold text-foreground">Skills</h2>
      <div className="flex justify-between gap-4 divide-x divide-border">
        {skillsData.map((category, index) => {
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.2,
                ease: [0.4, 0, 0.2, 1],
              }}
              className={`relative w-64 border-border bg-background px-4 py-6`}
            >
              {/* 标题 */}
              <div className="mb-4">
                <div className="relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-border/5 to-transparent blur-sm"
                    aria-hidden="true"
                  />
                  <h3 className="relative text-center">
                    <span className="font-monoton bg-gradient-to-b from-foreground/90 to-foreground/70 bg-clip-text text-lg uppercase tracking-wider text-transparent">
                      {category.title}
                    </span>
                  </h3>
                </div>
              </div>
              {/* 分割线 */}
              <div className="mb-6">
                <div className="relative">
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-border/80 to-transparent dark:from-transparent dark:via-border/60 dark:to-transparent"></div>
                </div>
              </div>
              {/* 技能图标 */}
              <div className="flex flex-col gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.icon}
                    className="flex items-center justify-center"
                  >
                    <Icon
                      icon={skill.icon}
                      className="h-9 w-9 transition-all duration-300 hover:scale-110 dark:opacity-80"
                      style={skill.color ? { color: skill.color } : undefined}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
