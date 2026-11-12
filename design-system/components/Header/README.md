# Header

L'en-tête blanc et collant : logo et nom du cabinet, menu principal, accès à l'espace médecins.

## Balisage

`header.header.front` > `.wrap.header__in` > `a.brand` (logo plat 40 × 41 px, puis `<strong>Cabinet de Proctologie</strong><small>de Bordeaux</small>`), `nav.nav`, `a.pro` (icône cadenas + « Espace médecins »), `button.menu`.

## Menu

Consultations, Urgences, Votre intervention, Le cabinet, Accès et horaires : l'ordre de l'arborescence. Sur une page intérieure, le lien de la rubrique porte `aria-current="page"` (fond `brand-soft`, texte `brand-h`).

## Règles

- Aucun bouton de prise de rendez-vous dans l'en-tête : le site oriente avant de réserver.
- Sous 1240 px (`bp-nav`), le menu passe dans le bouton `.menu` (44 × 44 px) ; sous 900 px, l'accès médecins aussi, et la hauteur passe de 76 à 64 px.
- Fond `surface`, filet `line`, ombre `shadow-front` ; `top: env(safe-area-inset-top, 0px)` et une bande `body::before` blanche au-dessus sur mobile.
- Le nom se compose toujours en texte (`brand-name`), jamais dans une image.
