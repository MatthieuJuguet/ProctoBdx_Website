# Maquettes du site

Les pages du site, construites sur le [design system](../../design-system/README.md) et sur le [prototype V2](../prototype-v2/README.md).

## Arborescence

Chaque entrée du menu mène à une page dédiée, qui ouvre la rubrique ; ses sous-pages s'atteignent depuis elle. Le menu et le pied de page ne renvoient jamais vers des ancres de l'accueil : l'accueil résume, les pages détaillent.

| Rubrique (menu) | Page d'entrée | Sous-pages |
| --- | --- | --- |
| Consultations | `consultations.html` : avant de consulter (vidéos), l'adressage et le parcours de soins, prendre rendez-vous | `premiere-consultation.html`, `honoraires.html` |
| Urgences | `urgences.html` : qui consulter, SOS Procto | — |
| Votre intervention | `votre-intervention.html` : reprise du prototype | — |
| Le cabinet | `equipe-medicale.html` : la photo d'équipe et une carte par médecin | une page par médecin (`dr-alain-castinel.html`, `dr-frederic-juguet.html`, `dr-cecile-laclotte-duhoux.html`, `dr-pauline-roumeguere.html`, `dr-gauthier-pellet.html`, `dr-florian-grousez.html`), `notre-histoire.html` |
| Accès et horaires | `acces-horaires.html` : adresse, horaires, accès, la clinique Tivoli-Ducos | — |
| Espace médecins (bouton) | `espace-medecins.html` : SOS Procto, adresser un patient, le coin de l'urgentiste | `coin-urgentiste.html` (mise en garde à l'arrivée, page non indexée) |

- L'accueil (`index.html`) reprend le prototype ; ses raccourcis et ses liens « → » mènent aux pages ci-dessus.

## Reconnaître la page où l'on est

Chaque page d'entrée de rubrique s'ouvre sur ce qui la caractérise, avec des composants et des couleurs que le design system associe déjà à son sujet :

| Rubrique | Ouverture |
| --- | --- |
| Consultations | Le parcours de soins en trois étapes, dans l'ouverture. |
| Urgences | Le bandeau Urgences de l'accueil, rose pâle sur toute la largeur, avec ses deux étapes. |
| Votre intervention | Un bandeau marine, la couleur du panneau « Votre intervention » de l'accueil. |
| Le cabinet | La photo de l'équipe en grand format. |
| Accès et horaires | L'adresse en titre, le statut d'ouverture, l'itinéraire, à côté de la façade. |

- Un pictogramme de rubrique précède le sur-titre de toutes les pages d'une rubrique (calendrier, intervention, trèfle du cabinet, lieu, cadenas de l'Espace médecins) ; sur les Urgences, c'est la pastille d'alerte du bandeau.
- La numérotation est réservée aux vraies séquences : les chapitres Avant, Pendant, Après de Votre intervention, le parcours de soins, les étapes de lecture d'un devis. Ailleurs, les chapitres n'ont pas de numéro et le sommaire montre une flèche.
- L'Espace médecins est réservé aux médecins. Les infirmier(e)s trouvent les fiches de liaison dans Votre intervention (Après), par le lien du panneau Votre intervention de l'accueil et par la colonne Infirmier(e)s du pied de page.
- Pied de page : Patients, Le cabinet, Espace médecins, Infirmier(e)s ; puis `mentions-legales.html` et `confidentialite.html`, des projets avec les informations à compléter entre crochets.
- Les noms des pages des médecins reprennent les adresses du site actuel.
- Les seuls liens encore vides (`#`) : le site de la clinique Tivoli-Ducos (Votre intervention, Accès et horaires), et deux liens du prototype dans Votre intervention (dépistage, information de la SNFCP).

## Construction

- Chaque page charge `design-system/tokens.css`, `design-system/components/bundle.css`, puis `commun/maquettes.css`. Aucun CSS en ligne : l'accueil et Votre intervention s'affichent à l'identique du prototype.
- `commun/site.js` : les comportements du prototype (statut d'ouverture, horaires, annonces, copie d'adresse, mise en garde du coin de l'urgentiste), sans le bandeau de démonstration. Sur `coin-urgentiste.html` (`body[data-gate-page]`), la mise en garde s'ouvre à l'arrivée tant qu'elle n'a pas été acceptée dans l'onglet ; la refuser ramène à l'accueil.
- Le trèfle 3D est chargé depuis `../prototype-v2/fond.js`.
- Les pages sont statiques : en-tête, annonces et pied de page sont recopiés dans chacune. Un changement commun se reporte dans toutes les pages.

## `commun/maquettes.css`

Ce qui manque au design system, avec ses seuls jetons. À reporter dans le design system si c'est retenu :

- règles de base : `body { margin: 0 }` et `[hidden]` prioritaire (absentes de `bundle.css`), `span.mono` insécable (un numéro de téléphone se coupait) ;
- `.notice--urgent` : l'encadré aux couleurs de l'urgence, pour les contre-indications du coin de l'urgentiste ;
- ouvertures de rubrique : `.page-hero.urgence`, `.page-hero--navy`, `.page-hero__path`, `.page-hero__equipe`, `.page-hero__lieu` ; pictogramme de rubrique `.eyebrow--ic` ; sommaire sans numéros `.toc__n--ic` ;
- pied de page à cinq colonnes, pour la colonne Infirmier(e)s ;
- page d'un médecin : `.page-hero__doc` (portrait dans l'ouverture de page), `.parcours` (frise d'années), `.pager` (médecin précédent, toute l'équipe, médecin suivant) ;
- `.puces` (liste à puces) et la citation dans un chapitre ;
- `.panel--texte` : un panneau de rubriques titrées en h2, pour les pages légales et le parcours d'un médecin ;
- `.note-maquette` : une note visible sur un contenu à valider ou à fournir. Elle n'existera pas sur le site.

## Contenus

Textes repris du site actuel (proctologie-bordeaux.com) et du prototype, mis au ton du design system : information sans publicité, ni superlatif, ni comparaison. Rien de médical ni de chiffré n'a été inventé. Les notes de maquette signalent ce qui reste à valider ou à fournir :

- honoraires : montants de 2017, texte résumé sans les passages sur la politique de santé ;
- équipe : présentations personnelles non reprises, parcours des Drs Pellet et Grousez, portrait provisoire du Dr Pellet ;
- première consultation : pièces à apporter, description de l'examen ;
- prise de rendez-vous : modalités d'annulation ;
- espace médecins : numéro et heures de SOS Procto ;
- coin de l'urgentiste : photos cliniques, lien vers les recommandations sur la maladie hémorroïdaire, PDF « Conseils de pratique (2013) » ;
- notre histoire : classement dans la presse retiré (déontologie), nombre d'interventions à actualiser ;
- mentions légales et confidentialité : éditeur, directeur de la publication, RPPS, hébergeur, adresse de contact, puis relecture.
