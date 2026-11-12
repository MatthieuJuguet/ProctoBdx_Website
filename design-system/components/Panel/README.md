# Panel

Le panneau de verre du plan médian : chaque section de contenu y est posée, et le trèfle se devine au travers.

## Balisage

```html
<section class="panel glass" id="equipe">
  <div class="panel__head">
    <div class="head"><p class="eyebrow">L'équipe médicale</p><h2 class="h2">Des proctologues médecins et chirurgiens</h2></div>
    <p>Chapeau à droite du titre.</p>
  </div>
  … contenu …
  <div class="more"><p>Phrase de renvoi.</p><a href="…">L'équipe médicale →</a></div>
</section>
```

Les panneaux se suivent dans `<div class="wrap stack">` (écart `space-20`, padding vertical `space-28` ; 40 et 56 px sous 900 px).

## Variantes

| Classe | Quand |
| --- | --- |
| `panel glass` | Toute section de contenu. Padding `space-14` (28 × 22 px sous 900 px), arrondi `radius-panel`. |
| `panel glass panel--navy` | Une seule par page, pour le parcours « Votre intervention ». Texte `on-navy`, sur-titre et chiffres `num`, boutons `btn--light`. |
| `.pair` > deux `panel glass` | Deux encarts courts côte à côte (première consultation, honoraires) : titre `h2` en `title-3`, citation `quote`, lien final collé en bas. |
| `.more` | Rangée de fin : une phrase `ink2` et un ou deux liens `→` vers les pages dédiées. Sur marine, liens `surface` et bouton `btn--light`. |

## Règles

- Le verre (`panel-glass`, flou `glass-blur`, `glass-saturate`) ne s'applique qu'au-dessus de 900 px ; dessous, `panel` reste presque opaque pour la lisibilité et la batterie.
- Pas de panneau dans un panneau : à l'intérieur, utilisez des cartes `card-glass` (étapes, sujets, renvois) ou une carte blanche `surface`.
- Chaque panneau porte un `id` ; `scroll-margin-top` laisse la place à l'en-tête collant.
- L'accueil résume : un panneau d'accueil finit par un lien vers sa page, jamais par une liste de documents.
