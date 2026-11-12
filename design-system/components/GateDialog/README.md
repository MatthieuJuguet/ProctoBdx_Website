# GateDialog

La mise en garde avant « Le coin de l'urgentiste » : personne n'accède à ce contenu médical sans l'avoir lue.

## Balisage

`dialog.gate` (`aria-labelledby`, `aria-describedby`) > `.gate__in` : pastille cadenas `closed` sur `closed-soft`, sur-titre « Espace médecins », `h2`, texte, `.gate__actions` avec « Je suis professionnel de santé » (`btn--primary`) et « Revenir au site » (`btn--line`, `autofocus`).

## Comportement

- Tout lien `[data-gate="urgentiste"]` ouvre la fenêtre en modale (`showModal`) au lieu de suivre le lien.
- Le focus va sur « Revenir au site », le choix le plus prudent. Échap, le bouton ou un clic sur le voile (`scrim`, flou 3 px) ferment et rendent le focus au lien d'origine.
- Sur le site final, la mise en garde s'affiche aussi sur la page elle-même pour qui arrive par un lien direct ou un moteur de recherche, et la page n'est pas indexée.

## Texte

« Cette rubrique s'adresse aux médecins. Elle détaille des conduites à tenir, des traitements et leurs posologies, rédigés pour des professionnels de santé. » Puis : « Vous êtes patient ? Ces informations ne remplacent pas un examen médical. Ne vous traitez pas à partir de cette page : consultez votre médecin. »
