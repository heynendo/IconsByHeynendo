import React, { useState, useRef, useEffect } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import '../styles/input-styling.css'

export default function InputWithDropdown({
  options = ['option1', 'option2', 'option3'],
  inputValue = options[0], 
  setInputValue
}) {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const containerRef = useRef(null)


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
    setIsDropdownOpen(false)
  }

  const handleOptionSelect = (option) => {
    setInputValue(option)
    setIsDropdownOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className='input-with-dropdown' ref={containerRef}>
      <div className='container'>
        <input
          className='text-input'
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className='toggle-dropdown' onClick={toggleDropdown}>
          {isDropdownOpen ? '▲' : '▼'}
        </button>
      </div>
      <AnimatePresence>
      {isDropdownOpen && (
        <motion.div className='dropdown'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.2}}
        >
          {options.map((option, index) => (
            <div 
              key={index} 
              onClick={() => handleOptionSelect(option)}
              className={`option ${index < options.length - 1 ? 'with-border' : 'bottom'}`}
            >
              {option}
            </div>
          ))}
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  )
}