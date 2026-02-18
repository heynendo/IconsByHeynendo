export default function Download1({
  size = 24,
  color = "currentColor",
  rotation = 0,
  ...props
}) {
  return (
    <svg width={size} height={size} fill={color} style={{ transform: `rotate(${rotation}deg)` }} {...props} viewBox="0 0 800 802" xmlns="http://www.w3.org/2000/svg">
<path d="M100 702H700V552H800V802H0V552H100V702ZM454 419.421L397.333 476.086L397.336 476.089L616.112 257.316L690.359 331.562L398.18 623.734L106 331.562L179.402 258.16L347 425.754V0H454V419.421Z"/>
</svg>

  );
}