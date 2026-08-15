#!/usr/bin/env bash

set -euo pipefail

INSTALL_ONLY=false
LOGIN_MODE="device-auth"

for arg in "$@"; do
  case "$arg" in
    --install-only) INSTALL_ONLY=true ;;
    --oauth) LOGIN_MODE="oauth" ;;
    --device-auth|--device-code) LOGIN_MODE="device-auth" ;;
    *)
      echo "Usage : $0 [--install-only] [--oauth]" >&2
      exit 2
      ;;
  esac
done

if ! command -v curl >/dev/null 2>&1; then
  echo "Erreur : curl est nécessaire pour installer Grok Build." >&2
  exit 1
fi

GROK_COMMAND=""

if command -v grok >/dev/null 2>&1; then
  GROK_COMMAND="$(command -v grok)"
elif [[ -x "${HOME}/.grok/bin/grok" ]]; then
  GROK_COMMAND="${HOME}/.grok/bin/grok"
else
  echo "Installation de Grok Build depuis la source officielle xAI…"
  curl -fsSL https://x.ai/cli/install.sh | bash

  if command -v grok >/dev/null 2>&1; then
    GROK_COMMAND="$(command -v grok)"
  elif [[ -x "${HOME}/.grok/bin/grok" ]]; then
    GROK_COMMAND="${HOME}/.grok/bin/grok"
  else
    echo "Grok Build semble installé, mais son exécutable est introuvable." >&2
    echo "Ouvre un nouveau terminal puis relance ce script." >&2
    exit 1
  fi
fi

echo "Grok Build disponible : $(${GROK_COMMAND} --version)"

if [[ "${INSTALL_ONLY}" == true ]]; then
  echo "Installation terminée. Pour te connecter : .devcontainer/setup-grok.sh"
  exit 0
fi

# Grok n'a pas d'équivalent de `codex login status`. Une clé API ou un
# fichier d'authentification déjà présent suffit pour sauter la connexion.
if [[ -n "${XAI_API_KEY:-}" ]]; then
  echo "Une clé XAI_API_KEY est déjà définie. Lance simplement : grok"
  exit 0
fi

if [[ -s "${HOME}/.grok/auth.json" ]]; then
  echo "Tu es déjà connecté à Grok Build. Lance simplement : grok"
  exit 0
fi

echo
if [[ "${LOGIN_MODE}" == "oauth" ]]; then
  echo "Connexion à Grok via le navigateur…"
  "${GROK_COMMAND}" login --oauth
else
  echo "Connexion à Grok par code d’appareil…"
  echo "Ouvre l’adresse affichée, puis saisis le code temporaire."
  "${GROK_COMMAND}" login --device-auth
fi

echo
echo "Connexion terminée. Lance Grok Build avec : grok"
