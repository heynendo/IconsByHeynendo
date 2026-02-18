# Project Documentation

Internal documentation for maintainers and contributors of icons-by-heynendo.

## Architecture Overview

This project uses a **build-time generation** approach where SVG files are the single source of truth. All other formats (JSX components, React examples, metadata) are automatically generated from the source SVGs.

### Design Philosophy

1. **SVG as source of truth** - All icons start as clean SVG files
2. **Multiple output formats** - Generate JSX, React, and metadata from one source
3. **Built-in searchability** - Extract keywords from SVG comments
4. **Zero runtime dependencies** - Everything is pre-built and optimized
5. **Developer-friendly** - Simple workflow to add new icons

## Project Structure

```
icons-by-heynendo/
├── icons/                  # Source SVG files (single source of truth)
│   ├── home.svg
│   ├── notification.svg
│   └── arrow-left.svg
│
├── data/                   # Generated files (git-ignored, created on build)
│   ├── svg/               # Cleaned SVG exports
│   ├── jsx/               # JSX components with props
│   │   └── index.js       # Barrel export for all icons
│   ├── react/             # React usage examples
│   └── icon-data.json     # Metadata for search/discovery
│
├── scripts/
│   ├── build.js           # Main build orchestrator
│   ├── clean.js           # Removes generated files
│   └── utils/             # Build pipeline utilities
│       ├── readIcons.js          # Reads SVG files from /icons
│       ├── parseSvg.js           # Extracts SVG content
│       ├── extractMetadata.js    # Gets search keywords
│       ├── normalizeName.js      # Converts to PascalCase
│       ├── validateIcons.js      # Checks for errors
│       ├── buildSvgIcons.js      # Generates clean SVGs
│       ├── buildJsxIcons.js      # Generates JSX components
│       ├── buildJsxIndex.js      # Creates barrel exports
│       ├── buildReactIcons.js    # Generates usage examples
│       └── buildIconData.js      # Creates metadata JSON
│
├── package.json
└── README.md              # User-facing documentation
```

## Build Pipeline

### Step-by-step Process

```
1. readIcons()      → Scan /icons directory for .svg files
                    ↓
2. parseSvg()       → Extract SVG content and metadata
                    ↓
3. normalizeName()  → Convert filenames to PascalCase component names
                    ↓
4. validateIcons()  → Check for duplicates, invalid names, malformed SVGs
                    ↓
5. buildSvgIcons()  → Generate cleaned SVG files in /data/svg
                    ↓
6. buildJsxIcons()  → Generate JSX components with props in /data/jsx
                    ↓
7. buildJsxIndex()  → Create index.js barrel export
                    ↓
8. buildReactIcons() → Generate React usage examples in /data/react
                    ↓
9. buildIconData()  → Create icon-data.json with all metadata
```

### What Each Utility Does

**readIcons.js**
- Reads all `.svg` files from `/icons` directory
- Returns array of `{ name, content }` objects

**parseSvg.js**
- Extracts viewBox, paths, and search comments from SVG
- Strips unnecessary attributes
- Example input: `<svg viewBox="0 0 24 24">...</svg>`

**extractMetadata.js**
- Parses `<!-- search: keyword1, keyword2 -->` comments
- Generates automatic keywords from filename
- Example: `arrow-left.svg` → keywords: `["arrow-left", "arrow", "left"]`

**normalizeName.js**
- Converts filenames to PascalCase component names
- Example: `arrow-left.svg` → `ArrowLeft`

**validateIcons.js**
- Checks for duplicate names
- Validates SVG structure
- Ensures all icons have valid viewBox
- Returns success status and error list

**buildSvgIcons.js**
- Outputs cleaned SVG files to `/data/svg/`
- Preserves original filename (kebab-case)

**buildJsxIcons.js**
- Generates functional JSX components with props:
  - `size` (default: 24)
  - `color` (default: "currentColor")
  - `rotation` (default: 0)
  - Spread props for additional SVG attributes

**buildJsxIndex.js**
- Creates barrel export file at `/data/jsx/index.js`
- Exports all icons for easy importing

**buildReactIcons.js**
- Generates React usage examples showing import syntax
- Demonstrates common prop usage
- Saved to `/data/react/`

**buildIconData.js**
- Aggregates all icon data into single JSON file
- Includes: name, PascalCase name, keywords, SVG, JSX, React example
- Used for search functionality and documentation

## Adding New Icons

### Quick Start

1. **Create SVG file** in `/icons` directory
   - Use lowercase kebab-case: `arrow-right.svg`, `user-profile.svg`
   - Must have `viewBox="0 0 24 24"` attribute
   - Keep it simple and clean

2. **Add search keywords** (optional but recommended)
   ```xml
   <!-- search: arrow, right, next, forward -->
   <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="..." />
   </svg>
   ```

3. **Run build**
   ```bash
   npm run build
   ```

4. **Verify output**
   - Check `/data/jsx/YourIcon.jsx` was created
   - Verify it appears in `/data/jsx/index.js`
   - Confirm metadata in `/data/icon-data.json`

### SVG Guidelines

**Required:**
- Must have `viewBox="0 0 24 24"` attribute
- Must use valid XML/SVG syntax
- Should use `<path>` elements for shapes

**Recommended:**
- Use 24x24 viewBox for consistency
- Optimize paths (remove unnecessary points)
- Use single color (will be customizable via props)
- Avoid embedded styles or transforms
- Keep file size small

**Example of good SVG:**
```xml
<!-- search: settings, gear, config -->
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
</svg>
```

## Development Workflow

### Local Development

```bash
# Install dependencies
npm install

# Clean previous build
npm run clean

# Build icons
npm run build

# Test in a local project
npm link
cd ../your-test-project
npm link icons-by-heynendo
```

### Before Committing

1. Run `npm run build` to ensure everything generates correctly
2. Check for build errors or validation warnings
3. Verify new icons appear in all output formats

## Publishing Process

### Version Bumping

Follow semantic versioning:
- **Patch** (1.0.x): Bug fixes, icon tweaks
- **Minor** (1.x.0): New icons, non-breaking features
- **Major** (x.0.0): Breaking changes to component API

Update version in `package.json`:
```json
"version": "1.2.3"
```

### Manual Publishing

```bash
npm run build        # Ensures latest build
npm publish          # Requires npm login
```

### Automated Publishing (GitHub Actions) [coming soon]

When a version tag is pushed:
```bash
git tag v1.2.3
git push --tags
```

GitHub Actions will automatically:
1. Run clean build
2. Run validation
3. Publish to NPM
