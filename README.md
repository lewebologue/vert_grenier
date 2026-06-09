# 🌿 Vert Grenier — Brocante Vintage

Site vitrine pour **Vert Grenier**, spécialiste du mobilier et des objets vintage des années 60 & 70.

🌐 **Site en ligne** : [https://lewebologue.github.io/vert_grenier/](https://lewebologue.github.io/vert_grenier/)

---

## 🛠️ Stack technique

- [Angular](https://angular.dev/) v21 — standalone components, signals, OnPush, lazy loading
- [TypeScript](https://www.typescriptlang.org/) — mode strict
- [SCSS](https://sass-lang.com/) — styles par composant

---

## 🚀 Démarrer le projet en local

### Prérequis

- Node.js `>= 22`
- Angular CLI `>= 21`

### Installation

```bash
npm install
```

### Serveur de développement

```bash
ng serve
```

Ouvrez ensuite [http://localhost:4200](http://localhost:4200) dans votre navigateur.  
L'application se recharge automatiquement à chaque modification.

---

## 🏗️ Build

```bash
ng build
```

Les fichiers compilés sont générés dans le dossier `dist/`.

---

## 🧪 Tests unitaires

Les tests utilisent [Vitest](https://vitest.dev/).

```bash
ng test
```

---

## 📁 Structure du projet

```
src/
├── app/
│   ├── components/             # Composants réutilisables
│   │   ├── header/             # Barre de navigation
│   │   ├── hero/               # Section d'accueil
│   │   ├── about/              # Notre histoire
│   │   ├── services/           # Nos services
│   │   ├── testimonials/       # Témoignages
│   │   ├── estimation/         # Estimations à domicile
│   │   ├── contact/            # Formulaire de contact
│   │   ├── tagline/            # Accroche
│   │   ├── footer/             # Pied de page
│   │   └── index.ts            # Barrel file (exports centralisés)
│   ├── pages/
│   │   └── home/               # Page d'accueil (lazy loaded)
│   │       ├── home.component.ts
│   │       └── home.component.html
│   ├── app.config.ts           # Configuration de l'application
│   ├── app.routes.ts           # Déclaration des routes
│   └── app.ts                  # Composant racine
├── styles.scss                 # Styles globaux
└── index.html
```

---

## 📄 Licence

© 2025 Vert Grenier — Tous droits réservés.
