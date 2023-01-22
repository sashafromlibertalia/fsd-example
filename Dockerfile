# syntax=docker/dockerfile:1.4
FROM node:18-alpine as builder
WORKDIR /frontend
COPY package*.json ./
RUN npm ci

FROM builder AS frontend
COPY . .
CMD ["npm", "run", "dev"]
