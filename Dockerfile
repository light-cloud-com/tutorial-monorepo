# Builds apps/api together with the shared package. The api app's Root
# directory is the repository root, so this file sees every workspace.
FROM node:22-alpine
WORKDIR /app

# The root manifest and lock file, the shared package, then the api itself.
COPY package.json package-lock.json ./
COPY packages ./packages
COPY apps/api ./apps/api

# Install only what apps/api needs; the shared package is linked in.
RUN npm ci --workspace apps/api --omit=dev

ENV NODE_ENV=production
EXPOSE 8080
CMD ["node", "apps/api/server.js"]
