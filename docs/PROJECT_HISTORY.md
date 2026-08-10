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
