"use client";

import { useEffect, useRef } from "react";

/**
 * Shows the email as a mailto link, filled in by the browser as soon as the page loads.
 *
 * The address arrives encoded (see `encodeEmail`), so neither the static HTML nor the
 * React payload contains it: spam bots that scrape raw HTML never see it, while every
 * visitor (and the printed CV) does, with no click needed.
 */
export function ObfuscatedEmail({
  encoded,
  label,
  className = "",
}: {
  encoded: string;
  /** Accessible placeholder until the address is filled in ("Email address"). */
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const a = ref.current;
    if (!a) return;
    const email = atob(encoded).split("").reverse().join("");
    a.href = `mailto:${email}`;
    a.textContent = email;
    a.classList.remove("invisible");
  }, [encoded]);

  return (
    // Invisible (but space-keeping) until the effect fills in the real address.
    <a
      ref={ref}
      className={`invisible font-semibold text-link underline underline-offset-4 ${className}`}
    >
      {label}
    </a>
  );
}
