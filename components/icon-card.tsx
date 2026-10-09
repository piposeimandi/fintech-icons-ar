"use client";

import type { FintechIcon } from "@/lib/icons";

interface IconCardProps {
  icon: FintechIcon;
  onClick: () => void;
}

export default function IconCard({ icon, onClick }: IconCardProps) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-blue-500 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div
        className="flex h-12 w-12 items-center justify-center overflow-hidden [&>svg]:h-10 [&>svg]:w-10"
        dangerouslySetInnerHTML={{ __html: icon.svg }}
      />
      <div className="flex flex-col items-center gap-0.5">
        <span className="line-clamp-1 text-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {icon.name}
        </span>
        <span className="line-clamp-1 text-center text-xs text-zinc-500 dark:text-zinc-400">
          {icon.type}
        </span>
      </div>
    </button>
  );
}
