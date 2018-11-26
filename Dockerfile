FROM node:8.12.0-alpine

EXPOSE 3000

COPY package.json .
RUN yarn

COPY server.js .

CMD node server.js
