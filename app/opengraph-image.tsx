import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Wonderhall, live music at Network School, Forest City";

// Wordmark cycle: Orange, Amber, Pink, Ink.
const CYCLE = ["#FE5722", "#FFB81E", "#FC769A", "#0F0F0D"];

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFFFD",
          fontFamily: "sans-serif",
          padding: 80,
        }}
      >
        {/* 5-color rule */}
        <div style={{ display: "flex", width: "100%", height: 16, marginBottom: 56 }}>
          <div style={{ flex: 1, background: "#FFB81E" }} />
          <div style={{ flex: 1, background: "#FE5722" }} />
          <div style={{ flex: 1, background: "#FC769A" }} />
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 146,
            fontWeight: 900,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          {"WONDERHALL".split("").map((c, i) => (
            <span key={i} style={{ color: CYCLE[i % 4] }}>
              {c}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#6B5647", marginTop: 44 }}>
          Live music at Network School · Forest City
        </div>
      </div>
    ),
    size,
  );
}
