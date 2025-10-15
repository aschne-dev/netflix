# Movie Finder

Projet React + Vite réalisé en suivant le tutoriel YouTube de [JavaScript Mastery](https://www.youtube.com/watch?v=dCLhUialKPQ). J’ai choisi ce tuto pour poser les bases de mon portfolio, en adaptant certaines parties pour apprendre en autonomie :

- Appwrite côté backend, mais avec la nouvelle API **Tables** au lieu des collections du tutoriel original.
- Déploiement continu via **Vercel**.

## Fonctionnalités

- Recherche de films via l’API TMDB avec debounce pour limiter les appels.
- Listing des recherches les plus populaires stockées dans Appwrite Tables.
- Affichage des films tendances mis à jour dynamiquement.

## Pile technique

- **Front** : React 19, Vite, Tailwind CSS.
- **Backend BaaS** : Appwrite (TablesDB, requêtes et mutations via SDK Web).
- **Déploiement** : Vercel (environnements Preview & Production, variables `VITE_*`).

## Installation

```bash
npm install
npm run dev
```

Créer un fichier `.env.local` et y ajouter :

```
VITE_TMDB_API_KEY=<clé TMDB v4 Bearer>
VITE_APPWRITE_PROJECT_ID=<id projet Appwrite>
VITE_APPWRITE_DATABSE_ID=<id base Appwrite>
VITE_APPWRITE_TABLE_NAME=<table metrics>
```

### Déploiement Vercel

1. `vercel login` puis `vercel link` dans le dossier du projet.
2. Déclarer les variables (production & preview) avec `vercel env add`.
3. `vercel --prod` pour lancer la build et publier.
4. Dans la console Appwrite, autoriser le domaine Vercel (Settings → Platforms).
5. **Production** : https://netflix-six-pearl-90.vercel.app/

### Workflow Git

- Repo versionné sur GitHub (portfolio).
- Commit fréquents documentant les étapes (config Appwrite, refonte TablesDB, déploiement Vercel…).
- Utilisation de branches pour tester les évolutions avant merge vers `main`.
- Déploiements Preview Vercel associés à chaque PR pour valider les changements.

## Objectifs

C’est mon premier projet publié pour me former et alimenter mon portfolio GitHub. Le but est de documenter mon apprentissage : implémenter un tuto existant, comprendre chaque couche (front, BaaS, déploiement) et laisser une base propre sur laquelle je pourrai itérer plus tard.
