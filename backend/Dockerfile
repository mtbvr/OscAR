# Utiliser une image Node.js officielle légère
FROM node:22-alpine

# Définir le répertoire de travail
WORKDIR /app

# Mettre en production
ENV NODE_ENV=production

# Copier uniquement les fichiers nécessaires pour installer les dépendances
COPY package*.json ./

# Installer les dépendances de production uniquement
RUN if [ -f package-lock.json ]; then \
      npm install --omit=dev --no-audit --no-fund; \
    else \
      npm install --omit=dev --no-audit --no-fund; \
    fi

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port sur lequel l'application écoute
EXPOSE 5000

# Lancer l'application
CMD ["node", "index.js"]
