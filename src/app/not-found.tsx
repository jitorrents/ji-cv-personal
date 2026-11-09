import Link from "next/link";
import { labels } from "@/content/labels";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-4">
      <p className="text-sm font-medium text-accent">404</p>
      <h1 className="mt-2 text-3xl font-semibold">{labels.notFoundTitle}</h1>
      <p className="mt-3 text-muted">{labels.notFoundBody}</p>
      <Link href="/" className="mt-6 font-medium text-accent underline underline-offset-4">
        {labels.backHome}
      </Link>
    </main>
  );
}
