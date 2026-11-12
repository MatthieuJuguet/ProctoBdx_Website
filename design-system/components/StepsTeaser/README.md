# StepsTeaser

Le panneau marine « Votre intervention » de l'accueil : trois étapes courtes (avant, pendant, après) et un lien vers la page qui réunit les documents.

## Balisage

`section.panel.glass.panel--navy` > `.panel__head`, `ol.steps` > `li` (`span.num` 01, `h3`, `p`), `.more` (`a.btn.btn--light` + lien pour les infirmier(e)s).

## Règles

- C'est un aperçu : aucune liste de documents sur l'accueil. Les livrets et fiches sont sur la page Votre intervention.
- Une phrase par étape. Avant : la parfaite maîtrise des livrets est impérative pour la sécurité du patient. Pendant : la clinique Tivoli-Ducos. Après : « Si des soins infirmiers vous ont été prescrits, remettez la fiche de liaison à votre infirmier(e). »
- Numéros `numeral-step` en `num`, titres `surface`, texte `on-navy2`, filets `on-navy-line`.
- Sous 900 px, le numéro passe à gauche du titre (44 px).
