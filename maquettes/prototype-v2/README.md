# Prototype V2

Prototype de novembre 2026 qui a servi à élaborer et valider le [design system](../../design-system/README.md), validé avec le médecin commanditaire du site. Il provient de l'artefact claude.ai « Trèfle en feuillets ».

C'est une base très cohérente pour la suite, pas un design figé : ce qui convient est repris tel quel, le reste peut être revu, recodé ou optimisé, dans les nouvelles maquettes puis au développement du site définitif. Ce dossier garde l'état présenté au médecin, pour pouvoir s'y référer.

| Fichier | Contenu |
| --- | --- |
| `index.html` | L'accueil : en-tête, annonces, hero, orientation, urgence, équipe, première consultation, honoraires, rendez-vous, intervention, venir au cabinet, espace médecins, pied de page. |
| `votre-intervention.html` | La page Votre intervention : sommaire, puis les chapitres avant, pendant, après et pour aller plus loin (livrets, fiches de liaison, vidéos). |
| `fond.js` | Le trèfle 3D d'arrière-plan (CloverBackground) : Three.js r184 (licence MIT, mention en fin de fichier) et le code du fond, empaquetés et minifiés en un seul fichier. |

## Différences avec l'original

- Les polices et les photos ne sont pas dupliquées : les pages pointent vers `design-system/fonts/` et `design-system/assets/Photos/` (fichiers identiques).
- Rien d'autre n'a été modifié.

## À savoir

- Chaque page porte son CSS (repris dans `design-system/components/bundle.css`) et le même script en ligne : statut d'ouverture à l'heure de Paris, annonces, copie d'adresse, mise en garde du coin de l'urgentiste.
- Le bandeau « Prototype V2 » en haut de page et le sélecteur de situations d'annonces servent uniquement à la démonstration.
- Le portrait du Dr Pellet est une image générée par IA, provisoire.

## Pistes d'optimisation repérées

- **CSS et script en double.** Chaque page embarque les mêmes ~36 Ko de CSS et ~11 Ko de script : à servir en fichiers partagés, mis en cache (`tokens.css`, `bundle.css`, un script commun).
- **Enveloppe de `index.html`.** La page a été publiée comme fragment ; claude.ai l'a enveloppée (`<html>` sans `lang`, posée ensuite par script, `<title>` dans le `<body>`, styles de base inutiles). À réécrire en document HTML complet, comme `votre-intervention.html`.
- **Poids de `fond.js`.** Environ 590 Ko minifiés, Three.js presque entier pour un décor. À évaluer : n'embarquer que les modules utiles, ou un rendu plus léger. Le code propre au fond n'existe ici que minifié : retrouver sa source avant de le retravailler.
- **Polices.** Déjà réduites au latin (environ 250 glyphes chacune) : pas de gain évident de ce côté.

## Afficher

```bash
node scripts/serve.mjs
```

Puis ouvrir http://localhost:4317/maquettes/prototype-v2/
