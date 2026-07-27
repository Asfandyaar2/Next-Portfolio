"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

export const ThemeToggle = ({ className }: { className?: string }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={cn("w-9 h-9", className)} aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "relative w-9 h-9 flex items-center justify-center rounded-full border border-border text-foreground/70 hover:text-foreground hover:border-primary/50 transition-colors duration-300",
        className
      )}
    >
      <Sun className="w-4 h-4 scale-100 dark:scale-0 transition-transform duration-300" />
      <Moon className="w-4 h-4 absolute scale-0 dark:scale-100 transition-transform duration-300" />
    </button>
  );
};
