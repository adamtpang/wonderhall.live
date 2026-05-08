import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Wondersmall — secret tiny desk concert at Network School";

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
            "radial-gradient(70% 50% at 50% 100%, rgba(249,115,22,0.4) 0%, rgba(253,224,71,0.12) 35%, rgba(0,0,0,1) 75%)",
          backgroundColor: "#000000",
          color: "#ffffff",
          fontFamily: "sans-serif",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 180,
            fontWeight: 300,
            letterSpacing: -6,
            lineHeight: 1,
            backgroundImage: "linear-gradient(90deg, #fde047, #fb923c)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          wondersmall
        </div>
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.7)",
            marginTop: 40,
            letterSpacing: 8,
            textTransform: "uppercase",
          }}
        >
          Tiny Desk · Invitation Only
        </div>
      </div>
    ),
    size,
  );
}
