# UrgencyBand

Le bandeau Urgences : opaque, rose très pâle, en avant-plan, il dit au patient de ne pas prendre rendez-vous lui-même et de voir son médecin.

## Balisage

```html
<section class="urgence front" id="urgence" aria-labelledby="urgence-titre"><div class="wrap urgence__in">
  <div class="urgence__head"><span class="urgence__ic" aria-hidden="true">…alerte…</span><p class="eyebrow">Urgences</p><h2 class="h2" id="urgence-titre">…</h2></div>
  <div class="urgence__body"><p>…</p><ol><li><span>…</span></li><li><span>…</span></li></ol><a href="…">Que faire en cas d'urgence →</a></div>
</div></section>
```

## Règles

- Pleine largeur, hors de la pile de panneaux, juste après le parcours de soins : le trèfle passe dessous (`.front`, `shadow-front`).
- Fond `urgent-soft`, filets `urgent-line`, sur-titre et pastilles `urgent`, texte courant `urgent-ink`, titre `ink`.
- Reprend le texte du cabinet : « La notion d'urgence n'est pas la même pour le patient, pour le médecin de premier recours et pour le chirurgien proctologue. » Puis deux étapes : votre médecin traitant ou un urgentiste juge de l'urgence ; s'il le faut, il appelle SOS Procto.
- L'urgence se lit aussi sans la couleur : icône d'alerte, sur-titre « Urgences », titre explicite.
- Une colonne sous 1100 px.
