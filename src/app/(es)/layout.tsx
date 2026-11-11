import { RootDocument } from "@/components/layout/RootDocument";

export { viewport } from "@/components/layout/RootDocument";

/** Root layout for the Spanish pages (<html lang="es">). */
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="es">{children}</RootDocument>;
}
