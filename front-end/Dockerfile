FROM node:12.16-alpine

WORKDIR /var/www/front-end

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]