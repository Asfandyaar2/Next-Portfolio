"use client";

import { skillCategories } from "@/data";

const items = Array.from(new Set(skillCategories.flatMap((s) => s.stack)));

export const TechMarquee = () => {
  return (
    <div className="relative py-6 md:py-8 bg-background border-y border-border/60 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[items, items].map((group, groupIndex) => (
          <div key={groupIndex} className="flex items-center shrink-0" aria-hidden={groupIndex === 1}>
            {group.map((item, i) => (
              <span
                key={`${groupIndex}-${item}-${i}`}
                className="mx-3 px-4 py-2 rounded-full border border-border/70 text-sm font-medium text-muted-foreground whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
