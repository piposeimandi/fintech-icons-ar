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
