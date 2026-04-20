"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTopOnRouteChange = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollToHashWithRetry = (hash) => {
      const id = String(hash || "").replace("#", "").trim();
      if (!id) return false;

      const start = Date.now();
      const timeoutMs = 2500;
      const intervalMs = 80;

      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }

        if (Date.now() - start < timeoutMs) {
          window.setTimeout(tryScroll, intervalMs);
          return;
        }

        // If the element never appears, fall back to top.
        window.scrollTo(0, 0);
      };

      // Let the next page paint/layout once, then start polling.
      window.requestAnimationFrame(() => window.setTimeout(tryScroll, 0));
      return true;
    };

    const scrollForCurrentUrl = () => {
      const hash = window.location.hash;

      if (hash) {
        if (scrollToHashWithRetry(hash)) {
          return;
        }
      }

      window.scrollTo(0, 0);
    };

    // Run on initial mount + every pathname change.
    scrollForCurrentUrl();

    // Also handle in-page hash navigation (pathname unchanged).
    window.addEventListener("hashchange", scrollForCurrentUrl);
    return () => window.removeEventListener("hashchange", scrollForCurrentUrl);
  }, [pathname]);

  return null;
};

export default ScrollToTopOnRouteChange;
