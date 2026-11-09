import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { resume } from "@/content/resume";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const { name, headline, summary } = resume.basics;

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: `${name} — ${headline}`,
  description: summary,
  alternates: { canonical: "./" },
  openGraph: { type: "profile", title: name, description: headline, url: "./" },
  twitter: { card: "summary_large_image", title: name, description: headline },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfa" },
    { media: "(prefers-color-scheme: dark)", color: "#111215" },
  ],
};

// Runs before paint so the page never flashes the wrong theme.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={body.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
