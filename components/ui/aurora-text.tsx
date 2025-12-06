"use client";

import React from "react";

import { cn } from "@/lib/utils";

export function AuroraText({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span className={cn("relative overflow-hidden inline-flex", className)}>
      {children}
      <div className="aurora absolute inset-0 pointer-events-none mix-blend-lighten dark:mix-blend-darken">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="aurora__item absolute w-[60vw] h-[60vw]"
            style={{
              backgroundColor: `hsl(var(--color-${i + 1}))`,
              filter: "blur(1rem)",
              animation: `aurora-border 6s ease-in-out infinite, aurora-${
                i + 1
              } 12s ease-in-out infinite alternate`,
              mixBlendMode: "overlay",
              ...getInitialPosition(i),
            }}
          />
        ))}
      </div>
    </span>
  );
}

function getInitialPosition(index: number): React.CSSProperties {
  const positions = [
    { top: "-50%" },
    { right: 0, top: 0 },
    { left: 0, bottom: 0 },
    { right: 0, bottom: "-50%" },
  ];
  return positions[index] || {};
}
