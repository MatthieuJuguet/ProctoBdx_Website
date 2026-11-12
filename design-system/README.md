Site du Cabinet de Proctologie de Bordeaux, au Bouscat : six proctologues, médecins et chirurgiens, qui consultent au 159 boulevard Godard et opèrent à la clinique Tivoli-Ducos. Le site oriente avant d'informer. Il explique au patient que c'est son médecin qui l'adresse au cabinet, il ne le pousse jamais à prendre rendez-vous de lui-même, et il donne aux opérés les documents de leur intervention. Il sert trois publics : les patients, souvent inquiets ; les infirmier(e)s, qui viennent chercher une fiche de liaison ; les médecins adresseurs (SOS Procto, messagerie sécurisée, le coin de l'urgentiste).

Ce système reprend la maquette validée en novembre 2026 (prototype V2, accueil et page Votre intervention). Il est écrit en HTML et CSS sans framework ; seuls le fond 3D, les annonces, le statut d'ouverture, la copie d'adresse et la mise en garde demandent un peu de JavaScript, sans dépendance hors Three.js pour le fond.

## Principes

1. **Orienter avant de réserver.** Chaque page suit le même ordre : mon problème relève-t-il de la proctologie ? Mon médecin m'examine et m'adresse. Je prends rendez-vous. Le bouton Doctolib n'existe que dans la section Prendre rendez-vous, en `btn--line`, sous l'énoncé d'adressage et la carte du délai. Il n'apparaît ni dans l'en-tête, ni dans le hero, ni dans une barre fixe.
2. **L'accueil résume, les pages détaillent.** Une section d'accueil garde ce qui est critique avant d'agir (l'adressage, l'urgence), ce qu'on cherche souvent et qui tient en quelques lignes (adresse, horaires, accès), ou ce qui rassure (l'équipe, la première consultation, les honoraires). Le reste tient en une phrase et un lien `→` vers sa page.
3. **Trois plans.** Arrière-plan : le fond `page` et le trèfle 3D (CloverBackground). Plan médian : les panneaux de verre (Panel). Avant-plan : les bandeaux opaques `.front` (Header, Announcement, UrgencyBand, Footer), sous lesquels le trèfle passe.
4. **Le calme.** Le seul mouvement permanent est la rotation lente du trèfle. Rien ne suit le défilement ni la souris.

## Ton et contenus

- **Vouvoyez le patient ; l'équipe dit « nous ».** « Nous restons à l'écoute et nous adaptons à toutes les situations. »
- **Dites la règle sans détour, à l'indicatif.** « Pour une consultation de proctologie, vous devez obligatoirement être adressé(e) par un médecin, généraliste ou spécialiste. » « Ne prenez pas rendez-vous de vous-même. »
- **Le médecin adresse, le patient ne s'adresse pas lui-même.** Écrivez « votre médecin vous adresse au cabinet », jamais « prenez rendez-vous » hors de la section qui l'explique.
- **Rassurez sans minimiser.** Nommez la crainte puis répondez-y : « L'idée d'une première consultation chez le proctologue peut être déroutante, voire angoissante. » Vocabulaire médical exact (fissure, fistule, sinus pilonidal, prurit anal), expliqué une fois.
- **Le téléphone n'est jamais un bouton.** Écrivez-le en `mono` : « Sinon, par téléphone : 05 56 44 84 93. Attention, le standard est souvent saturé. »
- **Messagerie sécurisée : MSSanté, via l'Annuaire Santé** (annuaire.esante.gouv.fr). Ne citez plus Apicrypt.
- **Vidéos : « SFHGL (ex-CREGG) »**, toujours avec la limite : « Elles vous informent, mais ne remplacent pas l'examen par un médecin. »
- **Annonces et contenus : de l'information, pas de la publicité.** Pas de « nouveau », « découvrez », superlatif, avis de patient ni comparaison entre médecins.
- **Formes inclusives courtes** : adressé(e), opéré(e), infirmier(e)s.
- **Casse phrase** pour les titres et les boutons ; les capitales des sur-titres viennent du CSS.
- **Libellés stables** : « Votre parcours de soins », « Comment se passe la prise de rendez-vous → », « Réserver sur Doctolib », « Préparer votre intervention », « Voir son parcours », « Que faire en cas d'urgence → ». Un même lien porte toujours le même libellé.
- **Typographie française** : espace insécable avant `: ; ! ?` et `»`, après `«` (le gabarit l'insère) ; guillemets « » ; apostrophe ’ ; « Dr Prénom Nom » ; heures « 9h00–12h30 » ; téléphone « 05 56 44 84 93 » ; poids « PDF · 609 Ko ».
- **Pas d'emoji, pas de point d'exclamation.**

## Couleurs

Une seule ambiance, claire. Tous les couples texte et fond tiennent 4,5:1, y compris sur la feuille la plus soutenue du trèfle (`clover-3`) ; les contrastes sont donnés dans la note de chaque jeton.

- **Fonds** : `page` partout ; `panel-glass` pour les panneaux sur ordinateur, `panel` sur mobile ; `card-glass` pour une carte posée dans un panneau, `card-quiet` pour une carte en retrait ; `surface` pour l'opaque (en-tête, carte surélevée, boutons clairs).
- **Texte** : `ink` pour les titres et le texte principal, `ink2` pour le secondaire. À même le fond, là où le trèfle peut passer dessous, `ink-clover`, et `brand-h` pour le sur-titre.
- **Bleu d'action** : `brand` pour les liens, le bouton principal, les sur-titres, les icônes et l'anneau de focus ; `brand-h` au survol ; `brand-soft` pour les encadrés et l'annonce « information ».
- **Marine** : `navy` pour l'italique du H1, les chiffres clés et les citations ; `panel-navy` pour le panneau Votre intervention (texte `on-navy`, `on-navy2`, chiffres `num`) ; `navy2` pour le pied de page.
- **Urgence** : `urgent-soft` en fond, `urgent` pour le sur-titre, les pastilles et le lien, `urgent-ink` pour le texte.
- **États** : `ok` sur `ok-soft` pour « Ouvert », `closed` sur `closed-soft` pour « Fermé » et les avertissements ; `important-ink` pour l'annonce importante.
- **Logo et trèfle** : `logo-1`, `logo-2`, `logo-3` restent dans le logo ; `clover-1` à `clover-3` restent dans le fond 3D. Aucun texte ni contrôle dans ces teintes.
- Une information ne passe jamais par la couleur seule : l'urgence a une icône et un titre, un statut a un mot.

## Typographie

Trois familles, auto-hébergées en WOFF2 variables (licence SIL OFL) pour ne pas transmettre l'adresse IP des visiteurs à un tiers :

- **Newsreader** (`--font-display`), pour les titres, les chiffres et les citations. Graisse 400 pour les grands titres, 500 pour les titres de carte ; l'italique marque la fin du H1, les numéros d'étape et les citations.
- **Atkinson Hyperlegible Next** (`--font-text`), pour tout le texte : dessinée pour la lisibilité, elle sert une patientèle de tous âges. Texte courant `body` à 18 px, jamais moins de 15 px.
- **Atkinson Hyperlegible Mono** (`--font-mono`), pour les données : téléphone, heures, format et poids des documents, compteurs. Toujours en chiffres tabulaires.

L'échelle est dans Typographie : `display-hero` 60 px, `display-page` 56, `title-1` 46, `title-2` 38, `statement` 34, `title-3` 30, `title-4` 26, `title-5` 23, puis `lead` 19, `body` 18, `body-s` 17, `small` 16, `caption` 15, `eyebrow` 14 et `label` 13 en capitales. Les titres passent à 32 à 38 px sous 900 px. Donnez aux titres `text-wrap: balance` et gardez les chapeaux à 62 caractères de large.

## Mise en page

- Conteneur `.wrap` de `container-max` (1320 px), gouttières `gutter` (40 px) et `gutter-mobile` (20 px) sous 900 px, en `max()` avec les zones de sécurité de l'écran.
- Les panneaux se suivent dans `.wrap.stack` : écart `space-20` (80 px, 40 sous 900 px), padding vertical `space-28` (112 px, 56). Un panneau a un padding `space-14` (56 px ; 28 × 22 px sous 900 px).
- Un `panel__head` met le titre à gauche et le chapeau à droite, alignés en bas ; il s'empile sous 1100 px.
- Points de rupture : `bp-nav` 1240 px (le menu passe dans le bouton), `bp-tablet` 1100 px (grilles réduites, parcours empilé), `bp-mobile` 900 px (gouttières, verre sans flou, titres réduits), `bp-phone` 767 px (contrôles des annonces sous le texte).
- Les ancres gardent la place de l'en-tête collant : `scroll-margin-top` de 76 à 100 px.

## Formes, verre et ombres

- **Arrondis par rôle** : `radius-panel` (28 px) pour un panneau, `radius-2xl` pour l'énoncé d'adressage et la mise en garde, `radius-xl` pour une carte dans un panneau et les photos, `radius-l` pour les cartes de document et les encadrés, `radius-m` pour les raccourcis, `radius-chip` pour les sujets et les points clés, `radius-btn` pour les boutons, `radius-pill` pour les statuts, `radius-round` pour les portraits et les pastilles.
- **Verre** : `panel-glass` avec `glass-blur` (9 px) et `glass-saturate` (1,25), contour `panel-line`, ombre `shadow-glass`. Seulement au-dessus de 900 px.
- **Avant-plan** : `.front` porte `shadow-front`, une ombre au-dessus et en dessous qui fait passer le bandeau devant le trèfle.
- Une carte se distingue par son fond et son filet `line` ; seule la carte du délai, la plus importante après l'adressage, est surélevée (`surface`, `card-line`, `shadow-card`).
- Pas de carte à liseré coloré sur le côté, pas de dégradé décoratif.

## Iconographie

- Icônes au trait, dessinées sur une grille de 24 px, trait `border-control` (2 px), bouts et angles arrondis, sans remplissage (sauf la pause et l'intérieur de l'icône vidéo). Le jeu est dans Assets › Icones.
- Dans le site, insérez le SVG en ligne avec la classe `icon` et `stroke="currentColor"` : l'icône prend la couleur du texte. Tailles : 18 à 22 px à côté d'un texte, 32 px pour les sujets vidéo, 40 px pour une vignette de vidéo, 28 à 30 px dans une pastille.
- Une icône à côté d'un texte est `aria-hidden="true"` ; un bouton d'icône seul (menu, fermer, précédent, suivant, pause) a un `aria-label`.
- Les pastilles d'icône sont des cercles `surface` avec un contour intérieur `border-ring` : `brand-line` pour l'information, `urgent-line` pour l'urgence.

## Logo et images

- Le logo est le trèfle à quatre feuilles en trois couches de bleu. Sur le site, utilisez la version plate (`logo-trefle-plat.svg`) en SVG en ligne, à 40 × 41 px dans l'en-tête et 44 × 46 px dans le pied de page. Le nom se compose toujours en texte (`brand-name`) à côté.
- Le trèfle 3D d'arrière-plan est le logo lui-même, en plaques pâles : n'ajoutez pas d'autre motif décoratif.
- Photos réelles uniquement : l'équipe (en pleine largeur, jamais recadrée sur les visages), l'entrée du cabinet (4:3), les portraits (carrés, recadrés en cercle). Pas de photo d'illustration générique.
- Texte alternatif : la photo d'équipe et l'entrée sont décrites ; un portrait suivi du nom du médecin a un `alt` vide.

## Mouvement

- Le trèfle tourne d'un tour en 150 secondes, à 30 images par seconde au plus, et s'arrête quand l'onglet est masqué. À l'ouverture, les plaques se déploient en 2,6 s.
- Les annonces se relaient toutes les 8 secondes, en fondu de 0,6 s, avec pause, précédent et suivant.
- Les survols changent la couleur ou le contour en 0,2 s. Rien ne flotte, rien ne glisse.
- Sous `prefers-reduced-motion: reduce` : trèfle immobile, annonces sans rotation ni transition, défilement des ancres sans animation.
- Écarté : le trèfle animé au défilement (dérangeant) et le suivi de la souris (risque d'incommoder). Ne les réintroduisez pas.

## Accessibilité

- Anneau de focus visible sur tout élément interactif : contour `focus-width` en `brand`, décalé de `focus-offset` ; en `num` sur le panneau marine et le pied de page.
- Cibles tactiles de `touch-target` (44 px) au moins pour les boutons et le menu.
- Un seul `h1` par page ; les sections ont un `h2`, les cartes un `h3`.
- Liens externes : nouvel onglet, icône lien-externe et « S'ouvre dans un nouvel onglet » en `.sr-only`.
- Le contenu médical du coin de l'urgentiste n'est jamais accessible sans la mise en garde (GateDialog).
- Statut d'ouverture, horaires et dates d'annonces sont calculés à l'heure de Paris.

## Utiliser le système

Chargez `tokens.css` (généré depuis `tokens.json`), puis `components/bundle.css`. Chaque composant est un bloc de HTML : copiez le balisage de son aperçu. Les classes sont celles de la maquette validée (`panel`, `glass`, `btn`, `eyebrow`…), sans préfixe. Remplacez les adresses `/_blob/…` des aperçus par les fichiers d'Assets dans votre projet.
