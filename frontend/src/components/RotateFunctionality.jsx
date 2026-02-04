

export default function RotateFunctionality({ degrees, onRotate }) {
    return (
        <div className="rotate-functionality">
            <label>{degrees} deg</label>
            <div className="rotation function"
                onClick={() => onRotate((degrees + 45) % 360)}
            >
                
            </div>
        </div>
    )
}