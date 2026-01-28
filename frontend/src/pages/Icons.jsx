import { useState, useRef, useEffect } from 'react'
import '../styles/icons.css'
import SearchBar from "../components/SearchBar"
import Badge from '../components/Badge';
import Table1 from '../components/Table1';


export default function Icons(){
    const [leftWidth, setLeftWidth] = useState(65); 
    const [isDragging, setIsDragging] = useState(false);
    const [searchValue, setSearchValue] = useState([])
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging || !containerRef.current) return;

            const container = containerRef.current;
            const containerRect = container.getBoundingClientRect();
            const containerWidth = containerRect.width;
            const newLeftWidthPx = e.clientX - containerRect.left;

            const minLeftPercent = (800 / containerWidth) * 100;
            const maxLeftPercent = 100 - (400 / containerWidth) * 100;
            
            const newLeftWidthPercent = (newLeftWidthPx / containerWidth) * 100;

            setLeftWidth(Math.min(Math.max(newLeftWidthPercent, minLeftPercent), maxLeftPercent));
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    const styleLeft = {
        width: `${leftWidth}%`,
        minWidth: '800px'    
    }
    const styleRight = {
        width: `${100 - leftWidth}%`,
        minWidth: '400px'
    }

    return(
        <div 
            className="icons page-layout" 
            ref={containerRef}
            style={{ 
                userSelect: isDragging ? 'none' : 'auto',
                cursor: isDragging ? 'col-resize' : 'auto',
                display: 'flex'
            }}
        >
            <div 
                className="left"
                style={styleLeft}
            >
                <SearchBar 
                    searchValue={searchValue} 
                    setSearchValue={setSearchValue}
                />
                <div className='items-list'>
                    {Array.from({ length: 50 }, (_, index) => (
                        <div key={index} className="card">
                        Card {index + 1}
                        </div>
                    ))}
                </div>
            </div>
            <div 
                className="right"
                style={styleRight}
            >
                <div 
                    className='drag'
                    onMouseDown={() => setIsDragging(true)}
                    style={{ cursor: 'col-resize' }}
                />
                <div className='selected-item'>
                    <Badge>
                        SVG
                    </Badge>
                    <Table1>
                        <Table1.Row label="Color">
                            
                        </Table1.Row>
                        
                        <Table1.Row label="Height">
                            
                        </Table1.Row>
                        
                        <Table1.Row label="Width">
                            
                        </Table1.Row>
                    </Table1>
                </div>
            </div>
        </div>
    )
}