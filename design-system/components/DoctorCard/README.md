# DoctorCard

La carte d'un médecin dans la grille de l'équipe : portrait rond, nom, année d'arrivée, formation en une phrase, lien vers son parcours.

## Balisage

`.team` (3 colonnes, 2 sous 1100 px, 1 sous 900 px) > `article.doc` > `span.doc__ph > img` (portrait carré, `alt=""` car le nom suit) + `.doc__txt` (`h3`, `span.since`, `p`, `a`).

## Contenu

- Nom : « Dr Prénom Nom » en `title-5`.
- Arrivée : « Au cabinet depuis 1996 », en `brand`, gras.
- Formation : une phrase, diplômes et lieu (« DES d'hépato-gastro-entérologie, université de Bordeaux »).
- Lien : « Voir son parcours ».
- Les cartes suivent l'ordre d'arrivée au cabinet.

## Règles

- Portrait de 112 px (88 px sous 900 px), recadré en cercle, visage centré, sur `photo-empty` en attendant la photo.
- La grille est précédée de la photo d'équipe (`.team-photo`), en pleine largeur et jamais recadrée sur les visages.
- Pas de note, d'avis de patient ni de comparaison entre médecins.
