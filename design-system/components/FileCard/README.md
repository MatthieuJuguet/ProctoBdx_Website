# FileCard

La carte de document : un PDF à télécharger, une vidéo ou une fiche externe, avec sa vignette, son type, son titre et son poids.

## Balisage

`ul.files` > `li` > `a.file[href]` : vignette (`span.sheet` pour un PDF, `span.vid` pour une vidéo ou une fiche externe), `.file__txt` (`span.file__k` type, `strong` titre, `span.file__meta` format et poids) et `span.file__dl` (icône télécharger, ou lien-externe pour un autre site).

## Variantes

| Classe | Quand |
| --- | --- |
| `files files--big` | Les deux livrets pédagogiques : vignette 84 × 110 px avec le trèfle, titre en `title-5`, description, poids et bouton en pied. Deux colonnes. |
| `files` | Une fiche par ligne : fiches de liaison. Vignette `sheet--sm`. |
| `files files--pair` | Deux cartes de nature différente côte à côte : fiche d'hygiène (PDF) et vidéo sur le prurit anal (`span.vid`). |

## Règles

- Le titre dit le contenu (« Abcès et fistules »), l'étiquette le type (« Fiche de liaison »), le pied le format et le poids (« PDF · 516 Ko », en `mono-s`).
- Les adresses des PDF du site actuel ne changent pas.
- Toute la carte est le lien ; au survol, contour `brand`, `shadow-hover`, titre souligné, pastille pleine `brand`.
- Pour les infirmier(e)s, une mention `for-nurse` (icône intervention, texte `navy`) précède la liste des fiches de liaison.
