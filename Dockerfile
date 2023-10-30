# Build

FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build


# Deploy
FROM nginx:latest
COPY --from=build /usr/local/app/dist/processed-future-movement-ui /usr/share/nginx/html
EXPOSE 80