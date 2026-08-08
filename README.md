# Le Choix 2027

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

## Mise à jour éditoriale

Les candidats, comparaisons, sondages et événements sont centralisés dans `app.js`. Toute donnée politique doit être datée et reliée à une source. Les statuts « déclaré », « pressenti » et « conditionnel » ne remplacent pas la liste officielle du Conseil constitutionnel.
