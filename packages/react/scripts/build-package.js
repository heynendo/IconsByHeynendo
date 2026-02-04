const fs = require('fs-extra');
const path = require('path');

const SRC = path.join(__dirname, '../src');
const DIST = path.join(__dirname, '../dist');

async function build() {
  await fs.ensureDir(DIST);
  await fs.copy(SRC, DIST);
  console.log('✅ Package built');
}

build().catch(console.error);
