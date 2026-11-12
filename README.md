# Cabinet de proctologie de Bordeaux — site web

Site internet du Cabinet de proctologie de Bordeaux.

## Démarche

1. **Design system** — conçu à part, importé dans [`design-system/`](design-system/README.md).
2. **Maquettes** — pages statiques construites sur le design system, pour choisir et valider le style ([`maquettes/`](maquettes/)).
3. **Développement du site** — une fois les maquettes validées ; la technologie sera choisie à ce moment-là.

## Organisation du dépôt

```
design-system/   Design system : guide (README), jetons, composants, polices, logos, icônes, photos
maquettes/       Maquettes HTML/CSS des pages du site, dont le prototype de départ (prototype-v2/)
scripts/         Outils : import du design system, génération de tokens.css, serveur local
```

Pour afficher les maquettes : `node scripts/serve.mjs`, puis http://localhost:4317/maquettes/prototype-v2/

## Design system

Le design system est maintenu en dehors du dépôt ; `design-system/` en est une copie. Ne le modifiez pas à la main : faites évoluer la source, puis réimportez-la.

```bash
node scripts/import-design-system.mjs <dossier téléchargé>
node scripts/tokens-css.mjs
```

Une page l'utilise en chargeant `design-system/tokens.css` puis `design-system/components/bundle.css`, et en reprenant le balisage des aperçus (`components/<Composant>/preview.html`).

## Conventions

- Branche principale : `main`.
- Fichiers en UTF-8, fins de ligne LF, indentation de 2 espaces (voir `.editorconfig` et `.gitattributes`).
- Le dépôt est **public** : n'y placer que des fichiers dont la diffusion est autorisée (polices et photos sous licence, documents internes, données personnelles exclus).
