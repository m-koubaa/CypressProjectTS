# Formation Cypress E2E - TypeScript

Projet de formation aux tests E2E avec Cypress et TypeScript.

## Prérequis

- Node.js 18+ ([télécharger](https://nodejs.org))

## Installation

### Option 1 : Cloner avec Git
```bash
git clone https://github.com/m-koubaa/CypressProjectTS.git
cd CypressProjectTS
npm install
```

### Option 2 : Télécharger le ZIP

1. Cliquer sur le bouton **Code** (vert) sur GitHub
2. Cliquer sur **Download ZIP**
3. Extraire le fichier ZIP
4. Ouvrir un terminal dans le dossier extrait
```bash
cd CypressProjectTS-main
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
