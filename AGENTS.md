# Décrypter 2027 — consignes du dépôt

## Mission

Ce dépôt contient un observatoire indépendant, factuel et évolutif de
l’élection présidentielle française de 2027. Le site doit aider à comprendre
les candidatures, les programmes, la campagne et les scénarios électoraux sans
donner de consigne de vote.

Avant une modification importante, lire :

- `README.md` pour l’installation et les commandes ;
- `docs/PROJECT_HISTORY.md` pour les décisions déjà prises ;
- `docs/EDITORIAL_POLICY.md` pour les règles de traitement politique.

## Architecture

- `index.html` : structure et contenus éditoriaux fixes ;
- `styles.css` : identité visuelle et responsive design ;
- `app.js` : candidats, sondages, thèmes, chronologie et interactions ;
- `.devcontainer/` : environnement GitHub Codespaces et installation Codex.

Le site est volontairement statique et sans dépendance applicative. Ne pas
introduire de framework ou de compilation sans besoin démontré et accord de
l’utilisateur.

## Règles éditoriales obligatoires

- Vérifier sur le web toute information politique susceptible d’avoir changé.
- Privilégier les sources officielles, les documents originaux et les instituts
  de sondage, puis les médias de référence.
- Dater les données et conserver un lien direct vers leur source.
- Distinguer strictement candidat déclaré, candidat conditionnel, personnalité
  pressentie et candidat officiellement validé par le Conseil constitutionnel.
- Distinguer programme officiel, proposition de campagne, orientation
  partisane et position ancienne.
- Ne jamais présenter un sondage isolé comme une prédiction. Mentionner sa date,
  son institut, sa configuration et, lorsque disponible, sa marge d’erreur.
- Employer un vocabulaire descriptif et symétrique pour toutes les familles
  politiques. Éviter les jugements de valeur et les formulations militantes.
- Pour les affaires judiciaires, préciser le stade de la procédure et respecter
  la présomption d’innocence lorsqu’elle s’applique.
- Suivre intégralement `docs/EDITORIAL_POLICY.md`.

## Travail sur le code

- Préserver l’accessibilité, le fonctionnement mobile et l’identité visuelle
  éditoriale existante.
- Centraliser les nouvelles données interactives dans `app.js`.
- Ne jamais ajouter de secret, clé API ou fichier `~/.codex` au dépôt.
- Après une modification JavaScript, exécuter `node --check app.js`.
- Après une modification du devcontainer, exécuter
  `jq empty .devcontainer/devcontainer.json` et
  `bash -n .devcontainer/setup-codex.sh`.
- Pour une modification visuelle importante, lancer
  `python3 -m http.server 8000` et vérifier au moins un affichage ordinateur et
  un affichage mobile.
- Avant de terminer chaque session de travail, ajouter une entrée à la fin de
  `docs/PROJECT_HISTORY.md`, y compris lorsqu’un audit ne produit aucun
  changement éditorial. Utiliser une date et une heure avec fuseau, puis noter
  l’environnement, la demande, le travail effectué, les sources consultées, les
  fichiers modifiés, les vérifications et le résultat.
- Ne jamais supprimer ni réordonner les anciennes entrées du journal. Signaler
  explicitement toute correction d’une entrée antérieure.

## État actuel

La première version date du 8 août 2026. Elle présente dix candidats ou
hypothèses majeures, un comparateur thématique, des fourchettes Ipsos, quatre
scénarios prospectifs, une chronologie et une bibliographie. La liste officielle
des candidats et la plupart des programmes définitifs ne sont pas encore connus.
