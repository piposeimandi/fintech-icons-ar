export type IconType =
  | "Bancos y Billeteras"
  | "CEDEARs"
  | "Acciones"
  | "Cripto"
  | "Monedas"
  | "Gerentes de FCI";

export interface FintechIcon {
  id: string;
  name: string;
  type: string;
  tags: string[];
  svg: string;
}

export interface IconsData {
  metadata: {
    name: string;
    version: string;
    source: string;
    attribution: string;
    license: string;
    lastUpdated: string;
  };
  icons: FintechIcon[];
}

const scopedSvgCache = new Map<string, string>();

export function scopeSvg(svg: string, scope: string): string {
  const cached = scopedSvgCache.get(scope);
  if (cached !== undefined) return cached;

  const safeScope = scope.replace(/[^a-zA-Z0-9_-]/g, "-");
  const ids = new Set<string>();
  for (const match of svg.matchAll(/\bid="([^"]+)"/g)) {
    ids.add(match[1]);
  }

  let result = svg;
  for (const id of ids) {
    const scopedId = `${id}-${safeScope}`;
    result = result
      .replaceAll(`id="${id}"`, `id="${scopedId}"`)
      .replaceAll(`url(#${id})`, `url(#${scopedId})`)
      .replaceAll(`href="#${id}"`, `href="#${scopedId}"`);
  }

  const defined = new Set(
    [...result.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1])
  );
  result = result.replace(
    /\s(clip-path|mask|filter)="url\(#([^)]+)\)"/g,
    (match, _attr, refId) => (defined.has(refId) ? match : "")
  );

  scopedSvgCache.set(scope, result);
  return result;
}

export function filterIcons(
  icons: FintechIcon[],
  search: string,
  type: string
): FintechIcon[] {
  return icons
    .filter((icon) => {
      const matchesType = type === "all" || icon.type === type;
      const matchesSearch =
        !search ||
        icon.name.toLowerCase().includes(search.toLowerCase()) ||
        icon.id.toLowerCase().includes(search.toLowerCase()) ||
        icon.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
      return matchesType && matchesSearch;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getTypes(icons: FintechIcon[]): string[] {
  return [...new Set(icons.map((icon) => icon.type))].sort();
}
