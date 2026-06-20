/** Eski slug/path → yeni ASCII canonical path (301) */
export const SLUG_REDIRECTS: Record<string, string> = {
  "/kamp-alanlari/canakkale/assos/assos-kadırga-kamp":
    "/kamp-alanlari/canakkale/assos/assos-kadirga-kamp",
};

export function resolveSlugRedirect(pathname: string): string | null {
  const decoded = decodeURIComponent(pathname).replace(/\/+$/, "") || "/";

  if (SLUG_REDIRECTS[decoded]) {
    return SLUG_REDIRECTS[decoded];
  }

  for (const [from, to] of Object.entries(SLUG_REDIRECTS)) {
    if (decoded === from) return to;
  }

  return null;
}
