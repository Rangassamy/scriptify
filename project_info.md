Scriptify

📌 Présentation du projet

Scriptify est un site web conçu pour aider les étudiants à pratiquer et à apprendre la programmation en JavaScript. Il propose :

Une section Quiz pour tester ses connaissances sur JavaScript.

Une section Projets avec plusieurs exercices pratiques à coder en HTML, CSS et JavaScript.

Une interface simple et efficace, optimisée pour une navigation rapide.

📂 Organisation des fichiers

Le projet suit une organisation claire avec différents dossiers pour séparer les fonctionnalités :

scriptify/
│️── pube projet lic/ # Fichiers statiques accessibles par le navigateur
│ ├─ img/ # Images utilisées sur le site
│ ├─ documents/ # Fichiers PDF des cahiers des charges
│ └─ index.html # Point d'entrée du site
│
│️── src/ # Code source React
│ ├─ Assets/ # Ressources supplémentaires (polices, icônes, etc.)
│ ├─ Components/ # Composants réutilisables (Navbar, etc.)
│ ├─ Pages/ # Pages principales (Home, Quizs, Projects)
│ ├─ Styles/ # Feuilles de styles en SASS
│ ├─ App.js # Composant principal
│ └─ index.js # Point d’entrée de l'application
│
│️── package.json # Dépendances et configuration du projet
│️── README.md # Documentation du projet

🎨 Structure SASS

Le projet utilise SASS pour une meilleure organisation des styles. L'architecture est la suivante :

Styles/
│️── index.scss # Importation des styles globaux
│️── settings.scss # Variables et mixins globaux
│ ├─ Components/ # Styles des composants réutilisables
│ │ ├─ Navbar.scss
│ │ ├─ NavbarHome.scss
│ │ └─ Quiz.scss
│ ├─ Pages/ # Styles propres aux pages
│ │ ├─ Home.scss
│ │ ├─ Projects.scss
│ │ └─ Quizs.scss

🌟 Avantages de cette structure :

Réutilisation du code : Un seul fichier Navbar.scss pour styliser la barre de navigation utilisée sur plusieurs pages.

Modularité : Chaque page et composant a son propre fichier de style.

Variables globales : settings.scss permet d’uniformiser les couleurs, les polices et les tailles.

🛠️ Difficultés rencontrées

Organisation des fichiers : Séparer clairement les composants et les pages pour éviter la redondance.

Gestion des animations avec GSAP : Trouver la bonne approche pour animer certains éléments sans alourdir le code.

Importation des images : Adapter les chemins d'accès pour fonctionner correctement avec React (process.env.PUBLIC_URL pour les images stockées dans public/).

LocalStorage et gestion des scores : Stocker et récupérer les scores des quiz sans erreurs.

✅ Avantages du projet

Navbar unique réutilisée sur toutes les pages pour éviter de dupliquer le code.

Animations GSAP pour rendre l’interface plus dynamique.

Organisation des styles avec SASS pour une meilleure lisibilité et maintenabilité.

**Utilisation du **localStorage pour sauvegarder les scores des quiz et offrir une expérience utilisateur fluide.

🖥️ Détail des pages

🏠 Page d’accueil (Home)

Présente le site et son objectif.

Contient des animations GSAP pour dynamiser l'affichage.

Propose des liens directs vers les sections Quiz et Projets.

📝 Page Quiz (Quizs)

Permet aux utilisateurs de tester leurs connaissances sur JavaScript à travers plusieurs quiz.

Stocke les scores en localStorage pour suivre la progression.

Interface interactive avec des barres de progression et des effets dynamiques.

💻 Page Projets (Projects)

Propose plusieurs projets pratiques à réaliser en HTML, CSS et JavaScript.

Chaque projet dispose d’un cahier des charges téléchargeable pour guider l’utilisateur.

Présente des niveaux de difficulté variés (1 à 4 étoiles).
