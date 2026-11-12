# Announcement

Le bandeau d'annonces, juste sous l'en-tête : une ou plusieurs informations du cabinet, qui se relaient en fondu.

## Données

Les annonces vivent dans un bloc JSON, le seul endroit à modifier :

```html
<script type="application/json" id="annonces-data">
[{"texte": "Le Dr Florian Grousez a rejoint l'équipe du cabinet en 2026.", "lien": "Découvrir l'équipe", "url": "#equipe",
  "niveau": "information", "debut": "2026-11-01", "fin": "2027-01-31"}]
</script>
```

`niveau` vaut `information` (fond `brand-soft`, icône info `brand`) ou `important` (fond `closed-soft`, texte `important-ink`, icône alerte `closed`). `debut` et `fin` sont des dates AAAA-MM-JJ, comparées à la date de Paris ; vides, l'annonce n'expire pas.

## Comportement

- Une annonce `important` en cours passe seule : les informations attendent qu'elle expire.
- Plusieurs annonces se relaient en fondu toutes les 8 secondes (0,6 s de fondu). Elles sont empilées dans la même cellule de grille : le bandeau garde la hauteur de la plus longue et la page ne saute jamais.
- La rotation s'arrête au survol, au focus sur le texte, au bouton pause, et dès que la personne utilise ‹ ›. Elle ne démarre jamais si le système demande de réduire les animations (le bouton pause disparaît alors).
- Le bouton × masque le bandeau ; le choix est gardé dans le navigateur pour ce jeu d'annonces et ressort quand une nouvelle annonce paraît.

## Accessibilité

`role="region"` et `aria-label="Annonces du cabinet"` ; `aria-live="off"` pendant la rotation, `polite` en navigation manuelle ; chaque annonce commence par « Annonce 1 sur 2 : » en `.sr-only`. L'icône et le bouton de fermeture sont centrés sur la première ligne de texte (interligne `--a-lh` de 24 px). Sous 767 px, les contrôles passent sous le texte.

## Rédaction

Une phrase factuelle et un lien court. Pas de « nouveau », « découvrez », de superlatif ni de point d'exclamation : c'est une information de cabinet médical, pas une promotion.
