"use client";

import { createContext, useContext, useState, useCallback } from "react";

type SnowContextType = {
  isSnowing: boolean;
  toggleSnow: () => void;
};

const SnowContext = createContext<SnowContextType | null>(null);

export function SnowProvider({ children }: { children: React.ReactNode }) {
  const [isSnowing, setIsSnowing] = useState(false);

  const toggleSnow = useCallback(() => {
    setIsSnowing((prev) => !prev);
  }, []);

  return (
    <SnowContext.Provider value={{ isSnowing, toggleSnow }}>
      {children}
    </SnowContext.Provider>
  );
}

export function useSnow() {
  const context = useContext(SnowContext);
  if (!context) {
    throw new Error("useSnow must be used within a SnowProvider");
  }
  return context;
}
