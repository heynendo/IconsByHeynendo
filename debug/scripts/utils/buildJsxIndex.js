import fs from "fs";
import path from "path";

export function buildJsxIndex(icons) {
  const outDir = path.resolve("data/jsx");
  
  // Just export individual icons, no AllIcons object
  const exports = icons
    .map(icon => `export { default as ${icon.pascalName} } from "./${icon.pascalName}.jsx";`)
    .join("\n");
  
  fs.writeFileSync(path.join(outDir, "index.js"), exports);
  console.log(`✓ Created index.js in data/jsx/`);
}