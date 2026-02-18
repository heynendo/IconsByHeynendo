import '../styles/badge.css'

export default function Badge({
    children,
    selected=false,
    onClick,
    color1='rgb(227, 227, 227)',
    color2='rgba(227, 227, 227, 0.1)',
    color3='rgb(62, 72, 102)'
}){

    const badgeStyle = {
        borderRadius: '25px',
        border: `solid 2px ${color1}`,
        backgroundColor: selected ? color1 : color2,
        color: color3,
        boxShadow: selected ? '0px 2.5px 5px rgba(0, 0, 0, 0.5)' : '0px 2.5px 2.5px rgba(0, 0, 0, 0.25)'
    }

    return(
        <div className="badge" style={badgeStyle} onClick={onClick}>
            {children}
        </div>
    )
}