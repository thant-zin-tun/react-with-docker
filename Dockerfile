FROM node:22
LABEL maintainer="thantzintun"
LABEL description="This is testing react project for deploy with docker"

WORKDIR /usr/web/

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start" ]

EXPOSE 3000