# Etapa de build
FROM node:20 AS builder

WORKDIR /app

# 1) Instalar dependencias
COPY package*.json ./
RUN npm install

# 2) Copiar el código y hacer el build
COPY . .
RUN npm run build

# Etapa de producción
FROM node:20

WORKDIR /app

# Copiamos TODO el proyecto ya compilado (incluye package.json, dist, node_modules, etc.)
COPY --from=builder /app ./

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Arrancamos igual que en Replit
CMD ["npm", "start"]
