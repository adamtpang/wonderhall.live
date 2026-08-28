import type { ReactNode } from "react";
import Link from "next/link";
import Wordmark from "./wordmark";

export default function InfoPage({
  eyebrow,
  title,
  introduction,
  children,
}: {
  eyebrow: string;
  title: string;
  introduction: string;
  children: ReactNode;
}) {
  return (
    <main className="relative z-10 flex-1 w-full px-5 py-10 sm:px-6 sm:py-16">
      <div className="w-full max-w-3xl mx-auto">
        <nav aria-label="Primary navigation" className="mb-16 flex flex-wrap items-center justify-between gap-6">
          <Link href="/" aria-label="Wonderhall home">
            <Wordmark className="text-2xl sm:text-3xl" />
          </Link>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            <a href="/about" className="wh-nav-link">About</a>
            <a href="/contact" className="wh-nav-link">Contact</a>
            <a href="/privacy" className="wh-nav-link">Privacy</a>
          </div>
        </nav>

        <header>
          <div className="wh-eyebrow wh-eyebrow--accent">{eyebrow}</div>
          <h1 className="wh-h2 mt-4">{title}</h1>
          <p className="wh-lead mt-8">{introduction}</p>
        </header>

        <div className="wh-info-content mt-14">{children}</div>

        <footer className="mt-16 border-t border-[var(--line)] pt-8 text-sm text-[var(--text-3)]">
          Wonderhall is created by Maanasa and Adam. The public site is built and maintained by{" "}
          <a className="wh-link" href="https://adampang.com" target="_blank" rel="noopener noreferrer">Adam Pangelinan</a>
          {" "}through{" "}
          <a className="wh-link" href="https://anchormarianas.com" target="_blank" rel="noopener noreferrer">Anchor Marianas LLC</a>.
        </footer>
      </div>
    </main>
  );
}
