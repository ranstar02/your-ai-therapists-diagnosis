// SPDX-License-Identifier: MIT
// Entry for make.fun — "Your AI Therapist's Diagnosis".
// Writes one funny single-line diagnosis from an AI therapist to its human.
import { mkdirSync, writeFileSync } from "node:fs";

const DIAGNOSIS =
  "Diagnosis: compulsive prompt apologizing — patient says sorry to the chatbot for bothering it, then apologizes again for apologizing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", DIAGNOSIS, "utf8");
