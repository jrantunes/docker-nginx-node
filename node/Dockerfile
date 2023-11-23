FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm i

ENV DOCKERIZE_VERSION v0.7.0

RUN apk update \
    && apk add wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget && rm -rf /var/lib/apt/lists/*

EXPOSE 3000