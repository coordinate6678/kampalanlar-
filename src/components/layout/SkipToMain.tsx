import Link from "next/link";

export function SkipToMain() {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-amber-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-forest-900 focus:shadow-lg"
    >
      Ana içeriğe atla
    </Link>
  );
}
