import type { Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { getContent, type Locale } from "@/content/i18n";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "@/app/globals.css";

const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["600", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#242323" },
  ],
};

// Runs before paint so the page never flashes the wrong theme.
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}d.dataset.theme=t}catch(e){}})()`;

/** <html> shell shared by the English and Spanish root layouts. */
export function RootDocument({
  locale,
  chrome = true,
  children,
}: {
  locale: Locale;
  /** false = no header/footer (used by the 404 page). */
  chrome?: boolean;
  children: React.ReactNode;
}) {
  const { t } = getContent(locale);
  return (
    <html lang={locale} className={`${body.variable} ${heading.variable}`} suppressHydrationWarning>
      {/* App Router root layout markup; the rule targets the Pages Router (this file lives outside app/). */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-clip font-sans antialiased">
        {chrome && (
          <a
            href="#main"
            className="sr-only z-50 rounded-full bg-warm px-4 py-2 font-semibold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
          >
            {t.skipToContent}
          </a>
        )}
        {chrome && <Header locale={locale} />}
        <main id="main" className="flex-1">
          {children}
        </main>
        {chrome && <Footer locale={locale} />}
      </body>
    </html>
  );
}
