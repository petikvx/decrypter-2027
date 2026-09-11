# Historique du projet

Ce document conserve les décisions utiles au-delà d’une conversation Codex.
Il ne remplace pas l’historique Git : il explique le raisonnement derrière les
choix importants.

## 8 août 2026 — cadrage initial

Le projet est né de la volonté de produire une étude importante sur l’élection
présidentielle française de 2027 : programmes, candidats, événements de
campagne, rapports de force et scénarios possibles.

Décisions prises :

- construire un site interactif plutôt qu’un rapport figé ;
- traiter le site comme un observatoire évolutif et daté ;
- séparer les faits, les propositions et l’analyse prospective ;
- afficher le degré de certitude d’une candidature et le degré de maturité de
  chaque programme ;
- ne pas transformer les sondages en prédictions.

## 8 août 2026 — première version du site

Création d’un site statique autonome composé de `index.html`, `styles.css` et
`app.js`. Aucun framework ni serveur applicatif n’est nécessaire.

Fonctionnalités livrées :

- page d’accueil et compte à rebours avant le premier tour ;
- photographie des rapports de force fondée sur une étude Ipsos de juin 2026 ;
- dix fiches principales, incluant Jordan Bardella comme hypothèse de
  remplacement et non comme candidat déclaré face à Marine Le Pen ;
- filtres par famille politique ;
- comparateur sur six thèmes ;
- quatre scénarios de second tour explicitement présentés comme prospectifs ;
- chronologie des principaux événements de campagne ;
- liens vers les sources et présentation de la méthode.

La direction visuelle choisie est celle d’un magazine d’analyse : fond papier,
typographie éditoriale, vert sombre, rouge et jaune acide. Le rendu a été vérifié
sur ordinateur et mobile.

## 8 août 2026 — premières sources structurantes

- Gouvernement français : calendrier et règles de l’élection ;
- LCP — Assemblée nationale : candidatures déclarées et prétendants ;
- Le Monde — Les Décodeurs : état des familles politiques ;
- Ipsos bva : intentions de vote et méthodologie ;
- sites officiels des candidats et des partis pour les propositions.

Ces sources constituent un point de départ, pas une liste fermée. Toute nouvelle
mise à jour doit rechercher l’information la plus récente et revenir autant que
possible au document primaire.

## 8 août 2026 — portabilité GitHub Codespaces

Ajout d’un `.devcontainer` basé sur Ubuntu 24.04 avec Python 3.12, transfert du
port 8000 et installation automatique de Codex CLI.

Le script `.devcontainer/setup-codex.sh` :

- installe Codex avec l’installateur officiel OpenAI s’il est absent ;
- détecte une connexion existante ;
- utilise `codex login --device-auth` dans l’environnement distant ;
- ne stocke aucun identifiant dans le dépôt.

## État à la dernière mise à jour

- Le dépôt est publié sur GitHub sous `petikvx/decrypter-2027`, branche `main`.
- La date éditoriale affichée par le site est le 8 août 2026.
- Les données politiques devront être révisées régulièrement jusqu’au scrutin.
- La prochaine amélioration logique est de séparer les données politiques du
  code d’affichage, puis d’enrichir les fiches avec davantage de sources
  primaires et de chiffrages.

## 8 août 2026 — routine de mise à jour

Le `README.md` contient désormais une procédure quotidienne pour Codespaces et
Codex : synchronisation Git, recherche web, audit sourcé, validation humaine,
prévisualisation, contrôles et publication. Le prompt demande à Codex de ne pas
modifier le site avant d’avoir présenté les faits nouveaux et leur niveau de
certitude.

## Comment poursuivre

Avant une nouvelle session, demander à Codex :

> Lis `AGENTS.md` et les documents de `docs/`, vérifie l’état Git, puis résume
> la situation avant de proposer une modification.

Après une décision importante, ajouter ici une entrée datée expliquant ce qui a
changé et pourquoi.

## 2026-08-08 21:26 CEST — renommage et journal obligatoire

- **Environnement** : local.
- **Demande** : remplacer l’ancien nom « Le Choix 2027 » par « Décrypter 2027 »
  et garantir une trace chronologique de chaque utilisation de Codex et
  Codespaces.
- **Travail effectué** : renommage dans le site, le README, les consignes Codex,
  la charte éditoriale et le devcontainer. Ajout d’un format obligatoire de
  journal de session et modification du prompt quotidien.
- **Sources consultées** : aucune source politique ; modification interne au
  projet.
- **Fichiers modifiés** : `README.md`, `AGENTS.md`, `index.html`,
  `.devcontainer/devcontainer.json`, `docs/EDITORIAL_POLICY.md` et
  `docs/PROJECT_HISTORY.md`.
- **Vérifications** : recherche globale de l’ancien nom, validation JSON,
  vérification JavaScript et contrôle du diff.
- **Résultat** : prêt à valider et à publier sur `main`.

## 2026-08-08 22:12 CEST — accélération de la création Codespaces

- **Environnement** : local, après observation du journal de création d’un
  GitHub Codespace.
- **Demande** : empêcher l’installation de Codex et la compilation de Python de
  ralentir ou bloquer la création du Codespace.
- **Travail effectué** : remplacement de l’image Ubuntu complétée par la feature
  Python par une image Python 3.12 préconstruite ; suppression de l’installation
  automatique de Codex dans `postCreateCommand`. L’installation et la connexion
  sont désormais lancées volontairement dans le terminal avec
  `.devcontainer/setup-codex.sh`.
- **Sources consultées** : documentation officielle OpenAI « Codex CLI », qui
  confirme l’installateur autonome et la connexion après installation :
  <https://learn.chatgpt.com/docs/codex/cli>.
- **Fichiers modifiés** : `.devcontainer/devcontainer.json`, `README.md` et
  `docs/PROJECT_HISTORY.md`.
- **Vérifications** : validation JSON, validation syntaxique du script Bash,
  contrôle de cohérence du README et du diff Git.
- **Résultat** : configuration prête à valider et à publier sur `main` ; une
  reconstruction du conteneur sera nécessaire pour l’appliquer à un Codespace
  déjà créé.

## 2026-08-08 22:34 CEST — mémento Codespaces et Codex

- **Environnement** : local, après validation de l’installation et de la
  connexion Codex dans GitHub Codespaces.
- **Demande** : conserver dans le dépôt les commandes et le premier prompt à
  utiliser lors des prochaines ouvertures du Codespace.
- **Travail effectué** : création de `MEMENTO.md` avec les étapes de début de
  session, la reprise avec `codex resume` et le contrôle à effectuer avant de
  fermer ; ajout d’un lien dans le README.
