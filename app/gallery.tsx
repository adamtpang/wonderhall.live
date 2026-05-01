"use client";

import { motion } from "framer-motion";
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
        className="w-full max-w-6xl mx-auto"
      >
        <div
          className="grid grid-cols-3 gap-3 h-[75vh] overflow-hidden"
          style={{ maskImage: MASK, WebkitMaskImage: MASK }}
        >
          {columns.map((col, i) => (
            <Column key={i} photos={col} duration={55 + i * 12} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Column({
  photos,
  duration,
}: {
  photos: Photo[];
  duration: number;
}) {
  // Duplicate the list so y: 0 -> -50% gives a seamless loop.
  const items = useMemo(() => [...photos, ...photos], [photos]);

  return (
    <div className="relative">
      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-3"
      >
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
              className="w-full h-auto block"
              loading={j < 6 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
