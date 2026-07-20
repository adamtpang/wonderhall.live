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
          backgroundColor: "#131011",
          fontFamily: "sans-serif",
          padding: 80,
        }}
      >
        {/* one small ember tick */}
        <div
          style={{
            display: "flex",
            width: 72,
            height: 4,
            marginBottom: 44,
            background: "#E5883C",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 150,
            fontWeight: 900,
            letterSpacing: -4,
            lineHeight: 1,
            color: "#ECE7E1",
          }}
        >
          wondersmall
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#A39D96",
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
