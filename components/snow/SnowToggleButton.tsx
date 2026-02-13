"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { useSnow } from "./SnowContext";

export default function SnowToggleButton() {
  const { isSnowing, toggleSnow } = useSnow();
  const constraintsRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Track drag distance to distinguish click vs drag
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const dragStartX = useRef(0);
  const dragStartY = useRef(0);

  // Subtle rotate effect based on horizontal drag position
  const rotate = useTransform(x, [-200, 200], [-15, 15]);

  return (
    <div
      ref={constraintsRef}
      className="pointer-events-none fixed inset-0 z-50"
    >
      <motion.button
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        dragMomentum={false}
        style={{ x, y, rotate }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        onDragStart={() => {
          isDragging.current = true;
          dragStartX.current = x.get();
          dragStartY.current = y.get();
        }}
        onDragEnd={() => {
          const dx = Math.abs(x.get() - dragStartX.current);
          const dy = Math.abs(y.get() - dragStartY.current);
          // Only count as drag if moved more than 3px
          if (dx < 3 && dy < 3) {
            isDragging.current = false;
          }
          // Reset dragging flag after click event fires
          requestAnimationFrame(() => {
            isDragging.current = false;
          });
        }}
        onClick={() => {
          if (!isDragging.current) {
            toggleSnow();
          }
        }}
        className={cn(
          "pointer-events-auto fixed top-24 left-24 cursor-grab rounded-full p-3 shadow-lg backdrop-blur-md active:cursor-grabbing",
          "border transition-colors duration-300",
          isSnowing
            ? "border-blue-400/30 bg-blue-500/20 text-blue-400 shadow-blue-500/20"
            : "text-foreground/70 hover:text-foreground border-white/10 bg-white/10 dark:bg-slate-100/10",
        )}
        aria-label={isSnowing ? "Stop snow" : "Let it snow"}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon
          icon={isSnowing ? "mingcute:snow-fill" : "mingcute:snow-line"}
          className="h-5 w-5"
        />
      </motion.button>
    </div>
  );
}
