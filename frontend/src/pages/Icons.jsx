import { useState, useEffect } from 'react'
import '../styles/icons.css'
import SearchBar from "../components/SearchBar"
import PageDivider from '../components/PageDivider'
import * as IconsHeynendo from 'icons-by-heynendo'
//import { searchIcons } from 'icons-by-heynendo'
import IconInfo from '../components/IconInfo'

export default function Icons(){
    const [searchValue, setSearchValue] = useState('')
    const [selectedIcon, setSelectedIcon] = useState(null)
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const iconArray = Object.entries(IconsHeynendo).map(([name, Component]) => ({
        name,
        Component
    }))

    const filteredIcons = iconArray.filter(({ name }) =>
        name.toLowerCase().includes(searchValue.toLowerCase())
    )
    /*const filteredIcons = searchValue 
        ? searchIcons(searchValue).map(({ name, component }) => ({
            name,
            Component: component
          }))
        : iconArray.filter(({ name }) => name !== 'searchIcons')*/

    const iconCards = filteredIcons.map(({ name, Component }) => (
        <div className={`card ${selectedIcon?.name === name ? 'selected' : ''}`} key={name} onClick={() => setSelectedIcon({name, Component})}>
            <Component size={width < 700 ? 50 : 75} color='#343C54'/>
            <p>{name}</p>
        </div>
    ))

    return(
        <PageDivider 
            className="icons page-layout"
            initWidthLeft={65}
            minWidthLeft={650}
            minWidthRight={400}
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
                {selectedIcon &&
                <IconInfo 
                    selectedIcon={selectedIcon}
                    setSelectedIcon={setSelectedIcon}
                />
                }
            </PageDivider.Right>
        </PageDivider>
    )
}