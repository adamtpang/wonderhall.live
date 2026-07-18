// Cosmic starfield — a fixed decorative layer behind all content.
// Deterministic positions (no random) so it never reflows; zero client JS.
// Glowing spark-yellow dots + four-point sparkles over the night backdrop.

const stars = [
  [4, 8, 2, 0.4], [11, 22, 1, 0.3], [17, 14, 3, 0.5], [22, 38, 1, 0.25],
  [28, 6, 2, 0.4], [34, 27, 1, 0.3], [41, 15, 4, 0.6], [47, 44, 1, 0.25],
  [53, 9, 2, 0.4], [59, 32, 3, 0.5], [65, 19, 1, 0.3], [71, 41, 2, 0.4],
  [77, 12, 1, 0.25], [83, 28, 3, 0.5], [89, 17, 2, 0.4], [95, 36, 1, 0.3],
  [7, 52, 1, 0.3], [14, 64, 3, 0.5], [20, 78, 1, 0.25], [26, 56, 2, 0.4],
  [32, 71, 4, 0.6], [38, 88, 1, 0.3], [44, 60, 2, 0.4], [50, 82, 1, 0.25],
  [56, 67, 3, 0.5], [62, 91, 2, 0.4], [68, 58, 1, 0.3], [74, 75, 2, 0.4],
  [80, 86, 3, 0.5], [86, 62, 1, 0.25], [92, 79, 2, 0.4], [3, 33, 1, 0.3],
  [9, 47, 2, 0.4], [15, 95, 1, 0.25], [21, 4, 1, 0.3], [36, 49, 2, 0.4],
  [49, 23, 1, 0.3], [64, 4, 2, 0.4], [79, 50, 1, 0.3], [91, 5, 3, 0.5],
] as const;

const sparkles = [
  [12, 18, 14], [78, 24, 18], [28, 72, 12], [86, 70, 16], [50, 12, 20],
] as const;

export default function Stars() {
  return (
    <div aria-hidden className="wh-starfield">
      {stars.map(([x, y, s, g], i) => (
        <span
          key={`s-${i}`}
          className="wh-dot"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: s,
            height: s,
            opacity: g,
            boxShadow: `0 0 ${s * 3}px ${s}px rgba(251,239,72,${g * 0.6})`,
          }}
        />
      ))}
      {sparkles.map(([x, y, s], i) => (
        <svg
          key={`sp-${i}`}
          className="wh-sparkle"
          style={{ left: `${x}%`, top: `${y}%`, width: s, height: s }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0 L13.6 10.4 L24 12 L13.6 13.6 L12 24 L10.4 13.6 L0 12 L10.4 10.4 Z" />
        </svg>
      ))}
    </div>
  );
}
