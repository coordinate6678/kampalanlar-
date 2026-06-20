import { VideoPlayer } from "@/components/media/VideoPlayer";
import type { VideoMedia } from "@/data/media/videos";

interface VideoSectionProps {
  video: VideoMedia;
  heading?: string;
  className?: string;
}

export function VideoSection({
  video,
  heading = "Tanıtım Videosu",
  className = "",
}: VideoSectionProps) {
  return (
    <section className={className} aria-labelledby="video-section-heading">
      <h2
        id="video-section-heading"
        className="mb-4 font-display text-xl font-bold text-forest-800"
      >
        {heading}
      </h2>
      {video.description && (
        <p className="mb-4 text-gray-600">{video.description}</p>
      )}
      <VideoPlayer video={video} />
    </section>
  );
}
