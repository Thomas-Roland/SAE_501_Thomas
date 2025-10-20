# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# Structure du projet

Ce projet utilise Vue 3 avec Vite pour un développement rapide et moderne. Voici la structure principale du dossier `src/` :

- **main.js** : Point d'entrée de l'application, initialise Vue et le routeur.
- **App.vue** : Composant racine de l'application.
- **router.js** : Définit les routes de l'application (navigation entre les pages).
- **style.css** : Feuille de style globale.
- **assets/** : Contient les ressources (images, icônes, audio, etc.).
- **components/** : Composants réutilisables (ex : `HelloWorld.vue`).
- **img/** : Images utilisées dans l'application.
- **pages/** : Pages principales de l'application (ex : `home.vue`, `conte1.vue`, etc.). Chaque fichier représente une page ou une histoire.

# Démarrage du projet

1. Installer les dépendances :
   ```bash
   npm install
   ```
2. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```
3. Accéder à l'application via l'URL indiquée dans le terminal (généralement http://localhost:5173).

# Fonctionnement

- La navigation entre les différentes histoires/pages se fait via le routeur Vue.
- Les ressources (images, audio) sont organisées dans des sous-dossiers pour faciliter la gestion.
- Les composants peuvent être réutilisés dans plusieurs pages pour éviter la duplication du code.

# Personnalisation

Tu peux ajouter de nouvelles pages dans `src/pages/` et les référencer dans le routeur pour enrichir l'application.

Pour plus d'informations sur Vue 3 et Vite, consulte la documentation officielle.
