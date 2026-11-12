# Button

Les boutons : une action principale par écran, des actions secondaires sobres, et jamais de bouton pour téléphoner.

## Balisage

`<a class="btn btn--primary">` pour un lien, `<button class="btn btn--line" type="button">` pour une action dans la page. Une icône de 20 px peut précéder le libellé.

| Classe | Quand |
| --- | --- |
| `btn btn--primary` | L'action principale de l'écran, une seule : « Votre parcours de soins » dans le hero, « Itinéraire » dans Venir au cabinet. Fond `brand`, texte `surface`, survol `brand-h`. |
| `btn btn--line` | Action secondaire ou externe : « Réserver sur Doctolib », « Annuaire Santé, pour votre médecin », « Site de la clinique », « Copier l'adresse ». Fond `surface`, contour `line`, survol `ink`. |
| `btn btn--light` | Sur le panneau marine : « Préparer votre intervention ». Fond `surface`, texte `navy`. |
| `+ btn--lg` | Le bouton du hero (56 px de haut). |
| `+ btn--sm` | Bouton serré (44 px), dans une carte. |

## Règles

- Doctolib n'est jamais un `btn--primary` : il reste un `btn--line`, dans la section Prendre rendez-vous, sous la question « Vous êtes adressé(e) par votre médecin ? ».
- Le téléphone n'est jamais un bouton : c'est du texte en `mono`, suivi de « Attention, le standard est souvent saturé. »
- Libellé en `button` (18 px gras), casse phrase, verbe d'action. Hauteur 52 px au moins, cible de 44 px au plus serré.
- Lien externe : icône lien-externe après le libellé et « S'ouvre dans un nouvel onglet » en `.sr-only`.
- Pleine largeur sous 900 px quand le bouton est seul.
