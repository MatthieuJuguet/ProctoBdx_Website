# GroupHeading

Un intertitre discret qui sépare deux niveaux de lecture dans la pile de panneaux, comme « Informations complémentaires » sur l'accueil.

## Balisage

```html
<div class="group-head"><p class="eyebrow">Informations complémentaires</p></div>
```

Placez-le entre deux panneaux de `.stack`. Sa marge basse négative (−40 px, −12 px sous 900 px) le rapproche du panneau qui suit.

## Règles

- Un seul par page : il marque la fin du parcours principal (orienter, rassurer, prendre rendez-vous) et le début des informations pratiques.
- Ce n'est pas un titre de section : chaque panneau garde son propre `h2`.
- Sur-titre `ink2`, filet `panel-line`.
