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
    title: "Backend",
    skills: [
      { icon: "logos:go", color: "#00ADD8" },
      { icon: "devicon:rust", color: "#DEA584" },
      { icon: "logos:python", color: "#3776AB" },
      { icon: "devicon:nodejs", color: "#339933" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { icon: "simple-icons:react", color: "#61DAFB" },
      { icon: "simple-icons:typescript", color: "#3178C6" },
      { icon: "simple-icons:nextdotjs", color: "#000000" },
      { icon: "simple-icons:tailwindcss", color: "#06B6D4" },
    ],
  },
  {
    title: "Database",
    skills: [
      { icon: "logos:mysql", color: "#4479A1" },
      { icon: "simple-icons:mongodb", color: "#47A248" },
      { icon: "logos:redis", color: "#DC382D" },
      { icon: "simple-icons:postgresql", color: "#4169E1" },
    ],
  },
  {
    title: "AI",
    skills: [
      { icon: "simple-icons:tensorflow", color: "#FF6F00" },
      { icon: "simple-icons:pytorch", color: "#EE4C2C" },
      { icon: "simple-icons:openai", color: "#412991" },
      { icon: "simple-icons:scikitlearn", color: "#F7931E" },
    ],
  },
  {
    title: "Misc",
    skills: [
      { icon: "simple-icons:docker", color: "#2496ED" },
      { icon: "simple-icons:kubernetes", color: "#326CE5" },
      { icon: "simple-icons:amazonaws", color: "#232F3E" },
      { icon: "simple-icons:github", color: "#181717" },
    ],
  },
];

const Skill = () => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(2);

  const getPatternStyle = (index: number) => {
    const patterns = [
      "radial-gradient(circle at 20% 20%, rgba(0, 173, 216, 0.05) 0%, transparent 50%)",
      "linear-gradient(45deg, rgba(97, 218, 251, 0.05) 25%, transparent 25%)",
      "repeating-linear-gradient(45deg, rgba(71, 162, 72, 0.05) 0%, transparent 10%)",
      "radial-gradient(circle at 80% 80%, rgba(255, 111, 0, 0.05) 0%, transparent 50%)",
      "linear-gradient(-45deg, rgba(36, 150, 237, 0.05) 25%, transparent 25%)",
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
                opacity: isOtherCardFocused ? 0.5 : 1,
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
