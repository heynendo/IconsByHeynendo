export default function Notification({
  size = 24,
  color = "currentColor",
  rotation = 0,
  ...props
}) {
  return (
    
<svg width={size} height={size} fill={color} style={{ transform: `rotate(${rotation}deg)` }} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 22a2 2 0 002-2h-4a2 2 0 002 2zM18 16V11a6 6 0 10-12 0v5l-2 2h16l-2-2z" />
</svg>

  );
}