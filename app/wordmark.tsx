// WONDERHALL wordmark: each letter cycles Orange, Amber, Pink, Ink (fixed
// mapping baked into .wh-wordmark in globals.css). Set `ink` for small sizes
// (< ~24px) where the colors lose legibility.

export default function Wordmark({
  className = "",
  ink = false,
}: {
  className?: string;
  ink?: boolean;
}) {
  return (
    <span
      className={`wh-wordmark ${ink ? "wh-wordmark--ink" : ""} ${className}`.trim()}
      aria-label="Wonderhall"
    >
      {"WONDERHALL".split("").map((letter, i) => (
        <span key={i} aria-hidden="true">
          {letter}
        </span>
      ))}
    </span>
  );
}
