"use client";

import { usePathname } from "next/navigation";

export default function SiteFooter() {
  const pathname = usePathname();
  if (pathname?.startsWith("/small")) return null;

  return (
    <footer style={{ padding: "1.5rem 1rem", textAlign: "center", fontSize: "0.75rem", color: "var(--mute)", marginTop: "auto" }}>
      Built by <a href="https://adampang.com" style={{ textDecoration: "underline", color: "var(--slate)" }}>Adam Pangelinan</a>
      {" · "}<a href="https://anchormarianas.com" style={{ textDecoration: "underline", color: "var(--slate)" }}>Anchor Marianas LLC</a>
      {" · "}<a href="https://sellsniper.com" style={{ textDecoration: "underline", color: "var(--slate)" }}>More projects</a>
    </footer>
  );
}
