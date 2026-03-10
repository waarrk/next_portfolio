/**
 * Format exposure time as a fraction string (e.g. 0.002 → "1/500s", 2 → "2s")
 */
export function formatExposureTime(value: number): string {
  if (value >= 1) {
    return `${value}s`;
  }
  const denominator = Math.round(1 / value);
  return `1/${denominator}s`;
}

/**
 * Format f-number (e.g. 2.8 → "f/2.8")
 */
export function formatFNumber(value: number): string {
  return `f/${value}`;
}

/**
 * Format focal length (e.g. 50 → "50mm")
 */
export function formatFocalLength(value: number): string {
  return `${value}mm`;
}

/**
 * Slugify a string for URL use
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .trim();
}

/**
 * Format date string as "YYYY年MM月DD日"
 */
export function formatDateJa(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${String(d.getMonth() + 1).padStart(2, "0")}月${String(d.getDate()).padStart(2, "0")}日`;
}

/**
 * Format date string as "YYYY-MM-DD"
 */
export function formatDateISO(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toISOString().split("T")[0];
}

/**
 * Group an array of items by a key extractor
 */
export function groupBy<T>(items: T[], keyFn: (item: T) => string): Record<string, T[]> {
  return items.reduce<Record<string, T[]>>((acc, item) => {
    const key = keyFn(item);
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}
