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
