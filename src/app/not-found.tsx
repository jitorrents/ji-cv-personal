import Link from "next/link";
import { buttonClass } from "@/components/ui/button";
import { labels } from "@/content/labels";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="font-display text-7xl font-bold text-accent">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold">{labels.notFoundTitle}</h1>
      <p className="mt-3 text-muted">{labels.notFoundBody}</p>
      <Link href="/" className={`${buttonClass.primary} mt-8`}>
        {labels.backHome}
      </Link>
    </div>
  );
}
