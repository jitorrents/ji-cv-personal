"use client";

import { useState } from "react";
import { labels } from "@/content/labels";

/**
 * Receives the address encoded (see `encodeEmail`), so neither the HTML nor the
 * React payload contains it. It is only decoded in the browser on click.
 */
export function ObfuscatedEmail({ encoded }: { encoded: string }) {
  const [email, setEmail] = useState<string | null>(null);

  if (!email) {
    return (
      <button
        type="button"
        onClick={() => setEmail(decodeEmail(encoded))}
        className="text-accent underline underline-offset-4"
      >
        {labels.showEmail}
      </button>
    );
  }
  return (
    <a href={`mailto:${email}`} className="text-accent underline underline-offset-4">
      {email}
    </a>
  );
}

function decodeEmail(encoded: string): string {
  return atob(encoded).split("").reverse().join("");
}
