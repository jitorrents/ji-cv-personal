import Image from "next/image";
import { getContent, type Locale } from "@/content/i18n";
import { asset } from "@/lib/site";

const sizes = {
  sm: "size-8 text-xs",
  lg: "size-40 text-5xl sm:size-56 sm:text-6xl",
};

/** Small round avatar for the header: the photo, or initials when there is none. */
export function Avatar({ locale }: { locale: Locale }) {
  const { r } = getContent(locale);
  const { photo, name } = r.basics;
  if (!photo) return <Monogram size="sm" name={name} />;
  return (
    <Image
      src={asset(photo)}
      alt=""
      width={64}
      height={64}
      loading="eager"
      className="size-8 rounded-full object-cover ring-2 ring-warm"
    />
  );
}

/** Initials badge, used when there is no photo. */
export function Monogram({ size, name }: { size: keyof typeof sizes; name: string }) {
  const initials = name
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
