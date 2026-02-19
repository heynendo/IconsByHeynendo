import { useState } from 'react'
import '../styles/docs.css'
import { motion, AnimatePresence } from 'framer-motion'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Badge from '../components/Badge'

export default function Docs(){


    const [selected, setSelected] = useState('about')

     const aboutContent = (
            <>
                <h2>About the Library</h2>
                <div className='break' />
                <p>This project is a React-first icon library designed to give developers beautiful, customizable icons without the bloat. This was built for SVG exports, ready-to-use JSX components, and full React components with built-in props.</p>
                <p>This library is perfect for React applications, static sites, design systems, or any project that needs scalable vector icons. With built-in support for size, color, rotation, and any additional SVG props, you can customize icons to fit your exact needs. The library is fully tree-shakeable, meaning you only bundle the icons you actually use.</p>
                
                <h3>Key Features</h3>
                <p><strong>Multiple formats:</strong> Access icons as SVG files, JSX components, or full React components — choose the format that works best for your workflow.</p>
                <p><strong>Fully customizable:</strong> Every icon accepts size, color, rotation, and any standard SVG props like className or onClick, giving you complete control over appearance and behavior.</p>
                <p><strong>Tree-shakeable:</strong> Import only the icons you need. Modern bundlers will automatically eliminate unused icons from your final build.</p>
                <p><strong>Searchable metadata:</strong> Each icon includes keywords and metadata for easy discovery, making it simple to find the perfect icon for your use case.</p>
                <p><strong>Lightweight & dependency-free:</strong> Optimized SVG with zero runtime dependencies means faster load times and smaller bundle sizes.</p>
                
                <h3>Open Source</h3>
                <p>All icons and UI elements in this library were designed and created by Donovan Heynen and are open source for anyone to use. Whether you're building a personal project, a startup MVP, or an enterprise application, Icons by Heynendo provides the flexibility and quality you need.</p>
            </>
        )

    const installationContent = (
        <>
            <h2>How to Install</h2>
            <div className='break' />
            <p>To get started, install the package via npm and you'll have access to the entire icon library in your project.</p>
            
            <h3>Installation Command</h3>
            <SyntaxHighlighter 
                lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
                wrapLines={true} 
                language={'jsx'}
                style={vscDarkPlus}
                customStyle={{
                    margin: '25px 0 50px 25px',
                    minHeight: '50px',
                    borderRadius: '25px',
                    border: 'solid 2px rgb(227, 227, 227)'
                }}
            >
               {`   npm install icons-by-heynendo`}
            </SyntaxHighlighter>
            
            <h3>Verify Installation</h3>
            <p>After installation, verify everything works by importing a test icon:</p>
            <SyntaxHighlighter 
                lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
                wrapLines={true} 
                language={'jsx'}
                style={vscDarkPlus}
                customStyle={{
                    margin: '25px 0 50px 25px',
                    minHeight: '50px',
                    borderRadius: '25px',
                    border: 'solid 2px rgb(227, 227, 227)'
                }}
            >
{`    
    import { Home } from "icons-by-heynendo"

    function App() {
        return <Home size={24} />
    }

`
}
            </SyntaxHighlighter>
            
            <h3>What Gets Installed</h3>
            <p>When you install the package, you get access to several directories:</p>
            <p><strong>data/jsx/</strong> - React components with customizable props (recommended for most projects)</p>
            <p><strong>data/svg/</strong> - Clean SVG files for direct use or manual implementation</p>
            <p><strong>data/icon-data.json</strong> - Metadata including icon names, keywords, and searchable tags</p>
            
            <h3>Requirements</h3>
            <p>Icons by Heynendo works with React 16.8+ and requires a modern bundler that supports ES modules (like Vite, Webpack 5+, or Create React App). The library has zero runtime dependencies, adding only the icons you import.</p>
        </>
    )
    const usageContent = (
        <>
            <h2>Usage Options</h2>
            <div className='break' />
            
            <h3>Option 1 - React Components (Recommended)</h3>
            <p>The easiest way to use Icons by Heynendo is to import icons as React components. Each icon accepts props for size, color, rotation, and any additional SVG attributes. This approach gives you full TypeScript support and automatic tree-shaking.</p>

            <SyntaxHighlighter 
                lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
                wrapLines={true} 
                language={'jsx'}
                style={vscDarkPlus}
                customStyle={{
                    margin: '25px 0 50px 25px',
                    minHeight: '50px',
                    borderRadius: '25px',
                    border: 'solid 2px rgb(227, 227, 227)'
                }}
            >
                {`
    import { Home, Notification, ArrowLeft } from "icons-by-heynendo";

    function App() {
        return (
            <div>
                <Home size={24} color="currentColor" />
                <Notification size={32} color="#FF5733" rotation={15} />
                <ArrowLeft size={20} className="icon-btn" onClick={goBack} />
            </div>
        )
    }
    `}
            </SyntaxHighlighter>
            
            <h4>Available Props</h4>
            <p><strong>size</strong> (number, default: 24) - Width and height in pixels</p>
            <p><strong>color</strong> (string, default: "currentColor") - Fill color, inherits text color by default</p>
            <p><strong>rotation</strong> (number, default: 0) - Rotation in degrees</p>
            <p><strong>...props</strong> - Any additional SVG props like className, onClick, style, etc.</p>
            
            <div className='break' />
            <h3>Option 2 - JSX Components (Copy or Download)</h3>
            <p>If you prefer to have full control or don't want to install the package, you can copy individual JSX components directly from the library. Each icon is a standalone functional component that you can customize and maintain yourself.</p>
            <SyntaxHighlighter 
                lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
                wrapLines={true} 
                language={'jsx'}
                style={vscDarkPlus}
                customStyle={{
                    margin: '25px 0 50px 25px',
                    minHeight: '50px',
                    borderRadius: '25px',
                    border: 'solid 2px rgb(227, 227, 227)'
                }}
            >
                {`
    export default function Home({
        size = 24,
        color = "currentColor",
        rotation = 0,
        ...props
    }) {
        return (
            <svg 
                width={size} 
                height={size} 
                fill={color} 
                style={{ transform: \`rotate(\${rotation}deg)\` }} 
                {...props} 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M3 10l9-7 9 7v10H3z" />
            </svg>
        )
    }
    
    `}
            </SyntaxHighlighter>
            <p>This approach is perfect for design systems where you want to maintain icon components in your own codebase, or when you only need a handful of icons and don't want the full package dependency.</p>
            
            <div className='break' />
            <h3>Option 3 - Raw SVG Files</h3>
            <p>For non-React projects or static sites, you can use the raw SVG files directly. These are clean, optimized SVG files that you can embed in HTML, use with other frameworks, or integrate into your build process.</p>
            <SyntaxHighlighter 
                lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
                wrapLines={true} 
                language={'jsx'}
                style={vscDarkPlus}
                customStyle={{
                    margin: '25px 0 50px 25px',
                    minHeight: '50px',
                    borderRadius: '25px',
                    border: 'solid 2px rgb(227, 227, 227)'
                }}
            >

            {`
<!-- Direct HTML usage -->
<img src="node_modules/icons-by-heynendo/data/svg/home.svg" alt="Home" />

<!-- Inline SVG -->
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 10l9-7 9 7v10H3z" />
</svg>

`}
            </SyntaxHighlighter>
            <p>You can also access icon metadata programmatically for building icon pickers, documentation sites, or search functionality:</p>
            <SyntaxHighlighter 
                lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
                wrapLines={true} 
                language={'jsx'}
                style={vscDarkPlus}
                customStyle={{
                    margin: '25px 0 50px 25px',
                    minHeight: '50px',
                    borderRadius: '25px',
                    border: 'solid 2px rgb(227, 227, 227)'
                }}
            >
            
            {`
import iconData from "icons-by-heynendo/data/icon-data.json";

// Find icon by name
const homeIcon = iconData.find(icon => icon.name === "home")

// Search by keyword
const navIcons = iconData.filter(icon => 
  icon.keywords.includes("navigation")
)

// Get all icon names
const allIcons = iconData.map(icon => icon.pascalName)

`}
            </SyntaxHighlighter>
        </>
    );

    return(
        <div className="docs page-layout">
            <h1>Documentation</h1>
            <span className="selector">
                <p className={`p-light ${selected === 'about' ? 'selected' :''}`}
                    onClick={() => setSelected('about')}
                >about
                </p>
                <p className={`p-light ${selected === 'installation' ? 'selected' :''}`}
                    onClick={() => setSelected('installation')}
                >installation
                </p>
                <p className={`p-light ${selected === 'usage' ? 'selected' :''}`}
                    onClick={() => setSelected('usage')}
                >usage
                </p>
            </span>
            <motion.div className="body"
                initial={{ y: '75vh' }}
                animate={{ y: 0, transition: { duration: 1, ease: 'easeOut' }}}
                exit={{y: '75vh', transition: { duration: 0.5, ease: 'easeOut' }}}
            >
                <span>docs {">"}&nbsp;
                    <AnimatePresence mode="wait">
                        <motion.span
                        key={selected}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        >
                        {selected}
                        </motion.span>
                    </AnimatePresence>
                </span>
                <AnimatePresence mode='wait'>
                    <motion.div className='content'
                        key={selected}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {
                            selected === 'about' ? aboutContent :
                            selected === 'installation' ? installationContent :
                            usageContent
                        }
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </div>
        
    )
}