import type { IconsData } from "@/lib/icons";
import { getTypes } from "@/lib/icons";
import IconGrid from "@/components/icon-grid";

export default async function Home() {
  const data = (await import("@/data/icons.json").then(
    (m) => m.default
  )) as IconsData;
  const types = getTypes(data.icons);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
      <header className="border-b border-zinc-200 bg-white px-4 py-6 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            {data.metadata.name}
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {data.icons.length} iconos SVG del ecosistema fintech de Argentina
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <IconGrid initialIcons={data.icons} types={types} metadata={data.metadata} />
      </main>

      <footer className="border-t border-zinc-200 bg-white px-4 py-6 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl text-center text-sm text-zinc-500 dark:text-zinc-400">
          <p>
            {data.metadata.attribution}{" "}
            <a
              href={data.metadata.source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Ver repo original
            </a>
          </p>
          <p className="mt-1">{data.metadata.license}</p>
        </div>
      </footer>
    </div>
  );
}
