import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  LandingPageView,
  buildLandingPageMetadata,
} from "@/components/landing/LandingPageView";
import {
  getLandingPageStaticParams,
  resolveLandingPage,
} from "@/lib/landing-pages";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getLandingPageStaticParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolveLandingPage(slug);
  if (!resolved) return {};

  return buildLandingPageMetadata(resolved.def, resolved.content, resolved.campsites.length);
}

export default async function LandingSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const resolved = resolveLandingPage(slug);

  if (!resolved) {
    notFound();
  }

  return (
    <LandingPageView
      def={resolved.def}
      content={resolved.content}
      campsites={resolved.campsites}
    />
  );
}
