"use client";

import { motion, type Easing } from "framer-motion";
import type { ReactNode } from "react";

const ease: Easing = [0.22, 1, 0.36, 1];

/** Fade + lift in immediately on mount. Use for above-the-fold elements. */
export function RevealNow({
  children,
  delay = 0,
  duration = 0.7,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Fade + lift in when scrolled into view. Triggers once. */
export function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
