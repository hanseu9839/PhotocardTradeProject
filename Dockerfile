FROM node:21.1.0 AS builder
COPY package.json .
RUN npm install

COPY . .
RUN npm run build

FROM nginx:latest
RUN rm /etc/nginx/conf.d/default.conf
RUN rm -rf /etc/nginx/conf.d/*
COPY ./nginx.conf /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]