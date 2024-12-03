"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface EducationEntry {
  institution: string;
  degree: string;
  major: string;
  period: string;
  location: string;
  logo: string;
  achievements?: string[];
  bgClass?: string;
  decoration: React.ReactNode;
}

const educationData: EducationEntry[] = [
  {
    institution: "Huazhong University of Science and Technology",
    degree: "Master's Degree",
    major: "Hydrological Information Systems",
    period: "2018 - 2020",
    location: "Wuhan, Hubei Province",
    logo: "/images/hust.jpeg",
    achievements: [
      "Research focus on hydrological data analysis and modeling",
      "Published 2 papers in water resources journals",
      "Outstanding Graduate Student Scholarship",
    ],
    bgClass: "bg-gradient-to-br from-blue-50/20 to-blue-100/20",
    decoration: (
      <>
        <div className="absolute h-full w-full rotate-45 bg-gradient-to-r from-primary to-transparent" />
        <div className="absolute h-full w-full -rotate-45 bg-gradient-to-l from-primary to-transparent" />
      </>
    ),
  },
  {
    institution: "Anhui University of Science and Technology",
    degree: "Bachelor's Degree",
    major: "Hydrology and Water Resources Engineering",
    period: "2014 - 2018",
    location: "Huainan, Anhui Province",
    logo: "/images/aust.png",
    achievements: [
      "Core courses: Hydrology, Hydraulics, Water Resources Engineering",
      "Participated in multiple field studies and water conservation projects",
      "Excellence Scholarship for three consecutive years",
    ],
    bgClass: "bg-gradient-to-br from-green-50/20 to-green-100/20",
    decoration: (
      <>
        <div className="absolute h-full w-full rotate-45 bg-gradient-to-r from-primary to-transparent" />
        <div className="absolute h-full w-full -rotate-45 bg-gradient-to-l from-primary to-transparent" />
      </>
    ),
  },
];

const Education = () => {
  return (
    <div className="space-y-8">
      <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
        Education
      </h2>

      <div className="space-y-6">
        {educationData.map((entry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`group relative rounded-xl border border-border/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-lg ${entry.bgClass}`}
          >
            <div className="relative">
              {/* 装饰性图案 */}
              <div className="absolute right-2 top-2 -z-10 h-32 w-32 opacity-5">
                {entry.decoration}
              </div>

              <div className="flex items-start gap-4">
                <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-muted">
                  <Image
                    src={entry.logo}
                    alt={entry.institution}
                    fill
                    sizes="48px"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                    {entry.institution}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {entry.degree} in {entry.major}
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="flex items-center gap-1 text-xs text-muted-foreground/80">
                      <Icon icon="uil:calender" className="h-3 w-3" />
                      {entry.period}
                    </p>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground/60">
                      <Icon icon="bx:map" className="h-3 w-3" />
                      {entry.location}
                    </span>
                  </div>

                  {entry.achievements && (
                    <ul className="mt-3 space-y-1">
                      {entry.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="h-1 w-1 rounded-full bg-primary" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
