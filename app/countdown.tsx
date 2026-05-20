"use client";

import { useEffect, useState } from "react";

// Wonderhall II — mid-June 2026, 7:30pm Malaysia time (UTC+8).
const DEFAULT_TARGET = "2026-06-15T19:30:00+08:00";

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

export default function Countdown({ target = DEFAULT_TARGET }: { target?: string } = {}) {
  const targetMs = new Date(target).getTime();
  const [t, setT] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setT(compute(targetMs));
    const id = setInterval(() => setT(compute(targetMs)), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  const items: Array<{ value: number | undefined; label: string }> = [
    { value: t?.days, label: "days" },
    { value: t?.hours, label: "hours" },
    { value: t?.minutes, label: "minutes" },
    { value: t?.seconds, label: "seconds" },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4">
      {items.map((it) => (
        <div key={it.label} className="text-center">
          <div
            className="font-black tracking-tight bg-gradient-to-b from-yellow-400 to-orange-500 bg-clip-text text-transparent leading-none tabular-nums"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 3rem)",
              letterSpacing: "-0.04em",
            }}
          >
            {it.value === undefined
              ? "—"
              : it.label === "days"
              ? it.value
              : String(it.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/50">
            {it.label}
          </div>
        </div>
      ))}
    </div>
  );
}
