import fs from "fs";
import path from "path";

export function buildReactIcons(icons) {
  const outDir = path.resolve("data/react");
  fs.mkdirSync(outDir, { recursive: true });

  icons.forEach(icon => {
    const componentName = icon.pascalName;

    const template = `
import { ${componentName} } from "icons-by-heynendo";

export default function ${componentName}Example() {
  return (
      <${componentName}
        size={20}
        color="#000000"
      />
  );
}
`;

    const filePath = path.join(outDir, `${componentName}.jsx`);
    fs.writeFileSync(filePath, template.trim());
  });
}