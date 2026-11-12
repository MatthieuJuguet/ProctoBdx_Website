// Importe dans design-system/ le contenu du design system téléchargé depuis l'artefact claude.ai.
// Le dossier source est celui où l'outil Artifact de Claude a enregistré la lecture :
// project/… (README, tokens, composants, polices) et les assets nommés <id>.<ext>.
// Les adresses /_blob/<id> des aperçus deviennent des chemins relatifs vers assets/.
// Usage : node scripts/import-design-system.mjs <dossier téléchargé>
// Enchaîner avec : node scripts/tokens-css.mjs

import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const src = process.argv[2];
if (!src) { console.error('Usage : node scripts/import-design-system.mjs <dossier téléchargé>'); process.exit(1); }
const project = join(src, 'project');
const dest = join(dirname(fileURLToPath(import.meta.url)), '..', 'design-system');

// Ce que l'import gère ; le reste de design-system/ (tokens.css, notes locales) est conservé.
for (const p of ['README.md', 'tokens.json', 'components', 'assets', 'fonts']) rmSync(join(dest, p), { recursive: true, force: true });

const walk = (d) => readdirSync(d, { withFileTypes: true })
  .flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]));
const copy = (from, rel) => { const to = join(dest, rel); mkdirSync(dirname(to), { recursive: true }); cpSync(from, to); };

// Assets : id → chemin dans assets/
const index = JSON.parse(readFileSync(join(project, 'design-system.json'), 'utf8'));
const blobs = new Map();
let assets = 0;
for (const [group, g] of Object.entries(index.assetGroups ?? {})) {
  for (const r of Object.values(g.files ?? {})) {
    const rel = `assets/${group}/${r.name}`;
    const from = join(src, r.blob + extname(r.name));
    if (!existsSync(from)) { console.warn(`Manquant : ${rel} (${r.blob})`); continue; }
    copy(from, rel);
    blobs.set(r.blob, rel);
    assets++;
  }
}

// Fichiers du système
let files = 0;
for (const f of walk(project)) {
  const rel = relative(project, f).split(sep).join('/');
  if (rel === 'design-system.json') continue;
  copy(f, rel);
  if (rel.endsWith('.html') || rel.endsWith('.css')) {
    const to = join(dest, rel);
    const up = '../'.repeat(rel.split('/').length - 1);
    const text = readFileSync(to, 'utf8').replace(/\/_blob\/([0-9a-f]{32})/g, (m, id) => (blobs.has(id) ? up + blobs.get(id) : m));
    writeFileSync(to, text);
  }
  files++;
}

console.log(`${files} fichiers et ${assets} assets importés dans design-system/ (${index.title}, modifié le ${index.lastChange?.at ?? '?'})`);
