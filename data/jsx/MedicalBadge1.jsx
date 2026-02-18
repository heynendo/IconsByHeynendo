export default function MedicalBadge1({
  size = 24,
  color = "currentColor",
  rotation = 0,
  ...props
}) {
  return (
    <svg width={size} height={size} fill={color} style={{ transform: `rotate(${rotation}deg)` }} {...props} viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
<path d="M450 0C698.528 0 900 201.472 900 450C900 698.528 698.528 900 450 900C201.472 900 0 698.528 0 450C0 201.472 201.472 0 450 0ZM450 100C256.7 100 100 256.7 100 450C100 643.3 256.7 800 450 800C643.3 800 800 643.3 800 450C800 256.7 643.3 100 450 100ZM505 395H675V495H505V675H405V495H225V395H405V225H505V395Z"/>
</svg>

  );
}