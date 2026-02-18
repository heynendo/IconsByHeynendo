export default function Exit1({
  size = 24,
  color = "currentColor",
  rotation = 0,
  ...props
}) {
  return (
    
<svg width={size} height={size} fill={color} style={{ transform: `rotate(${rotation}deg)` }} {...props} viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
<path d="M800 133.333L533.333 400L800 666.667L666.667 800L400 533.333L133.334 800L0 666.667L666.667 0L800 133.333ZM400 266.666L266.666 400L0 133.333L133.333 0L400 266.666Z"/>
</svg>
  );
}