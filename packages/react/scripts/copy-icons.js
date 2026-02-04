const fs = require('fs-extra');
const path = require('path');

const SOURCE = path.join(__dirname, '../../../dist/react');
const TARGET = path.join(__dirname, '../src');

async function copy() {
  if (!await fs.pathExists(SOURCE)) {
    console.error('❌ Run "npm run build:all" from root first');
    process.exit(1);
  }
  
  await fs.ensureDir(TARGET);
  await fs.copy(SOURCE, TARGET);
  console.log('✅ Icons copied to package');
}

copy().catch(console.error);
