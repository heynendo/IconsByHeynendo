import { RotateClockwise2 } from 'icons-by-heynendo'
import '../styles/input-styling.css'
import { useState } from 'react'

export default function RotateFunctionality({ degrees, onRotate }) {
    const [rotation, setRotation] = useState(0)

    return (
        <div className="rotate-functionality">
            <label>{degrees} deg</label>
            <button className='toggle-rotate' onClick={() => {
                onRotate((degrees + 45) % 360)
                setRotation((degrees + 45) % 360)
            }}>
                <RotateClockwise2
                    size={15}
                    rotation={rotation}
                />
            </button>
        </div>
    )
}