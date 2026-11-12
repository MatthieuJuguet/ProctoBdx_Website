// Génère design-system/tokens.css à partir de design-system/tokens.json.
// Même compilation que la page du design system : couleurs et ombres par thème,
// autres familles de jetons dans :root, une classe par style typographique,
// un @font-face par police.
// Une différence : les classes des styles typographiques sont préfixées (.type-eyebrow, .type-nav…).
// Sans préfixe, .lead, .eyebrow, .nav et .mono entrent en collision avec les classes des composants
// de bundle.css et changent leur rendu (interlignes, hauteur des liens du menu, taille des données).
// Usage : node scripts/tokens-css.mjs

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'design-system');
const t = JSON.parse(readFileSync(join(dir, 'tokens.json'), 'utf8'));

const name = (n) => n.replace(/^(--|\.)/, '').replace(/\./g, '\\.');
const themes = t.color?.themes ?? [];
const first = themes[0]?.id;
const resolve = (v) => (typeof v === 'string' ? v.replace(/^\{(.+)\}$/, (_, ref) => `var(--${name(ref)})`) : v);
const valueFor = (v, theme) => resolve(typeof v === 'object' && v !== null ? (v[theme] ?? v[first]) : v);
const px = (v) => (typeof v === 'number' ? `${v}px` : v);

const out = [`/* ${t.name} — généré depuis tokens.json par scripts/tokens-css.mjs : ne pas modifier à la main */`, ''];

// Polices
for (const f of t.type?.fonts ?? []) {
  const file = f.file.includes('/') ? f.file : `fonts/${f.file}`;
  out.push(
    '@font-face {',
    `  font-family: "${f.family}";`,
    `  src: url("${file}") format("${file.split('.').pop()}");`,
    `  font-weight: ${f.weight ?? '400'};`,
    `  font-style: ${f.style ?? 'normal'};`,
    '  font-display: swap;',
    '}',
    '',
  );
}

// Couleurs et ombres : premier thème sur :root, puis un bloc par thème suivant
const themed = [...(t.color?.tokens ?? []), ...(t.shadow?.tokens ?? [])];
themes.forEach((th, i) => {
  const lines = themed
    .filter((tok) => i === 0 || (typeof tok.value === 'object' && tok.value[th.id] !== undefined))
    .map((tok) => `  --${name(tok.name)}: ${valueFor(tok.value, th.id)};`);
  if (!lines.length) return;
  out.push(i === 0 ? `:root, [data-theme="${th.id}"] {` : `[data-theme="${th.id}"] {`, ...lines, '}', '');
});

// Autres familles (espacements, arrondis, mise en page, traits, verre, plans…) et familles de polices
const other = Object.entries(t)
  .filter(([k, v]) => !['color', 'shadow', 'type'].includes(k) && Array.isArray(v?.tokens))
  .flatMap(([k, v]) => v.tokens.map((tok) => `  --${name(tok.name)}: ${['spacing', 'radius'].includes(k) ? px(tok.value) : tok.value};`));
const families = Object.entries(t.type?.families ?? {}).map(([k, stack]) => `  --font-${k.toLowerCase()}: ${stack};`);
out.push(':root {', ...other, ...families, '}', '');

// Styles typographiques
for (const g of t.type?.groups ?? []) {
  for (const s of g.styles) {
    const decl = [`  font-family: var(--font-${(s.family ?? g.family).toLowerCase()});`, `  font-size: ${px(s.fontSize)};`];
    if (s.lineHeight !== undefined) decl.push(`  line-height: ${s.lineHeight};`);
    if (s.fontWeight !== undefined) decl.push(`  font-weight: ${s.fontWeight};`);
    if (s.fontStyle) decl.push(`  font-style: ${s.fontStyle};`);
    if (s.letterSpacing !== undefined) decl.push(`  letter-spacing: ${px(s.letterSpacing)};`);
    if (s.opticalSize !== undefined) decl.push(`  font-variation-settings: 'opsz' ${s.opticalSize};`);
    out.push(`.type-${name(s.name)} {`, ...decl, '}', '');
  }
}

writeFileSync(join(dir, 'tokens.css'), out.join('\n'));
console.log(`tokens.css : ${themed.length} couleurs et ombres, ${other.length} autres jetons, ${(t.type?.groups ?? []).reduce((n, g) => n + g.styles.length, 0)} styles de texte`);
