import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sayfa Bulunamadı",
  description:
    "Aradığınız kamp alanı veya sayfa bulunamadı. Ana sayfadan veya arama bölümünden devam edebilirsiniz.",
  path: "/",
  noindex: true,
  skipCanonical: true,
});

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <span className="text-6xl mb-6">🏕️</span>
      <h1 className="font-display text-4xl font-bold text-forest-800">
        404 — Sayfa Bulunamadı
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Aradığınız kamp alanı veya sayfa mevcut değil. Belki rotanızı
        değiştirmeniz gerekiyor?
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-lg bg-forest-700 px-6 py-3 font-semibold text-cream hover:bg-forest-600 transition-colors"
        >
          Ana Sayfaya Dön
        </Link>
        <Link
          href="/arama"
          className="rounded-lg border border-forest-300 px-6 py-3 font-semibold text-forest-700 hover:bg-forest-50 transition-colors"
        >
          Kamp Alanı Ara
        </Link>
      </div>
    </div>
  );
}
