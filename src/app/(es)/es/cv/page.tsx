import { CvPage } from "@/components/pages/CvPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("es", "/cv/");

export default function Page() {
  return <CvPage locale="es" />;
}
