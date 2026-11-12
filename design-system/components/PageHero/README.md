# PageHero

L'ouverture d'une page intérieure : fil d'Ariane, sur-titre, H1 en deux temps, chapeau, puis le sommaire de la page.

## Balisage

`section.page-hero` > `.wrap` > `nav.crumbs[aria-label="Fil d'Ariane"]` (`a` Accueil, séparateur « / » `aria-hidden`, `span[aria-current="page"]`), `.page-hero__text` (`p.eyebrow`, `h1` avec `<em>`, `p.lead`), puis PageNav.

## Règles

- H1 en `display-page` ; la seconde partie passe à la ligne en italique `navy` : « Avant, pendant, après *votre intervention.* »
- Comme le hero, le texte est posé sur le trèfle : fil d'Ariane et chapeau `ink-clover`, sur-titre `brand-h`. Colonne de 720 px au plus.
- Le sur-titre reprend la rubrique du menu, qui porte `aria-current="page"` dans le Header.
