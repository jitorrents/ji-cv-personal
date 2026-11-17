import { OnePagerPage } from "@/components/pages/OnePagerPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("es", "/one-pager/");

export default function Page() {
  return <OnePagerPage locale="es" />;
}
