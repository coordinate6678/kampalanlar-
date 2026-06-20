import Link from "next/link";
import { HeroSlideshow } from "@/components/home/HeroSlideshow";
import { PlaceImage } from "@/components/ui/PlaceImage";
import { HERO_SLIDES } from "@/data/media/place-images";
import { HERO_LCP_WIDTH } from "@/lib/media/wikimedia";

export function HeroSection() {
  const firstSlide = HERO_SLIDES[0];

  return (
    <section className="relative min-h-[420px] overflow-hidden">
      <HeroSlideshow
        slides={HERO_SLIDES}
        firstSlide={
          <PlaceImage
            src={firstSlide.src}
            alt={firstSlide.alt}
            fill
            className="object-cover object-center"
            priority
            fetchPriority="high"
            wikimediaWidth={HERO_LCP_WIDTH}
            sizes="100vw"
          />
        }
      />
      <div className="absolute inset-0 z-[2] bg-forest-900/70" />

      <div className="relative z-[3] mx-auto max-w-7xl px-4 py-20 lg:px-6 lg:py-28">
        <h1 className="max-w-3xl font-display text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl">
          Kamp Yerleri: Kamp Alanları, Bungalov, Karavan ve Çadır Kampı
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-forest-200">
          Türkiye&apos;nin dört bir yanındaki kamp alanlarını keşfedin. İl ve
          ilçe bazında detaylı rehber, harita ve kullanıcı puanları.
        </p>
        <Link
          href="/#populer-iller"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-earth-500 px-6 py-3 font-semibold text-cream shadow-lg hover:bg-earth-600 transition-colors"
        >
          <span>🏕️</span>
          Popüler İlleri Keşfet
        </Link>
      </div>
    </section>
  );
}
