import { RichText } from "@/components/ui/RichText";

/** Profile summary as the untitled lead paragraph of an A4 sheet's main column (**bold** in navy). */
export function SummaryLead({ text }: { text: string }) {
  return (
    <p className="text-pretty">
      <RichText text={text} />
    </p>
  );
}
