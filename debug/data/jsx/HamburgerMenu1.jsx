export default function HamburgerMenu1({
  size = 24,
  color = "currentColor",
  rotation = 0,
  ...props
}) {
  return (
    
<svg width={size} height={size} fill={color} style={{ transform: `rotate(${rotation}deg)` }} {...props} width="75" height="50" viewBox="0 0 75 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="75" height="10" fill="#343C54"/>
<rect y="20" width="75" height="10" fill="#343C54"/>
<rect y="40" width="75" height="10" fill="#343C54"/>
</svg>
  );
}