import { useState, useRef, useEffect } from 'react'

function PageDividerLeft({ children, style = {} }) {
    return (
        <div className="page-divider-left" style={style}>
            {children}
        </div>
    )
}

function PageDividerRight({ children, style = {} }) {
    return (
        <div className="page-divider-right" style={style}>
            {children}
        </div>
    )
}

export default function PageDivider({ 
    children, 
    initWidthLeft = 65,
    minWidthLeft = 650,
    minWidthRight = 550,
    showLeft = true,
    showRight = true,
    className = ''
}) {
    const [leftWidth, setLeftWidth] = useState(initWidthLeft)
    const [isDragging, setIsDragging] = useState(false)
    const containerRef = useRef(null)

    // Only show divider if both sides are visible
    const showDivider = showLeft && showRight

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging || !containerRef.current) return

            const container = containerRef.current
            const containerRect = container.getBoundingClientRect()
            const containerWidth = containerRect.width
            const newLeftWidthPx = e.clientX - containerRect.left

            const minLeftPercent = (minWidthLeft / containerWidth) * 100
            const maxLeftPercent = 100 - (minWidthRight / containerWidth) * 100
            
            const newLeftWidthPercent = (newLeftWidthPx / containerWidth) * 100

            setLeftWidth(Math.min(Math.max(newLeftWidthPercent, minLeftPercent), maxLeftPercent))
        }

        const handleMouseUp = () => {
            setIsDragging(false)
        }

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove)
            document.addEventListener('mouseup', handleMouseUp)
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [isDragging, minWidthLeft, minWidthRight])

    const styleLeft = {
        width: showDivider ? `${leftWidth}%` : '100%',
        minWidth: showDivider ? `${minWidthLeft}px` : undefined,
        display: showLeft ? 'block' : 'none'
    }

    const styleRight = {
        width: showDivider ? `${100 - leftWidth}%` : '100%',
        minWidth: showDivider ? `${minWidthRight}px` : undefined,
        display: showRight ? 'flex' : 'none'
    }

    // Extract Left and Right children
    const leftChild = children?.find(child => child?.type === PageDividerLeft)
    const rightChild = children?.find(child => child?.type === PageDividerRight)

    return (
        <div 
            className={`page-divider ${className}`}
            ref={containerRef}
            style={{ 
                userSelect: isDragging ? 'none' : 'auto',
                cursor: isDragging ? 'col-resize' : 'auto',
                display: 'flex'
            }}
        >
            {leftChild && (
                <div className="page-divider-left" style={styleLeft}>
                    {leftChild.props.children}
                </div>
            )}
            
            {rightChild && (
                <div className="page-divider-right" style={styleRight}>
                    {showDivider && (
                        <div 
                            className='page-divider-drag'
                            onMouseDown={() => setIsDragging(true)}
                            style={{ cursor: 'col-resize' }}
                        />
                    )}
                    {rightChild.props.children}
                </div>
            )}
        </div>
    )
}

PageDivider.Left = PageDividerLeft
PageDivider.Right = PageDividerRight