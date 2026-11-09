import Link from "next/link";
import { buttonClass } from "@/components/ui/button";
import { labels } from "@/content/labels";

export default function NotFound() {
  return (
    <div className="tone-stone bg-band text-fg">
      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center px-4 py-20 sm:px-6">
        <p className="font-display text-8xl font-bold text-title">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold">{labels.notFoundTitle}</h1>
        <p className="mt-3 text-muted">{labels.notFoundBody}</p>
        <Link href="/" className={`${buttonClass.primary} mt-8`}>
          {labels.backHome}
        </Link>
      </div>
    </div>
  );
}
