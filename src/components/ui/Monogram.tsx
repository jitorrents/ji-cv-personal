import { resume } from "@/content/resume";

const sizes = {
  sm: "size-8 text-xs bg-accent text-accent-fg",
  lg: "size-28 text-3xl sm:size-36 sm:text-4xl bg-warm text-white shadow-xl shadow-warm/25 ring-8 ring-warm-soft",
};

/** Initials badge, used instead of a photo. */
export function Monogram({ size }: { size: keyof typeof sizes }) {
  const initials = resume.basics.name
    .split(" ")
    .map((w) => w[0])
    .join("");
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center rounded-full font-display font-semibold tracking-wide ${sizes[size]}`}
    >
      {initials}
    </span>
  );
}
