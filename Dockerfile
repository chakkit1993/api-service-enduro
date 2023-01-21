FROM node:18.13-slim

RUN mkdir -p /usr/src/app


WORKDIR /usr/src/app


COPY package.json /usr/src/app/

RUN npm install


COPY . /usr/src/app

EXPOSE 3333


CMD ["npm","start"]
