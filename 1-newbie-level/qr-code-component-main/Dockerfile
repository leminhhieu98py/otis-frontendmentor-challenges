FROM node:24.11.1-alpine

WORKDIR /qr-code-component-main
COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "run", "start"]