# FROM node:latest as build
FROM node:18.17.1-alpine as build
LABEL maintainer="armando.schianodicola@gmail.com"
WORKDIR /usr/local/app
COPY --chown=node:node package*.json /usr/local/app/
RUN npm install
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
COPY --chown=node:node . .
RUN npm run build
RUN npm cache clean --force
USER node

FROM nginx:stable
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/local/app/dist/maps-frontend /usr/share/nginx/html

EXPOSE 80