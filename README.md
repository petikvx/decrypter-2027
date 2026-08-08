# Décrypter 2027

Observatoire statique et sourcé de l’élection présidentielle française de 2027.

## Mémoire du projet

Codex lit automatiquement `AGENTS.md` à l’ouverture du dépôt. Les décisions et
les règles éditoriales durables sont conservées dans :

- [`AGENTS.md`](AGENTS.md) ;
- [`docs/PROJECT_HISTORY.md`](docs/PROJECT_HISTORY.md) ;
- [`docs/EDITORIAL_POLICY.md`](docs/EDITORIAL_POLICY.md).

## Lancer le site

Ouvrir directement `index.html` dans un navigateur, ou démarrer un serveur local :

```bash
python3 -m http.server 8000
```

Puis ouvrir <http://localhost:8000>.

## GitHub Codespaces et Codex

Le fichier `.devcontainer/devcontainer.json` prépare automatiquement un
Codespace, installe Codex CLI et rend le port 8000 disponible pour l’aperçu.

Une fois le Codespace créé, connecter Codex avec :

```bash
.devcontainer/setup-codex.sh
```

Le script utilise l’authentification par code d’appareil, adaptée aux
environnements distants. Il peut aussi être utilisé hors Codespaces sur Linux :

```bash
# Installation et connexion
.devcontainer/setup-codex.sh

# Installation uniquement
.devcontainer/setup-codex.sh --install-only
```

Ne jamais ajouter le fichier d’authentification `~/.codex/auth.json` au dépôt.

## Routine quotidienne avec Codespaces et Codex

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

### 2. Vérifier Codex

```bash
.devcontainer/setup-codex.sh
```

Le script ne redemande pas de connexion si la session est toujours valide.

Pour reprendre une conversation récente du même Codespace :

```bash
codex resume
```

Pour démarrer une nouvelle recherche quotidienne avec accès au web :

```bash
codex --search
```

`AGENTS.md` est chargé automatiquement au début de la session. Il indique à
Codex de consulter l’historique et la charte éditoriale du dépôt.

### 3. Utiliser le prompt quotidien

Copier ce message dans Codex :

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
python3 -m http.server 8000
```

Codespaces affiche le port `8000` dans l’onglet **Ports**. Ouvrir son URL et
vérifier au minimum l’accueil, les fiches modifiées, le comparateur et la version
mobile. Arrêter le serveur avec `Ctrl+C`.

Dans la session Codex, la commande `/review` peut aussi demander une dernière
revue des modifications non commitées.

### 5. Enregistrer la mise à jour sur GitHub

Après validation, vérifier une dernière fois la liste des fichiers, puis ne
sélectionner que ceux de la mise à jour :

```bash
git status --short
git add app.js index.html styles.css docs/PROJECT_HISTORY.md
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

### Journal obligatoire de chaque session Codex

Toute session Codex consacrée au projet doit ajouter à la fin de
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

Les candidats, comparaisons, sondages et événements sont centralisés dans `app.js`. Toute donnée politique doit être datée et reliée à une source. Les statuts « déclaré », « pressenti » et « conditionnel » ne remplacent pas la liste officielle du Conseil constitutionnel.
