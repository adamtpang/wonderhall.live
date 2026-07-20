"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Photo = { src: string; width: number; height: number };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const MASK =
  "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)";

export default function Gallery({ photos }: { photos: Photo[] }) {
  // Wait for client mount, then shuffle. Server renders an empty placeholder
  // of the same height so we don't get hydration mismatch or layout shift.
  const [shuffled, setShuffled] = useState<Photo[] | null>(null);
  const [paused, setPaused] = useState(false);
  // WCAG 2.2.2: honor the OS reduced-motion setting (static columns, no
  // toggle) and give everyone else a pause/play control.
  const reducedMotion = useReducedMotion();
  const animated = !reducedMotion;

  useEffect(() => {
    setShuffled(shuffle(photos));
  }, [photos]);

  if (!shuffled) {
    return (
      <section className="w-full px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="w-full max-w-6xl mx-auto h-[75vh]" />
      </section>
    );
  }

  // Round-robin distribute into 3 columns so each column has a balanced count.
  const columns: Photo[][] = [[], [], []];
  shuffled.forEach((p, i) => columns[i % 3].push(p));

  return (
    <section className="w-full px-4 sm:px-6 pb-12 sm:pb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-6xl mx-auto"
      >
        <div
          className="grid grid-cols-3 gap-3 h-[75vh] overflow-hidden"
          style={{ maskImage: MASK, WebkitMaskImage: MASK }}
        >
          {columns.map((col, i) => (
            <Column
              key={i}
              photos={col}
              duration={95 + i * 22}
              scrolling={animated && !paused}
              loop={animated}
            />
          ))}
        </div>
        {animated && (
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            aria-label={paused ? "Play the photo reel" : "Pause the photo reel"}
            className="wh-gallery-toggle absolute bottom-3 right-3 z-10"
          >
            {paused ? "Play" : "Pause"}
          </button>
        )}
      </motion.div>
    </section>
  );
}

function Column({
  photos,
  duration,
  scrolling,
  loop,
}: {
  photos: Photo[];
  duration: number;
  scrolling: boolean;
  loop: boolean;
}) {
  // Duplicate the list so 0% -> -50% gives a seamless loop. Under reduced
  // motion the column never moves, so a single set is enough.
  const items = useMemo(
    () => (loop ? [...photos, ...photos] : photos),
    [photos, loop]
  );

  // Drive the loop by hand (instead of animate={{ y }}) so pausing freezes
  // the columns in place and play resumes from the same spot.
  const progress = useMotionValue(0);
  const y = useTransform(progress, (p) => `${-50 * p}%`);

  useAnimationFrame((_, delta) => {
    if (!scrolling) return;
    progress.set((progress.get() + delta / (duration * 1000)) % 1);
  });

  return (
    <div className="relative">
      <motion.div style={{ y }} className="flex flex-col gap-3">
        {items.map((photo, j) => (
          <div
            key={`${photo.src}-${j}`}
            className="overflow-hidden rounded-sm"
          >
            <Image
              src={photo.src}
              width={photo.width}
              height={photo.height}
              alt=""
              sizes="(max-width: 768px) 33vw, (max-width: 1280px) 30vw, 380px"
              className="w-full h-auto block wh-graded"
              loading={j < 6 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
