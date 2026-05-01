// Decorative scattered stars that sit behind the page content.
// Server component - static, deterministic positions, zero client JS.

const stars = [
  { x: 4, y: 8, size: 2, glow: 0.4 },
  { x: 11, y: 22, size: 1, glow: 0.3 },
  { x: 17, y: 14, size: 3, glow: 0.5 },
  { x: 22, y: 38, size: 1, glow: 0.25 },
  { x: 28, y: 6, size: 2, glow: 0.4 },
  { x: 34, y: 27, size: 1, glow: 0.3 },
  { x: 41, y: 15, size: 4, glow: 0.6 },
  { x: 47, y: 44, size: 1, glow: 0.25 },
  { x: 53, y: 9, size: 2, glow: 0.4 },
  { x: 59, y: 32, size: 3, glow: 0.5 },
  { x: 65, y: 19, size: 1, glow: 0.3 },
  { x: 71, y: 41, size: 2, glow: 0.4 },
  { x: 77, y: 12, size: 1, glow: 0.25 },
  { x: 83, y: 28, size: 3, glow: 0.5 },
  { x: 89, y: 17, size: 2, glow: 0.4 },
  { x: 95, y: 36, size: 1, glow: 0.3 },
  { x: 7, y: 52, size: 1, glow: 0.3 },
  { x: 14, y: 64, size: 3, glow: 0.5 },
  { x: 20, y: 78, size: 1, glow: 0.25 },
  { x: 26, y: 56, size: 2, glow: 0.4 },
  { x: 32, y: 71, size: 4, glow: 0.6 },
  { x: 38, y: 88, size: 1, glow: 0.3 },
  { x: 44, y: 60, size: 2, glow: 0.4 },
  { x: 50, y: 82, size: 1, glow: 0.25 },
  { x: 56, y: 67, size: 3, glow: 0.5 },
  { x: 62, y: 91, size: 2, glow: 0.4 },
  { x: 68, y: 58, size: 1, glow: 0.3 },
  { x: 74, y: 75, size: 2, glow: 0.4 },
  { x: 80, y: 86, size: 3, glow: 0.5 },
  { x: 86, y: 62, size: 1, glow: 0.25 },
  { x: 92, y: 79, size: 2, glow: 0.4 },
  { x: 3, y: 33, size: 1, glow: 0.3 },
  { x: 9, y: 47, size: 2, glow: 0.4 },
  { x: 15, y: 95, size: 1, glow: 0.25 },
  { x: 21, y: 4, size: 1, glow: 0.3 },
  { x: 36, y: 49, size: 2, glow: 0.4 },
  { x: 49, y: 23, size: 1, glow: 0.3 },
  { x: 64, y: 4, size: 2, glow: 0.4 },
  { x: 79, y: 50, size: 1, glow: 0.3 },
  { x: 91, y: 5, size: 3, glow: 0.5 },
];

const sparkles = [
  { x: 12, y: 18, size: 14 },
  { x: 78, y: 24, size: 18 },
  { x: 28, y: 72, size: 12 },
  { x: 86, y: 70, size: 16 },
  { x: 50, y: 12, size: 20 },
];

export default function Stars() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {/* warm sunrise wash at the bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 100%, rgba(251,146,60,0.18) 0%, rgba(253,224,71,0.10) 35%, rgba(255,255,255,0) 70%)",
        }}
      />

      {/* subtle dots */}
      {stars.map((s, i) => (
        <span
          key={`s-${i}`}
          className="absolute rounded-full bg-yellow-200"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.glow,
            boxShadow: `0 0 ${s.size * 3}px ${s.size}px rgba(251,191,36,${
              s.glow * 0.6
            })`,
          }}
        />
      ))}

      {/* 4-point sparkles */}
      {sparkles.map((s, i) => (
        <svg
          key={`sp-${i}`}
          className="absolute text-yellow-300 opacity-40"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0 L13.6 10.4 L24 12 L13.6 13.6 L12 24 L10.4 13.6 L0 12 L10.4 10.4 Z" />
        </svg>
      ))}
    </div>
  );
}
