FROM node:14

COPY ./package.json /mybackend/
COPY ./yarn.lock /mybackend/
WORKDIR /mybackend/
RUN yarn install

COPY . /mybackend/