const fs = require('fs-extra');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '../icons');
const SVG_DIR = path.join(__dirname, '../dist/svg');
const OUTPUT_DIR = path.join(__dirname, '../dist/jsx');

function toPascalCase(fileName) {
  return fileName
    .replace('.svg', '')
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

function extractTags(svgContent) {
  const descMatch = svgContent.match(/<desc>([^<]+)<\/desc>/);
  return descMatch ? descMatch[1].split(',').map(t => t.trim()) : [];
}

function svgToJsx(svg) {
  return svg
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin');
}

async function buildJSX() {
  await fs.ensureDir(OUTPUT_DIR);
  
  const files = (await fs.readdir(SVG_DIR)).filter(f => f.endsWith('.svg'));
  
  for (const file of files) {
    const name = toPascalCase(file);
    
    // Read from both source (for tags) and optimized (for SVG)
    const sourceIcon = await fs.readFile(path.join(ICONS_DIR, file), 'utf-8');
    const svg = await fs.readFile(path.join(SVG_DIR, file), 'utf-8');
    
    const tags = extractTags(sourceIcon);
    
    const jsx = `export const ${name}Jsx = ${svgToJsx(svg)};

${name}Jsx.tags = ${JSON.stringify(tags)};
`;
    
    await fs.writeFile(path.join(OUTPUT_DIR, `${name}.jsx`), jsx);
    console.log(`✅ ${name}.jsx (${tags.length} tags)`);
  }
  
  console.log(`\n✨ Created ${files.length} JSX files`);
}

buildJSX().catch(console.error);