# Formation Cypress E2E - TypeScript

Projet de formation aux tests E2E avec Cypress et TypeScript.

## Prérequis

- Node.js 18+ ([télécharger](https://nodejs.org))

## Installation
```bash
# Cloner le projet
git clone https://github.com/m-koubaa/CypressProjectTS.git
cd CypressProjectTS

# Installer les dépendances
npm install
```

## Exécution
```bash
# Mode interactif (avec interface)
npx cypress open

# Mode headless (ligne de commande)
npx cypress run
```

## Structure du projet
```
CypressProjectTS/
├── cypress/
│   ├── e2e/              # Tests
│   ├── fixtures/         # Données JSON
│   └── support/
│       ├── commands.ts   # Commandes personnalisées
│       └── e2e.ts        # Configuration globale
├── cypress.config.ts     # Configuration Cypress
├── tsconfig.json         # Configuration TypeScript
└── package.json
```

## Auteur

Mohamed Koubaa - Centre Zetta de Formation et Consulting
