"use client";

import type { FintechIcon } from "@/lib/icons";
import { scopeSvg } from "@/lib/icons";

interface IconCardProps {
  icon: FintechIcon;
  onClick: () => void;
}

export default function IconCard({ icon, onClick }: IconCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col items-center rounded-2xl border border-zinc-200/80 bg-white p-5 transition-all duration-200 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/5 dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-blue-500/40"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-zinc-50/50 opacity-0 transition-opacity group-hover:opacity-100 dark:to-zinc-800/30" />

      <div
        className="relative flex h-14 w-14 items-center justify-center [&>svg]:h-12 [&>svg]:w-12"
        dangerouslySetInnerHTML={{ __html: scopeSvg(icon.svg, icon.id) }}
      />

      <div className="relative mt-4 flex w-full flex-col items-center gap-1">
        <span className="line-clamp-1 text-center text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          {icon.name}
        </span>
        <span className="line-clamp-1 text-center text-xs font-medium text-zinc-400 dark:text-zinc-500">
          {icon.type}
        </span>
      </div>
    </button>
  );
}
