FROM node:alpine

WORKDIR /yelpCamp

RUN npm install nodemon -g

COPY package.json /yelpCamp
COPY package-lock.json /yelpCamp

RUN npm install
