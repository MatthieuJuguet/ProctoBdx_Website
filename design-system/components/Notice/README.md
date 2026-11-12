# Notice

Les encadrés : une information à ne pas manquer, posée dans un panneau, avec une pastille d'icône.

## Variantes

| Classe | Quand |
| --- | --- |
| `notice--statement` (classe `rdv__rule`) | L'énoncé qui prime sur tout le reste de la section : l'adressage obligatoire. Texte `statement` en `navy`, passage clé en graisse 600 surligné `brand-mark`, pastille 60 px, fond `brand-soft`, contour `brand-line`, arrondi `radius-2xl`. Un par page au plus. |
| `notice` | Une information de préparation : la préadmission en ligne. Titre `title-4`, texte `ink2`, lien d'action, pastille 48 px. |
| `handoff` | Un renvoi vers le site d'un tiers qui tient l'information à jour (la clinique Tivoli-Ducos). Fond `card-glass`, contour `line`, texte `ink2`, un `btn--line` avec l'icône lien-externe. |

## Balisage

```html
<div class="notice"><span class="notice__ic" aria-hidden="true">…courriel…</span>
  <div class="notice__txt"><h3>La préadmission en ligne</h3><p>…</p><a href="#pendant">À la clinique Tivoli-Ducos →</a></div></div>
```

## Règles

- Une phrase directe, à l'indicatif, sans conditionnel : « vous devez obligatoirement être adressé(e) par un médecin ».
- Le renvoi `handoff` ne recopie pas les informations du tiers : il dit pourquoi on renvoie (« c'est elle qui les tient à jour »).
- Sous 900 px, la pastille passe au-dessus du texte.
