import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kamp Alanları — Türkiye kamp rehberi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #1c2e27 0%, #2d4a3e 45%, #3d5a4c 100%)",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "#c4a035",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
            }}
          >
            ⛺
          </div>
          <span
            style={{
              color: "#f7f5f0",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            kampalanlari.co
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              color: "#f7f5f0",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            Türkiye Kamp Alanları Rehberi
          </div>
          <div
            style={{
              color: "#b8cdc2",
              fontSize: 28,
              lineHeight: 1.4,
              maxWidth: 820,
            }}
          >
            İl, ilçe ve kategori bazında çadır, karavan ve bungalov kamp rotaları
          </div>
        </div>

        <div
          style={{
            color: "#e4c066",
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          kampalanlari.co
        </div>
      </div>
    ),
    { ...size }
  );
}
