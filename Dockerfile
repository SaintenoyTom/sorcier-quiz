# Dockerfile minimal Node pour React Native/healthcheck
FROM node:20-alpine
WORKDIR /app
RUN apk add --no-cache curl
COPY package*.json ./
RUN npm ci --only=production --legacy-peer-deps
COPY . .
EXPOSE 3000
CMD ["npm", "run", "healthcheck"]
