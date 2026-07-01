# syntax=docker/dockerfile:1

# ---- Build stage: produce the static site in /app/dist ----
FROM node:lts-alpine AS builder
WORKDIR /app

# Install dependencies (dev deps included — `sharp` rasterizes the OG image
# during `prebuild`). libc6-compat helps sharp's prebuilt binaries on Alpine.
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./
RUN npm ci

# Build the site (runs `prebuild` → scripts/build-og.mjs, then `astro build`)
COPY . .
RUN npm run build

# ---- Runtime stage: nginx serving the static files ----
FROM nginx:alpine AS runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