- **Sources consultées** : aucune ; documentation interne du projet.
- **Fichiers modifiés** : `MEMENTO.md`, `README.md` et
  `docs/PROJECT_HISTORY.md`.
- **Vérifications** : contrôle du format Markdown et du diff Git.
- **Résultat** : mémento prêt à être publié sur `main`.

## 2026-08-08 22:39 CEST — commande d’aperçu Codespaces

- **Environnement** : GitHub Codespaces et local.
- **Demande** : préciser la commande permettant de servir le site correctement
  derrière le transfert de port Codespaces.
- **Travail effectué** : ajout de `--bind 0.0.0.0` aux commandes d’aperçu du
  README et au message affiché à l’ouverture du devcontainer.
- **Sources consultées** : aucune ; comportement vérifié directement dans le
  Codespace.
- **Fichiers modifiés** : `README.md`, `.devcontainer/devcontainer.json` et
  `docs/PROJECT_HISTORY.md`.
- **Vérifications** : validation JSON, contrôle du diff et de son format.
- **Résultat** : commande d’aperçu Codespaces corrigée et prête à publier.

## 2026-08-09 08:50 CEST — audit éditorial quotidien

- **Environnement** : local.
- **Demande** : effectuer la mise à jour quotidienne de Décrypter 2027.
- **Travail effectué** : recherche des faits publiés depuis l’édition du 8 août
  concernant les candidatures, les programmes, la campagne, les décisions
  judiciaires et les sondages. Aucun changement politique suffisamment nouveau
  et établi n’a été retenu. La date éditoriale générale passe au 9 août 2026 ;
  les fiches, sondages, scénarios et événements restent inchangés.
- **Sources consultées** : Commission des sondages, rubrique « 2027 -
  Présidentielle » ; LCP, recensement des candidats ; Le Monde, articles du
  8 août 2026 sur la campagne estivale de Gabriel Attal et les ingérences
  russes dans la campagne.
- **Fichiers modifiés** : `index.html` et `docs/PROJECT_HISTORY.md`.
- **Vérifications** : comparaison avec l’édition du 8 août, contrôle de la date,
  recherche web multi-source et `git diff --check`.
- **Résultat** : audit du 9 août consigné ; aucune donnée politique nouvelle à
  publier, date éditoriale actualisée.

## 2026-08-10 21:43 CEST — audit éditorial quotidien

- **Environnement** : local.
- **Demande** : effectuer la mise à jour quotidienne de Décrypter 2027.
- **Travail effectué** : recherche des faits publiés depuis l’édition du 9 août
  concernant les candidatures, les programmes, les meetings, les alliances,
  les décisions judiciaires et les sondages. Aucun changement politique nouveau
  et suffisamment établi n’a été retenu. La date éditoriale générale passe au
  10 août 2026 ; les fiches, sondages, scénarios et événements restent
  inchangés.
- **Sources consultées** : Commission des sondages, rubrique « 2027 -
  Présidentielle » ; LCP, recensement des candidats ; Le Monde, analyse du
  10 août 2026 sur le thème de l’expérience ; Le Parisien, annonce du 10 juillet
  concernant Ségolène Royal et la primaire socialiste.
- **Fichiers modifiés** : `index.html` et `docs/PROJECT_HISTORY.md`.
- **Vérifications** : comparaison avec l’édition du 9 août, contrôle de la date,
  recherche web multi-source et `git diff --check`.
- **Résultat** : audit du 10 août consigné ; aucune donnée politique nouvelle à
  publier, date éditoriale actualisée.

## 2026-08-10 21:55 CEST — réflexion sur la feuille de route

- **Environnement** : local.
- **Demande** : proposer des améliorations utiles pour Décrypter 2027.
- **Travail effectué** : analyse de l’architecture et définition de priorités :
  données éditoriales séparées du rendu, traçabilité par affirmation, état de
  fraîcheur des fiches, panorama plus complet des candidatures, historique des
  sondages, contrôles automatisés et publication simplifiée.
- **Sources consultées** : aucune ; analyse interne du produit et du dépôt.
- **Fichiers modifiés** : `docs/PROJECT_HISTORY.md` uniquement, pour consigner
  la session conformément aux règles du projet.
- **Vérifications** : cohérence avec `AGENTS.md`, la charte éditoriale et
  l’architecture statique sans dépendance.
- **Résultat** : recommandations formulées ; aucune amélioration fonctionnelle
  implémentée et aucun commit créé.

## 2026-08-10 22:05 CEST — lot 1, séparation des données

- **Environnement** : local.
- **Demande** : commencer la feuille de route par la séparation des données
  éditoriales et du code d’affichage.
- **Travail effectué** : extraction des candidats, sondages, événements et
  sources générales dans quatre fichiers sous `data/`. Adaptation de `app.js`
  pour consommer ces données, rendu dynamique de la bibliographie et mise à
  jour de la documentation d’architecture. Le chargement reste constitué de
  scripts classiques afin de préserver l’ouverture directe de `index.html`.
- **Sources consultées** : aucune nouvelle source politique ; refactorisation à
  contenu éditorial constant.
- **Fichiers modifiés** : `app.js`, `index.html`, `README.md`, `AGENTS.md`,
  `docs/PROJECT_HISTORY.md`, `data/candidates.js`, `data/polls.js`,
  `data/events.js` et `data/sources.js`.
- **Vérifications** : `node --check` sur les cinq scripts, `git diff --check`,
  rendu ordinateur et mobile, test via serveur HTTP et ouverture directe. Le
  DOM final contient 10 candidats, 7 sondages, 7 événements et 4 sources.
- **Résultat** : lot 1 terminé et prêt à valider ; aucun commit créé.

## 2026-08-10 22:18 CEST — lot 2, traçabilité des affirmations

- **Environnement** : local.
- **Demande** : réaliser le deuxième lot de la feuille de route, consacré à la
  traçabilité des statuts et des positions programmatiques.
- **Travail effectué** : transformation de `data/sources.js` en registre
  central de 26 références avec identifiant, éditeur, type, date de publication
  lorsqu'elle est disponible et date de vérification. Ajout, pour les dix
  profils, d'un niveau de maturité conforme à la charte, d'une date de
  vérification, de références de statut et de références pour chacun des six
  thèmes. Les liens numérotés sont affichés dans les fiches et le comparateur ;
  chaque fiche présente une bibliographie détaillée. Les formulations
  politiques existantes n'ont pas été réécrites au cours de ce lot.
- **Sources consultées** : sites et documents officiels du Rassemblement
  national, de Jean-Luc Mélenchon et de La France insoumise, de Gabriel Attal,
  d'Horizons, des Républicains, de Place publique, de François Ruffin, des
  Écologistes et de Reconquête ; Gouvernement français ; rapport Ipsos bva ;
  recensements de LCP et du Monde.
