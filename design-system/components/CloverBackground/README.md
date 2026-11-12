# CloverBackground

Le grand trèfle 3D d'arrière-plan : le logo découpé en plaques fines et pâles, vu de biais, qui tourne lentement sur lui-même derrière toute la page.

## Balisage

En tête de `<body>`, puis le script du fond chargé en `defer` (Three.js, empaqueté en un seul fichier) :

```html
<canvas class="bg-canvas" aria-hidden="true"></canvas>
<svg class="bg-static" viewBox="0 0 81.571 84.449" aria-hidden="true"><!-- logo plat --></svg>
…
<script src="fond.js" defer></script>
```

## Ce que fait le script

- Chaque feuille du logo est extrudée en trois plaques fines (extérieure, médiane, intérieure : `clover-1`, `clover-2`, `clover-3`), matière mate, éclairage d'ambiance doux et ombre portée très légère (`navy` à 6 %).
- Le trèfle est très grand et posé à droite : centre à 74 % de la largeur et 54 % de la hauteur sur ordinateur, 82 % et 84 % sous 900 px. La colonne de texte du hero reste dégagée.
- Il tourne en continu : un tour en 150 secondes, sans lien avec le défilement, à 30 images par seconde au plus. À l'ouverture, les plaques se déploient en éventail (2,6 s) et le canvas apparaît en fondu.
- Le rendu s'arrête quand l'onglet est masqué.

## États

- `prefers-reduced-motion: reduce` : le trèfle reste immobile.
- Sans WebGL : la classe `bg-fallback` est posée sur `<html>`, le canvas disparaît et le filigrane `.bg-static` (logo plat à 20 %, incliné) prend le relais.

## Règles

- Le trèfle ne réagit ni au défilement ni à la souris : ces deux pistes ont été essayées puis écartées, elles gênaient la lecture.
- Tout texte posé à même le fond doit tenir 4,5:1 sur `clover-3` : `ink-clover`, `brand-h` ou `ink`, jamais `ink2` ni `brand` hors d'un panneau.
- Le trèfle est décoratif (`aria-hidden`) et unique dans la page. Il passe sous les bandeaux `.front` et se devine à travers les panneaux de verre.
