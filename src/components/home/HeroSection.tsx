import { HeroSearch } from "@/components/home/HeroSearch";
import { PlaceImage } from "@/components/ui/PlaceImage";
import { PLACE } from "@/data/media/place-images";
import { HERO_LCP_WIDTH } from "@/lib/media/wikimedia";

export function HeroSection() {
  return (
    <section className="relative min-h-[480px] overflow-hidden">
      <PlaceImage
        src={PLACE.olymposAntikKenti}
        alt="Çam ormanı — Türkiye kamp alanları"
        fill
        className="object-cover object-center"
        priority
        fetchPriority="high"
        wikimediaWidth={HERO_LCP_WIDTH}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-forest-900/55" />

      <div className="relative z-[1] mx-auto flex min-h-[480px] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center lg:px-6">
        <h1 className="max-w-3xl font-display text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl">
          Doğayı Keşfetmeye Buradan Başla
        </h1>
        <HeroSearch />
      </div>
    </section>
  );
}
