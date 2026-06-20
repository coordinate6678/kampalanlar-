import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CorporatePageView,
  buildCorporatePageMetadata,
} from "@/components/corporate/CorporatePageView";
import { getCorporatePage } from "@/data/corporate-pages";

export function createCorporatePageLoader(slug: string) {
  return {
    generateMetadata: (): Metadata => {
      const page = getCorporatePage(slug);
      if (!page) return {};
      return buildCorporatePageMetadata(page);
    },
    Page: () => {
      const page = getCorporatePage(slug);
      if (!page) notFound();
      return <CorporatePageView page={page} />;
    },
  };
}
