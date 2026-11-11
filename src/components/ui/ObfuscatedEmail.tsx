"use client";

import { useEffect, useState } from "react";

/**
 * Receives the address encoded (see `encodeEmail`), so neither the HTML nor the
 * React payload contains it. It is decoded in the browser on click, or just
 * before printing so the PDF CV includes it.
 */
export function ObfuscatedEmail({
  encoded,
  label,
  className = "",
}: {
  encoded: string;
  /** Text of the reveal button ("Show email address"). */
  label: string;
  className?: string;
}) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const reveal = () => setEmail(decodeEmail(encoded));
    window.addEventListener("beforeprint", reveal);
    return () => window.removeEventListener("beforeprint", reveal);
  }, [encoded]);

  const style = `font-semibold text-link underline underline-offset-4 ${className}`;
  if (!email) {
    return (
      <button type="button" onClick={() => setEmail(decodeEmail(encoded))} className={style}>
        {label}
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
