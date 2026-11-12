# Footer

Le pied de page marine : coordonnées du cabinet et liens de l'arborescence, en quatre colonnes.

## Balisage

`footer.footer.front` > `.wrap` > `.footer__grid` (coordonnées, puis colonnes Patients, Le cabinet, Espace médecins, chacune `h2` + `ul`) et `.footer__bottom` (copyright, Mentions légales, Confidentialité).

## Règles

- Fond `navy2` ; texte `footer-ink`, liens `surface` soulignés au survol, titres de colonne et mentions `footer-muted`, filet `footer-line`.
- Le téléphone est du texte en `mono`, jamais un lien d'appel mis en avant.
- Colonne Patients : Avant de consulter, Prendre rendez-vous, Votre première consultation, Honoraires, En cas d'urgence, Votre intervention.
- Colonne Espace médecins : SOS Procto, Messagerie sécurisée MSSanté (Annuaire Santé, nouvel onglet), Le coin de l'urgentiste (avec mise en garde, voir GateDialog).
- Anneau de focus `num` sur ce fond.
- Deux colonnes sous 900 px, coordonnées en pleine largeur.
