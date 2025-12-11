"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Icon } from "@iconify/react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const customTheme = {
  light: ["#ebedf0", "#c6a65a", "#b8973f", "#a68529", "#8b6914"],
  dark: ["#161b22", "#5a4a2a", "#8b7335", "#b89c4a", "#d4b85c"],
};

const GitHubActivity = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="space-y-8">
        <h2 className="text-foreground flex items-center gap-2 text-2xl font-bold">
          <Icon icon="mdi:github" className="h-7 w-7" />
          GitHub Activity
        </h2>
        <div className="flex h-32 items-center justify-center">
          <div className="border-muted-foreground h-6 w-6 animate-spin rounded-full border-2 border-t-transparent" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-foreground flex items-center gap-2 text-2xl font-bold">
        Activity
      </h2>
      <div className="border-border bg-card flex w-full items-center justify-center rounded-lg border px-2 py-4">
        <GitHubCalendar
          username="wylu1037"
          colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
          theme={customTheme}
          blockSize={10}
          blockMargin={4}
          fontSize={12}
          labels={{
            months: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            totalCount: "{{count}} contributions in the last year",
            legend: {
              less: "Less",
              more: "More",
            },
          }}
        />
      </div>
    </div>
  );
};

export default GitHubActivity;
