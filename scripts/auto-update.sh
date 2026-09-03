#!/usr/bin/env bash
# Mise à jour éditoriale automatique via Grok (headless) + push Git.
# Usage manuel : ./scripts/auto-update.sh
# Cron (lun/mer/ven 9h) :
#   0 9 * * 1,3,5 /home/petik/decrypter-2027/scripts/auto-update.sh
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO="$(cd "$SCRIPT_DIR/.." && pwd)"
LOG_DIR="${DECRYPTER_LOG_DIR:-$HOME/logs/decrypter-2027}"
LOCK="${DECRYPTER_LOCK:-/tmp/decrypter-2027-update.lock}"
# Clé deploy dédiée (sans passphrase) — voir README / GitHub Deploy keys.
DEPLOY_KEY="${DECRYPTER_DEPLOY_KEY:-$HOME/.ssh/decrypter-2027_deploy}"
CRON_LOG="$LOG_DIR/cron.log"

mkdir -p "$LOG_DIR"

log_cron() {
  echo "$(date -Is) $*" >>"$CRON_LOG"
}

# PATH minimal pour cron (grok est souvent hors du PATH par défaut de cron).
export PATH="$HOME/.local/bin:$HOME/.grok/bin:/usr/local/bin:/usr/bin:/bin:$PATH"

# Auth GitHub en cron : pas d’agent SSH (clé scaleway avec passphrase).
# Utiliser une clé deploy repo-scoped, sans passphrase.
if [[ ! -f "$DEPLOY_KEY" ]]; then
  log_cron "clé deploy introuvable: $DEPLOY_KEY"
  exit 1
fi
export GIT_SSH_COMMAND="ssh -i $DEPLOY_KEY -o IdentitiesOnly=yes -o BatchMode=yes -o StrictHostKeyChecking=accept-new"

# Auth Grok : préférer une session déjà présente (~/.grok/auth.json).
# En cron sans session, exporter XAI_API_KEY dans l’environnement crontab
# ou dans un fichier non versionné (ne jamais committer de secret).

exec 9>"$LOCK"
if ! flock -n 9; then
  log_cron "déjà en cours, sortie"
  exit 0
fi

cd "$REPO"

if ! command -v grok >/dev/null 2>&1; then
  log_cron "grok introuvable dans PATH=$PATH"
  exit 1
fi

if ! command -v git >/dev/null 2>&1; then
  log_cron "git introuvable"
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  log_cron "working tree sale, abort"
  exit 1
fi

if ! git pull --ff-only >>"$CRON_LOG" 2>&1; then
  log_cron "git pull échoué (voir ci-dessus)"
  exit 1
fi

TODAY="$(date +%Y-%m-%d)"

PROMPT="Effectue la mise à jour automatique de Décrypter 2027.

1. Lis AGENTS.md, docs/PROJECT_HISTORY.md et docs/EDITORIAL_POLICY.md.
2. Vérifie l’état Git et la date de dernière mise à jour du site.
3. Recherche les faits nouveaux depuis cette date : candidatures, programmes,
   meetings, alliances, décisions judiciaires et sondages publiés.
4. Privilégie les sources officielles, les documents originaux, les rapports
   complets des instituts et les médias de référence.
5. Si des changements éditoriaux sont justifiés, applique-les dans data/,
   app.js, index.html, styles.css selon le besoin.
6. Ajoute toujours une entrée chronologique dans docs/PROJECT_HISTORY.md,
   même si aucun changement de contenu n’est nécessaire. Indique
   l’environnement « cron / Grok headless », les sources, les fichiers
   modifiés et les vérifications.
7. Vérifie avec : node --check app.js et git diff --check.
8. Si des fichiers ont changé : commit avec un message du type
   « Mettre à jour l’analyse du ${TODAY} » puis git push vers origin.
9. Si rien n’a changé hors PROJECT_HISTORY.md, commit quand même l’entrée
   d’audit puis push.
10. Ne force-push jamais. Ne touche pas aux secrets ni à ~/.grok / ~/.codex.
11. Ne crée pas de PR : commit et push sur la branche courante uniquement."

LOG_FILE="$LOG_DIR/update-$(date +%Y%m%d-%H%M%S).log"

{
  echo "=== $(date -Is) start repo=$REPO ==="
  set +e
  grok -p "$PROMPT" \
    --cwd "$REPO" \
    --always-approve \
    --no-auto-update \
    --output-format plain
  status=$?
  set -e
  echo "=== $(date -Is) end exit=$status ==="
  exit "$status"
} >>"$LOG_FILE" 2>&1
