# VisitInfo

Le bloc Venir au cabinet : photo de l'entrée, adresse, statut, téléphone, itinéraire, horaires de la semaine et accès.

## Balisage

`.visit` > `figure` (photo 4:3 `radius-xl` + légende) et `.visit__info` : `p.addr` (`title-2`), StatusPill, `p.visit__tel` (téléphone `mono`), `.actions` (`btn--primary` Itinéraire, `btn--line` Copier l'adresse), `.visit__cols` (`.hours#horaires` et `ul.access`).

## Horaires

Générés par le script, du lundi au dimanche ; la ligne du jour (heure de Paris) passe en `surface` et en gras. Heures en `mono` : « 9h00–12h30 · 14h00–18h30 », « Fermé ».

## Accès

Bus 9, arrêt « Ampère » ; Tram C, arrêts « Grand Parc » ou « Ravezies » ; un avertissement `closed` : « Pas de parking à proximité : privilégiez les deux-roues ou les transports en commun. » Icônes 20 px.

## Règles

- Copier l'adresse : le libellé devient « Adresse copiée » pendant 2 s ; si la copie échoue, l'adresse s'affiche dans le bouton.
- Itinéraire vers un service de cartes ouvert (OpenStreetMap), sans carte intégrée.
- Une colonne sous 1100 px.
