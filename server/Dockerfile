FROM node:14.15.4-alpine

COPY package*.json /server/
WORKDIR /server

RUN npm install --production

COPY . /server

EXPOSE 3000

ENTRYPOINT [ "node" ]
CMD [ "index.js" ]
