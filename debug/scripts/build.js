import { readIcons } from "./utils/readIcons.js";
import { parseSvg } from "./utils/parseSvg.js";
import { normalizeName } from "./utils/normalizeName.js";
import { validateIcons } from "./utils/validateIcons.js";
import { buildSvgIcons } from "./utils/buildSvgIcons.js";
import { buildJsxIcons } from "./utils/buildJsxIcons.js";
import { buildJsxIndex } from "./utils/buildJsxIndex.js";
import { buildReactIcons } from "./utils/buildReactIcons.js";
import { buildIconData } from "./utils/buildIconData.js";

console.log("Building icons...\n");

try {
  const rawIcons = readIcons();
  const parsed = rawIcons.map(parseSvg);
  const normalized = parsed.map(normalizeName);

  const validation = validateIcons(normalized);

  if (!validation.success) {
    console.error("Build failed:");
    validation.errors.forEach(e => console.error(" -", e));
    process.exit(1);
  }

  buildSvgIcons(normalized);
  buildJsxIcons(normalized);
  buildJsxIndex(normalized);  // ← ADD THIS LINE
  buildReactIcons(normalized);
  buildIconData(normalized);

  console.log("\nBuild successful");
  console.log(`Icons processed: ${normalized.length}`);
} catch (err) {
  console.error("Fatal build error:");
  console.error(err);
  process.exit(1);
}