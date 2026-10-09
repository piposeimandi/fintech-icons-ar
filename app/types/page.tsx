import iconsData from "@/data/icons.json";
import { getTypes } from "@/lib/icons";

const data = iconsData as {
  metadata: Record<string, string>;
  icons: Array<{
    id: string;
    name: string;
    type: string;
    tags: string[];
    svg: string;
  }>;
};

const types = getTypes(data.icons);

export default function TypesPage() {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">Tipos de iconos</h1>
      <ul className="space-y-2">
        {types.map((type) => (
          <li key={type} className="text-sm text-zinc-600 dark:text-zinc-300">
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
}
