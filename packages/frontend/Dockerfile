FROM node:12 as build
WORKDIR /app
COPY package.json /app
RUN apt-get update || : && apt-get install python -y

RUN yarn install
RUN yarn global add webpack-cli webpack rimraf
COPY . /app
RUN yarn build

FROM nginx:1.17-alpine
ARG PORT
RUN echo $PORT


COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx.config /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
