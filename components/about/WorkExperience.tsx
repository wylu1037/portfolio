"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  period: {
    start: string;
    end: string;
  };
  website: string;
}

const experiences: WorkExperience[] = [
  {
    company: "Zkjg",
    logo: "/images/zkjg.png",
    position: "Blockchain Engineer",
    period: {
      start: "Nov 2021",
      end: "Present",
    },
    website: "https://www.zkjg.com",
  },
  {
    company: "Egova",
    logo: "/images/egova.jpeg",
    position: "Software Engineer",
    period: {
      start: "Jul 2020",
      end: "Nov 2021",
    },
    website: "https://www.egova.com.cn",
  },
];

const WorkExperience = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-foreground">Work Experience</h2>
      <div className="space-y-3">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group flex items-start justify-between gap-4"
          >
            {/* Logo and Company Info */}
            <div className="flex gap-6">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg md:h-12 md:w-12">
                <Image
                  src={experience.logo}
                  alt={experience.company}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <Link
                  href={experience.website}
                  target="_blank"
                  className="group/link flex items-center gap-1"
                >
                  <h3 className="text-sm font-medium text-foreground">
                    {experience.company}
                  </h3>
                  <ChevronRight className="h-4 w-4 opacity-0 transition-all group-hover/link:translate-x-1 group-hover/link:opacity-100" />
                </Link>
                <p className="text-xs text-foreground/80">
                  {experience.position}
                </p>
              </div>
            </div>

            {/* Period */}
            <div className="text-sm text-muted-foreground">
              <span>
                {experience.period.start} - {experience.period.end}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
