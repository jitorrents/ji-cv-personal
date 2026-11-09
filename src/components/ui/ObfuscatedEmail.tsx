"use client";

import { useState } from "react";
import { labels } from "@/content/labels";

/** The address is only assembled in the browser on demand, so it never appears in the static HTML. */
export function ObfuscatedEmail({ user, domain }: { user: string; domain: string }) {
  const [email, setEmail] = useState<string | null>(null);

  if (!email) {
    return (
      <button
        type="button"
        onClick={() => setEmail(`${user}@${domain}`)}
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
