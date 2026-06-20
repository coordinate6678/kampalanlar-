import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kamp Alanları — Türkiye kamp rehberi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1c2e27 0%, #2d4a3e 100%)",
          padding: "64px",
        }}
      >
        <div style={{ color: "#c4a035", fontSize: 48, marginBottom: 16 }}>⛺</div>
        <div
          style={{
            color: "#f7f5f0",
            fontSize: 56,
            fontWeight: 800,
            lineHeight: 1.15,
          }}
        >
          Türkiye Kamp Alanları
        </div>
        <div style={{ color: "#b8cdc2", fontSize: 26, marginTop: 16 }}>
          kampalanlari.co
        </div>
      </div>
    ),
    { ...size }
  );
}
