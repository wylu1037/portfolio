"use client";

import React, { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import { cn } from "@/lib/utils";

interface ClockProps {
  className?: string;
}

const Clock = ({ className }: ClockProps) => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    };

    const intervalId = setInterval(updateClock, 1000);
    updateClock();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-center">
      <h2 className={cn("text-3xl font-bold", className)}>
        <NumberFlow
          value={time.hours}
          format={{ notation: "compact", minimumIntegerDigits: 2 }}
        />
        :
        <NumberFlow
          value={time.minutes}
          format={{ notation: "compact", minimumIntegerDigits: 2 }}
        />
        :
        <NumberFlow
          value={time.seconds}
          format={{ notation: "compact", minimumIntegerDigits: 2 }}
        />
      </h2>
    </div>
  );
};

export default Clock;
