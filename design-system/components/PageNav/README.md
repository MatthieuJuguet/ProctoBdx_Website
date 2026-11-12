# PageNav

Le sommaire d'une page intérieure : une rangée de raccourcis de verre vers ses chapitres, avec leur numéro.

## Balisage

`nav.toc[aria-label="Sur cette page"]` > `a.glass` > `span.toc__n` (numéro) + `<span>Titre<small>sous-titre</small></span>`. Placez-le en bas du PageHero ; chaque lien pointe vers l'`id` d'un Chapter.

## Règles

- Les numéros reprennent ceux des chapitres (01, 02, 03) ; un chapitre hors séquence prend « + ».
- Quatre liens au plus, sur une ligne au-dessus de 1100 px, deux par ligne en dessous, un sous 900 px.
- Le sous-titre dit ce qu'on trouve, pas le nom du chapitre une seconde fois.
