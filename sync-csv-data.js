// Mirrors CSV files from assets/documents/[game-slug]/ into _data/[game-slug]/
// so Jekyll can auto-parse them into site.data for table rendering, while
// assets/documents/ stays the single source of truth (and the downloadable copy).
// Run this before `jekyll serve`/`jekyll build` whenever a CSV changes.

import { readdir, mkdir, copyFile } from 'node:fs/promises';
import { join } from 'node:path';

const sourceRoot = './assets/documents';
const dataRoot = './_data';

const gameSlugDirs = await readdir(sourceRoot, { withFileTypes: true });

for (const gameSlugDir of gameSlugDirs) {
  if (!gameSlugDir.isDirectory()) continue;

  const sourceDir = join(sourceRoot, gameSlugDir.name);
  const files = await readdir(sourceDir);
  const csvFiles = files.filter((file) => file.endsWith('.csv'));

  if (csvFiles.length === 0) continue;

  const destDir = join(dataRoot, gameSlugDir.name);
  await mkdir(destDir, { recursive: true });

  for (const csvFile of csvFiles) {
    await copyFile(join(sourceDir, csvFile), join(destDir, csvFile));
    console.log(`Synced ${gameSlugDir.name}/${csvFile}`);
  }
}

console.log('CSV data sync complete!');