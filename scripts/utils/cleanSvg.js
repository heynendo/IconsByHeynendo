/**
 * Cleans SVG content by removing width, height, and fill attributes
 * from the opening <svg> tag, and removes fill attributes from all
 * child elements (path, rect, circle, g, etc.).
 * 
 * This allows the icon system to dynamically control these attributes
 * while preserving all other SVG content and attributes.
 * 
 * @param {string} svgContent - The raw SVG content
 * @returns {string} - Cleaned SVG content
 */
export function cleanSvg(svgContent) {
  let cleaned = svgContent;
  
  // Remove width, height, and fill attributes from the opening <svg> tag only
  cleaned = cleaned.replace(
    /<svg([^>]*?)>/,
    (match, attributes) => {
      const cleanedAttrs = attributes
        .replace(/\s+width="[^"]*"/gi, "")
        .replace(/\s+height="[^"]*"/gi, "")
        .replace(/\s+fill="[^"]*"/gi, "");
      return `<svg${cleanedAttrs}>`;
    }
  );
  
  // Remove all fill attributes from child elements with flexible spacing
  // This matches: fill="value", fill = "value", FILL="value", etc.
  cleaned = cleaned.replace(/\s+fill\s*=\s*"[^"]*"/gi, "");
  
  return cleaned;
}