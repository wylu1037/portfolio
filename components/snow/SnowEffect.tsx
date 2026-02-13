"use client";

import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import { useSnow } from "./SnowContext";

export default function SnowEffect() {
  const { isSnowing } = useSnow();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isSnowing) {
      setMounted(true);
      // Set visible in the next frame to ensure CSS transition can be triggered
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVisible(true);
        });
      });
    } else {
      setVisible(false);
    }
  }, [isSnowing]);

  // Unmount component after fade-out animation ends
  const handleTransitionEnd = () => {
    if (!visible) {
      setMounted(false);
    }
  };

  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-700"
      style={{ opacity: visible ? 1 : 0 }}
      onTransitionEnd={handleTransitionEnd}
    >
      <Snowfall snowflakeCount={120} color="#dee4fd" />
    </div>
  );
}
