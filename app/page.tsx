import type { IconsData } from "@/lib/icons";
import { getTypes } from "@/lib/icons";
import IconGrid from "@/components/icon-grid";

const REPO_URL = "https://github.com/piposeimandi/fintech-icons-ar";
const BASE_PATH = "/fintech-icons-ar";
const JSON_URL = `${BASE_PATH}/icons.json`;

export default async function Home() {
  const data = (await import("@/data/icons.json").then(
    (m) => m.default
  )) as IconsData;
  const types = getTypes(data.icons);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
      <header className="border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
                {data.metadata.name}
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {data.icons.length} iconos SVG del ecosistema fintech de Argentina
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={JSON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-600 transition-colors hover:border-blue-400 hover:text-blue-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:text-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-3.5 w-3.5"
              >
                <path d="M4 7V5a1 1 0 0 1 1-1h4" />
                <path d="M4 17v2a1 1 0 0 0 1 1h4" />
                <path d="M20 7V5a1 1 0 0 0-1-1h-4" />
                <path d="M20 17v2a1 1 0 0 1-1 1h-4" />
                <path d="M8 9h8M8 13h8M8 17h5" />
              </svg>
              JSON API
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
        <IconGrid initialIcons={data.icons} types={types} metadata={data.metadata} />
      </main>

      <footer className="border-t border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-md">
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                API pública
              </p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Accedé a todos los iconos en formato JSON para usarlos en tus
                proyectos:
              </p>
              <a
                href={JSON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block break-all font-mono text-xs text-blue-600 hover:underline dark:text-blue-400"
              >
                {JSON_URL}
              </a>
            </div>

            <div className="max-w-md">
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                Proyecto
              </p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Este sitio es de código abierto. Sumá iconos o mejorá la
                plataforma:
              </p>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-mono text-xs text-blue-600 hover:underline dark:text-blue-400"
              >
                {REPO_URL.replace("https://", "")}
              </a>
            </div>
          </div>

          <div className="border-t border-zinc-200/80 pt-4 dark:border-zinc-800">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {data.metadata.attribution}{" "}
              <a
                href={data.metadata.source}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                Ver repo original
              </a>
            </p>
            <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
              {data.metadata.license}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
