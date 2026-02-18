export default function TailedArrow1({
  size = 24,
  color = "currentColor",
  rotation = 0,
  ...props
}) {
  return (
    
<svg width={size} height={size} fill={color} style={{ transform: `rotate(${rotation}deg)` }} {...props} viewBox="0 0 1000 636" xmlns="http://www.w3.org/2000/svg">
<path d="M1000 317.543L493.243 635.085V390.876H0V257.543H493.243V0L1000 317.543Z"/>
</svg>

  );
}