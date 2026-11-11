import Image from "next/image";
import { asset } from "@/lib/site";

const sizes = {
  sm: { box: "size-10 rounded-xl p-1", text: "text-xs", px: 80 },
  md: { box: "size-14 rounded-2xl p-1.5", text: "text-sm", px: 112 },
};

/**
 * Square company logo on a white tile, like LinkedIn. Without a logo it shows the
 * company's initials. Decorative: the company name is always shown as text nearby.
 */
export function CompanyLogo({
  company,
  logo,
  size = "md",
  className = "",
}: {
  company: string;
  logo?: string;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const s = sizes[size];
  const initials = company
    .replace(/[^\p{L}\s]/gu, "")
    .split(/\s+/)
    .filter((w) => w.length > 1 || /\p{Lu}/u.test(w))
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center bg-white ${s.box} ${className}`}
    >
      {logo ? (
        <Image
          src={asset(logo)}
          alt=""
          width={s.px}
          height={s.px}
          className="size-full object-contain"
        />
      ) : (
        <span
          className={`grid size-full place-items-center rounded-[inherit] bg-stone font-display font-bold text-white ${s.text}`}
        >
          {initials}
        </span>
      )}
    </span>
  );
}
