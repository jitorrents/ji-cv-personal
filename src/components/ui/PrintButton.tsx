"use client";

import { buttonClass } from "./button";

/**
 * Opens the print dialog; "Save as PDF" there produces the A4 document. With
 * `target="one-pager"` (on /cv/) it prints the hidden one-pager instead of the full CV:
 * the choice is a `data-print` attribute on <html>, read by the print CSS in globals.css.
 */
export function PrintButton({
  label,
  target,
  variant = "primary",
}: {
  label: string;
  target?: "one-pager";
  variant?: "primary" | "outline";
}) {
  const print = () => {
    const root = document.documentElement;
    if (target) {
      root.dataset.print = target;
      window.addEventListener("afterprint", () => delete root.dataset.print, { once: true });
    }
    window.print();
  };
  return (
    <button type="button" onClick={print} className={buttonClass[variant]}>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" />
      </svg>
      {label}
    </button>
  );
}
