import { useState, useEffect } from 'react'
import '../styles/icons.css'
import SearchBar from "../components/SearchBar"
import PageDivider from '../components/PageDivider'
import * as IconsHeynendo from 'icons-by-heynendo'
import iconData from 'icons-by-heynendo/icon-data'
import IconInfo from '../components/IconInfo'
import { motion, AnimatePresence } from 'framer-motion'

export default function Icons(){
    const [searchValue, setSearchValue] = useState('')
    const [selectedIcon, setSelectedIcon] = useState(null)
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Use icon-data.json and match with components
    const iconArray = iconData.map(icon => ({
        name: icon.name,           // kebab-case from JSON
        pascalName: icon.pascalName, // PascalCase from JSON
        keywords: icon.keywords,   // Keywords array from JSON
        Component: IconsHeynendo[icon.pascalName] // Get component by PascalCase name
    }))

    const filteredIcons = iconArray.filter(({ name, keywords }) => {
        const searchTerm = searchValue.toLowerCase()
        
        // Check if search term matches name or any keyword
        return name.toLowerCase().includes(searchTerm) ||
               keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
    })

    const iconCards = filteredIcons.map(({ name, pascalName, Component }) => (
        <div 
            className={`card ${selectedIcon?.name === name ? 'selected' : ''}`} 
            key={name} 
            onClick={() => setSelectedIcon({name, pascalName, Component})}
        >
            <Component size={width < 700 ? 50 : 75} color='#343C54'/>
            <p>{name}</p>
        </div>
    ))

    return(
        <PageDivider 
            className="icons page-layout"
            initWidthLeft={65}
            minWidthLeft={650}
            minWidthRight={500}
            showLeft={true}
            showRight={selectedIcon}
        >
            <PageDivider.Left>
                <SearchBar 
                    searchValue={searchValue} 
                    setSearchValue={setSearchValue}
                />
                <div className='items-list'>
                    {iconCards}
                </div>
            </PageDivider.Left>
            
            <PageDivider.Right>
                <AnimatePresence mode="wait">
                    {selectedIcon && (
                        <motion.div
                            key={selectedIcon.name}
                            initial={{ x: '120%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '120%' }}
                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                            style={{width: '100%', height: '100%'}}
                        >
                            <IconInfo 
                                selectedIcon={selectedIcon}
                                setSelectedIcon={setSelectedIcon}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </PageDivider.Right>
        </PageDivider>
    )
}