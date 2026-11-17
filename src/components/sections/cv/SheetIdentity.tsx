import Image from "next/image";
import type { Resume } from "@/content/types";
import { asset } from "@/lib/site";

/** Top of the A4 sidebar: square photo, name, headline and the tagline with an accent bar. */
export function SheetIdentity({ basics }: { basics: Resume["basics"] }) {
  const { name, headline, tagline, photo } = basics;
  return (
    <div>
      {photo && (
        <Image
          src={asset(photo)}
          alt=""
          width={320}
          height={320}
          sizes="35mm"
          loading="eager"
          className="aspect-square w-[35mm] object-cover"
        />
      )}
      <h1 className="mt-[5mm] font-display text-[17pt] leading-[1.1] font-bold text-title">
        {name}
      </h1>
      <p className="mt-[1.8mm] text-[7.8pt] text-muted">{headline}</p>
      {tagline && (
        <p className="mt-[3mm] border-l-[0.9mm] border-warm pl-[2.4mm] text-[7.8pt] leading-[1.3] font-bold text-title">
          {tagline}
        </p>
      )}
    </div>
  );
}
