const fs = require('fs-extra');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '../icons');
const METADATA_FILE = path.join(__dirname, '../metadata/icons-metadata.json');

function inferCategory(name) {
  const cats = {
    navigation: ['home', 'menu', 'back'],
    arrows: ['arrow', 'chevron'],
    interface: ['search', 'settings', 'close'],
  };
  for (const [cat, keywords] of Object.entries(cats)) {
    if (keywords.some(k => name.includes(k))) return cat;
  }
  return 'general';
}

async function generateMetadata() {
  let data = { icons: [], categories: [] };
  
  if (await fs.pathExists(METADATA_FILE)) {
    data = await fs.readJson(METADATA_FILE);
  }
  
  const existing = new Set(data.icons.map(i => i.name));
  const files = (await fs.readdir(ICONS_DIR)).filter(f => f.endsWith('.svg'));
  
  for (const file of files) {
    const name = file.replace('.svg', '');
    if (existing.has(name)) continue;
    
    const category = inferCategory(name);
    data.icons.push({
      name,
      fileName: file,
      category,
      tags: [name],
      description: `${name} icon`
    });
    console.log(`✅ ${name}`);
  }
  
  data.categories = [...new Set(data.icons.map(i => i.category))];
  await fs.ensureDir(path.dirname(METADATA_FILE));
  await fs.writeJson(METADATA_FILE, data, { spaces: 2 });
  
  console.log(`\n✨ Metadata updated`);
}

generateMetadata().catch(console.error);
