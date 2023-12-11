FROM node:16-slim

WORKDIR /app

COPY package*.json./ ./

COPY . .

RUN rm -rf node_modules && \ 
  npm cache clean --force && \
  npm install

# RUN npm run build

CMD [ "node", "server.js" ]
