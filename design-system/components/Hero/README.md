# Hero

L'ouverture de l'accueil : un message d'orientation, pas un appel à réserver, posé à gauche du trèfle 3D.

## Balisage

```html
<section class="hero"><div class="wrap">
  <div class="hero__text">
    <p class="eyebrow">Proctologie médicale et chirurgicale<span class="eyebrow__loc"> · Le Bouscat, Bordeaux</span></p>
    <h1>Avant de consulter un proctologue, <em>parlez-en à votre médecin.</em></h1>
    <p class="lead">…</p>
    <p class="info"><span class="status is-open">…</span><span class="info__addr">…</span></p>
  </div>
  <div class="hero__cta"><a class="btn btn--primary btn--lg" href="#orientation">…</a><p class="hero__note">…</p></div>
  <ul class="quick">…</ul>
</div></section>
```

## Règles

- Le H1 (`display-hero`) dit la règle du cabinet ; la fin de la phrase passe à la ligne en italique `navy`.
- Le bouton descend vers le parcours de soins (`#orientation`). Jamais de bouton Doctolib ni de téléphone ici.
- La note sous le bouton rappelle : « Le cabinet reçoit uniquement les patients adressés par un médecin. »
- Le texte est posé à même le fond, sur le trèfle : sur-titre `brand-h`, chapeau et note `ink-clover`. Colonne de 640 px au plus, pour laisser le trèfle visible à droite.
- Le statut d'ouverture (StatusPill) et l'adresse se calculent à l'heure de Paris ; l'adresse disparaît sous 900 px.
- Suivi des QuickLinks.
