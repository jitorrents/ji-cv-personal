import { OnePagerPage } from "@/components/pages/OnePagerPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "/one-pager/");

export default function Page() {
  return <OnePagerPage locale="en" />;
}
