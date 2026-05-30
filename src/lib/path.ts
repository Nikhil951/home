// Build an internal URL that respects Astro's configured `base`.
// Pass a root-relative path ("/projects", "/blog/foo/") and it returns the
// same path prefixed with the deploy base ("/portfolio/projects").
// Works both when a base is set and when the site is served from root.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // e.g. "/portfolio" or "/"
  // Join with a single slash regardless of whether base has a trailing slash.
  return `${base}/${path}`.replace(/\/{2,}/g, '/');
}
