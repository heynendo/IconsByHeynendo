# SETUP INSTRUCTIONS (Windows)

## ✅ What's Different (Windows-Optimized)

1. **No bundlers** - Simplified package build (no Rollup/Webpack)
2. **Pure Node scripts** - All commands use `node` directly
3. **--prefix flag** - Windows-compatible npm commands
4. **Minimal dependencies** - Only fs-extra and svgo

## 🚀 Step-by-Step Setup

### 1. Copy Files to Your Repository

Extract all files to your `IconsByHeynendo` folder.

### 2. Install Root Dependencies

```bash
npm install
```

This installs:
- `svgo` - SVG optimization
- `fs-extra` - File operations

### 3. Build Icon Files

```bash
npm run build:all
```

This creates:
- `dist/svg/` - Optimized SVGs
- `dist/jsx/` - JSX exports
- `dist/react/` - React components

### 4. Setup NPM Package

```bash
npm run package:setup
```

This installs package dependencies (just fs-extra).

### 5. Build Package

```bash
npm run package:build
```

This:
- Copies React components to `packages/react/src/`
- Copies to `packages/react/dist/` for distribution

### 6. Link Package for Local Testing

```bash
npm run package:link
```

### 7. Use in Your Frontend

```bash
cd frontend
npm link icons-by-heynendo
```

Now in your React code:
```jsx
import { Menu, ArrowDown } from 'icons-by-heynendo';
```

## 📝 Adding More Icons

```bash
# 1. Add SVG to icons/ folder

# 2. Generate metadata (optional)
npm run metadata

# 3. Build
npm run build:all

# 4. Update package
npm run package:build
```

## 🔧 If Something Goes Wrong

**Start fresh:**
```bash
# Delete node_modules
rmdir /s /q node_modules
rmdir /s /q packages\react\node_modules

# Reinstall
npm install
npm run package:setup
```

**Rebuild everything:**
```bash
npm run build:all
npm run package:build
```

## ✨ Key Commands Reference

| Command | What It Does |
|---------|-------------|
| `npm run build:all` | Build SVG/JSX/React files |
| `npm run metadata` | Generate metadata from SVGs |
| `npm run package:setup` | Install package dependencies |
| `npm run package:build` | Build npm package |
| `npm run package:link` | Link for local testing |

## 📦 Publishing to NPM (When Ready)

```bash
cd packages\react
npm publish
```

---

**Everything is Windows-compatible. No more issues!**
