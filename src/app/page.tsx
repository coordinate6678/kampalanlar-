import { HeroSection } from "@/components/home/HeroSection";
import { PopularProvinces } from "@/components/home/PopularProvinces";
import { HomeSeoContent } from "@/components/home/HomeSeoContent";
import { FeaturedHiddenGems } from "@/components/home/FeaturedHiddenGems";
import { RecentCampsites } from "@/components/home/RecentCampsites";
import { CampVideoGallery } from "@/components/home/CampVideoGallery";
import { FaqSection } from "@/components/home/FaqSection";
import { InlineAdBanner } from "@/components/ads/InlineAdBanner";
import { ContentGrid } from "@/components/layout/ContentGrid";
import { SearchWidget } from "@/components/layout/SearchWidget";
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

      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <ContentGrid
          mainClassName="space-y-12"
          main={
            <>
              <PopularProvinces />
              <HomeSeoContent />
              <InlineAdBanner />
              <FeaturedHiddenGems />
              <InlineAdBanner slot="content-leaderboard-2" />
              <CampVideoGallery />
              <RecentCampsites />
              <InlineAdBanner slot="content-leaderboard-4" />
              <FaqSection />
            </>
          }
          sidebar={
            <>
              <SearchWidget />
            </>
          }
        />
      </div>
    </>
  );
}
