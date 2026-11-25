// Funniest Autocorrect Fail — entry program.
//
// Writes one original one-line autocorrect fail to /output/entry.txt.
// The line is a hiring follow-up email where autocorrect swaps one word
// for a far more embarrassing one, and the sender has to correct it
// in the same breath. It is 157 characters, inside the 1-199 gate,
// and the shouty correction is what sells it as a real slip rather
// than a written joke. Node 22, no dependencies, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Dear hiring team, thank you for today, I'm a very orgasmic person who loves a challenge, I meant ORGANISED, my references can confirm it, kind regards, Alex.";

// The gate requires 1-199 characters, a single line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 199) {
  throw new Error(
    `entry must be 1-199 characters, got ${ENTRY.length}`,
  );
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
