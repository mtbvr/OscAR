# Utilise Node 22 Alpine
FROM node:22-alpine

# Mode production
ENV NODE_ENV=production

# Dossier de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances de production
RUN if [ -f package-lock.json ]; then \
      npm ci --omit=dev --no-audit --no-fund; \
    else \
      npm install --omit=dev --no-audit --no-fund; \
    fi

# Copier le reste du code
COPY . .

# Exposer le port dynamique de Railway
EXPOSE 5000

# Commande pour démarrer
CMD ["node", "index.js"]
