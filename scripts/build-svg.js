const fs = require('fs-extra');
const path = require('path');
const { optimize } = require('svgo');
const svgoConfig = require('../svgo.config.js');

const ICONS_DIR = path.join(__dirname, '../icons');
const OUTPUT_DIR = path.join(__dirname, '../dist/svg');

function extractTags(svgContent) {
  const descMatch = svgContent.match(/<desc>([^<]+)<\/desc>/);
  return descMatch ? descMatch[1].split(',').map(t => t.trim()) : [];
}

async function buildSVGs() {
  await fs.ensureDir(OUTPUT_DIR);
  
  const files = (await fs.readdir(ICONS_DIR)).filter(f => f.endsWith('.svg'));
  
  for (const file of files) {
    const svgContent = await fs.readFile(path.join(ICONS_DIR, file), 'utf-8');
    const tags = extractTags(svgContent);
    
    // Optimize SVG (this will remove the desc tag)
    const result = optimize(svgContent, svgoConfig);
    
    await fs.writeFile(path.join(OUTPUT_DIR, file), result.data);
    console.log(`✅ ${file} (${tags.length} tags)`);
  }
  
  console.log(`\n✨ Optimized ${files.length} icons`);
}

buildSVGs().catch(console.error);