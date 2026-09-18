"use client";
import { useEffect } from "react";

import { ScrollTrigger } from "@/lib/gsap";

/**
 * Images and web fonts can settle after GSAP's initial measurements,
 * shifting layout enough to throw off ScrollTrigger start/end positions.
 * Refresh once everything (fonts + images) has actually loaded.
 */
export const GsapRefresh = () => {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();

    if (document.readyState === "complete") {
      refresh();
    } else {
      window.addEventListener("load", refresh);
    }

    document.fonts?.ready.then(refresh).catch(() => {});

    return () => window.removeEventListener("load", refresh);
  }, []);

  return null;
};

export default GsapRefresh;
