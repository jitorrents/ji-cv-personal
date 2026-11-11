import { RootDocument } from "@/components/layout/RootDocument";

export { viewport } from "@/components/layout/RootDocument";

/** Root layout for the English pages (<html lang="en">). */
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
