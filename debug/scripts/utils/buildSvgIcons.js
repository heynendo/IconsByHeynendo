import fs from "fs";
import path from "path";

export function buildSvgIcons(icons) {
  const outDir = path.resolve("data/svg");
  fs.mkdirSync(outDir, { recursive: true });

  icons.forEach(icon => {
    const outPath = path.join(outDir, icon.file);
    fs.writeFileSync(outPath, icon.content);
  });
}
