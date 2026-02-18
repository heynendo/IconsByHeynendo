import fs from "fs";
import path from "path";

export function buildJsxIcons(icons) {
  const outDir = path.resolve("data/jsx");
  fs.mkdirSync(outDir, { recursive: true });

  icons.forEach(icon => {
    // Remove comments from the already-cleaned SVG
    const contentWithoutComments = icon.content.replace(/<!--.*?-->/g, "");
    
    // Add dynamic props to the opening svg tag
    const jsx = `
export default function ${icon.pascalName}({
  size = 24,
  color = "currentColor",
  rotation = 0,
  ...props
}) {
  return (
    ${contentWithoutComments.replace(
      "<svg",
      `<svg width={size} height={size} fill={color} style={{ transform: \`rotate(\${rotation}deg)\` }} {...props}`
    )}
  );
}
`;

    const outPath = path.join(outDir, `${icon.pascalName}.jsx`);
    fs.writeFileSync(outPath, jsx.trim());
  });
}