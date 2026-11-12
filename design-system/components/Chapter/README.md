# Chapter

Un chapitre de page intérieure : un panneau en deux colonnes, le numéro et le titre à gauche (collants au défilement), le contenu à droite.

## Balisage

`section.panel.glass.chapter#avant` > `header.chapter__side` (`span.chapter__n` `aria-hidden`, `p.eyebrow`, `h2`) + `.chapter__body` (`p.chapter__lead`, puis cartes, encadrés, sous-rubriques `.sub` avec `h3`).

## Règles

- Numéros 01, 02, 03 pour une séquence réelle (avant, pendant, après) ; « + » pour un chapitre hors séquence (Pour aller plus loin). Numéro `numeral-chapter` en `numeral-soft`, décoratif : le sur-titre dit la même chose en texte.
- Colonne gauche de 290 px, collante à 108 px du haut ; elle passe au-dessus du contenu sous 1100 px.
- Dans un chapitre, les sous-rubriques `.sub` ont toutes la même forme : filet `line`, `h3` en `title-4`, texte `ink2`, puis leur contenu (cartes, points clés, sujets). Pas de carte isolée qui change de style.
