"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { SectionId } from "@/content/types";
import { isHomePath } from "@/content/locale";

/** The home-page section currently in the middle of the viewport (scroll spy). */
export function useActiveSection(ids: SectionId[]): SectionId | null {
  const pathname = usePathname();
  const home = isHomePath(pathname);
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    if (!home) return;
    const els = ids.map((id) => document.getElementById(id)).filter((el) => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id as SectionId);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids, home]);

  return home ? active : null;
}
