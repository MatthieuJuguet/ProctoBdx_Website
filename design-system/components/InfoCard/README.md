# InfoCard

Les deux cartes de la section Prendre rendez-vous, sous l'énoncé d'adressage : le délai et la messagerie du médecin d'abord, la réservation ensuite.

## Balisage

`.rdv__grid` > `.rdv__card.rdv__card--delay` (sur-titre `rdv__k`, chiffre `rdv__n`, `.rdv__msg` avec titre, texte et `btn--line` vers l'Annuaire Santé) et `.rdv__card.rdv__card--book` (sur-titre, titre, texte, `btn--line btn--sm` Doctolib, `p.rdv__tel`).

## Ordre de priorité

1. L'énoncé d'adressage (Notice, variante `statement`) au-dessus, le plus visible.
2. La carte délai, blanche et surélevée (`surface`, `card-line`, `shadow-card`), plus large (1,25 fr) : « 8 à 10 mois pour un rendez-vous non urgent, en ligne comme par téléphone », puis « Trop long pour votre situation ? » et la messagerie MSSanté du médecin.
3. La carte réservation, en retrait (`card-quiet`) : « Une fois adressé(e) par votre médecin », Doctolib de préférence, téléphone en texte avec l'avertissement sur le standard.

## Règles

- Le bouton Doctolib n'est jamais le premier élément vu ni un bouton plein.
- Le téléphone reste du texte `mono`.
- Les deux cartes ont la même hauteur ; le téléphone est collé en bas de la seconde. Une colonne sous 1100 px.
