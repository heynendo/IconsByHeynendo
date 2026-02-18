export function validateIcons(icons) {
  const errors = [];
  const names = new Set();

  icons.forEach(icon => {
    if (names.has(icon.name)) {
      errors.push(`Duplicate icon name: ${icon.name}`);
    }
    names.add(icon.name);

    if (!icon.content.includes("<svg")) {
      errors.push(`Invalid SVG: ${icon.file}`);
    }
  });

  return {
    success: errors.length === 0,
    errors,
  };
}
