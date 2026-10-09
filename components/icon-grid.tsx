"use client";

import { useState } from "react";
import { filterIcons } from "@/lib/icons";
import type { FintechIcon } from "@/lib/icons";
import IconCard from "./icon-card";
import IconModal from "./icon-modal";

interface IconGridProps {
  initialIcons: FintechIcon[];
  types: string[];
  metadata: {
    name: string;
    version: string;
    source: string;
    attribution: string;
    license: string;
    lastUpdated: string;
  };
}

export default function IconGrid({
  initialIcons,
  types,
}: IconGridProps) {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedIcon, setSelectedIcon] = useState<FintechIcon | null>(null);

  const filtered = filterIcons(initialIcons, search, selectedType);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="search"
          placeholder="Buscar iconos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="w-full max-w-xs rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        >
          <option value="all">Todos los tipos</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filtered.map((icon) => (
          <IconCard
            key={icon.id}
            icon={icon}
            onClick={() => setSelectedIcon(icon)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            No se encontraron iconos
          </p>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Probá con otra búsqueda o cambiá el filtro de tipo
          </p>
        </div>
      )}

      <IconModal
        icon={selectedIcon}
        onClose={() => setSelectedIcon(null)}
      />
    </div>
  );
}
