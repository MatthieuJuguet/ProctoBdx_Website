# Cabinet de proctologie de Bordeaux — site web

Site vitrine d'un cabinet médical de proctologie à Bordeaux. Dépôt **public** : https://github.com/MatthieuJuguet/ProctoBdx_Website

Langue de travail, du code commenté et du site : **français**.

## Phases du projet

1. **Design system** (`design-system/`) — fourni par l'utilisateur. C'est la seule source de vérité pour les couleurs, typographies, espacements et composants : ne pas inventer de valeurs qui n'y figurent pas, signaler ce qui manque.
2. **Maquettes** (`maquettes/`) — HTML/CSS statique, sans framework ni build. Elles servent à décider et valider le style avec l'utilisateur ; rien n'est définitif avant sa validation.
3. **Développement définitif** — la stack n'est pas encore choisie. Ne pas l'anticiper dans les maquettes.

## Contraintes d'un site médical

- Déontologie (art. R.4127-19-1 du code de la santé publique) : information loyale et honnête, sans témoignages de patients, sans comparaison avec d'autres praticiens ou établissements, sans incitation à des actes inutiles. Ton informatif, pas promotionnel.
- Données de santé = données sensibles (RGPD) : toute collecte via le site (formulaire, prise de rendez-vous) se décide avec l'utilisateur.
- Accessibilité : viser le RGAA / WCAG 2.1 AA (contrastes, navigation clavier, tailles de texte).

## Conventions

- UTF-8, LF, indentation 2 espaces (`.editorconfig`, `.gitattributes`).
- Dépôt public : aucun secret, aucune donnée personnelle, aucun fichier sous licence non redistribuable (polices commerciales, photos).
- Ne committer ou pousser que sur demande de l'utilisateur.
