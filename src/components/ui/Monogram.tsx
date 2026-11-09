import { resume } from "@/content/resume";

const sizes = {
  sm: "size-8 text-xs",
  lg: "size-40 text-5xl sm:size-56 sm:text-6xl",
};

/** Initials badge, used when there is no photo. */
export function Monogram({ size }: { size: keyof typeof sizes }) {
  const initials = resume.basics.name
    .split(" ")
    .map((w) => w[0])
    .join("");
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center rounded-full bg-warm font-display font-bold tracking-wide text-ink ${sizes[size]}`}
    >
      {initials}
    </span>
  );
}
