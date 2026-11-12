# CarePath

Le parcours de soins en trois étapes : le médecin généraliste, un spécialiste si nécessaire, puis l'adressage au cabinet.

## Balisage

```html
<div class="path-head"><h3>Pour consulter au cabinet : le parcours de soins</h3><p>Ce parcours permet de réguler les délais de rendez-vous, déjà longs.</p></div>
<ol class="path">
  <li class="step"><span class="step__n" aria-hidden="true">1</span><p class="step__k">Premier recours</p><h4>…</h4><p>…</p></li>
  …
  <li class="step step--end">… <a href="#rendez-vous">Comment se passe la prise de rendez-vous →</a></li>
</ol>
```

## Contenu validé

1. Premier recours : votre médecin généraliste, ou à défaut un médecin urgentiste. Il vous examine et juge si l'avis d'un proctologue est nécessaire.
2. Deuxième recours, si nécessaire : un gastro-entérologue, qui vous examine à son tour et vous oriente vers le cabinet si besoin.
3. Adressage : votre médecin vous adresse au cabinet, par un courrier détaillé avec une demande motivée, ou par messagerie sécurisée. « Ne prenez pas rendez-vous de vous-même. »

## Règles

- C'est le médecin qui adresse : l'étape 3 ne dit jamais « prenez rendez-vous ».
- Étapes en `card-glass` ; la dernière, la destination, en `brand-soft` avec un numéro plein `brand`.
- Les flèches entre étapes sont des pseudo-éléments `brand` ; elles deviennent verticales quand le parcours s'empile (sous 1100 px).
- Le parcours est une liste ordonnée : l'ordre est une information.
