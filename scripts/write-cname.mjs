// Writes public/CNAME when CUSTOM_DOMAIN is set; removes a stale one otherwise.
import { rmSync, writeFileSync } from "node:fs";

const file = new URL("../public/CNAME", import.meta.url);
const domain = process.env.CUSTOM_DOMAIN?.trim();

if (domain) {
  writeFileSync(file, `${domain}\n`);
  console.log(`CNAME written: ${domain}`);
} else {
  rmSync(file, { force: true });
}
