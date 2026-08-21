# Décrypter 2027

Observatoire statique et sourcé de l’élection présidentielle française de 2027.

## Mémoire du projet

Codex et Grok Build lisent automatiquement `AGENTS.md` à l’ouverture du dépôt.
Les décisions et les règles éditoriales durables sont conservées dans :

- [`AGENTS.md`](AGENTS.md) ;
- [`MEMENTO.md`](MEMENTO.md), pour démarrer ou reprendre rapidement une session ;
- [`docs/PROJECT_HISTORY.md`](docs/PROJECT_HISTORY.md) ;
- [`docs/EDITORIAL_POLICY.md`](docs/EDITORIAL_POLICY.md).

## Lancer le site

Ouvrir directement `index.html` dans un navigateur, ou démarrer un serveur local :

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Puis ouvrir <http://localhost:8000>.

## GitHub Codespaces, Codex et Grok Build

Le fichier `.devcontainer/devcontainer.json` utilise Ubuntu 24.04
(`mcr.microsoft.com/devcontainers/base:ubuntu-24.04`), avec le Python 3.12
système déjà fourni par l’OS, et rend le port 8000 disponible pour l’aperçu.
La création du Codespace n’installe volontairement ni Codex ni Grok Build :
aucune opération réseau longue ne bloque ainsi l’ouverture du terminal.

L’ancienne image Debian Bookworm + Python préconstruit est conservée dans
`.devcontainer/devcontainer.bookworm.json` si un retour arrière est nécessaire.

### Codex

Une fois le Codespace créé, installer Codex puis se connecter avec :

```bash
.devcontainer/setup-codex.sh
```

Le script utilise l’installateur autonome officiel OpenAI, puis la commande
`codex login --device-auth`, adaptée aux environnements distants. Il peut aussi
être utilisé hors Codespaces sur Linux :

```bash
# Installation et connexion
.devcontainer/setup-codex.sh

# Installation uniquement
.devcontainer/setup-codex.sh --install-only
```

Ne jamais ajouter le fichier d’authentification `~/.codex/auth.json` au dépôt.

### Grok Build

Une fois le Codespace créé, installer Grok Build puis se connecter avec :

```bash
.devcontainer/setup-grok.sh
```

Le script utilise l’installateur officiel xAI, puis la commande
`grok login --device-auth` **par défaut**, adaptée aux Codespaces et aux
sessions distantes. Il peut aussi être utilisé hors Codespaces sur Linux :

```bash
# Installation et connexion par code d’appareil (défaut)
.devcontainer/setup-grok.sh

# Installation uniquement
.devcontainer/setup-grok.sh --install-only

# Connexion navigateur, uniquement en local si besoin
.devcontainer/setup-grok.sh --oauth
```

S’il trouve déjà `grok` dans le `PATH`, dans `~/.grok/bin/grok`, une session
enregistrée dans `~/.grok/auth.json` ou une clé `XAI_API_KEY`, il ne relance
pas l’installation ni la connexion. Ne jamais ajouter le fichier
`~/.grok/auth.json` au dépôt.

## Routine quotidienne avec Codespaces, Codex ou Grok Build

Codex et Grok Build sont deux outils interchangeables pour la veille
éditoriale. Choisir l’un ou l’autre suffit ; la suite de la routine (prompt,
relecture, commit) est la même.

### 1. Ouvrir et synchroniser le Codespace

Depuis la page GitHub du dépôt, ouvrir l’onglet **Code**, puis **Codespaces** et
reprendre le Codespace existant. Il n’est pas nécessaire d’en créer un nouveau
chaque jour.

Dans le terminal :

```bash
git status --short
git pull --ff-only
```

Ne pas lancer `git pull` si `git status` montre des modifications locales non
terminées. Les examiner ou les enregistrer d’abord.

### 2. Vérifier Codex ou Grok Build

#### Codex

```bash
.devcontainer/setup-codex.sh
```

Le script ne redemande pas de connexion si la session est toujours valide.
Lors du tout premier lancement du Codespace, il installe Codex avant d’afficher
le lien et le code temporaire de connexion.

Pour reprendre une conversation récente du même Codespace :

```bash
codex resume
```

Pour démarrer une nouvelle recherche quotidienne avec accès au web :

```bash
codex --search
```

`AGENTS.md` est chargé automatiquement au début de la session. Il indique de
consulter l’historique et la charte éditoriale du dépôt.

#### Grok Build

```bash
.devcontainer/setup-grok.sh
```

Le script ne redemande pas de connexion si `~/.grok/auth.json` ou
`XAI_API_KEY` est déjà présent. Lors du tout premier lancement du Codespace,
il installe Grok Build avant d’afficher le lien et le code temporaire de
connexion.

Pour démarrer une nouvelle session :

```bash
grok
```

Pour reprendre la conversation la plus récente du même répertoire :

```bash
grok --continue
```

Pour reprendre une session précise (identifiant ou titre) :

```bash
grok --resume
```

La recherche web est disponible par défaut dans Grok Build.
`AGENTS.md` est également chargé automatiquement au début de la session.

### 3. Utiliser le prompt quotidien

Copier ce message dans Codex ou Grok Build :

```text
Effectue la mise à jour quotidienne de Décrypter 2027.

1. Lis AGENTS.md, docs/PROJECT_HISTORY.md et docs/EDITORIAL_POLICY.md.
2. Vérifie l’état Git et la date de dernière mise à jour du site.
3. Recherche les faits nouveaux depuis cette date : candidatures, programmes,
   meetings, alliances, décisions judiciaires et sondages publiés.
4. Privilégie les sources officielles, les documents originaux, les rapports
   complets des instituts et les médias de référence.
5. Commence par me présenter un audit sourcé : faits nouveaux, niveau de
   certitude, contenu potentiellement obsolète et changements proposés.
6. N’édite le site qu’après cet audit. N’intègre ni rumeur non recoupée ni
   variation de sondage non significative.
7. Ajoute toujours une entrée chronologique dans docs/PROJECT_HISTORY.md pour
   cette session, même si l’audit ne trouve aucun changement à publier. Indique
   la date et l’heure, le travail effectué, les sources consultées, les fichiers
   modifiés et les vérifications réalisées.
8. Vérifie le JavaScript, le responsive et les liens modifiés. Montre-moi le
   diff final et ne crée pas de commit avant mon accord.
```

