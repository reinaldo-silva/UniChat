FROM node:12.16-alpine

WORKDIR /var/www/back-end

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3333

CMD ["node", "dist/main"]