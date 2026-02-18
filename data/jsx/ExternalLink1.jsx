export default function ExternalLink1({
  size = 24,
  color = "currentColor",
  rotation = 0,
  ...props
}) {
  return (
    
<svg width={size} height={size} fill={color} style={{ transform: `rotate(${rotation}deg)` }} {...props} viewBox="0 0 797 796" xmlns="http://www.w3.org/2000/svg">
<path d="M300 295.996H100V695.996H500V495.996H600V795.996H0V195.996H300V295.996ZM797 400H697V170.601L338.777 528.823L263 453.046L616.046 100H397V0H797V400Z"/>
</svg>

  );
}