import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "wondersmall, a tiny desk concert at Network School";

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
            fontSize: 150,
            fontWeight: 900,
            letterSpacing: -4,
            lineHeight: 1,
            color: "#0F0F0D",
          }}
        >
          wondersmall
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#6B5647",
            marginTop: 44,
            letterSpacing: 8,
            textTransform: "uppercase",
          }}
        >
          Tiny Desk · Invite Only
        </div>
      </div>
    ),
    size,
  );
}