### 4. Relire et prévisualiser

Avant d’accepter les changements, contrôler dans le terminal :

```bash
git status --short
git diff --check
node --check app.js
git diff
```

Lancer ensuite le site :

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Codespaces affiche le port `8000` dans l’onglet **Ports**. Ouvrir son URL et
vérifier au minimum l’accueil, les fiches modifiées, le comparateur et la version
mobile. Arrêter le serveur avec `Ctrl+C`.

Dans la session, la commande `/review` (Codex ou Grok Build) peut aussi
demander une dernière revue des modifications non commitées.

### 5. Enregistrer la mise à jour sur GitHub

Après validation, vérifier une dernière fois la liste des fichiers, puis ne
sélectionner que ceux de la mise à jour :

```bash
git status --short
git add app.js index.html styles.css data/candidates.js data/polls.js \
  data/events.js data/sources.js docs/EDITORIAL_POLICY.md \
  docs/PROJECT_HISTORY.md README.md
git diff --cached --check
git diff --cached
git commit -m "Mettre à jour l’analyse du AAAA-MM-JJ"
git push
```

Un fichier inchangé indiqué dans `git add` est simplement ignoré. Ajouter
explicitement un autre fichier à la commande s’il fait réellement partie de la
mise à jour.

### Rythme conseillé

- **Chaque jour** : candidatures, décisions importantes, événements et erreurs
  devenues visibles.
- **Une fois par semaine** : programmes, comparateur, sources et tendances des
  sondages.
- **Après chaque événement majeur** : scénarios électoraux et chronologie.

Une journée sans fait nouveau fiable ne nécessite aucun changement du site.
Elle nécessite néanmoins une entrée dans `docs/PROJECT_HISTORY.md` afin de
conserver la trace de l’audit effectué.

### Journal obligatoire de chaque session

Toute session Codex ou Grok Build consacrée au projet doit ajouter à la fin de
`docs/PROJECT_HISTORY.md` une entrée dans ce format :

```markdown
## AAAA-MM-JJ HH:MM TZ — titre court

- **Environnement** : GitHub Codespaces ou local.
- **Demande** : objectif de la session.
- **Travail effectué** : recherches, décisions et modifications.
- **Sources consultées** : liens principaux, ou « aucune ».
- **Fichiers modifiés** : liste, ou « aucun ».
- **Vérifications** : commandes et contrôles réalisés.
- **Résultat** : publié, prêt à valider, ou aucun changement nécessaire.
```

Les nouvelles entrées sont ajoutées à la fin du fichier, dans l’ordre
chronologique. Elles ne doivent pas effacer ni réécrire les entrées précédentes,
sauf pour corriger une erreur factuelle explicitement signalée.

## Mise à jour éditoriale

Les données éditoriales sont séparées par fonction :

- `data/candidates.js` : dix fiches détaillées et panorama complémentaire des
  candidatures, hypothèses et retraits ;
- `data/polls.js` : photographie des intentions de vote et série historique
  comparable ;
- `data/events.js` : chronologie ;
- `data/sources.js` : registre central des sources, avec éditeur, type et dates
  de publication et de vérification.

`app.js` se limite au rendu et aux interactions. Toute donnée politique doit
être datée et reliée à un identifiant de ce registre. Dans
`data/candidates.js`, `statusSourceIds` documente le statut de candidature,
`positionSourceIds` relie chaque thème à ses références et `maturityLevel`
reprend l'échelle de 1 à 6 de la charte éditoriale. Les statuts « déclaré »,
« pressenti » et « conditionnel » ne remplacent pas la liste officielle du
Conseil constitutionnel.

### Fraîcheur des fiches

Chaque profil possède une date `verifiedAt`. Le site calcule automatiquement
un indicateur à partir de cette date :

- **vérifié récemment** : contrôle effectué depuis 7 jours au maximum ;
- **à surveiller** : dernier contrôle effectué depuis 8 à 30 jours ;
- **à revérifier** : plus de 30 jours depuis le dernier contrôle.

Cet indicateur mesure l'ancienneté du contrôle documentaire, pas la fiabilité
absolue ni la validité garantie d'une affirmation. Ne modifier `verifiedAt`
qu'après avoir réellement rouvert les sources du profil et vérifié son statut,
sa maturité programmatique et ses six thèmes. Les références disposent aussi
d'une date `verifiedAt`, affichée dans la bibliographie de chaque fiche.

### Panorama et historique des sondages

Le tableau `otherCandidates` complète les dix fiches principales. Ces profils
ne sont pas injectés dans le comparateur tant que leurs six thèmes ne sont pas
suffisamment documentés. Les groupes `declared`, `conditional`, `possible` et
`withdrawn` doivent rester distincts ; une personnalité retirée n'est jamais
laissée dans une catégorie active.

La série `pollHistory` ne rassemble que des vagues que l'institut source publie
dans une même configuration de premier tour. Chaque vague conserve ses dates de
terrain et la taille de son échantillon. Pour ajouter une mesure, vérifier que
la question, la personnalité testée pour chaque famille politique et le périmètre
des répondants sont comparables. Dans le doute, créer une autre série plutôt que
prolonger artificiellement la courbe existante.
