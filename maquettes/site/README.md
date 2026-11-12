# Maquettes du site

Les pages du site, construites sur le [design system](../../design-system/README.md) et sur le [prototype V2](../prototype-v2/README.md).

## Pages

| Rubrique | Page | Contenu |
| --- | --- | --- |
| | `index.html` — Accueil | Reprise du prototype ; ses liens mènent aux pages ci-dessous. |
| Consultations | `prendre-rendez-vous.html` | L'adressage et le parcours de soins, réserver (délai, Doctolib, téléphone), annuler. |
| | `premiere-consultation.html` | Les craintes, ce qu'il faut apporter, le déroulement. |
| | `honoraires.html` | Le secteur 2, les montants en consultation, lire un devis et son contrat. |
| Urgences | `urgences.html` | Qui consulter, SOS Procto, accès médecins. |
| Votre intervention | `votre-intervention.html` | Reprise du prototype. |
| Le cabinet | `equipe-medicale.html` | L'équipe, puis le parcours de chaque médecin. |
| | `notre-histoire.html` | Les origines, les grandes dates, l'activité. |
| Espace médecins | `espace-medecins.html` | SOS Procto, adresser un patient, le coin de l'urgentiste, les fiches de liaison. |
| | `coin-urgentiste.html` | Les conduites à tenir du site actuel. Mise en garde à l'arrivée, page non indexée. |
| Pied de page | `mentions-legales.html`, `confidentialite.html` | Projets, avec les informations à compléter entre crochets. |

Les seuls liens encore vides (`#`) sont ceux du prototype dans Votre intervention : site de la clinique Tivoli-Ducos, dépistage, information de la SNFCP.

## Construction

- Chaque page charge `design-system/tokens.css`, `design-system/components/bundle.css`, puis `commun/maquettes.css`. Aucun CSS en ligne : l'accueil et Votre intervention s'affichent à l'identique du prototype.
- `commun/site.js` : les comportements du prototype (statut d'ouverture, horaires, annonces, copie d'adresse, mise en garde du coin de l'urgentiste), sans le bandeau de démonstration. Sur `coin-urgentiste.html` (`body[data-gate-page]`), la mise en garde s'ouvre à l'arrivée tant qu'elle n'a pas été acceptée dans l'onglet ; la refuser ramène à l'accueil.
- Le trèfle 3D est chargé depuis `../prototype-v2/fond.js`.
- Les pages sont statiques : en-tête, annonces et pied de page sont recopiés dans chacune. Un changement commun se reporte dans toutes les pages.

## `commun/maquettes.css`

Ce qui manque au design system, avec ses seuls jetons. À reporter dans le design system si c'est retenu :

- règles de base : `body { margin: 0 }` et `[hidden]` prioritaire (absentes de `bundle.css`), `span.mono` insécable (un numéro de téléphone se coupait) ;
- `.notice--urgent` : l'encadré aux couleurs de l'urgence, pour les contre-indications du coin de l'urgentiste ;
- `.chapter__ph` (portrait dans un chapitre), `.parcours` (frise d'années), `.puces` (liste à puces) et la citation dans un chapitre ;
- `.legal` : les pages légales, un panneau et des rubriques titrées ;
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
