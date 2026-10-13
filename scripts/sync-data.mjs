import { copyFile, mkdir } from "node:fs/promises";

await mkdir("public", { recursive: true });
await copyFile("data/icons.json", "public/icons.json");
console.log("Synced data/icons.json -> public/icons.json");
