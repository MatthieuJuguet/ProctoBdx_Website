# StatusPill

La pastille d'ouverture du cabinet, calculée à l'heure de Paris.

## Balisage

`<span class="status is-open js-status">Ouvert maintenant · jusqu'à 18h30</span>` ; `is-closed` quand le cabinet est fermé. Le script met à jour toutes les pastilles `.js-status` chaque minute.

## Libellés

- Ouvert : « Ouvert maintenant · jusqu'à 12h30 » ou « … jusqu'à 18h30 ».
- Fermé dans la journée : « Fermé · ouvre à 14h00 ».
- Fermé jusqu'au lendemain ou plus : « Fermé · réouverture demain à 9h00 », « … lundi à 9h00 ».

## Règles

- Horaires : du lundi au vendredi, 9h00–12h30 et 14h00–18h30, en `Europe/Paris`.
- Ouvert `ok` sur `ok-soft`, fermé `closed` sur `closed-soft` : le mot et la pastille disent l'état, la couleur le double.
- Heures au format « 9h00 », sans zéro initial.