- **Fichiers modifiés** : `app.js`, `styles.css`, `README.md`,
  `data/candidates.js`, `data/sources.js` et `docs/PROJECT_HISTORY.md`.
- **Vérifications** : `node --check` sur les scripts modifiés,
  `git diff --check`, contrôle automatisé de l'unicité des 26 identifiants et
  des 60 relations thème-source, rendu HTTP sans erreur JavaScript, présence
  des 10 fiches et des références dans le comparateur, contrôles visuels
  ordinateur et mobile.
- **Résultat** : lot 2 terminé et prêt à valider ; aucun commit créé.

## 2026-08-10 22:28 CEST — lot 3, indicateurs de fraîcheur

- **Environnement** : local.
- **Demande** : réaliser le troisième lot de la feuille de route, consacré à la
  visibilité de la fraîcheur des fiches.
- **Travail effectué** : ajout d'un calcul automatique fondé sur `verifiedAt`
  avec trois états symétriques : « vérifié récemment » jusqu'à 7 jours, « à
  surveiller » de 8 à 30 jours et « à revérifier » au-delà. Ajout d'une synthèse
  des dix profils, d'un badge daté sur chaque carte et dans le comparateur,
  ainsi que d'un panneau détaillé dans les fiches avec le niveau de maturité.
  La date de contrôle de chaque référence apparaît désormais dans la
  bibliographie. Les seuils et leur portée sont documentés.
- **Sources consultées** : aucune nouvelle source politique ; utilisation des
  dates de vérification et du registre de sources constitués lors du lot 2.
- **Fichiers modifiés** : `app.js`, `index.html`, `styles.css`, `README.md`,
  `docs/EDITORIAL_POLICY.md` et `docs/PROJECT_HISTORY.md`.
- **Vérifications** : `node --check` sur les scripts, validation des dates des
  10 profils et des 26 sources, `git diff --check`, rendu HTTP sans erreur
  JavaScript, contrôle des 10 badges de fiche et des deux badges du comparateur,
  contrôles visuels ordinateur et mobile.
- **Résultat** : lot 3 terminé et prêt à valider ; aucun commit créé.

## 2026-08-10 23:24 CEST — lot 4, panorama élargi des candidatures

- **Environnement** : local.
- **Demande** : réaliser le quatrième lot de la feuille de route en élargissant
  le panorama au-delà des dix fiches programmatiques.
- **Travail effectué** : remplacement de la liste de noms statique par 28
  profils structurés et datés : 16 candidatures déclarées, 4 candidatures sous
  condition, 6 personnalités pressenties et 2 retraits conservés comme tels.
  Chaque ligne précise le parti, la nature du statut, la date de vérification et
  un accès à la source. Les profils complémentaires ne sont pas ajoutés au
  comparateur tant que leurs six thèmes ne sont pas documentés.
- **Sources consultées** : LCP, recensement mis à jour le 10 juillet 2026 ; Le
  Monde, panorama mis à jour le 27 juillet 2026 ; PCF, préparation d'une
  candidature soumise au vote militant ; LCP et site de campagne de Bernard
  Cazeneuve ; sites de campagne et communiqués d'Anasse Kazib et Selma Labib ;
  articles de référence sur la primaire socialiste.
- **Fichiers modifiés** : `data/candidates.js`, `app.js`, `index.html`,
  `styles.css`, `README.md` et `docs/PROJECT_HISTORY.md`.
- **Vérifications** : validation JavaScript, contrôle des quatre groupes et des
  28 références de profil, rendu ordinateur et mobile, ouverture directe de
  `index.html`, contrôle HTTP et `git diff --check`.
- **Résultat** : lot 4 terminé ; panorama plus complet sans assimiler les
  déclarations à la liste officielle du Conseil constitutionnel.

## 2026-08-10 23:24 CEST — lot 5, historique comparable des sondages

- **Environnement** : local.
- **Demande** : réaliser le cinquième lot de la feuille de route en ajoutant une
  lecture historique des intentions de vote.
- **Travail effectué** : ajout de cinq vagues Ifop, de septembre 2025 à juillet
  2026, limitées à une même hypothèse de premier tour avec Édouard Philippe et
  Marine Le Pen. Six séries sont affichées sans lissage dans un graphique SVG,
  complété par les valeurs exactes, les dates de terrain et les tailles
  d'échantillon dans un tableau accessible. La méthodologie interdit désormais
  de relier des configurations incompatibles.
- **Sources consultées** : rapport Ifop de juillet 2026 « Les intentions de vote
  à l'élection présidentielle 2027 et l'opinion des Français après la
  déclaration de candidature de Marine Le Pen », comprenant le tableau
  comparatif des cinq vagues et leurs notices méthodologiques.
- **Fichiers modifiés** : `data/polls.js`, `data/sources.js`, `app.js`,
  `index.html`, `styles.css`, `README.md`, `docs/EDITORIAL_POLICY.md` et
  `docs/PROJECT_HISTORY.md`.
- **Vérifications** : validation JavaScript, contrôle de 5 vagues, 6 séries et
  30 points, source présente dans le registre, graphique doté d'un titre et
  d'une description, tableau accessible, rendu ordinateur et mobile, ouverture
  directe et HTTP, `git diff --check`.
- **Résultat** : lot 5 terminé ; historique prêt à publier avec les lots 2 à 4.

## 2026-08-12 21:51 CEST — veille quotidienne sans changement politique

- **Environnement** : local.
- **Demande** : effectuer la mise à jour quotidienne des actualités de la
  présidentielle française de 2027.
- **Travail effectué** : audit des informations publiées depuis l'édition du
  10 août sur les candidatures, programmes, alliances, faits de campagne,
  procédures judiciaires et sondages. Aucun élément nouveau suffisamment
  établi ne justifie de modifier les fiches, la chronologie ou les données de
  sondage. La date de l'édition a été portée au 12 août 2026. Les dates de
  vérification détaillées des profils et des sources restent au 10 août, cet
  audit transversal ne constituant pas une nouvelle vérification intégrale de
  chacune des fiches.
- **Sources consultées** : Commission des sondages, rubrique « 2027 -
  Présidentielle » ; pages présidentielles d'Ipsos bva, de l'Ifop et d'Elabe ;
  panorama des candidatures de LCP et du Monde ; actualités des candidats et
  formations politiques, dont le site de campagne de Gabriel Attal.
- **Fichiers modifiés** : `index.html` et `docs/PROJECT_HISTORY.md`.
- **Vérifications** : contrôle des publications datées des 11 et 12 août,
  validation JavaScript du site et `git diff --check`.
