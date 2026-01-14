import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SCRIPTS_DIR = path.resolve("scripts");
const MANIFEST_NAME = "manifest.json";

function isJsonScriptFile(name) {
  return name.toLowerCase().endsWith(".json") && name !== MANIFEST_NAME;
}

async function main() {
  const files = await readdir(SCRIPTS_DIR, { withFileTypes: true });

  const jsonFiles = files
    .filter((d) => d.isFile())
    .map((d) => d.name)
    .filter(isJsonScriptFile)
    .sort((a, b) => a.localeCompare(b, "en"));

  const manifestPath = path.join(SCRIPTS_DIR, MANIFEST_NAME);
  const content = JSON.stringify(jsonFiles, null, 2) + "\n";

  await writeFile(manifestPath, content, "utf8");
  console.log(`Wrote ${MANIFEST_NAME} with ${jsonFiles.length} scripts.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
