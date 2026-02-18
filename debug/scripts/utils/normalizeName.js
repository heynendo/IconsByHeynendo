export function normalizeName(icon) {
  const base = icon.file.replace(".svg", "")

  const pascal = base
    .split("-")
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join("")

  return {
    ...icon,
    name: base,
    pascalName: pascal
  }
}