- **Résultat** : édition du 12 août prête à valider ; aucun changement
  politique ni nouveau sondage présidentiel retenu ; aucun commit créé.

## 2026-08-15 12:03 CEST — script d’installation Grok Build

- **Environnement** : local.
- **Demande** : créer un script d’installation rapide de Grok Build, sur le
  modèle de `.devcontainer/setup-codex.sh`.
- **Travail effectué** : ajout de `.devcontainer/setup-grok.sh`, qui installe
  Grok Build via l’installateur officiel xAI, réutilise un binaire déjà
  présent, saute la connexion si `~/.grok/auth.json` ou `XAI_API_KEY` existe,
  puis lance `grok login --device-auth` dans un environnement distant.
  Documentation mise à jour dans le README, le mémento, les consignes du
  dépôt, le message d’ouverture du Codespace et le `.gitignore`.
- **Sources consultées** : documentation officielle Grok Build
  (`https://x.ai/cli/install.sh`, `https://docs.x.ai/build/overview`,
  `https://x.ai/build`) et guide d’authentification local
  (`~/.grok/docs/user-guide/02-authentication.md`).
- **Fichiers modifiés** : `.devcontainer/setup-grok.sh`,
  `.devcontainer/devcontainer.json`, `.gitignore`, `README.md`, `AGENTS.md`,
  `MEMENTO.md` et `docs/PROJECT_HISTORY.md`.
- **Vérifications** : `bash -n` sur les deux scripts d’installation,
  `jq empty .devcontainer/devcontainer.json` et `git diff --check`.
- **Résultat** : prêt à valider ; aucun commit créé.

## 2026-08-15 12:05 CEST — connexion Grok par device-auth par défaut

- **Environnement** : local.
- **Demande** : faire de `grok login --device-auth` le mode de connexion par
  défaut du script d’installation.
- **Travail effectué** : le script `.devcontainer/setup-grok.sh` conserve
  `--device-auth` comme défaut et accepte `--oauth` pour une connexion
  navigateur locale. Documentation du README et du mémento alignée.
- **Sources consultées** : `grok login --help` (`--device-auth`, alias
  `--device-code` ; `--oauth` pour le navigateur).
- **Fichiers modifiés** : `.devcontainer/setup-grok.sh`, `README.md`,
  `MEMENTO.md` et `docs/PROJECT_HISTORY.md`.
- **Vérifications** : `bash -n .devcontainer/setup-grok.sh` et
  `git diff --check`.
- **Résultat** : prêt à valider ; aucun commit créé.

## 2026-08-15 12:09 CEST — mise à jour candidats et actualité

- **Environnement** : local.
- **Demande** : mettre à jour les candidatures et l’actualité depuis l’édition
  du 12 août 2026.
- **Travail effectué** : audit sourcé des candidatures, programmes, alliances,
  faits de campagne, procédures judiciaires et sondages. Aucune nouvelle
  déclaration majeure ni nouveau sondage d’intentions de vote comparable n’a
  été retenu. Intégration des faits établis : réforme institutionnelle d’Attal
  (2 août), appel de François Bayrou à une primaire du centre (10 août),
  affichage des proches de François Hollande (12 août), débat de la REF
  annoncé pour le 27 août, et précisions sur la primaire socialiste encore
  non datée officiellement. L’édition passe au 15 août 2026. Les dates
  `verifiedAt` des neuf autres fiches principales restent au 10 août : cet
  audit n’a pas rouvert l’ensemble de leurs six thèmes.
- **Sources consultées** : Commission des sondages (notices août 2026 :
  YouGov/HuffPost et Cluster17/Le Point, baromètres et non IV de premier
  tour) ; LCP, recensement des candidats (mise à jour 10 juillet) ; Le Monde,
  12–13 août, tentation d’un candidat unique du bloc central ; franceinfo,
  primaire PS (4 août) et appel de Bayrou (10 août) ; site de campagne
  d’Attal et entretien JDD du 2 août ; Libération, Le Parisien et Sud Ouest,
  affichage Hollande du 12 août ; TF1 Info, débat REF/LCI du 27 août.
- **Fichiers modifiés** : `index.html`, `data/candidates.js`,
  `data/events.js`, `data/sources.js` et `docs/PROJECT_HISTORY.md`.
- **Vérifications** : `node --check` sur les scripts, contrôle d’unicité des
  32 identifiants de sources et des relations thème-source, `git diff --check`.
- **Résultat** : édition du 15 août prête à valider ; aucun commit créé.

## 2026-08-15 12:19 CEST — favicon au drapeau français

- **Environnement** : local.
- **Demande** : ajouter un favicon, par exemple un drapeau français.
- **Travail effectué** : ajout d’un tricolore (bleu officiel `#002395`, blanc,
  rouge `#ED2939`) en SVG, ICO 16/32 px et icône Apple 180 px, puis liaison
  dans `index.html`.
- **Sources consultées** : aucune source politique ; couleurs du drapeau
  utilisées par les institutions.
- **Fichiers modifiés** : `favicon.svg`, `favicon.ico`,
  `apple-touch-icon.png`, `index.html` et `docs/PROJECT_HISTORY.md`.
- **Vérifications** : contrôle visuel du PNG généré et des balises
  `rel="icon"` dans l’en-tête.
- **Résultat** : prêt à valider ; aucun commit créé.

## 2026-08-18 21:50 CEST — mise à jour candidats et actualité

- **Environnement** : Codespace / Grok Build.
- **Demande** : mise à jour des données depuis l’édition du 15 août 2026.
- **Travail effectué** : audit sourcé des candidatures, alliances, faits de
  campagne et sondages. Intégration du fait établi du 17 août : Gérald
  Darmanin annonce qu’il ne sera pas candidat et soutient Édouard Philippe ;
  bascule de sa fiche panorama vers les retraits, ajout d’un événement de
  chronologie et d’une source franceinfo. Aucun nouveau sondage d’intentions
  de vote comparable retenu (notices d’août de la Commission des sondages :
  baromètres YouGov/HuffPost et Cluster17/Le Point, non IV de premier tour).
  Les tensions internes écologistes (critiques de Sandrine Rousseau envers
  Marine Tondelier) et l’enquête du parquet de Paris sur des soupçons
  d’ingérence visant Philippe et Attal sont notées en veille, sans
  modification des fiches programmatiques. L’édition passe au 18 août 2026.
  Les dates `verifiedAt` des dix fiches principales restent inchangées : cet
  audit n’a pas rouvert l’ensemble de leurs six thèmes.
