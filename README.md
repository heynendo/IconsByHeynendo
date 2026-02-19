# Icons by Heynendo

A React-first icon library with beautiful, customizable icons. Get clean SVG exports, ready-to-use JSX components, or full React components with built-in props.

## Features

- **Multiple formats**: SVG, JSX, and React components
- **Fully customizable**: Size, color, rotation, and any SVG props
- **Tree-shakeable**: Import only the icons you need
- **Searchable**: Metadata and keywords for easy discovery
- **Lightweight**: Optimized SVG with no dependencies

## Installation

```bash
npm install icons-by-heynendo
```

## Usage

### React Components (Recommended)

Import and use icons as React components with full customization:

```jsx
import { Home, Notification, ArrowLeft } from "icons-by-heynendo";

function App() {
  return (
    <div>
      <Home size={24} color="currentColor" />
      <Notification size={32} color="#FF5733" rotation={15} />
      <ArrowLeft size={20} className="my-icon" onClick={handleClick} />
    </div>
  );
}
```

### Props

All icon components accept these props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | number | 24 | Width and height in pixels |
| `color` | string | "currentColor" | Fill color (inherits text color by default) |
| `rotation` | number | 0 | Rotation in degrees |
| `...props` | any | - | Any additional SVG props (className, onClick, etc.) |



### Dynamic Colors

```jsx
const iconColor = darkMode ? "#ffffff" : "#000000";
<Notification size={28} color={iconColor} />
```


### Rotating Icons

```jsx
<ArrowLeft rotation={90} />  {/* Points down */}
<ArrowLeft rotation={180} /> {/* Points right */}
<ArrowLeft rotation={270} /> {/* Points up */}
```
