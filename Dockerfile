# syntax=docker/dockerfile:1.4
FROM node:18-alpine as base
WORKDIR /frontend
COPY package*.json ./
RUN npm ci

FROM base AS frontend
COPY . .
CMD ["npm", "run", "dev"]
