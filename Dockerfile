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

# Solo copiamos lo necesario para ejecutar el server
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Arrancamos directamente el JS compilado, sin npm start
CMD ["node", "dist/server/index.js"]
