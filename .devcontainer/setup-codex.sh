#!/usr/bin/env bash

set -euo pipefail

INSTALL_ONLY=false

if [[ "${1:-}" == "--install-only" ]]; then
  INSTALL_ONLY=true
elif [[ -n "${1:-}" ]]; then
  echo "Usage : $0 [--install-only]" >&2
  exit 2
fi

if ! command -v curl >/dev/null 2>&1; then
  echo "Erreur : curl est nécessaire pour installer Codex." >&2
  exit 1
fi

CODEX_COMMAND=""

if command -v codex >/dev/null 2>&1; then
  CODEX_COMMAND="$(command -v codex)"
elif [[ -x "${HOME}/.local/bin/codex" ]]; then
  CODEX_COMMAND="${HOME}/.local/bin/codex"
else
  echo "Installation de Codex CLI depuis la source officielle OpenAI…"
  curl -fsSL https://chatgpt.com/codex/install.sh | sh

  if command -v codex >/dev/null 2>&1; then
    CODEX_COMMAND="$(command -v codex)"
  elif [[ -x "${HOME}/.local/bin/codex" ]]; then
    CODEX_COMMAND="${HOME}/.local/bin/codex"
  else
    echo "Codex semble installé, mais son exécutable est introuvable." >&2
    echo "Ouvre un nouveau terminal puis relance ce script." >&2
    exit 1
  fi
fi

echo "Codex disponible : $(${CODEX_COMMAND} --version)"

if [[ "${INSTALL_ONLY}" == true ]]; then
  echo "Installation terminée. Pour te connecter : .devcontainer/setup-codex.sh"
  exit 0
fi

if "${CODEX_COMMAND}" login status >/dev/null 2>&1; then
  echo "Tu es déjà connecté à Codex. Lance simplement : codex"
  exit 0
fi

echo
echo "Connexion à ChatGPT par code d’appareil…"
echo "Ouvre l’adresse affichée, puis saisis le code temporaire."
echo
"${CODEX_COMMAND}" login --device-auth

echo
echo "Connexion terminée. Lance Codex avec : codex"
