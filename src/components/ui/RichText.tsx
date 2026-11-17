/**
 * Renders a content string with **bold** fragments as <strong> in the link colour (navy on
 * light backgrounds). Used for profile summaries and achievements (web, /cv/, /one-pager/).
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 ? (
          <strong key={i} className="font-semibold text-link">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}
