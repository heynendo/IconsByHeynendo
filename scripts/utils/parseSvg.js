export function parseSvg(icon) {
  const searchMatch = icon.content.match(
    /<!--\s*search:\s*([^>]+)\s*-->/
  );

  let keywords = [];

  if (searchMatch) {
    keywords = searchMatch[1]
      .split(",")
      .map(k => k.trim().toLowerCase())
      .filter(Boolean);
  }

  return {
    ...icon,
    keywords,
  };
}
