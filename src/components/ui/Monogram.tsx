import { resume } from "@/content/resume";

const sizes = {
  sm: "size-8 text-xs",
  lg: "size-28 text-3xl sm:size-36 sm:text-4xl",
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
      className={`grid shrink-0 place-items-center rounded-full bg-accent font-display font-semibold tracking-wide text-accent-fg ${sizes[size]}`}
    >
      {initials}
    </span>
  );
}
