export default function Copy1({
  size = 24,
  color = "currentColor",
  rotation = 0,
  ...props
}) {
  return (
    <svg width={size} height={size} fill={color} style={{ transform: `rotate(${rotation}deg)` }} {...props} viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
<path d="M800 600H200V0H800V600ZM300 100V500H700V100H300Z"/>
<path d="M175 200V300H100V700H500V625H600V800H0V200H175Z"/>
</svg>

  );
}