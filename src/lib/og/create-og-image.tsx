import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export interface OgImageOptions {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImageUrl?: string;
}

export function createOgImageResponse({
  title,
  subtitle,
  badge = "kampalanlari.co",
  backgroundImageUrl,
}: OgImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: backgroundImageUrl
            ? "linear-gradient(135deg, rgba(28,46,39,0.92) 0%, rgba(45,74,62,0.88) 100%)"
            : "linear-gradient(135deg, #1c2e27 0%, #2d4a3e 45%, #3d5a4c 100%)",
          padding: "64px",
          position: "relative",
        }}
      >
        {backgroundImageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={backgroundImageUrl}
            alt=""
            width={1200}
            height={630}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.35,
            }}
          />
        ) : null}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            position: "relative",
          }}
        >
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            position: "relative",
          }}
        >
          <div
            style={{
              color: "#f7f5f0",
              fontSize: title.length > 48 ? 48 : 64,
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                color: "#b8cdc2",
                fontSize: 28,
                lineHeight: 1.4,
                maxWidth: 820,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        <div
          style={{
            color: "#e4c066",
            fontSize: 22,
            fontWeight: 600,
            position: "relative",
          }}
        >
          {badge}
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
