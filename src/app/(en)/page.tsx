import { HomePage } from "@/components/pages/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "/");

export default function Page() {
  return <HomePage locale="en" />;
}
