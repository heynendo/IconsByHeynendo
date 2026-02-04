import { useEffect, useState, useRef } from 'react'
import * as Icons from 'icons-by-heynendo'

function FloatingIcons() {
  const [icons, setIcons] = useState([]);
  const lastSpawnTime = useRef(0);
  const iconComponents = useRef(Object.entries(Icons));
  const occupiedRows = useRef(new Set());
  const iconCounter = useRef(0);

  useEffect(() => {
    let animationId;
    
    const animate = (timestamp) => {
      // Spawn new icon every 200ms
      if (timestamp - lastSpawnTime.current > 400) {
        const randomIcon = iconComponents.current[
          Math.floor(Math.random() * iconComponents.current.length)
        ];
        
        // Create rows to prevent vertical overlap
        const rowHeight = 25; // 10% chunks
        const totalRows = Math.floor(90 / rowHeight); // 9 rows
        let availableRows = [];
        
        for (let i = 0; i < totalRows; i++) {
          if (!occupiedRows.current.has(i)) {
            availableRows.push(i);
          }
        }
        
        // If we have available rows, spawn icon
        if (availableRows.length > 0) {
          const selectedRow = availableRows[Math.floor(Math.random() * availableRows.length)];
          const top = selectedRow * rowHeight + Math.random() * (rowHeight - 5); // Add some variation within row
          
          // Increment counter
          iconCounter.current++;
          
          // Every 50th icon is blue
          const color = iconCounter.current % 20 === 10 ? '#2F00BA' : '#E3E3E3';
          
          const newIcon = {
            id: timestamp + Math.random(),
            Component: randomIcon[1],
            top,
            row: selectedRow,
            spawnTime: timestamp,
            color
          };
          
          setIcons(prev => [...prev, newIcon]);
          occupiedRows.current.add(selectedRow);
          
          // Free up the row after icon passes (2 seconds)
          setTimeout(() => {
            occupiedRows.current.delete(selectedRow);
          }, 2000);
        }
        
        lastSpawnTime.current = timestamp;
      }
      
      // Remove icons older than 8 seconds
      setIcons(prev => prev.filter(icon => timestamp - icon.spawnTime < 8000));
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div style={{ position: 'relative', width: '40vw', height: '100%', overflow: 'hidden' }}>
      {icons.map(({ id, Component, top, color }) => (
        <div
          key={id}
          style={{
            position: 'absolute',
            top: `${top}%`,
            left: 0,
            animation: 'slideContainer 8s linear forwards',
            opacity: 0.5
          }}
        >
          <Component size={80} color={color} />
        </div>
      ))}
      
      <style>{`
        @keyframes slideContainer {
          from { transform: translateX(-100px); }
          to { transform: translateX(calc(40vw + 100px)); }
        }
      `}</style>
    </div>
  );
}

export default FloatingIcons;