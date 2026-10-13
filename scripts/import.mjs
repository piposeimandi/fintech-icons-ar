import { writeFile, mkdir } from "node:fs/promises";

const SITE_URL = "https://icons.com.ar";
const SOURCE_REPO = "https://github.com/sgalanb/fintech-icons-argentina";
const AUTHOR = "Santiago Galan (sgalanb) — https://github.com/sgalanb";

const unescapeJs = (s) =>
  s.replace(/\\(u[0-9a-fA-F]{4}|.)/g, (m, g) => {
    if (g.startsWith("u")) {
      return String.fromCharCode(parseInt(g.slice(1), 16));
    }
    const map = { n: "\\n", t: "\\t", '"': '"', "\\": "\\", "/": "/" };
    return map[g] ?? g;
  });

const decode = (raw) => JSON.parse('"' + unescapeJs(raw) + '"');

const ITEM_RE =
  /\{\\"_title\\":\\"((?:[^\\]|\\.)*?)\\",\\"id\\":\\"((?:[^\\]|\\.)*?)\\",\\"type\\":\\"((?:[^\\]|\\.)*?)\\",\\"source\\":\\"((?:[^\\]|\\.)*?)\\"}/g;

async function main() {
  const res = await fetch(SITE_URL, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; fintech-icons-ar-import)",
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${SITE_URL}: ${res.status}`);
  }
  const html = await res.text();

  const icons = [];
  const seen = new Set();

  for (const [, title, id, type, source] of html.matchAll(ITEM_RE)) {
    const iconId = decode(id).trim();
    const name = decode(title).trim();
    const svg = decode(source).trim();

    if (!iconId || !svg || seen.has(iconId)) continue;
    seen.add(iconId);

    icons.push({
      id: iconId,
      name: name || iconId,
      type: decode(type).trim(),
      tags: [],
      svg,
    });
  }

  icons.sort((a, b) => a.name.localeCompare(b.name));

  const data = {
    metadata: {
      name: "Fintech Icons Argentina",
      version: "1.1.0",
      source: SOURCE_REPO,
      attribution: `Iconos originales creados por ${AUTHOR}`,
      license:
        "Los logos y marcas comerciales son propiedad de sus respectivos dueños.",
      lastUpdated: new Date().toISOString().slice(0, 10),
    },
    icons,
  };

  await mkdir("data", { recursive: true });
  await writeFile("data/icons.json", JSON.stringify(data, null, 2), "utf8");

  const byType = {};
  for (const icon of icons) {
    byType[icon.type] = (byType[icon.type] ?? 0) + 1;
  }
  console.log(`Imported ${icons.length} icons:`);
  for (const [type, count] of Object.entries(byType).sort()) {
    console.log(`  ${type}: ${count}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
