"use client";

import { useEffect } from "react";
import type { FintechIcon } from "@/lib/icons";

interface IconModalProps {
  icon: FintechIcon | null;
  onClose: () => void;
}

export default function IconModal({ icon, onClose }: IconModalProps) {
  useEffect(() => {
    if (!icon) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [icon, onClose]);

  if (!icon) return null;

  const handleDownload = () => {
    const blob = new Blob([icon.svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${icon.id}.svg`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(icon.svg);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative flex max-w-md flex-col items-center gap-6 rounded-2xl bg-white p-8 shadow-2xl dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div
          className="flex h-40 w-40 items-center justify-center [&>svg]:h-32 [&>svg]:w-32"
          dangerouslySetInnerHTML={{ __html: icon.svg }}
        />

        <div className="flex w-full flex-col items-start gap-1">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            {icon.name}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {icon.type}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {icon.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex w-full gap-3">
          <button
            onClick={handleDownload}
            className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Descargar SVG
          </button>
          <button
            onClick={handleCopy}
            className="flex-1 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Copiar SVG
          </button>
        </div>
      </div>
    </div>
  );
}
