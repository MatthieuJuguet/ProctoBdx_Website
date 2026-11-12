# ProBox

L'encart Espace médecins en fin d'accueil : un accès distinct pour les médecins adresseurs.

## Balisage

`section.glass.pros` > un bloc texte (`span.badge` avec cadenas « Réservé aux professionnels de santé », `h2`, `p`) et `nav[aria-label="Espace médecins"]` > `a` (`span` libellé + `small` précision).

## Liens

- SOS Procto : avis spécialisé en urgence.
- Écrire au cabinet : MSSanté, via l'Annuaire Santé (`annuaire.esante.gouv.fr`, nouvel onglet).
- Le coin de l'urgentiste : contenu médical, ouvert après la mise en garde (GateDialog).

## Règles

- La messagerie sécurisée est MSSanté ; ne citez plus Apicrypt.
- Ton de confrère dans le texte, mais l'encart reste lisible par un patient : il lui dit que ce n'est pas pour lui.
