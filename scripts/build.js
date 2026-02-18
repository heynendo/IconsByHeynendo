import fs from "fs";
import path from "path";
import { readIcons } from "./utils/readIcons.js";
import { parseSvg } from "./utils/parseSvg.js";
import { normalizeName } from "./utils/normalizeName.js";
import { validateIcons } from "./utils/validateIcons.js";
import { buildSvgIcons } from "./utils/buildSvgIcons.js";
import { buildJsxIcons } from "./utils/buildJsxIcons.js";
import { buildJsxIndex } from "./utils/buildJsxIndex.js";
import { buildReactIcons } from "./utils/buildReactIcons.js";
import { buildIconData } from "./utils/buildIconData.js";
import { cleanSvg } from "./utils/cleanSvg.js";

// Clean data directory before building
const dataDir = path.join(process.cwd(), "data");
console.log("Cleaning build artifacts...\n");
if (fs.existsSync(dataDir)) {
  fs.rmSync(dataDir, { recursive: true, force: true });
  console.log("✓ Removed /data directory\n");
}

console.log("Building icons...\n");

try {
  const rawIcons = readIcons();
  const parsed = rawIcons.map(parseSvg);
  const normalized = parsed.map(normalizeName);
  
  // Clean SVG content (remove width, height, and fill attributes)
  const cleaned = normalized.map(icon => ({
    ...icon,
    content: cleanSvg(icon.content)
  }));

  const validation = validateIcons(cleaned);

  if (!validation.success) {
    console.error("Build failed:");
    validation.errors.forEach(e => console.error(" -", e));
    process.exit(1);
  }

  buildSvgIcons(cleaned);
  buildJsxIcons(cleaned);
  buildJsxIndex(cleaned);
  buildReactIcons(cleaned);
  buildIconData(cleaned);

  console.log("\nBuild successful");
  console.log(`Icons processed: ${cleaned.length}`);
} catch (err) {
  console.error("Fatal build error:");
  console.error(err);
  process.exit(1);
}