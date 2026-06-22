import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kamp Alanları — Türkiye Kamp Rehberi",
    short_name: "Kamp Alanları",
    description:
      "Türkiye genelinde kamp alanları, karavan parkları ve doğa tesisleri rehberi.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5f0",
    theme_color: "#243b32",
    icons: [
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