- **Sources consultées** : Commission des sondages (thème « 2027 -
  Présidentielle ») ; franceinfo (ralliement Darmanin–Philippe, 18 août) ;
  La Voix du Nord / Les Échos / Libération (même annonce du 17 août) ;
  LCP et panoramas de candidatures ; pages présidentielles Ipsos, Ifop et
  Elabe.
- **Fichiers modifiés** : `index.html`, `data/candidates.js`,
  `data/events.js`, `data/sources.js` et `docs/PROJECT_HISTORY.md`.
- **Vérifications** : `node --check` sur les scripts, unicité de 33
  identifiants de sources et relations sourceIds, `git diff --check`,
  serveur local HTTP et contrôle du contenu servi (édition, Darmanin en
  retraits, événement du 17 août). Pas d’outil navigateur disponible pour un
  parcours cliquable ; vérification par HTTP et simulation du regroupement
  panorama.
- **Résultat** : édition du 18 août prête à valider ; aucun commit créé.

## 2026-08-21 10:05 CEST — mise à jour candidats et actualité

- **Environnement** : Codespace / Grok Build.
- **Demande** : mise à jour des données depuis l’édition du 18 août 2026.
- **Travail effectué** : audit sourcé des candidatures, propositions et
  calendrier de campagne. Intégration des faits établis : candidature de
  Francis Lalanne (19 août, France Libre), avec mention de la fin
  d’inéligibilité mi-octobre ; propositions d’Édouard Philippe sur Mayotte
  (20 août : suspension d’asile, droit du sol et immigration familiale) ;
  officialisation pressentie de Raphaël Glucksmann le 23 août au 20 Heures
  de TF1, sans bascule du statut (reste « Pressenti » jusqu’à déclaration
  publique). Ajout du débat Hollande–Philippe du 29 août à Sens. Mise à
  jour du bandeau et des cartes d’analyse (ralliement Darmanin, attente
  Glucksmann). Aucun nouveau sondage d’intentions de vote comparable retenu
  (notices d’août de la Commission des sondages : baromètres YouGov/HuffPost
  et Cluster17/Le Point, non IV de premier tour). L’édition passe au
  21 août 2026. Les `verifiedAt` de Philippe et Glucksmann passent au
  21 août ; les huit autres fiches principales restent inchangées sur
  l’ensemble de leurs thèmes.
- **Sources consultées** : Commission des sondages (thème « 2027 -
  Présidentielle ») ; franceinfo et Le Figaro/AFP (Lalanne, 19 août) ;
  LCP (propositions Philippe–Mayotte, 20 août) ; L’Indépendant, Le Parisien
  et L’Opinion repris via L’Indépendant (annonce Glucksmann attendue le
  23 août) ; TF1 Info / Medef (REF du 27 août, déjà en chronologie) ;
  ICI Auxerre / Laboratoire de la République (débat Sens du 29 août).
- **Fichiers modifiés** : `index.html`, `data/candidates.js`,
  `data/events.js`, `data/sources.js` et `docs/PROJECT_HISTORY.md`.
- **Vérifications** : `node --check` sur les scripts (binaire Node portable,
  `node` système absent), unicité de 37 identifiants de sources et relations
  sourceIds, `git diff --check`, serveur local HTTP et contrôle du contenu
  servi (édition du 21 août, Lalanne en déclarés, événements 19–29 août).
  Pas d’outil navigateur MCP pour un parcours cliquable ; vérification par
  HTTP.
- **Résultat** : édition du 21 août prête à valider ; aucun commit créé.

## 2026-08-21 10:08 CEST — documentation Grok Build dans le README

- **Environnement** : Codespace / Grok Build.
- **Demande** : compléter le README pour Grok Build, comme pour Codex.
- **Travail effectué** : alignement de la sous-section d’installation Grok
  Build sur le schéma Codex ; ajout d’une routine quotidienne symétrique
  (`setup-grok.sh`, `grok`, `grok --continue`, `grok --resume`) ; extension
  du journal de session et du prompt quotidien aux deux outils.
- **Sources consultées** : aucune source politique ; aide CLI `grok --help`.
- **Fichiers modifiés** : `README.md` et `docs/PROJECT_HISTORY.md`.
- **Vérifications** : contrôle des titres et commandes dans le README.
- **Résultat** : prêt à valider ; aucun commit créé.

## 2026-08-21 10:12 CEST — bascule du devcontainer vers Ubuntu 24.04

- **Environnement** : Codespace / Grok Build.
- **Demande** : sauvegarder le `devcontainer.json` actuel et passer à Ubuntu
  24.04.
- **Travail effectué** : copie de la configuration Bookworm dans
  `.devcontainer/devcontainer.bookworm.json` ; remplacement de l’image active
  par `mcr.microsoft.com/devcontainers/base:ubuntu-24.04` (Python 3.12
  système, sans feature Python) ; mise à jour du README.
- **Sources consultées** : catalogue d’images Microsoft Dev Containers
  (`base:ubuntu-24.04` / `noble`).
- **Fichiers modifiés** : `.devcontainer/devcontainer.json`,
  `.devcontainer/devcontainer.bookworm.json`, `README.md` et
  `docs/PROJECT_HISTORY.md`.
- **Vérifications** : `jq empty` sur les deux JSON,
  `bash -n` sur `setup-codex.sh` et `setup-grok.sh`.
- **Résultat** : prêt à valider ; aucun commit créé. Un rebuild du Codespace
  est nécessaire pour appliquer l’image Ubuntu.

## 2026-08-26 20:20 CEST — mise à jour éditoriale post-rentrée

- **Environnement** : poste local / Grok Build.
- **Demande** : mise à jour complète après plusieurs jours d’actualité.
- **Travail effectué** : bascule de Raphaël Glucksmann de « Pressenti » à
  « Déclaré » (annonce TF1 du 23 août) avec propositions actualisées
  (salaires nets / méga-héritages, école, urgence écologique) ; intégration
  du soutien de Yannick Jadot (24 août) ; ratification des modalités de la
  primaire PS–Place publique (25 août : 9-10 et 16-17 octobre, cotisation
  15 €) ; participation de la GRS d’Emmanuel Maurel (26 août) ; mise à jour
  du panorama (Royal en déclarée à la primaire, notes Brun/Guedj/Faure) ;
  remplacement des fourchettes Ipsos de juin par le baromètre Toluna Harris
  Interactive pour M6/RTL (terrains 18-19 août) sur les barres et les scores
  des fiches ; conservation de la série historique Ifop comparable ;
  bandeau, cartes d’analyse et chronologie mis à jour ; édition au
  26 août 2026.
