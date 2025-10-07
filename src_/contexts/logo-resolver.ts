// src/lib/logo-resolver.ts
const files = import.meta.glob("/src/assets/vendors/*", { eager: true, import: "default" });

const toKey = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const cache = new Map<string, string>();
for (const [path, mod] of Object.entries(files)) {
  const file = path.split("/").pop()!;                 // e.g. vmware.jpg
  const base = file.replace(/\.(png|jpe?g|svg|webp)$/i, "");
  cache.set(base.toLowerCase(), mod as string);
}

export function getVendorLogo(name: string): string | null {
  const key = toKey(name);
  // prefer svg if you have multiple variants
  const svg = cache.get(`${key}`); // works for any extension due to map setup
  return svg ?? null;
}
