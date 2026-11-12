# TextLink

Les liens de texte : soulignés, en `brand`, avec une flèche quand ils mènent à une page et une icône quand ils quittent le site.

## Formes

| Forme | Balisage | Quand |
| --- | --- | --- |
| Lien dans une phrase | `<a href>` | Souligné, `brand`, `brand-h` au survol, `text-underline-offset` 3 px. |
| Lien d'action | `<a>Comprendre nos honoraires →</a>`, gras | Fin de carte ou de panneau, vers une page dédiée. La flèche est un caractère « → ». |
| Lien externe | `a.link-ext` + icône lien-externe 18 px | Site d'un tiers (SNFCP, clinique). Nouvel onglet, « S'ouvre dans un nouvel onglet » en `.sr-only`. |
| Sur marine | dans `.panel--navy .more` | Texte `surface`, soulignement épaissi au survol. |
| Urgence | dans `.urgence__body` | `urgent`, `urgent-h` au survol. |

## Règles

- Un même lien porte toujours le même libellé : « Comment se passe la prise de rendez-vous → », « L'équipe médicale → ».
- Pas de « cliquez ici » : le libellé dit où l'on va.
- Un lien d'action reste sur une ligne au-dessus de 900 px (`white-space: nowrap`), il peut passer à la ligne en dessous.