- **Sources consultées** : franceinfo, TF1 Info et LCP (candidature
  Glucksmann, 23 août) ; franceinfo (Jadot, 24 août) ; franceinfo / AFP
  (modalités primaire, 25 août) ; Le Monde / AFP (GRS, 26 août) ; rapport
  Toluna Harris Interactive Vague 4 M6/RTL (18-19 août 2026).
- **Fichiers modifiés** : `index.html`, `app.js`, `data/candidates.js`,
  `data/events.js`, `data/polls.js`, `data/sources.js` et
  `docs/PROJECT_HISTORY.md`.
- **Vérifications** : `node --check` (binaire Node portable) sur les
  scripts ; unicité de 44 identifiants de sources et relations sourceIds ;
  `git diff --check` ; serveur local HTTP ; captures Chrome headless
  desktop (1440×900) et mobile (390×844) ; DOM vérifié (édition, barres
  Harris, statut Déclaré de Glucksmann, chronologie 23–26 août, panorama
  Maurel). Pas d’outil navigateur MCP interactif ; parcours cliquable
  non exercé au-delà du rendu headless.
- **Résultat** : édition du 26 août prête à valider ; aucun commit créé.

## 2026-08-29 13:48 CEST — mise à jour post-débat REF (Medef)

- **Environnement** : poste local / Grok Build.
- **Demande** : mise à jour détaillée autour du premier débat télévisé
  des candidats (débat REF du 27 août) ; le débat Hollande–Philippe de
  Sens (29 août) est laissé en « À venir ».
- **Travail effectué** : chronologie actualisée (événement REF passé,
  participants et thèmes) ; bandeau et cartes d’analyse recentrés sur la
  dette et la concurrence Attal–Philippe ; positions économiques des sept
  participants mises à jour à partir des annonces du débat (125 Md€ Le Pen,
  annulation dette BCE Mélenchon, trajectoire Attal 2032/2037, retraites
  et Dutreil, SMIC 2 000 € Tondelier, etc.) ; édition au 29 août 2026 ;
  trois sources ajoutées (franceinfo, Le Figaro, Affiches Parisiennes).
- **Sources consultées** : franceinfo (compte rendu du 27–28 août) ;
  Le Figaro (plan 125 Md€) ; Affiches Parisiennes / mesinfos ; Politico,
  Financial Times, BFMTV et France Inter pour recoupement ; LCI/Medef
  (format et participants).
- **Fichiers modifiés** : `index.html`, `data/events.js`,
  `data/candidates.js`, `data/sources.js` et `docs/PROJECT_HISTORY.md`.
- **Vérifications** : `node --check` sur les scripts ; 47 identifiants de
  sources uniques et relations `sourceIds` valides ; serveur HTTP local ;
  captures Chrome headless desktop (1440×900) et mobile (390×844) ; DOM
  vérifié (édition du 29 août, chronologie REF, cartes d’analyse,
  comparateur Mélenchon/Retailleau avec propositions REF). Pas d’outil
  navigateur MCP interactif ; parcours cliquable non exercé au-delà du
  rendu headless.
- **Résultat** : édition du 29 août centrée sur le débat REF, prête à
  valider ; aucun commit créé.

## 2026-09-01 04:25 UTC — script de mise à jour cron

- **Environnement** : poste local / Grok Build.
- **Demande** : placer dans le dépôt un script pour lancer automatiquement
  la mise à jour éditoriale via Grok (headless) les lundi, mercredi et
  vendredi, avec commit et push.
- **Travail effectué** : ajout de `scripts/auto-update.sh` (pull, verrou
  flock, prompt d’audit éditorial, `grok -p --always-approve`, journaux
  dans `~/logs/decrypter-2027/`) ; documentation courte dans le README.
- **Sources consultées** : documentation Grok headless
  (`~/.grok/docs/user-guide/14-headless-mode.md`) ; aucune source politique.
- **Fichiers modifiés** : `scripts/auto-update.sh`, `README.md`,
  `docs/PROJECT_HISTORY.md`.
- **Vérifications** : `bash -n scripts/auto-update.sh` ; script rendu
  exécutable (`chmod +x`).
- **Résultat** : script prêt ; crontab à installer manuellement côté machine
  (`0 9 * * 1,3,5 …/scripts/auto-update.sh`).

## 2026-09-01 06:30 CEST — mise à jour automatique cron

- **Environnement** : cron / Grok headless.
- **Demande** : mise à jour automatique de Décrypter 2027 (audit sourcé depuis
  l’édition du 29 août 2026, commit et push sur `main`).
- **Travail effectué** : audit des candidatures, alliances, faits de campagne et
  sondages depuis le 29 août. Intégration des faits établis : débat
  Hollande–Philippe tenu à Sens le 29 août (redressement, fiscalité ; Hollande
  hors primaire, décision éventuelle renvoyée à décembre) ; candidature
  d’Olivier Faure à la primaire sociale-démocrate officialisée le 30 août au
  20 Heures de TF1 (cinq candidats déclarés : Glucksmann, Faure, Brun, Guedj,
  Royal) ; remplacement des fourchettes Toluna Harris (18-19 août) par le
  baromètre Elabe pour BFMTV / La Tribune Dimanche (terrain 26–28 août,
  1 378 inscrits) sur les barres et les scores des fiches ; conservation de la
  série historique Ifop comparable ; bandeau, cartes d’analyse et chronologie
  mis à jour ; échelle des barres de sondage rendue dynamique dans `app.js` ;
  édition au 1er septembre 2026. Les `verifiedAt` de Philippe, Glucksmann,
  Faure (panorama) et Hollande (panorama) passent au 1er septembre ; les autres
  fiches principales conservent leur date de contrôle thématique du 29 août.
  Appel de Laurent Wauquiez à une primaire de droite (30 août) noté en veille,
  sans modification de la fiche Retailleau (déjà désigné par LR).
- **Sources consultées** : rapport Elabe PDF (août 2026) et page institut ;
  franceinfo (Faure, 30 août) ; Ouest-France et LCP (débat Sens, 29 août) ;
  Le Parisien, BFMTV, RTL, Le Figaro pour recoupement ; Commission des
  sondages / agrégateurs pour vérifier l’absence d’autre vague IV postérieure
  à Elabe au 1er septembre.
- **Fichiers modifiés** : `index.html`, `app.js`, `data/candidates.js`,
  `data/events.js`, `data/polls.js`, `data/sources.js` et
  `docs/PROJECT_HISTORY.md`.
- **Vérifications** : `node --check` sur `app.js` et les scripts `data/` ;
  51 identifiants de sources uniques et relations `sourceIds` valides ;
  `git diff --check` ; serveur HTTP local et contrôle du HTML servi (édition,
  Elabe, Faure, Sens). Pas d’outil navigateur MCP ni Chrome headless ;
  vérification par HTTP et simulation Node du rendu des barres, de la
  chronologie et du panorama.
