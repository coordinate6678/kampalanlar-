import Link from "next/link";
import { PlaceImage } from "@/components/ui/PlaceImage";
import { getInlineAd } from "@/data/inline-ads";

interface InlineAdBannerProps {
  slot?: string;
  className?: string;
}

export function InlineAdBanner({
  slot = "content-leaderboard",
  className = "",
}: InlineAdBannerProps) {
  const ad = getInlineAd(slot);

  return (
    <aside
      className={`w-full max-w-full overflow-hidden rounded-lg border border-gray-200 bg-white ${className}`}
      role="complementary"
      aria-label="Sponsorlu içerik"
      data-ad-slot={slot}
    >
      <div className="flex flex-col sm:flex-row" data-ad-placeholder>
        <div className="relative aspect-[16/10] w-full shrink-0 sm:aspect-auto sm:w-[220px] sm:min-h-[148px] lg:w-[260px]">
          <PlaceImage
            src={ad.image}
            alt={ad.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 260px"
          />
        </div>

        <div className="relative flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-5">
          <span className="absolute right-4 top-4 rounded border border-gray-200 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
            Reklam
          </span>

          <p className="text-xs font-semibold text-gray-500">{ad.sponsor}</p>
          <h3 className="mt-1 pr-14 font-display text-lg font-bold leading-snug text-gray-900 sm:text-xl">
            {ad.title}
          </h3>

          {ad.price ? (
            <p className="mt-2 text-base">
              <span className="font-bold text-gray-900">{ad.price}</span>
              {ad.originalPrice && (
                <span className="ml-2 text-sm text-gray-400 line-through">
                  {ad.originalPrice}
                </span>
              )}
            </p>
          ) : (
            ad.description && (
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {ad.description}
              </p>
            )
          )}

          <Link
            href={ad.href}
            className="mt-4 inline-flex w-fit rounded-md bg-[#0078d4] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#006cbd]"
          >
            {ad.ctaLabel}
          </Link>
        </div>
      </div>
    </aside>
  );
}
