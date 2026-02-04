# IconsByHeynendo

Professional SVG icon library with React components.

## 📁 Project Structure

```
IconsByHeynendo/
├── icons/              # Your SVG source files
├── metadata/           # Icon metadata (search tags, categories)
├── dist/              # Generated files (committed to git)
│   ├── svg/          # Optimized SVGs
│   ├── jsx/          # JSX exports
│   └── react/        # React components
├── packages/react/    # NPM package
├── scripts/          # Build scripts
└── frontend/         # Your React frontend
```

## 🚀 Quick Start

### 1. Initial Setup

```bash
# Install dependencies
npm install

# Add SVG files to icons/ folder
# (menu.svg and arrow-down.svg are included as examples)

# Build everything
npm run build:all
```

### 2. Build the NPM Package

```bash
# Install package dependencies
npm run package:setup

# Build the package
npm run package:build
```

### 3. Use Locally in Your Frontend

```bash
# Link the package
npm run package:link

# In your frontend folder:
cd frontend
npm link icons-by-heynendo
```

Now import in your React code:
```jsx
import { Menu, ArrowDown } from 'icons-by-heynendo';

function App() {
  return <Menu size={24} color="#000" />;
}
```

## 📝 Commands

### Build Commands
- `npm run build:all` - Build SVG, JSX, and React files
- `npm run build:svg` - Only optimize SVGs
- `npm run build:jsx` - Only create JSX files
- `npm run build:react` - Only create React components

### Metadata
- `npm run metadata` - Auto-generate metadata from SVG files

### Package Commands
- `npm run package:setup` - Install package dependencies
- `npm run package:build` - Build the npm package
- `npm run package:link` - Link package for local testing

## ➕ Adding New Icons

1. Add SVG file to `icons/` folder
2. Run `npm run metadata` (optional - auto-generates basic metadata)
3. Edit `metadata/icons-metadata.json` to add better tags
4. Run `npm run build:all`
5. Run `npm run package:build`
6. Commit everything

## 🏷️ Icon Metadata

Edit `metadata/icons-metadata.json`:

```json
{
  "name": "icon-name",
  "fileName": "icon-name.svg",
  "category": "interface",
  "tags": ["search", "alternative", "names"],
  "description": "Icon description"
}
```

Tags enable users to find icons by alternative names (e.g., "burger" finds "menu").

## 🎨 Icon Props

All React components accept:

```jsx
<Menu
  size={24}              // number | string
  color="currentColor"   // any CSS color
  rotation={0}           // degrees
  className=""           // CSS classes
  style={{}}            // inline styles
/>
```

## 📦 Publishing to NPM

When ready to publish:

```bash
# Login to npm (first time only)
npm login

# Publish
cd packages/react
npm publish
```

## 🔧 Troubleshooting

**"Module not found" errors:**
- Make sure you ran `npm run build:all` first
- Then run `npm run package:build`

**Package updates not showing:**
- Unlink: `npm unlink icons-by-heynendo` (in frontend)
- Rebuild: `npm run package:build` (in root)
- Relink: `npm run package:link` (in root)
- Link again: `npm link icons-by-heynendo` (in frontend)

## 📄 License

MIT © Heynendo
