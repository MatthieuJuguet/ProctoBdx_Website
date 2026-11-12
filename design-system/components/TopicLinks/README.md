# TopicLinks

Une grille de sujets qui ouvrent les vidéos de proctologie de la SFHGL (ex-CREGG), pour aider le patient à comprendre ce qu'il ressent avant d'en parler à son médecin.

## Balisage

`ul.topics[aria-label="Vidéos de proctologie, par sujet"]` > `li` > `a[target=_blank][rel=noopener]` : icône vidéo 32 px (trait 1,6) + libellé `item`. Trois colonnes ; `topics--2` pour deux colonnes dans un chapitre ; une seule sous 900 px.

## Sujets

Hémorroïdes ; Fissure anale ; Abcès et fistule anale ; Constipation ; Rectocèle ; Sinus pilonidal et maladie de Verneuil ; Infections sexuellement transmissibles ; Sexualité anale ; Généralités sur la proctologie. Chaque lien mène à la page du sujet sur sfhgl.org.

## Règles

- Toujours suivi de la source et de la limite : « Vidéos de la SFHGL (ex-CREGG) […]. Elles vous informent, mais ne remplacent pas l'examen par un médecin. » Écrivez « (ex-CREGG) » dans un `span.nw`.
- Liens externes : « Les liens s'ouvrent dans un nouvel onglet » en `.sr-only`, une fois pour la liste.
- Pas de vidéo intégrée dans la page.
