import fs from "fs";
import path from "path";

function generateJsxCode(icon) {
  return `export default function ${icon.pascalName}({
  size = 24,
  color = "currentColor",
  rotation = 0,
  ...props
}) {
  return (
    ${icon.content
      .replace("<svg", `<svg width={size} height={size} fill={color} style={{ transform: \`rotate(\${rotation}deg)\` }} {...props}`)
      .replace(/<!--.*?-->/g, "")}
  );
}`;
}

function generateReactCode(icon) {
  return `import { ${icon.pascalName} } from "icons-by-heynendo";

export default function ${icon.pascalName}Example() {
  return (
    <${icon.pascalName}
      size={20}
      color="#000000"
    />
  );
}`;
}

export function buildIconData(icons) {
  const outPath = path.resolve("data/icon-data.json");

  const data = icons.map(icon => {
    // Combine all keywords and remove duplicates using Set
    const allKeywords = [
      icon.name,
      ...icon.name.split("-"),
      ...icon.keywords,
    ];
    const uniqueKeywords = [...new Set(allKeywords)];

    return {
      name: icon.name,
      pascalName: icon.pascalName,
      keywords: uniqueKeywords,
      svg: icon.content,
      jsx: generateJsxCode(icon),
      react: generateReactCode(icon)
    };
  });

  fs.writeFileSync(outPath, JSON.stringify(data, null, 2));
  console.log(`✓ Created icon-data.json with code snippets`);
}