import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
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
    Page: async () => {
      const page = getCorporatePage(slug);
      if (!page) notFound();
      const nonce = (await headers()).get("x-nonce") ?? undefined;
      return <CorporatePageView page={page} nonce={nonce} />;
    },
  };
}
