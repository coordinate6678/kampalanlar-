"use client";

import { useState } from "react";
import type { VideoMedia } from "@/data/media/videos";

interface VideoPlayerProps {
  video: VideoMedia;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  /** YouTube için thumbnail tıklayınca yükle */
  lazyYouTube?: boolean;
}

function buildYouTubeEmbedUrl(
  videoId: string,
  options: { autoPlay?: boolean; muted?: boolean; loop?: boolean } = {}
): string {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });

  if (options.autoPlay) {
    params.set("autoplay", "1");
    params.set("mute", options.muted !== false ? "1" : "0");
  }

  if (options.loop) {
    params.set("loop", "1");
    params.set("playlist", videoId);
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params}`;
}

export function VideoPlayer({
  video,
  className = "",
  autoPlay = false,
  muted = false,
  loop = false,
  controls = true,
  lazyYouTube = true,
}: VideoPlayerProps) {
  const [youtubeActive, setYoutubeActive] = useState(!lazyYouTube);

  if (video.type === "youtube") {
    if (!youtubeActive) {
      return (
        <button
          type="button"
          onClick={() => setYoutubeActive(true)}
          className={`group relative aspect-video w-full overflow-hidden rounded-xl bg-forest-900 ${className}`}
          aria-label={`${video.title} videosunu oynat`}
        >
          {video.poster && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={video.poster}
              alt={video.title}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
          )}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/90 text-forest-900 shadow-lg transition-transform group-hover:scale-110">
              ▶
            </span>
          </span>
          <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest-900/90 to-transparent p-4 text-left text-sm font-medium text-cream">
            {video.title}
          </span>
        </button>
      );
    }

    return (
      <div className={`aspect-video overflow-hidden rounded-xl ${className}`}>
        <iframe
          src={buildYouTubeEmbedUrl(video.src, {
            autoPlay: true,
            muted: muted || autoPlay,
            loop,
          })}
          title={video.title}
          className="h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <video
      className={`aspect-video w-full rounded-xl bg-forest-900 object-cover ${className}`}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted || autoPlay}
      loop={loop}
      playsInline
      preload={autoPlay ? "auto" : "metadata"}
      poster={video.poster}
      aria-label={video.title}
    >
      <source src={video.src} type="video/mp4" />
      Tarayıcınız video oynatmayı desteklemiyor.
    </video>
  );
}
