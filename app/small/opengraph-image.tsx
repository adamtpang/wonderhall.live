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
          backgroundColor: "#201034",
          backgroundImage:
            "radial-gradient(120% 80% at 50% 0%, #2E1A4A 0%, #201034 45%, #0E0620 100%)",
          fontFamily: "sans-serif",
          padding: 80,
        }}
      >
        {/* aurora beam */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: 12,
            marginBottom: 56,
            borderRadius: 6,
            background:
              "linear-gradient(100deg, #E93D0C 0%, #EE4678 34%, #41F0C4 70%, #FBEF48 100%)",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 150,
            fontWeight: 900,
            letterSpacing: -4,
            lineHeight: 1,
            color: "#FBF4FF",
          }}
        >
          wondersmall
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#C9B8E0",
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
