import { useState, useRef } from 'react'
import '../styles/search-bar.css'

export default function SearchBar({ searchValue, setSearchValue }){
    const [isFocused, setIsFocused] = useState(false)
    const inputRef = useRef(null)

    return(
        <div className={`search-bar ${isFocused ? 'focused' : ''}`}
            onClick={() => inputRef.current?.focus()}
        >
            <div className="icon"/>
            <input 
                ref={inputRef}
                placeholder="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    )
}