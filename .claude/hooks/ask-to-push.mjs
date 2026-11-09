#!/usr/bin/env node
// Stop hook: when the turn ends with work not on GitHub (unpushed commits or
// uncommitted changes), ask Claude to offer a push. Never pushes by itself.
import { execSync } from "node:child_process";

let input = "";
for await (const chunk of process.stdin) input += chunk;
const payload = (() => {
  try {
    return JSON.parse(input || "{}");
  } catch {
    return {};
  }
})();

// Already continuing because of this hook: let Claude stop (prevents loops).
if (payload.stop_hook_active) process.exit(0);

const git = (cmd) => {
  try {
    return execSync(`git ${cmd}`, {
      cwd: payload.cwd || process.cwd(),
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
  } catch {
    return null;
  }
};

if (git("rev-parse --is-inside-work-tree") !== "true") process.exit(0);
if (!git("remote")) process.exit(0); // nowhere to push

const branch = git("rev-parse --abbrev-ref HEAD") ?? "HEAD";
const upstream = git("rev-parse --abbrev-ref --symbolic-full-name @{u}");
const ahead = upstream ? Number(git(`rev-list --count ${upstream}..HEAD`) ?? 0) : null;
const dirty = (git("status --porcelain --untracked-files=no") ?? "")
  .split("\n")
  .filter(Boolean).length;

const parts = [];
if (ahead === null) parts.push(`branch "${branch}" has no upstream on GitHub`);
else if (ahead > 0) parts.push(`${ahead} commit(s) on "${branch}" not pushed to ${upstream}`);
if (dirty > 0) parts.push(`${dirty} tracked file(s) with uncommitted changes`);

if (parts.length === 0) process.exit(0);

process.stdout.write(
  JSON.stringify({
    decision: "block",
    reason:
      `Git check: ${parts.join("; ")}. Before ending, ask the user (one short question, e.g. with AskUserQuestion) ` +
      "whether to push the changes to GitHub now (commit first if needed). Do NOT push unless they explicitly say yes.",
  }),
);
