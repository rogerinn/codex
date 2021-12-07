FROM node:16

#App directory 
WORKDIR /usr/application

#Copy dependecies
COPY package*.json ./ 

#Install all dependecies
RUN yarn

#Bundle application
COPY . .