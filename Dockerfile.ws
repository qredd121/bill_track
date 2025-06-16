FROM node:20-slim
WORKDIR /app
COPY package.json package-lock.json ./
COPY ws-server/ ws-server/
COPY env-config.ts env-config.ts ./
RUN npm i
CMD ["npx", "tsx", "ws-server/index.ts"]