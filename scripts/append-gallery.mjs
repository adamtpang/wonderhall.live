// Append NEW photos to the existing gallery without touching the current ones.
// 1. Download the Wonderhall II photos into NEW_SRC (below).
// 2. Run: node scripts/append-gallery.mjs
// It resizes/compresses them like process-gallery.mjs and continues the
// numbering, appending to app/gallery-data.json.

import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const NEW_SRC = "C:/Users/adamp/Desktop/wonderhall2";
const OUT_DIR = "public/gallery";
const DATA_FILE = "app/gallery-data.json";

const MAX_EDGE = 1600;
const QUALITY = 82;

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const existing = JSON.parse(await readFile(DATA_FILE, "utf8"));
  let n = existing.length;

  const all = (await readdir(NEW_SRC))
    .filter((f) => /\.(jpe?g|png)$/i.test(f))
    .sort();

  console.log(`Appending ${all.length} photos after ${n} existing...`);

  for (let i = 0; i < all.length; i++) {
    const file = all[i];
    n += 1;
    const num = String(n).padStart(2, "0");
    const outName = `${num}.jpg`;
    const outPath = join(OUT_DIR, outName);

    const img = sharp(join(NEW_SRC, file), { failOn: "none" }).rotate();
    const meta = await img.metadata();
    const longEdge = Math.max(meta.width || 0, meta.height || 0);
    const resized =
      longEdge > MAX_EDGE
        ? img.resize({
            width: meta.width >= meta.height ? MAX_EDGE : undefined,
            height: meta.height > meta.width ? MAX_EDGE : undefined,
            withoutEnlargement: true,
          })
        : img;

    await resized.jpeg({ quality: QUALITY, mozjpeg: true }).toFile(outPath);

    const finalMeta = await sharp(outPath).metadata();
    existing.push({
      src: `/gallery/${outName}`,
      width: finalMeta.width,
      height: finalMeta.height,
    });

    process.stdout.write(`\r${i + 1}/${all.length} ${file} → ${outName}   `);
  }

  await writeFile(DATA_FILE, JSON.stringify(existing, null, 2));
  console.log(`\n✓ Gallery now has ${existing.length} photos.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
