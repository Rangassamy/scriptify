# Guide d'installation et de lancement de Scriptify

Ce guide explique comment installer et exécuter Scriptify, même si vous êtes débutant. Suivez ces étapes pour configurer votre environnement et faire fonctionner le site.

---

## 🖥️ 1. Installation de Visual Studio Code (VS Code)

1. Rendez-vous sur le site officiel de VS Code : [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Téléchargez la version correspondant à votre système d’exploitation (Windows, macOS ou Linux).
3. Installez le logiciel en suivant les instructions affichées à l’écran.
4. Une fois installé, ouvrez VS Code.

---

## 🔧 2. Installation de Node.js et npm

1. Rendez-vous sur [https://nodejs.org/](https://nodejs.org/)
2. Téléchargez la version **LTS (Long Term Support)** recommandée.
3. Installez Node.js en suivant les instructions.
4. Vérifiez l’installation en ouvrant un terminal (ou invite de commande) et en tapant :
   ```sh
   node -v
   ```
   Cela doit afficher la version installée de Node.js.
5. Vérifiez également la présence de npm (gestionnaire de paquets) :
   ```sh
   npm -v
   ```
   Cela doit afficher la version de npm installée.

---

## 📂 3. Télécharger et ouvrir le projet

1. **Télécharger le projet manuellement** :

   - Rendez-vous sur le dépôt GitHub : [https://github.com/Rangassamy/scriptify](https://github.com/Rangassamy/scriptify)
   - Cliquez sur le bouton "Code" puis sur "Download ZIP".
   - Extrayez le fichier ZIP sur votre ordinateur.

2. **Ouvrir le projet dans VS Code** :
   - Dans VS Code, cliquez sur **Fichier > Ouvrir un dossier**.
   - Sélectionnez le dossier `scriptify` téléchargé.

---

## 📦 4. Installer les dépendances

1. Ouvrez un terminal dans VS Code (**Terminal > Nouveau terminal**).
2. Assurez-vous d’être dans le dossier du projet (`scriptify`) :
   ```sh
   cd scriptify
   ```
3. Installez les dépendances nécessaires avec la commande :
   ```sh
   npm install
   ```
   Cette commande va télécharger et installer tous les modules nécessaires au fonctionnement du projet.

---

## 🚀 5. Lancer le projet

1. Toujours dans le terminal, exécutez la commande :
   ```sh
   npm start
   ```
2. Après quelques secondes, le site s’ouvrira automatiquement dans votre navigateur à l’adresse :
   ```
   http://localhost:3000/
   ```
3. Vous pouvez maintenant explorer le site et tester ses fonctionnalités.

---

## 🛠 6. Résolution des problèmes courants

### **1. Commande `npm install` ou `npm start` ne fonctionne pas**

- Assurez-vous que vous êtes bien dans le dossier du projet (`scriptify`).
- Vérifiez que Node.js et npm sont bien installés avec `node -v` et `npm -v`.

### **2. Problème de port occupé**

- Si le terminal indique qu’un autre service utilise le port 3000, essayez :
  ```sh
  npm start --port=3001
  ```

### **3. Fichiers manquants**

- Si des erreurs indiquent des fichiers manquants, supprimez le dossier `node_modules` et relancez :
  ```sh
  rm -rf node_modules package-lock.json
  npm install
  ```

---

**Scriptify** est maintenant installé et fonctionnel ! 🎉
