export default function HamburgerMenu1({
  size = 24,
  color = "currentColor",
  rotation = 0,
  ...props
}) {
  return (
    
<svg width={size} height={size} fill={color} style={{ transform: `rotate(${rotation}deg)` }} {...props} viewBox="0 0 1000 667" xmlns="http://www.w3.org/2000/svg">
<rect width="1000" height="133.333"/>
<rect y="266.667" width="1000" height="133.333"/>
<rect y="533.333" width="1000" height="133.333"/>
</svg>

  );
}