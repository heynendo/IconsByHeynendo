export default function Arrow1({
  size = 24,
  color = "currentColor",
  rotation = 0,
  ...props
}) {
  return (
    
<svg width={size} height={size} fill={color} style={{ transform: `rotate(${rotation}deg)` }} {...props} viewBox="0 0 943 552" xmlns="http://www.w3.org/2000/svg">
<path d="M471.404 391.404L862.808 0.000976562L942.809 80L471.404 551.405L0 80L80 0L471.404 391.404Z"/>
</svg>

  );
}