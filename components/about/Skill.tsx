"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

interface SkillItem {
  icon: string;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Lang",
    skills: [
      { icon: "logos:go", color: "#00ADD8" },
      { icon: "logos:typescript-icon", color: "#3178C6" },
      { icon: "devicon:rust", color: "#DEA584" },
      { icon: "logos:python", color: "#3776AB" },
      { icon: "logos:bun", color: "#fbf0df" },
    ],
  },
  {
    title: "FE",
    skills: [
      { icon: "simple-icons:react", color: "#61DAFB" },
      { icon: "simple-icons:nextdotjs", color: "#000000" },
      { icon: "simple-icons:tailwindcss", color: "#06B6D4" },
    ],
  },
  {
    title: "DB",
    skills: [
      { icon: "logos:mysql", color: "#4479A1" },
      { icon: "simple-icons:mongodb", color: "#47A248" },
      { icon: "devicon:postgresql", color: "#4169E1" },
      { icon: "devicon:sqlite", color: "#003B57" },
      { icon: "logos:redis", color: "#DC382D" },
    ],
  },
  {
    title: "AI",
    skills: [
      { icon: "simple-icons:huggingface", color: "#FFD21E" },
      { icon: "simple-icons:langchain", color: "#3178C6" },
      { icon: "simple-icons:vercel", color: "#000000" },
    ],
  },
  {
    title: "Misc",
    skills: [
      { icon: "logos:docker-icon", color: "#2496ED" },
      { icon: "devicon:ansible", color: "#EE0000" },
      { icon: "logos:ethereum", color: "#3C3C3D" },
      { icon: "logos:graphql", color: "#E10098" },
      { icon: "logos:grpc", color: "#244B9B" },
    ],
  },
];

const Skill = () => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(2);

  const getPatternStyle = (index: number) => {
    const patterns = [
      "linear-gradient(135deg, rgba(0, 82, 204, 0.15) 0%, rgba(0, 173, 216, 0.05) 60%, transparent 100%)",
      "linear-gradient(-45deg, rgba(97, 218, 251, 0.15) 0%, rgba(97, 218, 251, 0.05) 60%, transparent 100%)",
      "linear-gradient(45deg, rgba(71, 162, 72, 0.15) 0%, transparent 70%)",
      "radial-gradient(circle at 80% 80%, rgba(255, 111, 0, 0.05) 0%, transparent 50%)",
      "linear-gradient(225deg, rgba(36, 150, 237, 0.15) 0%, rgba(79, 209, 197, 0.08) 50%, transparent 90%)",
    ];
    return patterns[index];
  };

  return (
    <div className="space-y-8">
      <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
        Skills
      </h2>
      <div className="flex justify-between gap-4">
        {skillsData.map((category, index) => {
          const rotation = (index - 2) * 15;
          const translateY = Math.abs(index - 2) * 20;
          const isCardFocused = focusedIndex === index;
          const isOtherCardFocused =
            focusedIndex !== null && focusedIndex !== index;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: isCardFocused ? 1.05 : 1,
              }}
              transition={{
                duration: 0.1,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
                scale: {
                  duration: 0.1,
                  ease: [0.34, 1.56, 0.64, 1],
                },
              }}
              className={`w-64 rounded-xl border bg-card/95 p-6 transition-all duration-300 ${
                isCardFocused
                  ? "border-border/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_-4px_rgba(255,255,255,0.1)]"
                  : "border-border/20 hover:shadow-lg"
              }`}
              style={{
                transform: `rotate(${rotation}deg) translateY(${translateY}px)`,
                transformOrigin: "bottom center",
                zIndex: isCardFocused
                  ? 10
                  : index === 2
                    ? 5
                    : Math.abs(index - 2),
                backgroundImage: getPatternStyle(index),
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onMouseEnter={() => setFocusedIndex(index)}
            >
              <div className="relative overflow-hidden">
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
                      <Icon
                        icon={skill.icon}
                        className="h-9 w-9"
                        style={{ color: skill.color }}
                      />
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
