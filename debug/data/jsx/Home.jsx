export default function Home({
  size = 24,
  color = "currentColor",
  rotation = 0,
  ...props
}) {
  return (
    
<svg width={size} height={size} fill={color} style={{ transform: `rotate(${rotation}deg)` }} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 10l9-7 9 7v10H3z" />
</svg>

  );
}