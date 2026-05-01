import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Wonderhall — live music at Network School, Forest City";

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
          background:
            "radial-gradient(80% 60% at 50% 100%, rgba(249,115,22,0.55) 0%, rgba(253,224,71,0.18) 35%, rgba(0,0,0,1) 75%)",
          backgroundColor: "#000000",
          color: "#ffffff",
          fontFamily: "sans-serif",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 240,
            fontWeight: 900,
            letterSpacing: -8,
            lineHeight: 1,
            backgroundImage: "linear-gradient(90deg, #facc15, #f97316)",
            backgroundClip: "text",
            color: "transparent",
            textTransform: "uppercase",
          }}
        >
          Wonderhall
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.75)",
            marginTop: 30,
          }}
        >
          Live music at Network School · Forest City
        </div>
      </div>
    ),
    size,
  );
}
