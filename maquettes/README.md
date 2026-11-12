# Maquettes

Maquettes des pages du site, en HTML/CSS statique, construites à partir du [design system](../design-system/README.md).

Elles servent à choisir et valider le style avant le développement définitif. Chaque page charge `../design-system/tokens.css` puis `../design-system/components/bundle.css`.

- [`site/`](site/README.md) — les maquettes du site : l'accueil et Votre intervention repris du prototype, puis les nouvelles pages.
- [`prototype-v2/`](prototype-v2/README.md) — le prototype (accueil et Votre intervention) qui a servi à valider le design system avec le médecin commanditaire. Une base de travail cohérente, que les nouvelles maquettes reprennent ou améliorent ; le dossier lui-même garde l'état présenté.

## Afficher les maquettes

Les pages doivent être servies en HTTP : ouvertes directement depuis le disque, les navigateurs bloquent les polices.

```bash
node scripts/serve.mjs
```

Puis ouvrir une page, par exemple http://localhost:4317/maquettes/site/
