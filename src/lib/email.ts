/** Reverse + base64, so the address never appears as plain text in the static export. */
export function encodeEmail(user: string, domain: string): string {
  return btoa(`${user}@${domain}`.split("").reverse().join(""));
}
