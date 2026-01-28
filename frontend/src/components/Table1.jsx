import '../styles/table1.css'
import React from 'react'

export default function Table1({ children }) {
    const childrenArray = React.Children.toArray(children);
    
    return(
        <div className="table-1">
            {childrenArray.map((child, index) => (
                <React.Fragment key={index}>
                    {child}
                    {index < childrenArray.length - 1 && (
                        <div className="break"></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}

Table1.Row = function Row({ label, children }) {
    return (
        <div className="table-row">
            <label>{label}</label>
            <div className="table-content">{children}</div>
        </div>
    )
}