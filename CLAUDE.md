# Cabinet de proctologie de Bordeaux — site web

Site vitrine d'un cabinet médical de proctologie à Bordeaux. Dépôt **public** : https://github.com/MatthieuJuguet/ProctoBdx_Website

Langue de travail, du code commenté et du site : **français**.

## Phases du projet

1. **Design system** (`design-system/`) — conçu par l'utilisateur dans un artefact « Design System » sur claude.ai ; `design-system/` en est une copie importée. C'est la seule source de vérité pour les couleurs, typographies, espacements, composants, le ton et les contenus : ne pas inventer de valeurs qui n'y figurent pas, signaler ce qui manque. N'utiliser aucun autre design system.
2. **Maquettes** (`maquettes/`) — HTML/CSS statique, sans framework ni build. Elles servent à décider et valider le style avec l'utilisateur ; rien n'est définitif avant sa validation. `maquettes/prototype-v2/` est le prototype qui a servi à valider le design system avec le médecin commanditaire (accueil, Votre intervention). C'est une base très cohérente, pas un design figé pour le site définitif : on la reprend telle quelle quand rien n'est à refaire, et on peut revenir sur des éléments, recoder ou optimiser — proposer les optimisations de code repérées, surtout au développement définitif. Le dossier garde l'état présenté au médecin ; les évolutions se font dans les nouvelles maquettes. Son `fond.js` (trèfle 3D) et son script en ligne (statut d'ouverture, annonces, copie d'adresse, mise en garde) sont à reprendre, sans le bandeau « Prototype V2 » ni le sélecteur d'annonces.
   Afficher : `node scripts/serve.mjs` (configuration `maquettes` de `.claude/launch.json`), puis http://localhost:4317/maquettes/… — en file://, les polices sont bloquées.
3. **Développement définitif** — la stack n'est pas encore choisie. Ne pas l'anticiper dans les maquettes.

## Utiliser le design system

- Lire d'abord `design-system/README.md` (principes, ton, couleurs, typographie, mise en page, accessibilité), puis le `README.md` de chaque composant utilisé.
- Charger `design-system/tokens.css` puis `design-system/components/bundle.css` ; reprendre le balisage de `components/<Composant>/preview.html`. Les classes n'ont pas de préfixe (`panel`, `glass`, `btn`, `eyebrow`…).
- Ne jamais modifier `design-system/` à la main. Pour le mettre à jour : relire l'artefact avec l'outil Artifact (fichiers `project/…` et assets par id), puis `node scripts/import-design-system.mjs <dossier téléchargé>` et `node scripts/tokens-css.mjs`.
- `tokens.css` est généré depuis `tokens.json` par `scripts/tokens-css.mjs`.

## Contraintes d'un site médical

- Déontologie (art. R.4127-19-1 du code de la santé publique) : information loyale et honnête, sans témoignages de patients, sans comparaison avec d'autres praticiens ou établissements, sans incitation à des actes inutiles. Ton informatif, pas promotionnel.
- Données de santé = données sensibles (RGPD) : toute collecte via le site (formulaire, prise de rendez-vous) se décide avec l'utilisateur.
- Accessibilité : viser le RGAA / WCAG 2.1 AA (contrastes, navigation clavier, tailles de texte).

## Conventions

- UTF-8, LF, indentation 2 espaces (`.editorconfig`, `.gitattributes`).
- Dépôt public : aucun secret, aucune donnée personnelle, aucun fichier sous licence non redistribuable.
- Ne committer ou pousser que sur demande de l'utilisateur.
