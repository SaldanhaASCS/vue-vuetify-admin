FROM node:alpine AS dev-stage
RUN apk add git
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .

FROM dev-stage AS build-stage
RUN npm run build

FROM nginx:alpine
COPY --from=build-stage /usr/app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d
CMD ["nginx", "-g", "daemon off;"]