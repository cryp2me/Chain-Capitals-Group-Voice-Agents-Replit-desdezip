# Etapa de build
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa de producción
FROM node:18

WORKDIR /app

# Copiamos el código y node_modules desde la etapa de build
COPY --from=builder /app ./app
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=80
EXPOSE 80

CMD ["npm", "start"]

