FROM node

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install 

COPY . .

EXPOSE 3333

CMD ["yarn", "nodemon", "src/server.js"]