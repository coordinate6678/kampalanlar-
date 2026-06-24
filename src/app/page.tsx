import { HeroSection } from "@/components/home/HeroSection";
import { PopularCategories } from "@/components/home/PopularCategories";
import { FeaturedCampsites } from "@/components/home/FeaturedCampsites";
import { RecentGuides } from "@/components/home/RecentGuides";
import { HomeSeoContent } from "@/components/home/HomeSeoContent";
import { FaqSection } from "@/components/home/FaqSection";
import { InlineAdBanner } from "@/components/ads/InlineAdBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqJsonLd, buildWebPageJsonLd } from "@/lib/seo/json-ld";
import { homepageFaqItems } from "@/lib/content/faq-content";
import { SITE_DESCRIPTION } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kamp Alanları Rehberi",
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          buildWebPageJsonLd({
            name: "Kamp Alanları Rehberi",
            description: SITE_DESCRIPTION,
            path: "/",
          }),
          buildFaqJsonLd(homepageFaqItems),
        ]}
      />
      <HeroSection />

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 lg:px-6">
        <PopularCategories />
        <FeaturedCampsites />
        <RecentGuides />
        <FaqSection />
        <InlineAdBanner />
        <HomeSeoContent />
      </div>
    </>
  );
}
