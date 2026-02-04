import React, { useState, useRef, useEffect } from 'react'
import '../styles/input-styling.css'

export default function InputWithColorPicker({color, setColor}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const containerRef = useRef(null)
  const colorInputRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (isMenuOpen && colorInputRef.current) {
      colorInputRef.current.click()
    }
  }, [isMenuOpen])

  const handleInputChange = (e) => {
    setColor(e.target.value)
    setIsMenuOpen(false)
  }

  const handleColorSelect = (e) => {
    setColor(e.target.value)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='input-with-colorpicker' ref={containerRef}>
      <div className='container'>
        <input
          className='text-input'
          type="text"
          value={color}
          onChange={handleInputChange}
        />
        <input
            className='color-picker'
            ref={colorInputRef}
            type="color"
            value={color}
            onChange={handleColorSelect}
            onClick={toggleMenu}
        />
      </div>
    </div>
  )
}