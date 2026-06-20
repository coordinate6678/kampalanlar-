import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { resolveSlugRedirect } from "@/lib/seo/slug-redirects";

const CANONICAL_HOST =
  process.env.NEXT_PUBLIC_CANONICAL_HOST ?? "kampalanlari.co";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host") ?? "";
  const protocol = request.headers.get("x-forwarded-proto") ?? "https";

  let shouldRedirect = false;

  // www → non-www
  if (hostname.startsWith("www.")) {
    url.host = hostname.replace("www.", "");
    shouldRedirect = true;
  }

  // Force canonical host in production
  if (
    process.env.NODE_ENV === "production" &&
    !hostname.includes("localhost") &&
    !hostname.includes("127.0.0.1") &&
    hostname !== CANONICAL_HOST &&
    !hostname.startsWith("www.")
  ) {
    url.host = CANONICAL_HOST;
    shouldRedirect = true;
  }

  // http → https
  if (
    protocol === "http" &&
    !hostname.includes("localhost") &&
    !hostname.startsWith("127.0.0.1")
  ) {
    url.protocol = "https:";
    shouldRedirect = true;
  }

  // Trailing slash removal (except root)
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "");
    shouldRedirect = true;
  }

  const slugTarget = resolveSlugRedirect(url.pathname);
  if (slugTarget) {
    url.pathname = slugTarget;
    return NextResponse.redirect(url, 301);
  }

  if (shouldRedirect) {
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