- **Résultat** : édition du 1er septembre prête ; commit et push sur `main`.

## 2026-09-03 04:35 UTC — correctif cron git SSH

- **Environnement** : poste local / Grok Build.
- **Demande** : diagnostiquer l’échec apparent de la crontask décrypter
  d’hier (mercredi 2 septembre).
- **Travail effectué** : constat que cron a bien lancé
  `scripts/auto-update.sh` à 09:00 UTC le 2 septembre, mais le script
  a quitté immédiatement sur `git pull` (`Permission denied (publickey)`),
  faute d’agent SSH en cron (clé `~/.ssh/scaleway` protégée par passphrase).
  La sortie a été jetée (`No MTA installed`). Correctifs : clé deploy
  ed25519 sans passphrase `~/.ssh/decrypter-2027_deploy` (hors dépôt),
  `GIT_SSH_COMMAND` dans le script, journalisation des échecs précoces
  dans `~/logs/decrypter-2027/cron.log`, doc README mise à jour.
- **Sources consultées** : `/var/log/syslog` (entrée CRON du 2026-09-02
  09:00) ; aucune source politique.
- **Fichiers modifiés** : `scripts/auto-update.sh`, `README.md`,
  `docs/PROJECT_HISTORY.md`.
- **Vérifications** : `bash -n scripts/auto-update.sh` ; `git pull` et
  `git push --dry-run` en environnement type cron avec la clé deploy.
- **Résultat** : auth GitHub OK pour le repo ; prochaine exécution cron
  (vendredi 9h) devrait passer le pull. Mise à jour éditoriale du 2
  septembre non rejouée dans cette session.

## 2026-09-03 04:45 UTC — mise à jour automatique cron

- **Environnement** : cron / Grok headless.
- **Demande** : mise à jour automatique de Décrypter 2027 (audit sourcé depuis
  l’édition du 1er septembre 2026, commit et push sur `main`).
- **Travail effectué** : audit des candidatures, alliances, faits de campagne et
  sondages depuis le 1er septembre. Aucun nouveau baromètre d’intentions de vote
  postérieur à Elabe (26–28 août) identifié. Intégration des faits établis :
  débat sur une primaire de la droite et du centre (Philippe refuse à Châlons ;
  Attal et Retailleau se disent prêts à l’affronter ; pression Wauquiez/Morin) ;
  précisions de Glucksmann sur l’école à la rentrée (salaires enseignants,
  effectifs, mixité conditionnant les subventions au privé sous contrat) ;
  calendrier du vote PCF du 6 septembre pour l’investiture Roussel. Édition au
  3 septembre 2026. Les `verifiedAt` d’Attal, Philippe, Retailleau et Glucksmann,
  ainsi que la fiche panorama Roussel, passent au 3 septembre. Quatre sources
  ajoutées.
- **Sources consultées** : franceinfo (primaire droite/centre, 3 sept.) ;
  La Croix et Le Nouvel Obs (école / Glucksmann, 1er–2 sept.) ; L’Humanité
  (calendrier Roussel) ; SP2027 / pages instituts pour confirmer l’absence de
  vague post-Elabe ; Les Echos et Ouest-France pour recoupement.
- **Fichiers modifiés** : `index.html`, `data/candidates.js`, `data/events.js`,
  `data/sources.js` et `docs/PROJECT_HISTORY.md`.
- **Vérifications** : `node --check` sur `app.js` et les scripts `data/` ;
  55 identifiants de sources uniques et relations `sourceIds` valides ;
  `git diff --check` ; serveur HTTP local et contrôle du HTML/JS servi (édition,
  carte d’analyse, chronologie, fiches). Pas d’outil navigateur MCP ni Chrome
  headless disponibles ; vérification par HTTP.
- **Résultat** : édition du 3 septembre prête ; commit et push sur `main`.

## 2026-09-04 09:05 UTC — mise à jour automatique cron

- **Environnement** : cron / Grok headless.
- **Demande** : mise à jour automatique de Décrypter 2027 (audit sourcé depuis
  l’édition du 3 septembre 2026, commit et push sur `main`).
- **Travail effectué** : audit des candidatures, alliances, faits de campagne et
  sondages depuis le 3 septembre. Aucun nouveau baromètre d’intentions de vote
  postérieur à Elabe (26–28 août) identifié. Intégration des faits établis :
  candidature d’Emmanuel Maurel (GRS) à la primaire sociale-démocrate
  (franceinfo, 4 septembre) ; vote PCF du 3 au 6 septembre sur l’investiture
  Roussel (proclamation TF1 attendue) ; Zemmour fixe une annonce de candidature
  « avant décembre » à Châlons ; Lisnard annonce 500 promesses de parrainages ;
  RN « plus de 400 » parrainages selon Aliot ; Tondelier réaffirme l’appel à
  l’union. Édition au 4 septembre 2026. Les `verifiedAt` de Glucksmann,
  Tondelier, Zemmour, Maurel, Roussel et Lisnard passent au 4 septembre. Sept
  sources ajoutées.
- **Sources consultées** : franceinfo (Maurel, 4 sept. ; Tondelier, 2 sept.) ;
  LCP (vote Roussel, 3 sept.) ; Ouest-France / AFP et BFMTV (Zemmour, 3 sept.) ;
  Le Parisien (Lisnard, 2 sept.) ; Le Figaro / AFP (parrainages RN, 3 sept.) ;
  SP2027 / pages instituts pour confirmer l’absence de vague post-Elabe.
- **Fichiers modifiés** : `index.html`, `data/candidates.js`, `data/events.js`,
  `data/sources.js` et `docs/PROJECT_HISTORY.md`.
- **Vérifications** : `node --check` sur `app.js` et les scripts `data/` ;
  62 identifiants de sources uniques et relations `sourceIds` valides ;
  `git diff --check` ; serveur HTTP local et contrôle du HTML/JS servi (édition,
  ticker, carte d’analyse, chronologie, fiches). Pas d’outil navigateur MCP ni
  Chrome headless disponibles ; vérification par HTTP.
- **Résultat** : édition du 4 septembre prête ; commit et push sur `main`.

## 2026-09-07 09:15 UTC — mise à jour automatique cron

- **Environnement** : cron / Grok headless.
- **Demande** : mise à jour automatique de Décrypter 2027 (audit sourcé depuis
  l’édition du 4 septembre 2026, commit et push sur `main`).
