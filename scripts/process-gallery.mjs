// Resize/compress curated Wonderhall photos and emit gallery data.
// Run: node scripts/process-gallery.mjs

import { readdir, mkdir, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const SRC = "C:/Users/adamp/OneDrive/Desktop/wonderhall-photos";
const OUT_DIR = "public/gallery";
const DATA_FILE = "app/gallery-data.json";

const MAX_EDGE = 1600;
const QUALITY = 82;

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const all = (await readdir(SRC))
    .filter((f) => /\.(jpe?g|png)$/i.test(f))
    .sort(); // alphabetical = chronological for DSC* names

  console.log(`Processing ${all.length} photos...`);

  const data = [];
  for (let i = 0; i < all.length; i++) {
    const file = all[i];
    const inPath = join(SRC, file);
    const num = String(i + 1).padStart(2, "0");
    const outName = `${num}.jpg`;
    const outPath = join(OUT_DIR, outName);

    const img = sharp(inPath, { failOn: "none" }).rotate(); // respect EXIF orientation
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

    await resized
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(outPath);

    const finalMeta = await sharp(outPath).metadata();
    data.push({
      src: `/gallery/${outName}`,
      width: finalMeta.width,
      height: finalMeta.height,
    });

    process.stdout.write(`\r${i + 1}/${all.length} ${file} → ${outName}   `);
  }

  await writeFile(DATA_FILE, JSON.stringify(data, null, 2));
  console.log(`\n✓ Wrote ${data.length} entries to ${DATA_FILE}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
