const fs = require('fs-extra');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '../icons');
const SVG_DIR = path.join(__dirname, '../dist/svg');
const OUTPUT_DIR = path.join(__dirname, '../dist/react');

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

function svgToReact(svg, name, tags) {
  const match = svg.match(/<svg([^>]*)>([\s\S]*)<\/svg>/);
  if (!match) throw new Error('Invalid SVG');
  
  const viewBoxMatch = match[1].match(/viewBox="([^"]*)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
  
  let inner = match[2]
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin');

  return `import React from 'react';

const ${name} = ({ size = 24, color = 'currentColor', rotation = 0, className = '', style = {}, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="${viewBox}"
    fill={color}
    className={className}
    style={{ ...style, transform: rotation ? \`rotate(\${rotation}deg)\` : style.transform }}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >${inner}</svg>
);

${name}.tags = ${JSON.stringify(tags)};

export default ${name};
`;
}

async function buildReact() {
  await fs.ensureDir(OUTPUT_DIR);
  
  const files = (await fs.readdir(SVG_DIR)).filter(f => f.endsWith('.svg'));
  const components = [];
  
  for (const file of files) {
    const name = toPascalCase(file);
    
    // Read from both source (for tags) and optimized (for SVG)
    const sourceIcon = await fs.readFile(path.join(ICONS_DIR, file), 'utf-8');
    const svg = await fs.readFile(path.join(SVG_DIR, file), 'utf-8');
    
    const tags = extractTags(sourceIcon);
    const component = svgToReact(svg, name, tags);
    
    await fs.writeFile(path.join(OUTPUT_DIR, `${name}.jsx`), component);
    components.push(name);
    console.log(`✅ ${name}.jsx (${tags.length} tags)`);
  }
  
  // Generate index with search function
  const indexLines = [
    ...components.map(n => `export { default as ${n} } from './${n}.jsx';`),
    '',
    '// Search icons by tag or name',
    'export function searchIcons(query) {',
    '  const q = query.toLowerCase();',
    '  const results = [];',
    '  ',
    ...components.map(n => `  const ${n} = require('./${n}.jsx').default;`),
    '  ',
    ...components.map(n => 
      `  if (${n}.tags) {
    const matches = ${n}.tags.some(tag => tag.toLowerCase().includes(q)) || 
                    '${n}'.toLowerCase().includes(q);
    if (matches) results.push({ name: '${n}', component: ${n}, tags: ${n}.tags });
  }`
    ),
    '  ',
    '  return results;',
    '}',
    ''
  ];
  
  await fs.writeFile(path.join(OUTPUT_DIR, 'index.js'), indexLines.join('\n'));
  
  console.log(`\n✨ Created ${components.length} React components with searchIcons()`);
}

buildReact().catch(console.error);