- **Travail effectué** : audit des candidatures, alliances, faits de campagne et
  sondages depuis le 4 septembre. Intégration des faits établis : Fabien Roussel
  officialise sa candidature PCF le 6 septembre sur TF1 après un vote militant
  à 72 % ; Ségolène Royal affirme le 6 septembre disposer des parrainages pour
  la primaire ; Fabien Verdier (2–3 septembre) entre dans le panorama de la
  primaire ; remplacement des fourchettes Elabe par Ipsos bva-CESI pour
  Le Parisien (terrain 31 août–2 septembre, rapport complet). Édition au
  7 septembre 2026. Les `verifiedAt` de Glucksmann, Royal, Verdier et Roussel
  passent au 7 septembre. Scores des fiches principales alignés sur Ipsos.
  Quatre sources ajoutées.
- **Sources consultées** : rapport Ipsos PDF (5 sept.) et page institut ;
  LCP et Reuters (Roussel, 6 sept.) ; Le Figaro / AFP (Royal, 6 sept.) ;
  franceinfo (Verdier, 3 sept.) ; TF1 Info ; Wikipedia / SP2027 pour
  recoupement OpinionWay 2–3 sept. (non retenu comme source primaire faute
  de rapport institut directement exploité ici).
- **Fichiers modifiés** : `index.html`, `data/candidates.js`, `data/polls.js`,
  `data/events.js`, `data/sources.js` et `docs/PROJECT_HISTORY.md`.
- **Vérifications** : `node --check` sur `app.js` et les scripts `data/` ;
  66 identifiants de sources uniques et relations `sourceIds` valides ;
  `git diff --check` ; serveur HTTP local et contrôle du HTML/JS servi (édition,
  ticker, carte Ipsos, analyse gauche, chronologie, fiches). Pas d’outil
  navigateur MCP ni Chrome headless disponibles ; vérification par HTTP.
- **Résultat** : édition du 7 septembre prête ; commit et push sur `main`.

## 2026-09-09 09:05 UTC — mise à jour automatique cron

- **Environnement** : cron / Grok headless.
- **Demande** : mise à jour automatique de Décrypter 2027 (audit sourcé depuis
  l’édition du 7 septembre 2026, commit et push sur `main`).
- **Travail effectué** : audit des candidatures, alliances, faits de campagne et
  sondages depuis le 7 septembre. Aucun baromètre d’intentions de vote postérieur
  à Ipsos (5 septembre) retenu pour remplacer les fourchettes affichées (SP2027
  confirme Ipsos comme dernière vague de référence ; Cluster17 / Le Point du
  7 septembre non substitué faute de convergence avec les autres instituts et
  pour conserver la série Ipsos déjà sourcée). Intégration des faits établis du
  8 septembre : Faure relance une primaire élargie « de Ruffin à Glucksmann »,
  Ruffin dit oui, Glucksmann refuse de « changer les règles en cours de jeu » ;
  Philippe propose un comité de la droite et du centre vers la Toussaint,
  Retailleau refuse d’emblée ; Philippe doit quitter la présidence d’Horizons
  le 1er octobre. Édition au 9 septembre 2026. Les `verifiedAt` de Philippe,
  Retailleau, Glucksmann, Ruffin, Faure et Lisnard passent au 9 septembre.
  Quatre sources ajoutées.
- **Sources consultées** : LCP et Le Monde (Glucksmann / Ruffin, 8 sept.) ;
  BFMTV et Le Figaro (Philippe / Retailleau, 8–9 sept.) ; SP2027 et pages
  Ipsos / Cluster17 pour l’état des sondages ; franceinfo pour recoupement.
- **Fichiers modifiés** : `index.html`, `data/candidates.js`, `data/events.js`,
  `data/sources.js` et `docs/PROJECT_HISTORY.md`.
- **Vérifications** : `node --check` sur `app.js` et les scripts `data/` ;
  70 identifiants de sources uniques et relations `sourceIds` valides ;
  `git diff --check` ; serveur HTTP local et contrôle du HTML/JS servi (édition,
  ticker, cartes d’analyse, chronologie). Pas d’outil navigateur MCP disponible ;
  vérification par HTTP.
- **Résultat** : édition du 9 septembre prête ; commit et push sur `main`.

## 2026-09-11 09:05 UTC — mise à jour automatique cron

- **Environnement** : cron / Grok headless.
- **Demande** : mise à jour automatique de Décrypter 2027 (audit sourcé depuis
  l’édition du 9 septembre 2026, commit et push sur `main`).
- **Travail effectué** : audit des candidatures, alliances, faits de campagne et
  sondages depuis le 9 septembre. Remplacement des fourchettes Ipsos par le
  baromètre OpinionWay PrésiTrack pour Les Echos / Radio Classique (terrain
  8–9 septembre, 948 inscrits, notice Commission des sondages) : Le Pen à 34 %
  dans les trois hypothèses ; Philippe 15–19 % ; Mélenchon 15 % ; Glucksmann
  9–12 % ; Attal 8–14 % ; Retailleau 8–12 %. Intégration des faits établis :
  Odoxa-Backbone pour Le Figaro (8–9 septembre) — 70 % des sympathisants de
  droite et du centre favorables à une primaire ; Retailleau annonce le
  8 septembre vouloir supprimer le droit du sol par référendum ; Ruffin, le
  9 septembre sur RTL, tance Glucksmann (« peur des électeurs ») tout en se
  disant toujours prêt. Édition au 11 septembre 2026. Les `verifiedAt` des
  fiches principales concernées et plusieurs entrées du panorama passent au
  11 septembre. Cinq sources ajoutées. La série historique Ifop comparable est
  conservée. Cluster17 / Verian de stature non substitués aux IV affichées.
- **Sources consultées** : notice OpinionWay PDF (Commission des sondages,
  10 sept.) ; notice Odoxa PDF (9 sept.) ; Le Monde / AFP (Retailleau droit du
  sol, 8 sept.) ; Le Parisien (Ruffin RTL, 9 sept.) ; BFMTV et Le Figaro pour
  recoupement Odoxa ; Wikipedia / SP2027 pour recoupement des scores ; Les Echos
  (accès paywall partiel) pour le contexte PrésiTrack.
- **Fichiers modifiés** : `index.html`, `data/candidates.js`, `data/polls.js`,
  `data/events.js`, `data/sources.js` et `docs/PROJECT_HISTORY.md`.
- **Vérifications** : `node --check` sur `app.js` et les scripts `data/` ;
  contrôle des identifiants de sources et relations `sourceIds` ; `git diff
  --check` ; serveur HTTP local et contrôle du HTML/JS servi (édition, ticker,
  carte OpinionWay, chronologie). Pas d’outil navigateur MCP disponible ;
  vérification par HTTP.
- **Résultat** : édition du 11 septembre prête ; commit et push sur `main`.
