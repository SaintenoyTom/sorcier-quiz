# Sorcier Quiz

Application mobile de quiz de personnalité (QCM) pour déterminer ton archétype de sorcier parmi 4 profils, avec gamification, accessibilité, et expérience 100% hors-ligne.

## Fonctionnalités principales
- 20 questions à choix unique, pondérées
- Résultat détaillé (archétype, % par profil, description, forces/faiblesses, conseils)
- Gamification : XP, niveaux, badges, streak quotidien
- Leaderboard local, historique des résultats
- Thème clair/sombre auto + manuel
- Accessibilité (labels, navigation, contrastes)
- Animations, feedback haptique, partage natif
- Données et persistance locales (aucun serveur)

## Installation & lancement

### Prérequis
- Node.js >= 18
- Expo CLI (`npm install -g expo-cli`)

### Installation
```sh
npm install
```

### Lancer sur Android/iOS
```sh
# Android (émulateur ou appareil)
npx expo run:android

# iOS (Mac requis, ou Expo Go)
npx expo run:ios

# Expo Go (Android/iOS)
npx expo start
```

## Structure du projet
- `/app/components` : UI réutilisable (ProgressBar, QuestionCard, etc.)
- `/app/screens` : Home, Quiz, Result, History, Settings
- `/app/store` : Zustand stores (quiz, gamification)
- `/app/utils` : scoring, accessibilité, haptics
- `/app/theme` : thèmes et styles
- `/data` : questions.json, archetypes.json
- `/docs` : gamification.md, results_mapping.md

## Tests
- **Unitaires** : Jest + @testing-library/react-native
- **E2E** : Detox (1 scénario complet)

### Lancer les tests
```sh
npm test
# ou
yarn test
```

### Lancer Detox (Android)
```sh
detox test -c android.emu.debug
```

## Lint & formatage
```sh
npm run lint
npm run format
```

## Accessibilité
- Labels, navigation clavier, contrastes, zones tactiles >44px
- Compatible VoiceOver/TalkBack

## Captures d’écran
*(À insérer)*

## Licence
Projet open-source, usage libre.

# CI/CD

![Lint](https://github.com/<OWNER>/<REPO>/actions/workflows/ci-cd.yml/badge.svg?branch=main)
![Tests](https://github.com/<OWNER>/<REPO>/actions/workflows/ci-cd.yml/badge.svg?event=push)

## Workflow CI/CD

Le workflow `.github/workflows/ci-cd.yml` gère :
- Lint (Airbnb via ESLint)
- Tests unitaires (Jest)
- Tests E2E (Detox)
- Build Docker + healthcheck
- Build React Native (Android bundle)
- Analyse SonarQube/SonarCloud
- Déploiement conditionnel (K8s, Firebase, SSH)

### Lancer les jobs en local

- Lint : `npm run lint`
- Tests unitaires : `npm run test`
- E2E Detox :
  - Build : `npm run e2e:build`
  - Test : `npm run e2e`
- Docker healthcheck : `docker-compose -f docker-compose.ci.yml up --build`
- Build Android : `npm run build:android` ou `npm run bundle:android`
- Sonar : `npm run sonar`

### Secrets à fournir (GitHub)

- `SONAR_TOKEN`, `SONAR_HOST_URL` (ou SonarCloud: `SONAR_TOKEN`, `SONAR_ORGANIZATION`, `SONAR_PROJECT_KEY`)
- `REGISTRY_URL`, `REGISTRY_USERNAME`, `REGISTRY_PASSWORD` (Docker push)
- `KUBE_CONFIG`, `SSH_PRIVATE_KEY`, `FIREBASE_TOKEN` (déploiement, selon option)

Ajoutez les secrets dans GitHub > Settings > Secrets and variables > Actions.

### SonarQube/SonarCloud

Créez un projet sur SonarQube/SonarCloud, récupérez le token et l’URL, renseignez-les dans les secrets GitHub.

### Detox en local

- Installez Android Studio, créez un AVD (API 30+)
- Installez Detox : `npm install detox --save-dev`
- Configurez `detox.config.js` et lancez les tests comme ci-dessus.

---

Pour toute question, consultez le workflow YAML fortement commenté ou ouvrez une issue.
