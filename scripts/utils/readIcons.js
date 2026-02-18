import fs from "fs";
import path from "path";

export function readIcons() {
  const iconDir = path.resolve("icons");
  const files = fs.readdirSync(iconDir);

  return files
    .filter(f => f.endsWith(".svg"))
    .map(file => {
      const filePath = path.join(iconDir, file);
      const content = fs.readFileSync(filePath, "utf8");

      return {
        file,
        content,
      };
    });
}
