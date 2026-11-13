/** Longest text before the first ": " that still counts as a label. */
const MAX_LABEL = 40;

/**
 * A highlight bullet's text. When it starts with a short label ("Strategy and offering: define…"),
 * the label is shown in semibold. Longer prefixes are treated as plain sentences.
 */
export function Highlight({ text }: { text: string }) {
  const i = text.indexOf(": ");
  if (i <= 0 || i > MAX_LABEL) return <span>{text}</span>;
  return (
    <span>
      <strong className="font-semibold">{text.slice(0, i + 1)}</strong>
      {text.slice(i + 1)}
    </span>
  );
}
