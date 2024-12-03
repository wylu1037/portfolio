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
      { icon: "simple-icons:go", color: "#00ADD8" },
      { icon: "simple-icons:rust", color: "#DEA584" },
      { icon: "simple-icons:python", color: "#3776AB" },
      { icon: "simple-icons:nodejs", color: "#339933" },
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
      { icon: "simple-icons:mysql", color: "#4479A1" },
      { icon: "simple-icons:mongodb", color: "#47A248" },
      { icon: "simple-icons:redis", color: "#DC382D" },
      { icon: "simple-icons:postgresql", color: "#4169E1" },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { icon: "simple-icons:docker", color: "#2496ED" },
      { icon: "simple-icons:kubernetes", color: "#326CE5" },
      { icon: "simple-icons:amazonaws", color: "#232F3E" },
      { icon: "simple-icons:github", color: "#181717" },
    ],
  },
];

const SkillCard = ({ skill }: { skill: SkillItem }) => {
  return (
    <div className="group relative">
      <div
        className="flex h-16 w-16 items-center justify-center rounded-xl bg-background/50 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
        style={{
          boxShadow: `0 0 20px ${skill.color}20`,
        }}
      >
        <Icon
          icon={skill.icon}
          className="h-8 w-8"
          style={{ color: skill.color }}
        />
      </div>
    </div>
  );
};

const CategoryCard = ({
  category,
  index,
  isActive,
  onClick,
}: {
  category: SkillCategory;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      layout
      initial={false}
      animate={{
        scale: isActive ? 1 : 0.9,
        y: isActive ? 0 : index * 40,
        x: isActive ? 0 : index * 20,
        zIndex: isActive ? 50 : 40 - index,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      onClick={onClick}
      className={cn(
        "absolute inset-x-0 cursor-pointer rounded-2xl bg-card p-6 shadow-lg transition-shadow hover:shadow-xl",
        isActive ? "shadow-xl" : "shadow-md",
      )}
      style={{
        width: "calc(100% - 40px)",
        height: "fit-content",
        margin: "0 20px",
      }}
    >
      <div className="space-y-6">
        <h3 className="text-xl font-bold">{category.title}</h3>
        <div className="grid grid-cols-4 gap-6">
          {category.skills.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skill = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24 text-3xl font-bold"
      >
        Technical Skills
      </motion.h2>

      <div className="relative mx-auto max-w-4xl" style={{ height: "400px" }}>
        <div className="relative">
          <div className="invisible" style={{ height: 0, padding: "0 20px" }}>
            <div className="rounded-2xl bg-card p-6">
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Placeholder</h3>
                <div className="grid grid-cols-4 gap-6">
                  {Array(4)
                    .fill(0)
                    .map((_, idx) => (
                      <div key={idx} className="h-16 w-16" />
                    ))}
                </div>
              </div>
            </div>
          </div>

          {skillsData.map((category, index) => (
            <CategoryCard
              key={category.title}
              category={category}
              index={index}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
