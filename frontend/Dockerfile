FROM node:18 AS build-stage

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY ./ .

RUN npm run build


FROM nginx AS prod-stage

RUN mkdir /app

COPY --from=build-stage /app/dist /app

COPY nginx.conf /etc/nginx/nginx.conf
