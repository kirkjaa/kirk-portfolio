import { useEffect } from "react";

const SITE = "Kirk Pathumanun";

/** Per-route document title: "About · Kirk Pathumanun"; the home page passes its own full line. */
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE}` : `${SITE} — Venture Builder & Technical Founder`;
  }, [title]);
}
