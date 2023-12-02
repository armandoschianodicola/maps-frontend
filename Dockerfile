FROM node:latest as build
RUN apt-get update 
RUN apt-get install -y --no-install-recommends apt-utils
RUN apt-get upgrade -y
WORKDIR /usr/local/app
COPY --chown=node:node . /usr/local/app/
RUN npm install
RUN npm run build
USER node

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/local/app/dist/maps-frontend /usr/share/nginx/html

EXPOSE 80