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
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-sm">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="search"
            placeholder="Buscar iconos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 bg-white py-2.5 pl-10 pr-4 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-blue-500"
          />
        </div>

        <div className="relative">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full appearance-none rounded-xl border border-zinc-200 bg-white py-2.5 pl-4 pr-10 text-sm font-medium text-zinc-700 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 sm:w-auto"
          >
            <option value="all">Todos los tipos</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filtered.map((icon) => (
          <IconCard
            key={icon.id}
            icon={icon}
            onClick={() => setSelectedIcon(icon)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 py-20 text-center dark:border-zinc-700">
          <svg
            className="mb-4 h-12 w-12 text-zinc-300 dark:text-zinc-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
            <path d="M8 11h6" />
          </svg>
          <p className="text-lg font-semibold text-zinc-700 dark:text-zinc-200">
            No se encontraron iconos
          </p>
          <p className="mt-1 text-sm text-zinc-400 dark:text-zinc-500">
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
