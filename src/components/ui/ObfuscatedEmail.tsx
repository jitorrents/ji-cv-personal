"use client";

import { useEffect, useState } from "react";
import { labels } from "@/content/labels";

/**
 * Receives the address encoded (see `encodeEmail`), so neither the HTML nor the
 * React payload contains it. It is decoded in the browser on click, or just
 * before printing so the PDF CV includes it.
 */
export function ObfuscatedEmail({
  encoded,
  className = "",
}: {
  encoded: string;
  className?: string;
}) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const reveal = () => setEmail(decodeEmail(encoded));
    window.addEventListener("beforeprint", reveal);
    return () => window.removeEventListener("beforeprint", reveal);
  }, [encoded]);

  const style = `text-accent underline-offset-4 hover:underline ${className}`;
  if (!email) {
    return (
      <button type="button" onClick={() => setEmail(decodeEmail(encoded))} className={style}>
        {labels.showEmail}
      </button>
    );
  }
  return (
    <a href={`mailto:${email}`} className={style}>
      {email}
    </a>
  );
}

function decodeEmail(encoded: string): string {
  return atob(encoded).split("").reverse().join("");
}
