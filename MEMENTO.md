# Mémento Codespaces et Codex

## Installer Codex ou Grok Build

Dans un Codespace ou sur Linux, si l’outil n’est pas encore prêt :

```bash
.devcontainer/setup-codex.sh
.devcontainer/setup-grok.sh
```

Ajouter `--install-only` pour installer sans lancer la connexion. Grok Build
se connecte par défaut avec un code d’appareil ; `--oauth` ouvre le navigateur.

## Commencer une session

Dans le terminal du Codespace :

```bash
git status --short
git pull --ff-only
codex
```

Si `git status --short` affiche des modifications locales, ne pas lancer
`git pull` immédiatement : examiner ou enregistrer ces modifications d’abord.

Donner ensuite ce message à Codex :

```text
Lis AGENTS.md, docs/PROJECT_HISTORY.md et docs/EDITORIAL_POLICY.md, puis résume
l’état actuel du projet sans modifier de fichier.
```

## Reprendre une conversation Codex

Pour retrouver une conversation récente enregistrée dans le même Codespace :

```bash
git pull --ff-only
codex resume
```

## Avant de fermer

Vérifier qu’aucun travail n’a été oublié :

```bash
git status --short
```

Les modifications importantes doivent être vérifiées, ajoutées à
`docs/PROJECT_HISTORY.md`, commitées et poussées sur GitHub avant de supprimer
le Codespace.
