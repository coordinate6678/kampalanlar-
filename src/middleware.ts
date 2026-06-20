import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { resolveSlugRedirect } from "@/lib/seo/slug-redirects";

const CANONICAL_HOST =
  process.env.NEXT_PUBLIC_CANONICAL_HOST ?? "kampalanlari.co";

function buildContentSecurityPolicy(nonce: string): string {
  const isDev = process.env.NODE_ENV === "development";

  const directives = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://upload.wikimedia.org https://images.unsplash.com https://img.youtube.com",
    "font-src 'self'",
    "connect-src 'self'",
    "frame-src 'self' https://www.youtube-nocookie.com https://www.google.com https://maps.google.com https://www.google.com/maps",
    "media-src 'self' https://www.youtube-nocookie.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'self'",
  ];

  return directives.join("; ");
}

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

  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const csp = buildContentSecurityPolicy(nonce);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("x-nonce", nonce);

  return response;
}

export const config = {
  matcher: [
    {
      source:
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
