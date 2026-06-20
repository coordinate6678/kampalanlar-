import { VideoPlayer } from "@/components/media/VideoPlayer";
import { InlineAdBanner } from "@/components/ads/InlineAdBanner";
import { HOMEPAGE_VIDEOS } from "@/data/media/videos";

export function CampVideoGallery() {
  const firstRow = HOMEPAGE_VIDEOS.slice(0, 2);
  const secondRow = HOMEPAGE_VIDEOS.slice(2);

  return (
    <section aria-labelledby="video-gallery-heading">
      <h2
        id="video-gallery-heading"
        className="mb-2 font-display text-2xl font-bold text-forest-800 border-b-2 border-amber-400 pb-2 inline-block"
      >
        Kamp Videoları
      </h2>
      <p className="mb-6 text-gray-600">
        Deniz kenarı, orman ve dağ kampından kısa görüntüler — rotanızı
        planlarken ilham alın.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {firstRow.map((video) => (
          <VideoCard key={video.src} video={video} />
        ))}
      </div>

      <InlineAdBanner slot="content-leaderboard-3" className="my-6" />

      <div className="grid gap-6 sm:grid-cols-2">
        {secondRow.map((video) => (
          <VideoCard key={video.src} video={video} />
        ))}
      </div>
    </section>
  );
}

function VideoCard({
  video,
}: {
  video: (typeof HOMEPAGE_VIDEOS)[number];
}) {
  return (
    <div className="space-y-2">
      <VideoPlayer video={video} />
      <p className="text-sm font-medium text-forest-800">{video.title}</p>
      {video.description && (
        <p className="text-xs text-gray-500">{video.description}</p>
      )}
    </div>
  );
}
