"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Photo = { src: string; width: number; height: number };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Static grid of every photo. Renders in source order on the server (so
// hydration matches), then re-shuffles on mount — a fresh order each reload.
export default function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [items, setItems] = useState(photos);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setItems(shuffle(photos)));
    return () => cancelAnimationFrame(frame);
  }, [photos]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
      {items.map((photo) => (
        <div
          key={photo.src}
          className="overflow-hidden rounded-sm"
          style={{ boxShadow: "inset 0 0 0 1px var(--line)" }}
        >
          <Image
            src={photo.src}
            width={photo.width}
            height={photo.height}
            alt=""
            sizes="(max-width: 640px) 50vw, 33vw"
            className="w-full h-full object-cover aspect-square block wh-graded"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
