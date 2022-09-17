FROM node:16-buster-slim
COPY . .
ENTRYPOINT [ "node", "./bin/www" ]