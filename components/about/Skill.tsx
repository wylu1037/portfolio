"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
      { icon: "simple-icons:python", color: "#3776AB" },
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
    title: "Else",
    skills: [
      { icon: "simple-icons:docker", color: "#2496ED" },
      { icon: "simple-icons:kubernetes", color: "#326CE5" },
      { icon: "simple-icons:amazonaws", color: "#232F3E" },
      { icon: "simple-icons:github", color: "#181717" },
    ],
  },
];

const Skill = () => {
  return (
    <div className="space-y-8">
      <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
        Skills
      </h2>
      <div className="flex justify-center gap-4 px-4">
        {skillsData.map((category, index) => {
          const rotation = (index - 2) * 15;
          const translateY = Math.abs(index - 2) * 20;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-64 rounded-xl border border-border bg-card p-6"
              style={{
                transform: `rotate(${rotation}deg) translateY(${translateY}px)`,
                transformOrigin: "bottom center",
                zIndex: index === 2 ? 5 : Math.abs(index - 2),
              }}
            >
              <h3 className="mb-4 text-center text-xl font-bold">
                {category.title}
              </h3>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.icon}
                    className="group relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col items-center justify-center rounded-lg border border-border/50 bg-background/50 p-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                      <Icon
                        icon={skill.icon}
                        className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                    </div>
                  </motion.div>
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
