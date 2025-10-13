# Projet d'étude

Ce projet regroupe trois environnements distincts :

- **App mobile** : React Native (frontend mobile)
- **App web** : React.js (frontend web)
- **Backend** : Node.js (API REST)

Le tout est orchestré avec **Docker** (sauf React Native, qui reste local pour l’instant).

---

## Prérequis

- [Node.js](https://nodejs.org/) (v22.20 (LTS))
- [Docker](https://www.docker.com/) et Docker Compose
- [Android Studio](pour l’émulateur mobile)

---

## Lancement du projet

### Lancer les services web et backend avec Docker

```bash
docker-compose up --build
```
Services disponibles:

- Frontend Web : http://localhost:3000
- Backend : http://localhost:5000

### Lancer l’app mobile React Native

1. Lancer l’émulateur Android
- Ouvrir un émulateur

2. Lancer l’app mobile

```bash
cd react-native
npm install
npx react-native run-android
```

Ici, force à vous pour la suite, en théorie, j'ai deja mis une version des dependances ok entre elles mais vous aurez sans doute qlq variables d'envrionnement système à remettre. 
