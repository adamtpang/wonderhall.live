"use client";

import { useEffect, useState } from "react";

// Wonderhall III, Sun 23 August 2026, 7:30pm Malaysia time (UTC+8).
const DEFAULT_TARGET = "2026-08-23T19:30:00+08:00";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function compute(targetMs: number): TimeLeft {
  const diff = Math.max(0, targetMs - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  };
}

// Glowing dusk blocks, each value lit by one of the four aurora lights.
// Mirrors the design system's signature component (wh-block--*).
const BLOCKS = [
  { label: "Days", mod: "flame" },
  { label: "Hours", mod: "rose" },
  { label: "Minutes", mod: "aurora" },
  { label: "Seconds", mod: "spark" },
] as const;

export default function Countdown({ target = DEFAULT_TARGET }: { target?: string } = {}) {
  const targetMs = new Date(target).getTime();
  const [t, setT] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setT(compute(targetMs));
    const id = setInterval(() => setT(compute(targetMs)), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  const values = [t?.days, t?.hours, t?.minutes, t?.seconds];

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-4">
      {BLOCKS.map((block, i) => {
        const value = values[i];
        const display =
          value === undefined
            ? "--"
            : block.label === "Days"
            ? String(value)
            : String(value).padStart(2, "0");
        return (
          <div
            key={block.label}
            className={`wh-block wh-block--${block.mod} tabular-nums`}
          >
            <div className="k">{block.label}</div>
            <div className="v">{display}</div>
          </div>
        );
      })}
    </div>
  );
}
